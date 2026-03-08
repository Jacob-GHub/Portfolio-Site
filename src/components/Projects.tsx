import { Project } from "../Types";
import ProjectCard from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    type: "web",
    category: "◈ Full-Stack · Chrome Extension",
    name: "AutoDev",
    desc: "A Chrome extension that lets you ask questions about any GitHub repo in plain English. It figures out the answer by chaining together searches, code analysis, and call graph traversal, showing you every step it took to get there.",
    tags: [
      "TypeScript",
      "React",
      "Python",
      "Flask",
      "OpenAI API",
      "ChromaDB",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/Jacob-GHub/AutoDev",
    },
    // media: { kind: "video", src: "/media/autodev.mp4" },
  },
  {
    type: "sys",
    category: "Systems · C++ · LLVM",
    name: "C Compiler",
    desc: "A compiler for a subset of C that produces real LLVM IR and compiles it. It handles variables, functions, arrays, control flow, loops, expression parsing, etc. Built completely from scratch without any compiler frameworks.",
    tags: ["C++", "LLVM", "GoogleTest", "Valgrind", "CMake"],
    links: {
      github: "https://github.com/Jacob-GHub/C-Compiler",
    },
    // media: { kind: "image", src: "/media/compiler.png" },
  },

  {
    type: "web",
    category: "Full-Stack · UCR Student Network",
    name: "StudBuds",
    desc: "A study platform built around UCR's real course catalog. Students can find study groups for their actual classes, track progress with XP and streaks, and collaborate in a shared space.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Jest",
      "Postman",
    ],
    links: {
      github: "https://github.com/Jacob-GHub/studbuds",
      live: "https://studbuds.vercel.app/",
    },
    // media: { kind: "video", src: "/media/studbuds.mp4" },
  },
  {
    type: "sys",
    category: "Systems · Rust",
    name: "Custom Language Compiler",
    desc: "A compiler for a custom language built entirely in Rust. It lexes, parses, and generates intermediate code with support for functions, arrays, control flow, and scoped variables, with a tree-walking interpreter to run the output directly.",
    tags: ["Rust", "Lexer", "Parser", "IR Generation", "Interpreter"],
    links: {
      github: "https://github.com/Jacob-GHub/teh-tarik-compiler",
    },
    // media: { kind: "image", src: "/media/rust-compiler.png" },
  },
  {
    type: "web",
    category: "Full-Stack · E-Commerce Platform",
    name: "Tomato",
    desc: "A full food delivery app with everything you'd expect, browsing, cart, Stripe checkout, and live order tracking. Includes a separate admin dashboard for managing the menu and updating delivery statuses in real time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    links: {
      github: "https://github.com/Jacob-GHub/Food-Delivery-Full-Stack",
      live: "https://food-delivery-jp.netlify.app/",
    },
    // media: { kind: "video", src: "/media/tomato.mp4" },
  },
  {
    type: "sys",
    category: "Systems · C++",
    name: "Ray Tracing Renderer",
    desc: "A physically-based 3D renderer written from scratch in C++. Simulates how light actually behaves, reflections, refraction, soft shadows to produce photorealistic images. Uses a BVH tree and multithreading to keep render times reasonable.",
    tags: [
      "C++",
      "Linear Algebra",
      "BVH",
      "Multithreading",
      "Computer Graphics",
    ],
    links: {
      github: "https://github.com/Jacob-GHub/Ray-Tracer",
    },
    // media: { kind: "image", src: "/media/raytracer.png" },
  },
  {
    type: "web",
    category: "Full-Stack · Collaborative Tool",
    name: "Loom",
    desc: "A system design workspace where the diagram lives alongside your written design, not in a separate tool. Multiple engineers can edit the same document and diagram simultaneously, with a built-in decision log to track architectural choices over time.",
    tags: [
      "Next.js",
      "TipTap",
      "Excalidraw",
      "Yjs",
      "Zustand",
      "PostgreSQL",
      "Redis",
    ],
    wip: true,
    links: {
      github: "https://github.com/Jacob-GHub/Loom",
    },
    // media: { kind: "video", src: "/media/loom.mp4" },
  },
  {
    type: "sys",
    category: "⬡ Embedded · C++ / AVR ASM",
    name: "Space Invaders - ATmega328P",
    desc: "A fully playable Space Invaders game running on a bare ATmega328P microcontroller with a tiny OLED screen. Every driver, display, joystick, audio, was written by hand, and the whole thing fits inside 2KB of RAM.",
    tags: ["C++", "AVR ASM", "I2C", "PWM", "EEPROM", "SSD1306"],
    links: {
      github: "https://github.com/Jacob-GHub/Space-Invaders-Embedded-System",
    },
    // media: { kind: "video", src: "/media/embedded.mp4" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
