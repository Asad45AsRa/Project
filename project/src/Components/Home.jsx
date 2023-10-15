import React from 'react';
import Typed from 'react-typed'
import Sales from './Sales';
import About from './About'
import Services from './Services';
import Blogs from './Blogs'
import Contact from './Contact'

const Home = () => {





  return (
    <>
      <div className='w-screen h-full bg-slate-100'>
        <div className='p-2 md:flex'>
          <div className='font-bold text-green-700 text-5xl w-[70%] sm:pt-4 sm:px-4 md:-2 md:pt-48 lg:pt-72 font-Poppins'>
            Your Trusted Guardian in Every Radius
          </div>
          <div className='w-[90%] h-[75%] pt-2 shadow-md mix-blend-multiply'>
            <img src="./Assets/bj-14b.jpg" alt="" />
          </div>
        </div>
      </div>
     <div className='w-screen h-44 bg-slate-100'>
      <div className=' p-1 text-center items-center justify-center'>
      <div className='font-semibold font-Poppins text-slate-900 sm:font-medium md:font-semibold text-center'>
        <p className='p-1'>Unlocking Digital Fortresses: Our Expertise in Web Application, API, iOS, Android, and Network Penetration Testing</p>
        <p className='sm:hidden md:block p1'>Securing Your Code, Protecting Your Future: Trust Our Source Code Review Services</p>
        <div className='sm:hidden md:block p1'>
          <Typed strings={['Empowering Your Cybersecurity:', 'We Safeguard Your Digital World, One Vulnerability at a Time']}
            typeSpeed={145}
            backSpeed={500}
            loop />
        </div>
      </div>
      <div className='p-2'>
        <button className=' bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>GET STARTED</button>
      </div>
      </div>
     </div>

      <Sales />
      <About />
      <Services />
      <Blogs />
      <Contact />
    </>
  )
}

export default Home