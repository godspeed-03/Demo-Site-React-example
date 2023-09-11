import React from 'react'
import  imageURL from '../assets/heroimg.png'

function Herobanner() {
  return (
    <div className="hero  h-[80vh] bg-cover bg-blend-normal "  
    style={{
      backgroundImage: `url(${imageURL})`,
    }} 
    >
      <div className="w-full h-full flex  flex-col justify-center items-center backdrop-blur-lg">
     <h1 className="title text-black  md:text-5xl text-3xl">Demo Site</h1>
     <p className="h-[1px] w-80 mt-5 bg-white"></p>
     <p className='lg:mx-80 md:mx-20 max-md:mx-20 max-sm:mx-8 max-sm:mt-8 mt-20 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus nam similique tempora dolore maxime nihil earum temporibus culpa, neque fuga a molestiae dolores aspernatur, at odit optio est voluptatem!</p>
    
     <div className="btn flex md:gap-10 gap-5 mt-10">
      <button className="bg-yellow-200 py-2 md:px-10 px-5 rounded-md text-black hover:bg-red-400 hover:font-semibold ">FIRST BTN</button>
      <button className="bg-yellow-200 py-2 md:px-10 px-5 rounded-md text-black hover:bg-red-400 hover:font-semibold">Secnd BTN</button>
     </div>
     </div>
    </div>
  )
}

export default Herobanner