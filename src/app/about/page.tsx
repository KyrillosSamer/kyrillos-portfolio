import {
  PERSONAL_INFO,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "@/shared/config/constants";

export const metadata = {
  title: "About | Kyrillos Samer",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Me
            </span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-2xl">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Experience
          </h2>

          <div className="space-y-1">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="relative pl-6 pb-8 border-l border-gray-800 last:border-transparent last:pb-0"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500" />

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{exp.role}</h3>
                      <p className="text-purple-400 text-sm">{exp.company}</p>
                    </div>

                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-purple-500 mt-0.5">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Education
          </h2>

          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-white font-semibold">
                  {EDUCATION.degree}
                </h3>
                <p className="text-purple-400 text-sm">
                  {EDUCATION.institution}
                </p>
              </div>

              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                {EDUCATION.period}
              </span>
            </div>

            <p className="text-sm text-gray-400">
              Grade: <span className="text-green-400">{EDUCATION.grade}</span>
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Graduation Project:{" "}
              <span className="text-cyan-400">{EDUCATION.project}</span> —{" "}
              <span className="text-green-400">{EDUCATION.projectGrade}</span>
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className="bg-gray-900/60 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-colors"
              >
                <p className="text-sm text-white font-medium">
                  {cert.title}
                </p>
                <p className="text-xs text-purple-400 mt-1">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Technical Skills
          </h2>

          <div className="space-y-4">
            {Object.entries(SKILLS).map(([cat, skills]) => (
              <div
                key={cat}
                className="bg-gray-900/60 border border-gray-800 rounded-xl p-5"
              >
                <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  {cat.replace(/([A-Z])/g, " $1")}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}