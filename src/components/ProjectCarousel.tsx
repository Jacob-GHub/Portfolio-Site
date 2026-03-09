import { Github, ExternalLink } from "lucide-react";
import { Project } from "../Types";
import MediaPreview from "./MediaPreview";

interface Props {
  projects: Project[];
}

export default function ProjectRow({ projects }: Props) {
  return (
    <div className="proj-row-wrap">
      <div className="proj-row">
        {projects.map((p, i) => (
          <div key={i} className={`proj-card proj-card--${p.type}`}>
            {p.wip && <div className="wip-badge">🚧 In Progress</div>}
            <div className="proj-card-media">
              <MediaPreview media={p.media} name={p.name} />
            </div>
            <div className="proj-card-body">
              <span className={`proj-type proj-type--${p.type}`}>
                {p.category}
              </span>
              <div className="proj-card-name">{p.name}</div>
              <p className="proj-card-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.links && (
                <div className="proj-links">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link proj-link--github"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link proj-link--live"
                    >
                      <ExternalLink size={13} /> Live Site
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
