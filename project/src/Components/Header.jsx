import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'F:/coding/Project/project/src/index.css';
import { HiMenu, HiOutlineX, } from "react-icons/hi";
import {AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'


const Header = () => {

    const [open, setOpen] = useState(false);

    const handlerOpen = () => {
        setOpen(!open)
    }

    const navLinks = [
        { link: '/', label: "Home" },
        { link: '/about', label: "About" },
        { link: '/services', label: "Services" },
        { link: '/blog', label: "Blog's" },
        { link: '/contact', label: "Contact" },
    ]
    return (
        <>
            <header>
                <div className='w-full h-11 items-center justify-center bg-slate-800'>
                    <div className='justify-between text-white flex p-1 py-1'>
                        <div className='text-xl font-bold font-Quicksand ml-2'>
                            Sec<span className='text-green-400'>Radius</span>
                        </div>
                        <ul className='flex py-1 gap-3'>
                            <li><Link to='/' ><AiFillLinkedin size={24} color='white'/></Link></li>
                            <li><Link to='/' ><AiFillTwitterCircle size={24} color='white' /></Link></li>
                            <li><Link to='/' ><AiFillFacebook size={24} color='white' /></Link></li>
                        </ul>
                        <div onClick={handlerOpen}
                        className='md:hidden py-1 cursor-pointer'>
                            {!open ? <HiMenu size={24} color='white' />: <HiOutlineX size={24} color='white' />}
                        </div>
                    </div>
                </div>
                <div className='sm:hidden md:block py-1 my-2 w-full h-14 text-center items-center justify-center bg-slate-700 px-10'>
                    <div className='before:min-w-[412px]hide-mobile md:block md:w-full items-center text-center justify-center p-2 md:px-0 px-40'>
                        <ul className='sm:hidden md:flex font-Poppins2 font-semibold justify-center lg:gap-10'>
                            {navLinks.map((item) => (
                                <li key={item.label} className='mx-5'>
                                    <NavLink to={item.link}
                                        className='text-white hover:text-red-600'>{item.label}</NavLink>
                                </li>

                            ))}
                            <div className='ml-40 md:ml-0'>
                                <button className='text-sm mr-2 sm:px-1 sm:py-1 px-1 py-1'>Get Quote</button>
                            </div>
                        </ul>
                    </div>
                </div>
                <ul className={!open ? 'hidden' : ' bg-slate-800 w-full px-8 py-2'}>
                    {navLinks.map((item) => (
                        <li key={item.link} className='border-b-2 border-[#121731] w-full md:hidden'>
                            <NavLink to={item.link} className='text-white hover:text-[#cd1b00] focus-within:text-purple-600 active:bar__data font-Poppins'>{item.label}</NavLink>
                        </li>
                    ))}
                    <div className='md:hidden py-2'>
                        <button className='px-8 py-1 mb-2'>Get Quote</button>
                    </div>
                </ul>
            </header>
        </>
    )
}

export default Header