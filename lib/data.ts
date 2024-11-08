import React from 'react';
import { FaReact, FaSalesforce, FaTiktok } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import speedyNexus from '@/public/speedynexus.png';
import lostMokokos from '@/public/lostmokokos.png';
import speedyNexusTraffic from '@/public/speedynexus-traffic.png';
import lostMokokosTraffic from '@/public/lostmokokos-traffic.png';
import portfolio from '@/public/portfolio.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

type Experience = {
  title: string;
  location: string;
  description: string;
  url?: string;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: readonly Experience[] = [
  {
    title: 'Bachelor of Science - Computer Science',
    location: 'Simon Fraser University',
    description: 'Graduated with a BS in Computer Science. Active member of the Computing Science Student Society.',
    icon: React.createElement(LuGraduationCap),
    date: '2017 - 2020',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Salesforce',
    description:
      'Worked on various company and nonprofit codebases, created RESTful API integrations, implemented custom solutions, and collaborated in an Agile environment. Contributed to projects totaling over $100,000 in revenue.',
    icon: React.createElement(FaSalesforce),
    date: 'Jan 2019 - Aug 2019',
  },
  {
    title: 'Software Engineer',
    location: 'Harris Computer',
    description:
      'Replaced legacy systems with React components, implemented Golang backend with GraphQL, authored best practices documentation, and enhanced application performance. Actively participated in design meetings and stakeholder discussions.',
    icon: React.createElement(FaReact),
    date: 'Mar 2021 - Aug 2024',
  },
  {
    title: 'Software Engineer',
    location: 'TikTok',
    description: 'Keeping Users safe globally in every region TikTok is available! (Click Me For More Info)',
    url: '/uselections2024',
    icon: React.createElement(FaTiktok),
    date: 'September 2024 - Present',
  },
];

export const reversedExperiencesData = [...experiencesData].reverse();

export const projectsData = [
  {
    title: 'Amazon Game Studios – Lost Ark Community Website',
    description:
      'Created a community website for Amazon Games published game Lost Ark, over 1 million page views and 10,000 users monthly. Utilizing React, Next.js and front-end libraries such as MUI, Fontawesome Icons to create tools for users to enhance their journey from scratch supporting Mobile and Desktop Users.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'Single Page Application'],
    imageUrl: lostMokokos,
    imageUrl2: lostMokokosTraffic,
    link: 'https://lostmokokos.com/',
    sourceCodeLink: 'https://github.com/AnmolGrewal/lostmokokos',
  },
  {
    title: 'NEXUS Interview Alert System',
    description:
      'Displays currently available or newly released dates for NEXUS Interviews. Reducing wait times by up to ~90% by allowing users to secure cancelled or postponed interviews quickly.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'JSON'],
    imageUrl: speedyNexus,
    imageUrl2: speedyNexusTraffic,
    link: 'https://speedynexus.com/',
    sourceCodeLink: 'https://github.com/AnmolGrewal/speedynexus',
  },
  {
    title: 'Portfolio Website',
    description:
      'Interactive portfolio showcasing my projects, skills, and professional journey. Designed for seamless navigation, allowing visitors to explore my work, view source code, and easily connect with me.',
    tags: ['React', 'Resend', 'Tailwind', 'Typescript', 'Vercel'],
    imageUrl: portfolio,
    link: 'https://anmolgrewal.com/',
    sourceCodeLink: 'https://github.com/AnmolGrewal/portfolio',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Go',
  'Java',
  'Python',
  'Data Structures and Algorithms',
  'Git',
  'Tailwind',
  'GraphQL',
  'Leetcode',
  'Artificial Intelligence',
  'REST APIs',
  'Object-Oriented Programming',
  'Software Development Life Cycle',
  'MySQL',
  'Salesforce',
  'CI/CD Pipelines',
] as const;
