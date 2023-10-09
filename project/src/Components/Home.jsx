import React from 'react';
import Typed from 'react-typed'
import Sales from './Sales';
//import About from './About'

const Home = () => {





  return (
    <>
      <div className='w-full h-screen sm:h-[390px] md:h-screen bg-green-300 flex justify-center text-center'>
        <div className='w-full h-screen '>
          <div>
            <div className='text-[#243c5a] sm:p-8 sm:m-8 sm:text-3xl md:p-20 md:m-20 lg:p-28 lg:m-28 md:text-6xl lg:text-7xl font-Hind font-semibold'>
              Your Trusted Guardian in Every Radius
            </div>
            <div className='font-semibold font-Poppins text-slate-800 sm:font-medium md:font-semibold text-center'>
              <p className='p-1'>Unlocking Digital Fortresses: Our Expertise in Web Application, API, iOS, Android, and Network Penetration Testing</p>
              <p className='sm:hidden md:block p1'>Securing Your Code, Protecting Your Future: Trust Our Source Code Review Services</p>
              <div className='sm:hidden md:block p1'>
                <Typed strings={['Empowering Your Cybersecurity:', 'We Safeguard Your Digital World, One Vulnerability at a Time']}
                typeSpeed={145}
                backSpeed={500}
                loop/>
              </div>
            </div>
            <div className='p-2'>
            <button className='p-2'>GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
      <Sales />
      
    </>
  )
}

export default Home