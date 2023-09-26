import React, { useState } from 'react'
import 'F:/coding/Project/project/src/index.css'
import { BiAlignRight } from "react-icons/bi";

function Navbar() {

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    const [popup2, setPopup2] = useState(false)

    const togglePopup2 = () => {
        setPopup2(!popup2)
    }


  return (
    <div className='bg-gray-900 w-full text-white fixed py-1 my-1'>
        <nav className='flex justify-between my-1 mx-1 font-Poppins center'>
            <div className='font-semibold text- py-1'>
                SecR<span className='text-amber-700'>adius</span>
            </div>
            <ul className='md:flex font-medium py-1 gap-10'>
                <li><a href="/">Home</a></li>
                <li
                onMouseEnter={togglePopup}
                onMouseLeave={togglePopup}
                className='relative'><a href="/services">Services</a>
                {popup && (
                    <div className='absolute bg-slate-500 text-white p-4 mt-2 w-64 rounded-lg shadow-lg'>
                        <p>Service 1</p>
                        <p>Service 2</p>
                        <p>Service 3</p>
                        <p>Service 4</p>
                    </div>
                )}
                </li>
                <li
                onMouseEnter={togglePopup2}
                onMouseLeave={togglePopup2}
                className='relative'><a href="/company">Company</a>
                {popup2 && (
                    <div className='absolute bg-slate-500 text-white p-4 mt-2 w-64 rounded-lg shadow-lg'>
                        <p>Product 1</p>
                        <p>Product 2</p>
                        <p>Product 3</p>
                        <p>Product 4</p>
                    </div>
                )}
                </li>
                <li><a href="/belogs">Belog's</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <div className='flex gap-4 px-6'>
                <button className='px-1 py-1 bg-red-500 rounded-md outline-none'>Login now</button>
                <button className='px-1 py-1 bg-red-500 rounded-md outline-none'>SignIn now</button>
            </div>
            <div>
            <button className='md:hidden font-medium text-xl py-1'><BiAlignRight /></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar