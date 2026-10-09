import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Medicaps University, Indore",
    period: "2022 – 2026",
    score: "8.70 / 10 CGPA",
    icon: GraduationCap,
    color: "bg-violet-600",
  },
  {
    degree: "Class XII — CBSE",
    field: "Higher Secondary Education",
    institution: "St. Vincent Pallotti School, Indore",
    period: "2022",
    score: "91.2%",
    icon: BookOpen,
    color: "bg-blue-600",
  },
  {
    degree: "Class X — CBSE",
    field: "Secondary Education",
    institution: "St. Vincent Pallotti School, Indore",
    period: "2020",
    score: "86.5%",
    icon: Award,
    color: "bg-pink-600",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-700">
            Academic Background
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            My <span className="text-violet-700">Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-700 md:text-lg">
            My academic journey in computer science, technology, and
            foundational education.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.degree}
                className="flex flex-col gap-5 rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-violet-300 hover:shadow-lg sm:flex-row sm:items-center sm:p-8"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${item.color} text-white shadow-md`}
                >
                  <Icon size={27} strokeWidth={2.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                    {item.degree}
                  </h3>

                  <p className="mt-1 font-bold text-violet-700">
                    {item.field}
                  </p>

                  <p className="mt-2 font-semibold text-slate-700">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {item.period}
                  </p>
                </div>

                <div className="inline-flex w-fit shrink-0 items-center rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
                  <span className="text-lg font-extrabold text-violet-900">
                    {item.score}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}