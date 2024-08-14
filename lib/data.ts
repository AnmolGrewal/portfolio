import React from "react";
import { FaReact, FaSalesforce, FaTiktok } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type Experience = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: readonly Experience[] = [
  {
    title: "Bachelor of Science - Computer Science",
    location: "Simon Fraser University",
    description:
      "Graduated with a BS in Computer Science. Active member of the Computing Science Student Society.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Software Engineer Intern",
    location: "Salesforce",
    description:
      "Worked on various company and nonprofit codebases, created RESTful API integrations, implemented custom solutions, and collaborated in an Agile environment. Contributed to projects totaling over $100,000 in revenue.",
    icon: React.createElement(FaSalesforce),
    date: "Jan 2019 - Aug 2019",
  },
  {
    title: "Software Engineer",
    location: "Harris Computer",
    description:
      "Replaced legacy systems with React components, implemented Golang backend with GraphQL, authored best practices documentation, and enhanced application performance. Actively participated in design meetings and stakeholder discussions.",
    icon: React.createElement(FaReact),
    date: "Mar 2021 - Aug 2024",
  },
  {
    title: "Software Engineer",
    location: "TikTok",
    description: "Inspiring creativity and bringing joy",
    icon: React.createElement(FaTiktok),
    date: "September 2024 - Present",
  },
];

export const reversedExperiencesData = [...experiencesData].reverse();

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
