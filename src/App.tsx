import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Contact />
    </div>
  );
}
