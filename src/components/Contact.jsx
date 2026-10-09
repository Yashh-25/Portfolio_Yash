import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const contactDetails = [
  {
    icon: Mail,
    title: "Email Address",
    value: "yash.sharma26m@iimranchi.ac.in",
    href: "mailto:yash.sharma26m@iimranchi.ac.in",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "9179655685",
    href: "tel:9179655685",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    try {
      if (!API_URL) {
        throw new Error(
          "Backend URL is missing. Check your frontend .env file."
        );
      }

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus("success");
      setStatusMessage(
        result.message || "Your message has been sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* SEPARATE CONTACT INFORMATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
              Contact Details
            </p>

            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Let's Connect
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-700">
              Feel free to contact me for professional opportunities,
              collaborations, projects, or interesting ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              const cardContent = (
                <>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-800">
                    <Icon size={26} strokeWidth={2.5} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 break-words text-sm font-bold leading-6 text-slate-700">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* VISUAL SEPARATOR */}
        <div className="mx-auto mb-20 h-1 w-24 rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />

        {/* GET IN TOUCH SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Have Something in Mind?
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-700 md:text-lg">
            Have an opportunity, an interesting idea, or a project to discuss?
            Send me a message using the form below.
          </p>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-10"
          >
            <h3 className="mb-8 text-2xl font-extrabold text-slate-900">
              Send Me a Message
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-extrabold text-slate-800"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-extrabold text-slate-800"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-extrabold text-slate-800"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-extrabold text-slate-800"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Form feedback */}
            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 flex items-start gap-3 rounded-xl border-2 p-4 ${
                  status === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-red-200 bg-red-50 text-red-900"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle size={22} className="shrink-0" />
                ) : (
                  <AlertCircle size={22} className="shrink-0" />
                )}

                <p className="text-sm font-bold">{statusMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-extrabold text-white shadow-lg transition-all duration-300 hover:from-violet-700 hover:to-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send size={19} strokeWidth={2.5} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}