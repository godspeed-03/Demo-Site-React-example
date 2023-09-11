import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import Herobanner from './Herobanner'
import logo from '../assets/heroimg.jpg'

function Homepage() {
  return (
    <>
<div className="pt-14">
<Herobanner />
      <div className="content mt-30 bg-cover bg-fixed "
        style={{
          backgroundImage: `url(${logo})`,
        }} >
        <div id='Intro' className=" bg-white wrapper  flex md:flex-row flex-col-reverse md:h-[77vh] md:mt-10 ">
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="relative left md:w-[50%] m-auto   ">

            <div className="name-intro flex flex-col md:ml-10 ">

              <span className="main-name text-mycol md:text-5xl text-2xl text-center mt-10 mx-10  p-2 font-semibold font-mono ">
                <Typewriter

                  options={{
                    cursor: '',
                    loop: 'true'
                  }}

                  onInit={(typewriter) => {

                    typewriter
                      .typeString("Satyam Anand")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('')
                      .start();
                  }}
                />
              </span>
            </div>
            <div className=" about  mt-8 pl-10  ">

              <span className='text-black'  >
                I'm Satyam Anand, a Mechanical Engineering student at UIET, Panjab University, Chandigarh. With a strong passion for Front-End Web Development, I specialize in building engaging user interfaces using React. Let's create amazing experiences together
              </span>
            </div>

          </motion.div>




          <div className="right md:w-[50%] m-auto relative ">

            <img src={logo} alt="" className="m-auto my-5 md:w-[550px] w-[250px] h-full backg rounded-[100px]  backg hover:shaw1 transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300" />


          </div>
        </div>

        <div className="py-20 flex flex-col justify-center items-center ">
          <h1 className="title text-white text-5xl">Head Name</h1>
          <p className="h-[1px] w-80 mt-5 bg-white"></p>
          <p className='lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus nam similique tempora dolore maxime nihil earum temporibus culpa, neque fuga a molestiae dolores aspernatur, at odit optio est voluptatem!</p>
        </div>

        <div className="bg-emerald-200 text-black  py-20 flex flex-col justify-center items-center ">
        <motion.h1
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="relative  title md:text-5xl text-3xl">
Head Name
            </motion.h1>
          <p className="h-[1px] w-80 mt-5 bg-black"></p>
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="relative  lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="relative  lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          
        </div>
      </div>
</div>
    </>
  )
}

export default Homepage