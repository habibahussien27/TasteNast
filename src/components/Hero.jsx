import React from 'react'
import { Button } from './Button'
const Hero = () => {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <div  className="absolute bg-[url('/src/assets/hero.png')] bg-center bg-cover inset-0 bg-no-repeat"></div>
            <div className='bg-black/60 absolute inset-0'></div>
            <div className='relative z-10 text-white flex flex-col gap-4 justify-center items-center h-screen'>
                <span>HELLO, NEW FRIEND</span>
                <h1 className='font-semibold text-2xl md:text-6xl leading-relaxed'>RESERVE YOUR TABLE</h1>
                <div className='flex'>
                    <Button color="border-1" >Book a Table</Button>
                    <Button co>Open Menu</Button>
                </div>
            </div>
            
        </section>
    )
}

export default Hero 