import React from 'react'
import Typewriter from "typewriter-effect";
import logo from '../assets/me.jpg';

function Blog() {
  return (
    <div className="abo">
            <div className="bg-emerald-200 text-black  py-20 flex flex-col justify-center items-center ">
            <span className="main-name  md:text-5xl text-3xl mx-10  p-2 font-semibold font-mono ">
                <Typewriter

                  options={{
                    cursor: '',
                    loop: 'true'
                  }}

                  onInit={(typewriter) => {

                    typewriter
                      .typeString("My Blogs")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('')
                      .start();
                  }}
                />
                </span>
          <p className="h-[1px] w-80 mt-5 bg-black"></p>

          <div className="blogs flex flex-col gap-10 items-center justify-center">
          <div className="mt-5 blogs lg:mx-28 md:mx-20 max-md:mx-20 max-sm:mx-8 flex md:flex-row flex-col-reverse items-center justify-center ">
            <div className="left w-[70%] flex flex-col  items-start justify-center max-sm:mt-8">
            <h1 className='text-2xl    p-2 font-semibold font-mono'>Title one</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci vel omnis quos exercitationem deleniti incidunt obcaecati quibusdam quo aliquam corrupti similique perferendis porro dignissimos voluptate, eius inventore ipsa, et quasi iste sed. Cum tempore animi vel eius quaerat, suscipit quasi dolorum dolorem amet voluptatum aliquid quod debitis officiis molestias.</p>
            </div>
                <div className="right ">
                  <img  className='w-56 rounded-lg' src={logo} alt="my-profile" />
                </div>
                </div>
          <div className="mt-5 blogs lg:mx-28 md:mx-20 max-md:mx-20 max-sm:mx-8 flex md:flex-row flex-col-reverse items-center justify-center">
            <div className="left w-[70%] flex flex-col  items-start justify-center max-sm:mt-8">
            <h1 className='text-2xl    p-2 font-semibold font-mono'>Title Two</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci vel omnis quos exercitationem deleniti incidunt obcaecati quibusdam quo aliquam corrupti similique perferendis porro dignissimos voluptate, eius inventore ipsa, et quasi iste sed. Cum tempore animi vel eius quaerat, suscipit quasi dolorum dolorem amet voluptatum aliquid quod debitis officiis molestias.</p>
            </div>
                <div className="right ">
                  <img  className='w-56 rounded-lg' src={logo} alt="my-profile" />
                </div>
                </div>
          <div className="mt-5 blogslg:mx-28 md:mx-20 max-md:mx-20 max-sm:mx-8 flex md:flex-row flex-col-reverse items-center justify-center">
            <div className="left w-[70%] flex flex-col  items-start justify-center max-sm:mt-8">
            <h1 className='text-2xl    p-2 font-semibold font-mono'>Title Three</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci vel omnis quos exercitationem deleniti incidunt obcaecati quibusdam quo aliquam corrupti similique perferendis porro dignissimos voluptate, eius inventore ipsa, et quasi iste sed. Cum tempore animi vel eius quaerat, suscipit quasi dolorum dolorem amet voluptatum aliquid quod debitis officiis molestias.</p>
            </div>
                <div className="right ">
                  <img  className='w-56 rounded-lg' src={logo} alt="my-profile" />
                </div>
                </div>
          <div className="mt-5 blogs lg:mx-28 md:mx-20 max-md:mx-20 max-sm:mx-8 flex md:flex-row flex-col-reverse items-center justify-center">
            <div className="left w-[70%] flex flex-col  items-start justify-center max-sm:mt-8">
            <h1 className='text-2xl    p-2 font-semibold font-mono'>Title Four</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci vel omnis quos exercitationem deleniti incidunt obcaecati quibusdam quo aliquam corrupti similique perferendis porro dignissimos voluptate, eius inventore ipsa, et quasi iste sed. Cum tempore animi vel eius quaerat, suscipit quasi dolorum dolorem amet voluptatum aliquid quod debitis officiis molestias.</p>
            </div>
                <div className="right ">
                  <img  className='w-56 rounded-lg' src={logo} alt="my-profile" />
                </div>
                </div>
          </div>



         
          
        </div>
    </div>
  )
}

export default Blog