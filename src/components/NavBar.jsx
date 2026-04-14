import React from 'react'
import { Button } from './Button'
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react';


const navLinks = ["Home", "Pages", "Menu", "Order", "Blog", "Contact", "Shop"];

const NavBar = () => {
    return (
        <section className='flex justify-between px-10 md:px-4 items-center sticky top-0 z-50 bg-black/10 backdrop-blur-sm'>
            
            <div><img src={logo} alt="" /></div>
            <div className='flex items-center justify-center gap-8'>
            <ul className='hidden md:flex gap-8 cursor-pointer lg:text-lg md:text-sm'>
                {navLinks.map((link) => (
                    <li key={link} className='hover:text-[#ecaa77] leading-relaxed text-white font-medium text-lg relative group transition-colors '>{link}
                        <span className=" w-0 h-0.5 bg-[#ecaa77] absolute bottom-0 left-0 group-hover:w-full transition-all duration-150 ease-in-out "></span>
                    </li> ))}
            </ul>
            <Button color="hidden md:block bg-[#e2985f] hover:brightness-120 md:p-2 md:m-4">RESERVATION</Button>
            <Menu className='md:hidden text-white'/>
            </div>
        </section>
    )
}

export default NavBar