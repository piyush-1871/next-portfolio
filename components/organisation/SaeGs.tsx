import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex rounded-lg justify-between
      space-y-7 flex-shrink-0 w-[450px]
    snap-center bg-[#292929]
     p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity
     duration-200 
    ">
     

      <div className="px-0 md:px-10">
        <h2 className="text-4xl font-light">General Secretary</h2>
        <p className="flex space-x-2 my-2">SAEJMI</p>
        
        <p className="uppercase py-5 text-gray-300">Mar(2023) - Mar(2024)</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>I am a member of Higher Council of the Society.</li>
          <li>My role is to lead the society with the members of higher council.</li>
        </ul>
        
      </div>
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full
        md:rounded-full
        object-cover object-center"
        src="data:image/png;base64,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"
        alt="organization-logo"
      />
    </article>
  );
}

export default ExperienceCard;
