import { Github, ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Project } from "../Types";
import MediaPreview from "./MediaPreview";

interface Props {
  projects: Project[];
}

export default function ProjectRow({ projects }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync dots to scroll position
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const onScroll = () => {
      const cards = row.querySelectorAll<HTMLElement>(".proj-card");
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(
          card.getBoundingClientRect().left - row.getBoundingClientRect().left,
        );
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    row.addEventListener("scroll", onScroll, { passive: true });
    return () => row.removeEventListener("scroll", onScroll);
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let isDown = false,
      startX = 0,
      scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      row.classList.add("is-dragging");
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      row.classList.remove("is-dragging");
    };
    const onMouseUp = () => {
      isDown = false;
      row.classList.remove("is-dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      row.scrollLeft = scrollLeft - (x - startX) * 1.2;
    };

    row.addEventListener("mousedown", onMouseDown);
    row.addEventListener("mouseleave", onMouseLeave);
    row.addEventListener("mouseup", onMouseUp);
    row.addEventListener("mousemove", onMouseMove);
    return () => {
      row.removeEventListener("mousedown", onMouseDown);
      row.removeEventListener("mouseleave", onMouseLeave);
      row.removeEventListener("mouseup", onMouseUp);
      row.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const scrollTo = (i: number) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.querySelectorAll<HTMLElement>(".proj-card")[i];
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="proj-row-wrap">
      <div className="proj-row" ref={rowRef}>
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

      {/* Dot indicators — only rendered on mobile via CSS */}
      <div className="proj-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`proj-dot ${i === activeIndex ? "proj-dot--active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
