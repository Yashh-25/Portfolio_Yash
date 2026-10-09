
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Technology",
    description:
      "Building practical solutions through web development, Python, SQL, and technology-driven problem solving.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Analytics",
    description:
      "Exploring AI-powered insights, customer segmentation, and data-driven approaches to business challenges.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description:
      "Combining marketing, strategic implementation, and analytical thinking to improve business outcomes.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Collaborating with teams, coordinating initiatives, and taking responsibility in technical and student communities.",
  },
];

const highlights = [
  {
    icon: Target,
    value: "8.70/10",
    label: "B.Tech CGPA",
  },
  {
    icon: BrainCircuit,
    value: "Top 2.02%",
    label: "CAT 2025 LRDI",
  },
  {
    icon: Users,
    value: "47+",
    label: "GDG Core Team",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:text-left"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
            Get to know me
          </p>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 md:mx-0" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            I am a Computer Science graduate interested in the intersection
            of technology, artificial intelligence, analytics, and business
            strategy. I enjoy understanding real-world challenges and
            developing practical, data-informed solutions.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Technology Meets Business
            </h3>

            <p className="leading-8 text-gray-600">
              My experience includes web development at CSIR-CBRI,
              marketing and strategic implementation at American Chase LLP,
              and an AI growth strategy project with OriginAI Consulting.
              These experiences have helped me explore how technology,
              data, and business decisions can work together.
            </p>

            <p className="leading-8 text-gray-600">
              I have also worked on Meta Mind, an academic project focused
              on practical learning and employability. Beyond technical
              work, I have taken on leadership responsibilities in Google
              Developers Group, football, and student entrepreneurship
              activities.
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 p-5">
              <Lightbulb
                size={25}
                className="mt-1 shrink-0 text-purple-600"
              />

              <div>
                <h4 className="mb-1 font-semibold text-gray-900">
                  My Approach
                </h4>

                <p className="text-sm leading-7 text-gray-600">
                  Learn continuously, think analytically, work
                  collaboratively, and turn ideas into useful outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Strength cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <div
                  key={strength.title}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-purple-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md shadow-purple-200">
                    <Icon size={23} />
                  </div>

                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    {strength.title}
                  </h4>

                  <p className="text-sm leading-7 text-gray-600">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-5 sm:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon
                  size={25}
                  className="mx-auto mb-3 text-purple-600"
                />

                <p className="text-2xl font-bold text-gray-900">
                  {item.value}
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
