import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import 'F:/coding/Project/project/src/index.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Blog Post" },
      { href: "/contact", label: "Contact" },
    ];
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
      
  
  return (
    <header className='fixed bg-gray-700 w-full my-1'>
        <nav className='flex justify-center items-center gap-15 text-white'>
            <a href="/" className='font-semibold text-2xl'>sec
            <span className='text-green-800'>Radius</span></a>
            <ul className='flex-1 flex justify-center items-center gap-16'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <NavLink to ={item.href} className='text-green-500 hover:text-red-500'>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
                
            </ul>
            <button className=''
            onClick={toggleMenu}>
                {
                    isMenuOpen ? (
                        <AiOutlineClose size={24} color='white' />
                    ): (
                        <RxHamburgerMenu size={24} color='white' />
                    )
                }</button>
        </nav>
    </header>
  )
}

export default Header
