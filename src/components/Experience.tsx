import { ExperienceItem } from "../Types";

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Aug 2024 — Present",
    company: "ACM @ UCR",
    role: "Software Engineer",
    type: "web",
    bullets: [
      "Engineered a full-stack application portal with React.js, TypeScript, and Node.js serving 1,000+ monthly users across hackathon registrations, club memberships, and committee applications.",
      "Deployed and operated Node.js backend services on AWS EC2, configuring PM2 process management and maintaining 24/7 uptime to replace manual recruitment workflows.",
      "Built RESTful APIs with Express.js and MongoDB, implementing role-based access control, automated email notifications, and application status tracking.",
    ],
  },
  {
    period: "Sept 2025 — Dec 2025",
    company: "RIPLE Lab · UCR",
    role: "Undergraduate Researcher",
    type: "res",
    bullets: [
      "Built a latency profiler for Swift and Kotlin detecting thread bottlenecks 13% more accurately than existing benchmarks.",
      "Refactored async execution and I/O pipelines using structured concurrency, reducing end-to-end latency by ~12% and improving task scheduling efficiency.",
      "Built automated CI/CD-integrated benchmarks collecting and analyzing 1,000+ async traces per workflow for continuous regression detection.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <h2 className="section-title">Where I've shipped real work</h2>
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
