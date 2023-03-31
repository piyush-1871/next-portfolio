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
        deployed="https://netflix-react-clone-bw0i4v3zu-piyush-1871.vercel.app/"
          github="https://github.com/piyush-1871/netflix-react-clone"
          name="Netflix Clone"
          img="
          https://cdn.sanity.io/images/psxz3zqm/production/7245d7db03089e7dfb3303fc57549f92d470164b-1920x1080.png?rect=0,78,1890,951&w=2000&fit=max&auto=format
          "
        />
        <Project
        deployed="https://movie-app-sand-three.vercel.app/"
          github="https://github.com/piyush-1871/movie-app"
          name="React Movie App"
          img="https://cdn.sanity.io/images/psxz3zqm/production/29405fe328e6d7ee7d773e75c5ff4dc1004aac32-1920x1080.png?rect=0,173,1893,846&w=2000&fit=max&auto=format"
        />
        
        <Project 
        deployed="https://piyush-1871.github.io/parallax-page/"
        github="https://github.com/piyush-1871/parallax-page"
        name="Parallax Website"
        img="https://cdn.sanity.io/images/psxz3zqm/production/bcb2fbaa29325f2a6e2d1b71b73f9162aa135bfa-1920x921.png?rect=0,0,1890,921&w=2000&fit=max&auto=format"
        />
        <Project 
        name="Razorypay"
        deployed="#"
        github="https://github.com/piyush-1871/Razorpay"
        img="https://cdn.sanity.io/images/psxz3zqm/production/1464fe781abfd5622b8b65b3ad25471a090dc1fe-1920x927.png?rect=0,0,1883,927&w=2000&fit=max&auto=format"
        />
        <Project 
        github="https://github.com/piyush-1871/AudioWave-Music-Player"
        deployed="https://piyush-1871.github.io/AudioWave-Music-Player/"
        name="AudioWave"
        img="https://cdn.sanity.io/images/psxz3zqm/production/688f886287705ae780489f1c7998b4efe3f58082-1920x1080.png?rect=0,85,1920,931&w=2000&fit=max&auto=format"
        />
        <Project
        github="https://github.com/piyush-1871/ChatGPT"
        deployed="https://chat-dlaolzsfy-piyush-1871.vercel.app/"
        name="ChatGPT"
        img="https://cdn.sanity.io/images/psxz3zqm/production/bca1ffd98033c69596a6d28f308288df54a1a9fc-1920x1080.png?rect=0,71,1920,948&w=2000&fit=max&auto=format"
        />
        <Project
        deployed="https://weather-app-eosin-six-10.vercel.app/"
        github="https://github.com/piyush-1871/weather-app"
        name="Weather App"
        img="https://cdn.sanity.io/images/psxz3zqm/production/7967b0e9664bc87cdd06c3533e1d73d02e3635cb-1920x1080.png?rect=132,98,1673,924&w=2000&fit=max&auto=format"
        />
        <Project
        deployed="https://dev-detective-one.vercel.app/"
        github="https://github.com/piyush-1871/Dev-Detective"
        name="Dev-Detective"
        img="https://cdn.sanity.io/images/psxz3zqm/production/400b6a30a6218ac6ea99e8aac5f97626bca27bc3-1920x1080.png?rect=98,98,1720,901&w=2000&fit=max&auto=format"
        />
        <Project
        deployed="https://password-generator-nine-phi.vercel.app/"
        github="https://github.com/piyush-1871/Password-Generator"
        name="Password Generator"
        img="https://cdn.sanity.io/images/psxz3zqm/production/d9fcddaec9fb937fa82f4d798946f5b0649a293c-1920x1080.png?rect=0,115,1920,890&w=2000&fit=max&auto=format"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
