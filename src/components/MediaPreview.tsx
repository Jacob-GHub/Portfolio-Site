import { Project } from "../Types";
import MediaPreview from "./MediaPreview";

export default function ProjectCard(props: Project) {
  const { type, category, name, desc, tags, metrics, media, wip } = props;

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

        {metrics && (
          <div className="proj-metrics">
            {metrics.map((m, i) => (
              <span key={i} className="proj-metric">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="proj-tags">
          {tags.map((t, i) => (
            <span key={i} className="proj-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
