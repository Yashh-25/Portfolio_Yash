import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  HeartPulse,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "Meta Mind",
    subtitle: "AI-Powered Career Simulation Platform",
    description:
      "An online learning platform designed to bridge the gap between academic learning and industry requirements through simulated company workflows and practical skill development.",
    highlights: [
      "Simulates real-world company workflows for students.",
      "Provides practical, industry-oriented learning experiences.",
      "Runner-up at the Quasar 2.0 hackathon.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    icon: BrainCircuit,
    gradient: "from-violet-500 to-purple-600",
    category: "AI & EdTech",
  },
  {
    title: "Hawkeye",
    subtitle: "Intelligent Cache Replacement Policy",
    description:
      "A computer architecture project focused on implementing and evaluating the Hawkeye cache-replacement policy to improve last-level cache decisions using program behavior and reuse predictions.",
    highlights: [
      "Explores OPTgen-based prediction of cache-line reuse.",
      "Works with cache-replacement components in ChampSim.",
      "Evaluates cache behavior using benchmark traces and baseline comparisons.",
    ],
    technologies: [
      "C++",
      "ChampSim",
      "Computer Architecture",
      "Cache Memory",
    ],
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-600",
    category: "Systems & Architecture",
  },
  {
    title: "Pragati",
    subtitle: "Autism Risk Screening Platform",
    description:
      "An AI-based web application designed to support early autism risk screening through a digital interface and structured assessment.",
    highlights: [
      "Provides a web-based screening experience.",
      "Uses AI-oriented methods to support risk assessment.",
      "Focuses on accessibility and early screening support.",
    ],
    technologies: ["React", "Node.js", "Express.js", "SQL", "AI/ML"],
    icon: HeartPulse,
    gradient: "from-pink-500 to-rose-600",
    category: "AI & Healthcare",
  },
  {
    title: "Turf Booking",
    subtitle: "Sports Community & Booking Platform",
    description:
      "A sports-oriented booking solution designed to simplify turf reservations and organize booking-related information and workflows.",
    highlights: [
      "Supports turf reservation management.",
      "Organizes booking-related records.",
      "Focuses on simplifying sports facility management.",
    ],
    technologies: ["Odoo", "Python", "PostgreSQL"],
    icon: Trophy,
    gradient: "from-emerald-500 to-teal-600",
    category: "Sports & Management",
  },
  {
    title: "MindMitra",
    subtitle: "AI Journal & Mood Tracker",
    description:
      "An AI-powered journaling application that analyzes written journal entries to identify moods, explain emotional patterns, and offer personalized suggestions.",
    highlights: [
      "Stores journal entries and maintains entry history.",
      "Analyzes text to identify moods and related reasons.",
      "Includes a dashboard with mood trends and a mood calendar.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Generative AI",
    ],
    icon: BookOpen,
    gradient: "from-amber-500 to-orange-600",
    category: "AI & Wellbeing",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-violet-700">
            What I Have Built
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600 md:text-lg">
            A collection of projects spanning artificial intelligence,
            software development, computer architecture, and practical
            problem-solving.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/70 transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100"
              >
                {/* Gradient top border */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon and category */}
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                    >
                      <Icon size={24} strokeWidth={2.5} />
                    </div>

                    <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-800">
                      {project.category}
                    </span>
                  </div>

                  {/* Project title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-violet-700">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold leading-6 text-violet-700">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm font-medium leading-7 text-slate-700">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5">
                    <h4 className="mb-3 text-sm font-extrabold text-slate-900">
                      Key Highlights
                    </h4>

                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm font-medium leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology badges */}
                  <div className="mt-auto pt-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      <Code2 size={15} className="text-violet-700" />
                      Technologies & Tools
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-800 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs font-bold text-slate-500">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={2.5}
                      className="text-violet-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}