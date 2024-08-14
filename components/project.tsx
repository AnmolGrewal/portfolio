'use client';

import { useRef, useState } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '@/context/modal-context';

type ProjectProps = (typeof projectsData)[number] & {
  setIsAnyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const { setIsAnyModalOpen } = useModal();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        onClick={() => {
          setIsModalOpen(true);
          setIsAnyModalOpen(true);
        }}
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => {
            setIsModalOpen(false);
            setIsAnyModalOpen(false);
          }}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsAnyModalOpen(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image src={imageUrl} alt={title} width={800} height={450} className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
