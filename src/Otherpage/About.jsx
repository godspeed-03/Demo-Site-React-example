import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="abo">
            <div className="bg-emerald-200 text-black  py-20 flex flex-col justify-center items-center ">
            <span className="main-name text-mycol md:text-5xl text-3xl mx-10  p-2 font-semibold font-mono ">
                <Typewriter

                  options={{
                    cursor: '',
                    loop: 'true'
                  }}

                  onInit={(typewriter) => {

                    typewriter
                      .typeString("About Us")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('')
                      .start();
                  }}
                />
                </span>
          <p className="h-[1px] w-80 mt-5 bg-black"></p>
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 8,
              type: 'spring'
            }}
            className="relative lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 12,
              type: 'spring'
            }}
            className="relative lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          
        </div>
    </div>
  )
}

export default About