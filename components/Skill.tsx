import { motion } from "framer-motion";
import React from "react";
import { Url } from "url";

type Props = {
  directionLeft?: boolean;
  img : string;
  set : string;
};

function Skill({ directionLeft, img, set }: Props) {
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
      <div
        className="absolute opacity-0
      group-hover:opacity-80 transition 
      duration-300 ease-in-out group-hover:bg-transparent
      h-16 w-16 
      rounded-full z-0"
      >
        <div
          className="flex items-center
        justify-center h-full"
        >
          <p
            className="text-3xl font-bold
          text-black opacity-100"
          >
            {set}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
