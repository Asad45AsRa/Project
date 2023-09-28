import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {

    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    }

    const navLinks = [
        {href : "/", label : "Home"},
        {href : "/about", label : "About"},
        {href : "/services", label : "Services"},
        {href : "/blog", label : "Blog Post"},
        {href : "/contact", label : "Contact"}
    ]
  return (
    <header className='items-center justify-center'>
        <nav className='bg-slate-800 flex text-white font-Poppins w-full justify-between py-3'>
            <a href="/" className='text-xl font-semibold'>Sec<span className='text-green-700'>Radius</span></a>
            <ul className='md:flex lg:flex gap-14'>
                {navLinks.map((item)=> (
                    <li key={item.label}>
                        <NavLink to={item.href} 
                        className='hover:text-red-600'>
                            {item.label}</NavLink>                        
                    </li>
                ))}
            </ul>
            <button className='rounded-md px-1 py-1 bg-slate-400 outline-none'>Login Now</button>
            <button className=''
            onClick={toggle}>
                {toggle ? (
            <AiOutlineClose size={24} color="white" />
          ) : (
            <RxHamburgerMenu size={24} color="white" />
          )}

            </button>
        </nav> 
    </header>
  )
}

export default Header