"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Features");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] max-[500px]:max-w-[20rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Features</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-zinc-800 mt-10 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-zinc-600/10 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
