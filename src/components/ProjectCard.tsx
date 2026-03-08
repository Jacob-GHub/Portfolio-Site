import { Github, ExternalLink } from "lucide-react";
import { Project } from "../Types";
import MediaPreview from "./MediaPreview";

export default function ProjectCard(props: Project) {
  const { type, category, name, desc, tags, media, wip, links } = props;

  return (
    <div className={`proj-card proj-card--${type}`}>
      {wip && <div className="wip-badge">🚧 In Progress</div>}

      <div className="proj-preview">
        {/* <MediaPreview media={media} name={name} /> */}
      </div>

      <div className="proj-body">
        <div className={`proj-type proj-type--${type}`}>{category}</div>
        <div className="proj-name">{name}</div>
        <div className="proj-desc">{desc}</div>

        <div className="proj-tags">
          {tags.map((t, i) => (
            <span key={i} className="proj-tag">
              {t}
            </span>
          ))}
        </div>

        {links && (
          <div className="proj-links">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="proj-link proj-link--github"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="proj-link proj-link--live"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
