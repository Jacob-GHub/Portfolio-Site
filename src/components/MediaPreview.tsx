import { Project } from "../Types";

interface MediaPreviewProps {
  media: Project["media"];
  name: string;
}

export default function MediaPreview({ media, name }: MediaPreviewProps) {
  if (media?.kind === "video") {
    return (
      <video
        className="proj-media"
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  if (media?.kind === "image" || media?.kind === "gif") {
    return <img className="proj-media" src={media.src} alt={name} />;
  }

  return (
    <div className="proj-media-placeholder">
      <span className="placeholder-icon">⊹</span>
      <span className="placeholder-text">Drop image or video here</span>
    </div>
  );
}
