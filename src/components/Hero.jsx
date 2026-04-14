import React from 'react'
import  Button  from './Button'

const Hero = () => {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <div  className="absolute bg-[url('/src/assets/hero.png')] bg-center bg-cover inset-0 bg-no-repeat"></div>
            <div className='bg-black/60 absolute inset-0'></div>
            <div className='relative z-10 text-white flex flex-col gap-4 justify-center items-center h-screen'>
                <span className="text-2xl">HELLO, NEW FRIEND</span>
                <h1 className='font-semibold text-base md:text-6xl leading-relaxed'>RESERVE YOUR TABLE</h1>
                <div className='flex gap-8'>
                    <Button color="bg-white/10 backdrop-blur-md border border-white/20 p-8 "  >Book a Table</Button>
                    <Button color="bg-white/10 backdrop-blur-sm ">Open Menu</Button>

                </div>
                
            </div>
            
        </section>
    )
}

export default Hero 

// <button class="bg-blue-500 hover:bg-red-300 transition-colors duration-500 ease-in-out p-4 text-white rounded">Testing</button>
// <img src={logo} class="transition-transform hover:scale-125 hover:rotate-360 duration-300" />
{/* <svg class="h-10 w-10 fill-red-500 stroke-black stroke-2">
  <circle cx="20" cy="20" r="15" />
</svg> */}
{/* <div class="border-4 border-dashed border-indigo-500 rounded-3xl p-6 outline outline-2 outline-offset-4 outline-indigo-200">
  أنا متغلف صح!
</div> */}