
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Download,
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const suggestedQuestions = [
  "Tell me about Yash",
  "What projects has he built?",
  "What are his technical skills?",
  "Tell me about his experience",
];

const portfolioAnswers = [
  {
    keywords: ["hello", "hi", "hey", "start"],
    answer:
      "Hi! I'm the Know About Yash assistant. Ask me about Yash's education, projects, technical skills, work experience, leadership, or achievements.",
  },
  {
    keywords: ["about", "introduce", "who is", "yourself", "yash"],
    answer:
      "Yash Sharma is a Computer Science Engineering graduate from Medicaps University, Indore, with a CGPA of 8.70/10. His interests span technology, AI, business strategy, analytics, and building practical solutions.",
  },
  {
    keywords: ["education", "degree", "college", "cgpa", "study", "academic"],
    answer:
      "Yash completed his B.Tech in Computer Science Engineering at Medicaps University, Indore, in 2026, with a CGPA of 8.70/10. He scored 91.2% in Class XII and 86.5% in Class X at St. Vincent Pallotti School, Indore.",
  },
  {
    keywords: ["project", "portfolio", "built", "developed", "application"],
    answer:
      "Yash's projects include Meta Mind, an AI-powered career simulation platform; MindMitra, an AI journal; Pragati, an autism risk-screening platform; Turf Booking, a sports community platform; and Hawkeye.",
  },
  {
    keywords: ["skill", "technology", "technical", "programming", "language", "tools"],
    answer:
      "Yash's skills include Python, SQL, Node.js, MongoDB, web design, Advanced Excel, Canva, generative AI, AI agents, data visualization, digital marketing, customer segmentation, teamwork, leadership, and problem-solving.",
  },
  {
    keywords: ["experience", "job", "internship", "work", "company", "american chase"],
    answer:
      "Yash worked in Marketing at American Chase LLP, Indore, from February to May 2026. He also completed an AI Growth Strategy virtual project with OriginAI Consulting from May to July 2026 and a Web Development internship at CSIR-CBRI, Roorkee, from June to August 2024.",
  },
  {
    keywords: ["american chase", "marketing", "client", "recruitment"],
    answer:
      "At American Chase LLP, Yash worked on consultant marketing, client portfolios, candidate sourcing, and recruitment workflows. His resume reports work involving 150+ clients and 50+ IT roles, along with a Python CV tool that reduced resume preparation time by 50%.",
  },
  {
    keywords: ["csir", "cbri", "web development", "complaint"],
    answer:
      "During his Web Development internship at CSIR-CBRI, Roorkee, Yash worked on a complaint-management platform for 500+ stakeholders. His work included workflow automation, stakeholder coordination, and improving complaint-resolution processes.",
  },
  {
    keywords: ["originai", "growth strategy", "campaign", "analytics", "roi"],
    answer:
      "In his AI Growth Strategy project with OriginAI Consulting, Yash analyzed over 50,000 customer records using AI-based segmentation and worked on campaign KPIs. His resume reports strategies associated with a 22% improvement in marketing ROI.",
  },
  {
    keywords: ["achievement", "hackathon", "quasar", "competition", "award"],
    answer:
      "Yash was a runner-up at the national Quasar 2.0 Hackathon, with 800+ participants from 8+ states. He was also a finalist in the Odoo Hackathon and the Times of India Hackathon. He ranked in the top 2.02% nationwide in CAT 2025 LRDI.",
  },
  {
    keywords: ["cat", "percentile", "exam", "lrdi"],
    answer:
      "Yash ranked in the top 2.02% nationwide in the LRDI section of CAT 2025, among approximately 2.58 lakh candidates.",
  },
  {
    keywords: ["leadership", "gdg", "club", "team", "position", "responsibility"],
    answer:
      "Yash served as Vice President of Google Developers Group at Medicaps, leading a core team of 47+ members. He also served as a football team captain, an Entrepreneurship Cell executive member, and an NCC Cadet Commander.",
  },
  {
    keywords: ["hire", "recruit", "suitable", "strength", "why"],
    answer:
      "Yash combines computer science knowledge, web development, AI-related project experience, marketing analytics, and leadership. These skills can be useful in software development, AI-enabled solutions, analytics, and technology-driven business strategy.",
  },
  {
    keywords: ["certificate", "certification", "course"],
    answer:
      "Yash's listed certifications include Digital Marketing Professional Certificate, Marketing Strategy: Competitive Intelligence, Tableau Data Visualization, IBM Generative AI Engineering Professional, and Microsoft AI Agents Professional.",
  },
];

function getPortfolioAnswer(question) {
  const normalized = question.toLowerCase().trim();

  const match = portfolioAnswers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword))
  );

  return (
    match?.answer ||
    "I can answer questions about Yash's education, projects, work experience, technical skills, certifications, leadership, and achievements. Try asking about one of those topics. I won't guess details that aren't listed in the portfolio."
  );
}

export default function Hero() {
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! Want to know more about Yash? Ask me about his projects, skills, experience, education, or achievements.",
    },
  ]);

  const sendMessage = (text = question) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const answer = getPortfolioAnswer(trimmed);

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer },
    ]);

    setQuestion("");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-100 px-6 pb-20 pt-32 text-slate-900 md:px-12"
    >
      {/* Original light background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm text-purple-700 shadow-sm">
            <Sparkles size={15} />
            Computer Science · AI · Strategy
          </div>

          <p className="mb-3 text-lg text-slate-600">Hello, I'm</p>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Yash{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sharma
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-bold text-slate-700 sm:text-2xl">
            Computer Science Engineer
          </h2>

          <p className="mt-2 text-lg font-semibold text-purple-600 sm:text-xl">
            Technology, AI &amp; Business Strategy
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            I enjoy bringing technology and business together to solve
            real-world problems. My experience spans web development,
            AI-driven growth strategy, marketing, analytics, and collaborative
            leadership.
          </p>

          {/* Main buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-300 bg-white/70 px-6 py-3.5 font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              Contact Me
            </a>
          </div>

          <a
            href="/Yash_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-purple-700"
          >
            <Download size={16} />
            View Resume
          </a>

          {/* Know About Yash */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setChatOpen(true)}
              className="group inline-flex items-center gap-3 rounded-2xl border border-purple-200 bg-white/80 px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-700">
                <MessageCircle size={22} />
              </span>

              <span>
                <span className="block font-bold text-slate-900">
                  Know About Yash
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  Ask questions about my portfolio
                </span>
              </span>

              <ArrowRight
                size={18}
                className="ml-2 text-purple-600 transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="rounded-3xl border border-white/80 bg-white/75 p-8 text-center shadow-xl shadow-purple-200/40 backdrop-blur-xl">
            <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1 shadow-lg shadow-purple-200">
              <img
                src="/yash-profile.jpg"
                alt="Yash Sharma"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Yash Sharma
            </h2>

            <p className="mt-2 text-sm text-purple-600">
              Technology &amp; Business Enthusiast
            </p>

            <div className="my-7 h-px bg-slate-200" />

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-purple-50 p-4">
                <GraduationCap
                  size={21}
                  className="mx-auto mb-2 text-purple-600"
                />
                <p className="text-2xl font-extrabold text-purple-700">
                  8.70
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  B.Tech CGPA / 10
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <BriefcaseBusiness
                  size={21}
                  className="mx-auto mb-2 text-blue-600"
                />
                <p className="text-2xl font-extrabold text-blue-700">3</p>
                <p className="mt-1 text-xs text-slate-600">
                  Internship &amp; Project Experiences
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">
              Learning, building, and creating meaningful impact through
              technology and strategy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-purple-500 transition hover:text-blue-600"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </a>

      {/* Chat window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-[100] flex h-[min(590px,calc(100dvh-40px))] w-[min(390px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20"
            role="dialog"
            aria-label="Know About Yash chat"
            aria-modal="false"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Bot size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Know About Yash
                  </h3>
                  <p className="text-xs text-slate-500">
                    Portfolio assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* Suggested questions */}
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="mb-2 text-xs font-medium text-slate-500">
                SUGGESTED QUESTIONS
              </p>

              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => sendMessage(item)}
                    className="rounded-full border border-purple-200 bg-white px-3 py-1.5 text-xs text-purple-700 transition hover:bg-purple-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 space-y-4 overflow-y-auto bg-white p-4"
              aria-live="polite"
            >
              {messages.map((message, index) => (
                <div
                  key={`${index}-${message.role}`}
                  className={`flex gap-2 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                      <Bot size={17} />
                    </span>
                  )}

                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "rounded-br-sm bg-purple-600 text-white"
                        : "rounded-bl-sm border border-slate-100 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {message.text}
                  </div>

                  {message.role === "user" && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                      <User size={17} />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="border-t border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-purple-400">
                <input
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask about Yash..."
                  aria-label="Ask a question about Yash"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={!question.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={17} />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-500">
                Answers are based on information listed in this portfolio.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating chat button */}
      {!chatOpen && (
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          aria-label="Open Know About Yash chat"
          className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full border border-purple-200 bg-white px-5 py-3.5 font-semibold text-slate-900 shadow-xl shadow-slate-900/10 transition hover:border-purple-300 hover:bg-purple-50"
        >
          <MessageCircle size={20} className="text-purple-600" />
          <span>Know About Yash</span>
          <Sparkles size={16} className="text-blue-600" />
        </button>
      )}
    </section>
  );
}
