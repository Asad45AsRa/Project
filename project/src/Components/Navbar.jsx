import React from 'react'
import 'F:/coding/Project/project/src/index.css'

function Navbar() {
  return (
    <nav className='shadow-md flex my-2 py-1 bg-slate-600 text-white font-medium justify-between font-[Poppins]
    md:px-10 items-center'>
      <span><img src="https://www.logodee.com/wp-content/uploads/2022/10/best-logo-design-ideas-vector-file-download-now.jpg" alt=""
      className='mix-blend-multiply h-12 w-17 ' /></span>
        <ul className='md:flex md:ml-8 my-2 mx-3 md:items-center'>
            <li className='mx-5 cursor-pointer
             hover:text-lg hover:text-yellow-100'>Home</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>Belog's</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>About</li>
            <li className='mx-5 cursor-pointer
            hover:text-lg hover:text-yellow-100'>Contact Us</li>
            <button className='mx-5 cursor-pointer
             hover:text-lg hover:text-yellow-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
           </button>
        </ul>
        <span className='mr-8 App-header font-medium content-center pt-3'>Login</span>
    </nav>
  )
}

export default Navbar;
