import { motion } from "framer-motion";
import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex
       overflow-x-scroll overflow-y-hidden 
       snap-x snap-mandatory z-20
       scrollbar-track-gray-400/20 scrollbar-thin
      scrollbar-thumb-[#F7AB0A]/80 "
      >
        <Project
          github="https://github.com/piyush-1871/netflix-react-clone"
          name="Netflix Clone"
          img="
          https://cdn.sanity.io/images/psxz3zqm/production/7245d7db03089e7dfb3303fc57549f92d470164b-1920x1080.png?rect=0,78,1890,951&w=2000&fit=max&auto=format
          "
        />
        <Project
          github="https://github.com/piyush-1871/movie-app"
          name="React Movie App"
          img="https://cdn.sanity.io/images/psxz3zqm/production/29405fe328e6d7ee7d773e75c5ff4dc1004aac32-1920x1080.png?rect=0,173,1893,846&w=2000&fit=max&auto=format"
        />
        
        <Project 
        github="https://github.com/piyush-1871/parallax-page"
        name="Parallax Website"
        img="https://cdn.sanity.io/images/psxz3zqm/production/bcb2fbaa29325f2a6e2d1b71b73f9162aa135bfa-1920x921.png?rect=0,0,1890,921&w=2000&fit=max&auto=format"
        />
        <Project 
        name="Razorypay"
        github="https://github.com/piyush-1871/Razorpay"
        img="https://cdn.sanity.io/images/psxz3zqm/production/1464fe781abfd5622b8b65b3ad25471a090dc1fe-1920x927.png?rect=0,0,1883,927&w=2000&fit=max&auto=format"
        />
        <Project 
        github="https://github.com/piyush-1871/AudioWave-Music-Player"
        name="AudioWave"
        img="https://cdn.sanity.io/images/psxz3zqm/production/688f886287705ae780489f1c7998b4efe3f58082-1920x1080.png?rect=0,85,1920,931&w=2000&fit=max&auto=format"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
