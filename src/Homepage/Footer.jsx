import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer bg-slate-700 ">
                <div className="flex lg:mx-28 md:mx-10 lg:p-10 max-sm:p-10 md:p-5 ">
                    <div className="data flex w-full flex-col md:flex-row max-md:items-center max-md:justify-center">
                        <div className="one flex lg:w-[30%] flex-col max-md:items-center max-md:justify-center">
                            <h1 className="title text-white text-xl">About us</h1>
                            <p className="h-[1px] lg:w-48 md:w-28 w-48 mt-3 bg-white"></p>
                            <p className="lg:mr-10 mt-5 text-white font-extralight">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, magnam. Itaque molestiae saepe non neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.</p>

                        </div>
                        <div className="two flex max-md:mt-5 flex-col lg:w-[30%] px-14 max-md:items-center max-md:justify-center">
                            <h1 className="title text-white text-xl">Head Name</h1>
                            <p className="h-[1px] lg:w-48 md:w-28 w-48 mt-3 bg-white"></p>
                            <ul className=' flex  flex-col mt-5  text-white font-mono gap-3'>
                                <li>Target link</li>
                                <li>Target link</li>
                                <li>Target link</li>
                                <li>Target link</li>
                                <li>Target link</li>

                            </ul>
                        </div>
                        <div className="three max-md:mt-5 flex items-center justify-center">
                            <iframe className='max-lg:w-[150px] max-sm:w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.344322827197!2d76.76390891095447!3d30.76491417446276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff35f43ba73ff%3A0xc9723480d879a03d!2sTeja%20Singh%20Hall%2CBoys%20Hostel%206!5e0!3m2!1sen!2sin!4v1694376702849!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer