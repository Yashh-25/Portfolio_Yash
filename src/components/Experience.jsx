
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  TrendingUp,
  BrainCircuit,
  CalendarDays,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    company: "American Chase LLP",
    location: "Indore, India",
    role: "Marketing & Strategic Implementation Intern",
    period: "Feb 2026 – May 2026",
    icon: TrendingUp,
    category: "Marketing & Strategy",
    gradient: "from-purple-500 to-blue-500",
    responsibilities: [
      "Marketed consultant profiles across 150+ clients, contributing to a 35% increase in interview conversion.",
      "Created candidate portfolios highlighting 20+ skill sets, including SAP and Workday, driving 30% more interviews.",
      "Supported candidate positioning, premium placements, and hiring-partner negotiations.",
      "Built automated sourcing pipelines using Boolean search tools to fill 50+ IT roles.",
      "Developed a Python-based CV automation tool that reduced resume preparation time by 50%.",
      "Streamlined ERP-driven workflows across 100+ submissions, reducing onboarding time by 20%.",
    ],
  },
  {
    company: "OriginAI Consulting",
    location: "Virtual Project",
    role: "AI Growth Strategy",
    period: "May 2026 – Jul 2026",
    icon: BrainCircuit,
    category: "AI & Analytics",
    gradient: "from-blue-500 to-cyan-500",
    responsibilities: [
      "Analyzed 50,000+ customer records using AI-based segmentation, improving targeting accuracy by 32%.",
      "Developed AI-driven marketing insights to optimize 10+ campaign KPIs.",
      "Recommended AI-powered strategies that improved marketing ROI by 22% through benchmarking.",
    ],
  },
  {
    company: "CSIR-CBRI",
    location: "Roorkee, India",
    role: "Web Development Intern",
    period: "Jun 2024 – Aug 2024",
    icon: Code2,
    category: "Technology & Analytics",
    gradient: "from-indigo-500 to-purple-500",
    responsibilities: [
      "Helped develop an institution-wide complaint platform serving 500+ stakeholders.",
      "Automated complaint workflows, reducing manual processing time by 80%.",
      "Coordinated with 7+ project stakeholders to support execution and deployment.",
      "Improved complaint tracking and cross-department coordination, enabling 30% faster resolution.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-purple-50/60 via-white to-blue-50/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
            My journey
          </p>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Experience
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 md:mx-0" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            My experience across technology, marketing, and AI strategy has
            helped me understand how analytical thinking and practical
            execution can create meaningful results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-purple-400 via-blue-400 to-purple-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={experience.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`relative pl-14 md:w-1/2 md:pl-0 ${
                    isLeft
                      ? "md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Timeline icon */}
                  <div
                    className={`absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${experience.gradient} text-white shadow-lg ring-4 ring-white md:left-auto ${
                      isLeft
                        ? "md:right-[-20px]"
                        : "md:left-[-20px]"
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  {/* Experience card */}
                  <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                    <span
                      className={`inline-flex rounded-full bg-gradient-to-r ${experience.gradient} px-3 py-1 text-xs font-semibold text-white`}
                    >
                      {experience.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-purple-700">
                      {experience.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={16} />
                        {experience.period}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <MapPin size={16} />
                        {experience.location}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
