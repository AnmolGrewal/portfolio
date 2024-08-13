"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into the world of coding began in the summer of 2008, sparked
        by a passion for browser games and a desire to enhance my gaming
        experience. As an elementary school student, I taught myself Visual
        Basic 6 to create game trainers, allowing me to save progress in games
        that lacked built-in save features. This early experience ignited a
        lifelong fascination with programming and problem-solving.
      </p>

      <p className="mb-3">
        Fast forward to today, and I've transformed that childhood curiosity
        into a professional career. I've earned a degree in{" "}
        <span className="font-medium">Computer Science</span>, honing my skills
        and deepening my understanding of software development. What I love most
        about programming is the thrill of solving complex problems - it's like
        putting together a puzzle where you create the pieces yourself. That
        moment when everything clicks into place is truly exhilarating.
      </p>

      <p className="mb-3">
        I'm constantly seeking to expand my knowledge and stay at the forefront
        of technology. My passion extends to open-source software development,
        where I find immense satisfaction in contributing to projects that make
        people's lives easier, inspire creativity, and bring joy to users
        worldwide.
      </p>

      <p>
        Outside of coding, I'm an avid gamer, movie enthusiast, and proud dog
        owner. I believe in maintaining a healthy work-life balance and
        nurturing diverse interests. My current goal is to travel the world,
        experiencing different cultures and drawing inspiration from the beauty
        and diversity our planet has to offer. This aspiration not only enriches
        my personal life but also broadens my perspective as a developer,
        allowing me to create more inclusive and globally-minded solutions.
      </p>
    </motion.section>
  );
}
