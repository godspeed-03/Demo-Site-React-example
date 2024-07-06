import React from 'react';
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'




function Contact() {
  return (
<>
{/* <div id='Contact' className=" bg-black contact_form flex  md:flex-row flex-col bg-none shadow-md shadow-white ">
      <div className="left flex flex-1 z-10">
        <div className="awesome text-white mx-auto my-auto flex flex-col">
          <span className=' text-3xl font-semibold font-mono mt-10 '>Get in Touch</span>
          
        </div>
      </div>

      <div className="right flex flex-1 z-10 ">
        <form action=""  className='flex flex-col gap-4 items-center mx-auto mt-20 p-3'>
          <input 
           type="name"
           name='user_name' 
           placeholder='Name' 
          
           className='text-white font-mono w-[20rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <input 
          type="email" 
          name='user_email' 
          placeholder='Email' 
          
          className='text-white font-mono w-[20rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <textarea 
          name="message" 
          id="message"   
          placeholder='Message' 
        
          className='text-white font-mono h-[5rem]  m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300'></textarea>
          <input 
          type="submit" 
          value='Send' 
          className='button bg-white px-8 py-2 hover:rounded-tl-full hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-full rounded-bl-full  rounded-tr-full   font-mono' />
        </form>
      </div>
    </div> */}
    <div className="abo pt-14">
            <div className="bg-black  text-black  md:py-20 flex flex-col justify-center items-center ">
            {/* <span className="main-name text-mycol md:text-5xl text-xl text-center mx-10  p-2 font-semibold font-mono ">
                <Typewriter

                  options={{
                    cursor: '',
                    loop: 'true'
                  }}

                  onInit={(typewriter) => {

                    typewriter
                      .typeString("Check our Catelouge")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('')
                      .start();
                  }}
                />
                </span>

          <iframe className="frame md:w-[700px] h-[400px] " src="https://online.fliphtml5.com/aebel/bnlx/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>
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
            className="relative  lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis doloremque corporis suscipit quos nam doloribus enim delectus iusto eos culpa, commodi dolores exercitationem! Ex corrupti impedit nobis temporibus eaque?

            </motion.div> */}
             <div className="left flex flex-1">
        <div className="awesome text-white mx-auto my-auto flex flex-col">
          <span className=' text-3xl font-semibold font-mono mt-10 '>Get in Touch</span>
          
        </div>
      </div>

<form action=""  className='flex flex-col gap-4 items-center mx-auto mt-20 p-3'>
          <input 
           type="name"
           name='user_name' 
           placeholder='Name' 
          
           className='text-white font-mono md:w-[20rem] w-[18rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <input 
          type="email" 
          name='user_email' 
          placeholder='Email' 
          
          className='text-white font-mono md:w-[20rem] w-[18rem] h-[2rem] m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300' />
          <textarea 
          name="message" 
          id="message"   
          placeholder='Message' 
        
          className='text-white font-mono h-[5rem]  m-auto  p-5 border-2 border-[#ff0000] border-solid rounded-lg focus:outline-none focus:border-mycol  focus:-translate-y-2 transition ease-in-out duration-300'></textarea>
          <input 
          type="submit" 
          value='Send' 
          className='button bg-white px-8 py-2 hover:rounded-tl-full hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-full rounded-bl-full  rounded-tr-full   font-mono' />
        </form>
          
        </div>
    </div>
</>
  )
}



export default Contact