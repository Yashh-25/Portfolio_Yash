import {
  Trophy,
  Award,
  Target,
  Users,
  Medal,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const achievements = [
  {
    title: "CAT 2025 — Top 2.02% in LRDI",
    description:
      "Achieved a position in the top 2.02% nationwide in the Logical Reasoning and Data Interpretation section among approximately 2.58 lakh candidates.",
    icon: Target,
    color: "bg-violet-600",
    category: "Academic Achievement",
  },
  {
    title: "Quasar 2.0 Hackathon — Runner-up",
    description:
      "Secured runner-up position at a national-level hackathon with participation from over 800 participants across 8+ states.",
    icon: Trophy,
    color: "bg-amber-500",
    category: "Hackathon",
  },
  {
    title: "Odoo Hackathon — Finalist",
    description:
      "Reached the finalist stage in a hackathon with approximately 19,000 participants.",
    icon: Medal,
    color: "bg-blue-600",
    category: "Hackathon",
  },
  {
    title: "Times of India Hackathon — Finalist",
    description:
      "Qualified as a finalist in a hackathon featuring more than 200 participants.",
    icon: Award,
    color: "bg-pink-600",
    category: "Hackathon",
  },
  {
    title: "School Board Academic Performance",
    description:
      "Achieved academic results placing among the top 5% of students in Class X and Class XII board examinations.",
    icon: GraduationCap,
    color: "bg-emerald-600",
    category: "Academics",
  },
  {
    title: "Vice President — Google Developers Group",
    description:
      "Led a core team of 47+ members at Google Developers Group, Medicaps University, in 2025.",
    icon: Users,
    color: "bg-indigo-600",
    category: "Leadership",
  },
  {
    title: "NCC Cadet Commander",
    description:
      "Supervised a group of 30 students as an NCC Cadet Commander.",
    icon: ShieldCheck,
    color: "bg-teal-600",
    category: "Leadership",
  },
  {
    title: "Football Team Captain",
    description:
      "Served as football team captain in 2024, coordinating team participation and activities.",
    icon: Trophy,
    color: "bg-orange-600",
    category: "Sports",
  },
];

const certifications = [
  "Digital Marketing Professional Certificate — Content Marketing Institute",
  "Marketing Strategy: Competitive Intelligence",
  "Tableau Data Visualization",
  "IBM Generative AI Engineering Professional",
  "Microsoft AI Agents Professional",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Milestones & Recognition
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Achievements &{" "}
            <span className="text-violet-700">Awards</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 md:text-lg">
            Academic performance, competitive achievements, leadership
            experiences, and professional learning.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <article
                key={achievement.title}
                className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${achievement.color} text-white shadow-md`}
                  >
                    <Icon size={24} strokeWidth={2.5} />
                  </div>

                  <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-900">
                    {achievement.category}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold leading-7 text-slate-900">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                  {achievement.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
              Continuous Learning
            </p>

            <h3 className="text-3xl font-extrabold text-slate-900">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="flex items-start gap-4 rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-800">
                  <BriefcaseBusiness size={21} strokeWidth={2.5} />
                </div>

                <p className="text-sm font-bold leading-6 text-slate-800">
                  {certification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}