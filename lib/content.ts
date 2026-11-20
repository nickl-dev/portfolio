export const site = {
  name: "Nick Lal",
  role: "Software Developer",
  tagline: "I build things for the web.",
  about:
    "I work with Product, Design, and QA to turn real needs into clean, maintainable code. I like TypeScript, React, and Node, and I own things from start to finish.",
  links: [
    { label: "GitHub", href: "https://github.com/nickl-dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nicklal/" }
  ],
  resume: "/nick-lal-resume.pdf"
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "URL Shortener",
    description: "Shrinks long URLs into short, shareable links.",
    tags: ["TypeScript", "React", "Node"],
    href: "https://github.com/nickl-dev/url-shortener-simple"
  },
  {
    title: "Crown Clothing",
    description: "E-commerce clothing store.",
    tags: ["React", "Firebase"],
    href: "https://github.com/nickl-dev/crown-clothing"
  },
  {
    title: "SmartBrain  ",
    description:
      "Paste an image link and it finds and identifies the faces in it.",
    tags: ["React", "Node"],
    href: "https://github.com/nickl-dev/smartbrain"
  }
];
