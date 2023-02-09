import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'

type Props = {
  img : string;
  name: string;
  github: string;
}

function Project({img, name, github}: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" h-64 xl:h-80 md:h-72"
        src={img}
        alt=""
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case study:
          </span>{" "}
          <Link className='text-orange-400/80' href={github} target="_blank">{name}</Link>
        </h4>
      </div>
    </div>
  )
}

export default Project