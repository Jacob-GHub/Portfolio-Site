import { ExperienceItem } from "../Types";

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Aug 2024 — Present",
    company: "ACM @ UCR",
    role: "Software Engineer",
    type: "web",
    bullets: [
      "Worked with a team of engineers to build and maintain the club's internal platform — the thing students actually use to register for hackathons, apply to committees, and join the club.",
    ],
  },
  {
    period: "Sept 2025 — Dec 2025",
    company: "RIPLE Lab · UCR",
    role: "Undergraduate Researcher",
    type: "res",
    bullets: [
      "Collaborated with graduate researchers to build profiling tools that help developers understand performance bottlenecks in mobile apps written in Swift and Kotlin.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className={`exp-item exp-item--${e.type}`}>
            <div className="exp-meta">
              <span className="exp-period">{e.period}</span>
              <span className={`exp-company exp-company--${e.type}`}>
                {e.company}
              </span>
            </div>
            <div className="exp-content">
              <div className="exp-role">{e.role}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
