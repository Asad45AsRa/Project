import React from 'react'
import 'F:/coding/Project/project/src/index.css'

function Navbar() {
  return (
    <nav className='flex my-2 py-1 bg-slate-600 text-white font-medium'>
        <ul className='flex my-2 mx-3'>
            <li className='mx-5 cursor-pointer
             hover:text-lg hover:text-yellow-100'>Home</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>Services</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>About</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar;
