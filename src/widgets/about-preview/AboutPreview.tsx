import Link from "next/link";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION } from "@/shared/config/constants";
import { ROUTES } from "@/shared/config/routes";

const skillCategories = [
  { label: "Front-End", skills: SKILLS.frontend, color: "purple" },
  { label: "GIS & Spatial", skills: SKILLS.gis, color: "blue" },
  { label: "Architecture", skills: SKILLS.architecture, color: "cyan" },
  { label: "Databases", skills: SKILLS.databases, color: "green" },
];

const colorMap: Record<string, string> = {
  purple: "border-purple-800 text-purple-300 bg-purple-950/40",
  blue: "border-blue-800 text-blue-300 bg-blue-950/40",
  cyan: "border-cyan-800 text-cyan-300 bg-cyan-950/50",
  green: "border-green-800 text-green-300 bg-green-950/50",
};

export const AboutPreview = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{PERSONAL_INFO.summary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left – Stats + Experience snapshot */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "15+", label: "Projects" },
                { value: "3", label: "Companies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Experience timeline */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 space-y-5">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Experience</h3>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 mt-1 shrink-0" />
                    {i < EXPERIENCE.length - 1 && (
                      <div className="w-px flex-1 bg-gray-800 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-white font-medium text-sm">{exp.role}</p>
                    <p className="text-purple-400 text-xs">{exp.company}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Education</h3>
              <p className="text-white font-medium">{EDUCATION.degree}</p>
              <p className="text-purple-400 text-sm">{EDUCATION.institution}</p>
              <p className="text-gray-500 text-xs mt-1">{EDUCATION.period} · Grade: {EDUCATION.grade}</p>
              <p className="text-gray-400 text-xs mt-1">
                Graduation Project:{" "}
                <span className="text-cyan-400">{EDUCATION.project}</span> · {EDUCATION.projectGrade}
              </p>
            </div>
          </div>

          {/* Right – Skills */}
          <div className="space-y-5">
            {skillCategories.map(({ label, skills, color }) => (
              <div key={label} className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-full border ${colorMap[color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Languages</h3>
              <div className="flex gap-4">
                {[
                  { lang: "Arabic", level: "Native", pct: 100 },
                  { lang: "English", level: "B2 – Intermediate", pct: 65 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang} className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white">{lang}</span>
                      <span className="text-gray-500">{level}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={ROUTES.about}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 
                       hover:border-purple-600 text-gray-300 hover:text-purple-400 
                       transition-all duration-300 text-sm"
          >
            Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
};