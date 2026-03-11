export type ProjectType = "web" | "sys" | "res";

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  type: ProjectType;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  metrics?: string[];
  media?: { kind: "image"; src: string } | { kind: "video"; src: string } | { kind: "gif"; src:string};
  wip?: boolean;
  links?: ProjectLinks;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  type: "web" | "res";
  bullets: string[];
}