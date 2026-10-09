import {
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  Palette,
  Users,
  Target,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Data",
    description: "Programming, data handling, and analytical tools.",
    icon: Code2,
    color: "bg-blue-600",
    skills: ["Python", "SQL", "Advanced Excel"],
  },
  {
    title: "AI & Technology",
    description: "Technology-driven tools and development.",
    icon: BrainCircuit,
    color: "bg-violet-600",
    skills: ["Generative AI", "AI Agents", "Node.js", "MongoDB"],
  },
  {
    title: "Business & Analytics",
    description: "Using data and research to support decisions.",
    icon: ChartNoAxesCombined,
    color: "bg-pink-600",
    skills: [
      "Digital Marketing",
      "Marketing Strategy",
      "Competitive Intelligence",
      "Data Visualization",
      "Customer Segmentation",
    ],
  },
  {
    title: "Design & Creativity",
    description: "Creating visual content and digital experiences.",
    icon: Palette,
    color: "bg-orange-500",
    skills: ["Canva", "Web Design", "Visual Design"],
  },
  {
    title: "Leadership & Collaboration",
    description: "Leading teams and coordinating projects.",
    icon: Users,
    color: "bg-emerald-600",
    skills: [
      "Leadership",
      "Teamwork",
      "Problem Solving",
      "Project Coordination",
    ],
  },
  {
    title: "Strategic Thinking",
    description: "Analyzing challenges and identifying opportunities.",
    icon: Target,
    color: "bg-indigo-600",
    skills: [
      "AI Growth Strategy",
      "Process Optimization",
      "Boolean Search",
      "ERP Workflows",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            My Capabilities
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 md:text-lg">
            Combining technical knowledge, analytical thinking, business
            strategy, and leadership to solve practical problems and build
            meaningful solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${category.color} text-white shadow-md`}
                >
                  <Icon size={24} strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                  {category.description}
                </p>

                {/* Skill Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-bold text-violet-950"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}