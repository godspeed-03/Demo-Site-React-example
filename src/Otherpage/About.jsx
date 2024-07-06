import React from 'react'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'
import banner from '../assets/banner.webp'
import logo from '../assets/prop.webp'
import sheild from '../assets/sheild.png'
import check from '../assets/check.png'


function About() {
  return (
    <>


<section className=" bg-[#160052] rounded-xl">
<div className="xl:container mx-auto lg:pt-16 pt-10">
  <div className="text-gray-600">
    <div className="lg:mx-auto flex flex-row px-5 pb-24 text-center">
      <div className="flex   max-lg:flex-col gap-6 lg:gap-4">
        <div className="mx-5">
          <img className='inline-block w-full'
            alt="hero-img"
            src={banner}
          />
        </div>
        <div className=" mt-1 md:mt-0">
          <div className="lg:py-4 flex flex-col justify-center items-center">
            <h1 className=" text-center text-white  text-6xl max-md:text-4xl font-light px-5">
              Lorem, ipsum dolor.{' '}
                  <span className="text-transparent bg-gradient-to-r from-rose-800 to-orange-500 bg-clip-text">Lorem, ipsum dolor.</span>{' '}
              <span className="after-text">Lorem, ipsum dolor.</span>
            </h1>
          </div>
          <p className="px-20  my-3 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores deserunt iure commodi, possimus voluptatibus.
          </p>
          <div className="flex flex-col justify-center items-center mx-auto relative">
            <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-5 text-base font-semibold mt-3">
              Lorem, ipsum dolor.
            </button>
            <p className="text-center font-medium text-base mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, error!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section className=" mt-5 rounded-xl">
                    <div className="xl:container mx-auto lg:pt-16 pt-10">
                        <div className="text-gray-600">
                            <div className="lg:mx-auto  px-5 pb-24 text-center">
                                <div className="flex flex-row-reverse  max-lg:flex-col gap-6 lg:gap-4">
                                    <div className="">
                                        <img className='inline-block w-full'
                                            alt="hero-img"
                                            src={logo}
                                        />
                                    </div>
                                    <div className=" my-auto">
                                        <div className="lg:py-4  ">
                                            <span className="trusttext flex text-center justify-center items-center mt-10">
                                                <img src={sheild} alt="sheild-logo" className=" w-7" />
                                                <h2>Lorem ipsum dolor sit amet.</h2>
                                            </span>

                                        </div>

                                        <h1 className="headerText relative left-0 text-5xl text-black ">
                                            Lorem, ipsum.
                                            <br className="block" />
                                            <span className="text-rose-400 my-8">Lorem ipsum dolor sit amet.</span>
                                            <br className="block" />
                                            <span className='my-8 relative left-0'>Lorem, ipsum dolor.</span>
                                        </h1>

                                        <p className=" relative left-0 my-8">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, saepe nobis corporis nemo porro illum!
                                        </p>

                                        <div className="checksection">
                                            <div className="content flex my-8 ">
                                                <img src={check} alt="Check-Tick" className='w-7 object-contain relative top-0' />
                                                <div class="info-wrap">
                                                    <h2
                                                        class="text-xl lg:w-full mb-3 font-bold font-plusJakartaSans capitalize text-gray-800">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                                                    <p
                                                        class="para font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600 lg:pr-0">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi.<span class="font-bold">Lorem, ipsum.
                                                        </span>Lorem, ipsum.</p>
                                                </div>
                                            </div>
                                            <div className="content flex my-8">
                                                <img src={check} alt="Check-Tick" className='w-7 object-contain relative top-0' />
                                                <div class="info-wrap">
                                                    <h2
                                                        class="text-xl lg:w-full mb-3 font-bold font-plusJakartaSans capitalize text-gray-800">
                                                        Lorem ipsum dolor sit amet.</h2>
                                                    <p
                                                        class="para font-normal font-plusJakartaSans text-base leading-relaxed text-gray-600 lg:pr-0">
                                                        Lorem ipsum dolor sit. <span
                                                            class="font-bold">Lorem, ipsum dolor.</span>Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center mx-auto relative">
                                            <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-5 text-base font-semibold mt-3">
                                                Lorem ipsum dolor sit.
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
              duration: 2,
              type: 'spring'
            }}
            className="relative lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          <motion.div
            initial={{ left: '-20rem' }}
            whileInView={{ left: '0rem' }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="relative lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div>
          
        </div>
    </div>

</>
  )
}

export default About