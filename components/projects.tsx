'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} setIsAnyModalOpen={setIsAnyModalOpen} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
