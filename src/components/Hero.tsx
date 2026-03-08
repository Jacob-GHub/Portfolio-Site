import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const lines = document.querySelectorAll<HTMLElement>(".term-line");
    lines.forEach((line, i) => {
      line.style.opacity = "0";
      setTimeout(
        () => {
          line.style.transition = "opacity 0.3s";
          line.style.opacity = "1";
        },
        600 + i * 180,
      );
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <p className="hero-label">Software Engineer</p>
      <h1 className="hero-name">Jacob Perez</h1>
    </section>
  );
}
