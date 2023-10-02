import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import 'F:/coding/Project/project/src/index.css';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {

    const [open, setOpen] = useState(false);

    const handlerOpen = () => {
        setOpen(!open)
    }

    const navLinks = [
        {link : '/', label : "Home"},
        {link : '/about', label : "About"},
        {link : '/services', label : "Services"},
        {link : '/blog', label : "Blog Post"},
        {link : '/contact', label : "Contact"},
    ]
  return (
    <header className='shadow-md text-white bg-slate-700 hover:bg-slate-800 duration-300 md:py-2 py-3 md:pl-1 pl-3'>
        <nav className='items-center justify-between md:flex py-0'>
            <a  href='/' className='text-2xl font-semibold font-Poppins md:mx-5'>
                Sec<span className='text-green-700'>Radius</span>
            </a>

            <ul className='md:flex gap-10  items-center duration-500 md:pb-1 pb-4 sm:hidden md:opacity-100 opacity-1'>
                {navLinks.map((item) => (
                    <li key={item.label} className='py-0'>
                        <NavLink to={item.link} className='gap-10 text-xl font-Poppins hover:text-red-600 duration-150'>
                            {item.label}</NavLink>
                    </li>
                ))}
            </ul>
            <div className='py-1'>
                <button className='py-1 px-1 rounded-md items-center outline-none bg-red-600 md:mx-5 hover:bg-red-700 hover:text-yellow-200'>Login Now</button>
            </div>

            <div onClick={handlerOpen} className='md:hidden  right-full top-0 cursor-pointer'>
                {!open ? <AiOutlineClose size={22} color='white'/> : <AiOutlineMenu size={22} color='white'/>}
            </div>
        </nav>
    </header>
  )
}

export default Header