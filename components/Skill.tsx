import { motion } from "framer-motion";
import React from "react";
import { Url } from "url";

type Props = {
  directionLeft?: boolean;
  img : string;
  
};

function Skill({ directionLeft, img }: Props) {
  return (
    <div
      className="group relative flex 
    cursor-pointer snap-mandatory snap-x"
    >
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={img}
        className="rounded-full border border-gray-500
        object-cover w-16 h-16 
        filter group-hover:grayscale transition duration-200
        ease-in-out"
      />
      
    </div>
  );
}

export default Skill;
