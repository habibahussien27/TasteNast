import React from 'react'
import { Button } from './Button'
import logo from '../assets/logo.png'


const navLinks = ["Home", "Pages", "Menu", "Order", "Blog", "Contact", "Shop"];

const NavBar = () => {
    return (
        <section className='flex justify-around px-10 items-center sticky top-0 z-50 bg-black/20 backdrop-blur-sm'>
            
            <div><img src={logo} alt="" /></div>
            <ul className='hidden md:flex gap-12 cursor-pointer'>
                {navLinks.map((link) => (
                    <li key={link} className='hover:text-[#D68240] transition-colors leading-relaxed text-white font-medium text-lg relative group'>{link}
                        <span className=" w-0 h-0.5 bg-[#D68240]"></span>
                    </li> ))}
            </ul>
            <Button color="bg-[#D68240]">RESERVATION</Button>
        </section>
    )
}

export default NavBar