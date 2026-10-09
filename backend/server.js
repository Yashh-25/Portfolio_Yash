
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Contact from "./Contact.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json({ limit: "10kb" }));

// Health-check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// Save contact form submissions to MongoDB
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body ?? {};

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Basic email format validation
    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Enforce field length limits
    if (
      name.trim().length > 100 ||
      normalizedEmail.length > 254 ||
      subject.trim().length > 200 ||
      message.trim().length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // Save the message
    const savedContact = await Contact.create({
      name: name.trim(),
      email: normalizedEmail,
      subject: subject.trim(),
      message: message.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      id: savedContact._id,
    });
  } catch (error) {
    console.error("Contact submission failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again later.",
    });
  }
});

// Start server only after MongoDB connects
async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from backend/.env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend listening on port ${PORT}`);
});

    server.on("error", (error) => {
      console.error("HTTP server error:", error.message);
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();
