import { Project } from "../Types";
import ProjectCarousel from "./ProjectCarousel";

const FULLSTACK: Project[] = [
  {
    type: "web",
    category: "Full-Stack - Chrome Extension",
    name: "AutoDev",
    desc: "A Chrome extension that lets you ask questions about any GitHub repo in plain English. It figures out the answer by chaining together searches, code analysis, and call graph traversal, showing you every step it took to get there. Planning to release soon.",
    tags: [
      "TypeScript",
      "React",
      "Python",
      "Flask",
      "OpenAI API",
      "ChromaDB",
      "MongoDB",
    ],
    links: { github: "https://github.com/Jacob-GHub/AutoDev" },
    media: {
      kind: "gif",
      src: "/media/new-autodev.gif",
    },
  },
  {
    type: "web",
    category: "Full-Stack - UCR Student Network",
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
    media: {
      kind: "gif",
      src: "/media/new-studbuds.gif",
    },
  },
  {
    type: "web",
    category: "Full-Stack - E-Commerce Platform",
    name: "Tomato",
    desc: "A full food delivery app with everything you'd expect — browsing, cart, Stripe checkout, and live order tracking. Includes a separate admin dashboard for managing the menu and updating delivery statuses in real time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    links: {
      github: "https://github.com/Jacob-GHub/Food-Delivery-Full-Stack",
      live: "https://food-delivery-jp.netlify.app/",
    },
    media: {
      kind: "gif",
      src: "/media/new-tomato.gif",
    },
  },

  {
    type: "web",
    category: "Frontend",
    name: "Quant @ UCR",
    desc: "Built the official website for Quant Club at UCR. The site showcases the club’s events, resources, and community while providing a modern, accessible interface for students interested in quantitative finance and data science.",
    tags: ["React", "TailwindCSS", "Motion", "Typescript"],
    links: {
      github: "https://github.com/acm-ucr/quant-website",
      live: "https://quant.ucrhighlanders.org/",
    },
    media: { kind: "image", src: "/media/quant.png" },
  },
  {
    type: "web",
    category: "Frontend",
    name: "Starlight @ UCR",
    desc: "Developed the frontend for ACM@UCR’s official project application and management portal as part of a collaborative engineering team. The platform streamlines the process for students to apply to projects, track applications, and manage participation within ACM’s development ecosystem.",
    tags: ["React", "TailwindCSS", "Motion", "Typescript"],
    links: {
      github: "https://github.com/acm-ucr/starlight-legacy",
      live: "https://starlight-nine-sigma.vercel.app/",
    },
    media: { kind: "image", src: "/media/starlight.png" },
  },
  {
    type: "web",
    category: "Frontend",
    name: "Career Cypher @ UCR",
    desc: "Collaborated with a team to build the frontend for a platform designed to help students navigate internships and full-time opportunities. The site provides career resources, guidance, and tools aimed at helping students prepare for and succeed in the tech job search.",
    tags: ["React", "TailwindCSS", "Motion", "Typescript"],
    links: {
      github: "https://github.com/acm-ucr/quant-website",
    },
    media: { kind: "image", src: "/media/careercypher.png" },
  },
];

const SYSTEMS: Project[] = [
  {
    type: "sys",
    category: "Systems",
    name: "C Compiler",
    desc: "A compiler for a subset of C that produces real LLVM IR and compiles it. It handles variables, functions, arrays, control flow, loops, and expression parsing — built completely from scratch without any compiler frameworks.",
    tags: ["C++", "LLVM", "GoogleTest", "Valgrind", "CMake"],
    links: { github: "https://github.com/Jacob-GHub/C-Compiler" },
    media: {
      kind: "gif",
      src: "/media/new-c-compiler.gif",
    },
  },
  {
    type: "sys",
    category: "Graphics",
    name: "Ray Tracing Renderer",
    desc: "A physically-based 3D renderer written from scratch in C++. Simulates how light actually behaves — reflections, refraction, soft shadows — to produce photorealistic images. Uses a BVH tree and multithreading to keep render times reasonable.",
    tags: [
      "C++",
      "Linear Algebra",
      "BVH",
      "Multithreading",
      "Computer Graphics",
    ],
    links: { github: "https://github.com/Jacob-GHub/Ray-Tracer" },
    media: {
      kind: "gif",
      src: "/media/new-ray-tracer.gif",
    },
  },
  {
    type: "sys",
    category: "Embedded Systems",
    name: "Space Invaders — ATmega328P",
    desc: "A fully playable Space Invaders game running on a bare ATmega328P microcontroller with a tiny OLED screen. Every driver — display, joystick, audio — was written by hand, and the whole thing fits inside 2KB of RAM.",
    tags: ["C++", "AVR ASM", "I2C", "PWM", "EEPROM", "SSD1306"],
    links: {
      github: "https://github.com/Jacob-GHub/Space-Invaders-Embedded-System",
    },
    media: {
      kind: "gif",
      src: "/media/space-invaders.gif",
    },
  },
  {
    type: "sys",
    category: "Systems",
    name: "Custom Language Compiler",
    desc: "A compiler for a custom language built entirely in Rust. It lexes, parses, and generates intermediate code with support for functions, arrays, control flow, and scoped variables, with a tree-walking interpreter to run the output directly.",
    tags: ["Rust", "Lexer", "Parser", "IR Generation", "Interpreter"],
    links: { github: "https://github.com/Jacob-GHub/teh-tarik-compiler" },
    media: {
      kind: "gif",
      src: "/media/new-rust-compiler.gif",
    },
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <p className="section-eyebrow">// Full-Stack</p>
        <div className="section-header">
          <h2 className="section-title">
            Web &amp; full-stack
            <br />
            <em>projects</em>
          </h2>
        </div>
        <ProjectCarousel projects={FULLSTACK} />
      </section>

      <hr className="divider" />

      <section id="systems" className="section section--alt">
        <p className="section-eyebrow">// Systems &amp; Low-Level</p>
        <div className="section-header">
          <h2 className="section-title">
            Compilers, graphics
            <br />
            <em>&amp; embedded</em>
          </h2>
        </div>
        <ProjectCarousel projects={SYSTEMS} />
      </section>
    </>
  );
}
