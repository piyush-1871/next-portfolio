import { motion } from "framer-motion";
import React from "react";
import Awim from './organisation/Awim'
import Emrald from "./organisation/Emrald";
import Sae from './organisation/Sae'
type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative
       overflow-hidden flex-col text-left
        md:flex-row max-w-full px-10 
        justify-evenly mx-auto
         items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex 
      space-x-5 overflow-x-scroll p-10 
      snap-x snap-mandatory
      lg:mt-16
      scrollbar-track-gray-400/20 
      scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin "
      >
        {/* Cards */}
        <Awim />
        <Sae />
        <Emrald />
        

        {/* Cards */}
      </div>
    </motion.div>
  );
}

export default Experience;
