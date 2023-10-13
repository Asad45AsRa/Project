import React from 'react';
import Typed from 'react-typed'
import Sales from './Sales';
//import About from './About'

const Home = () => {

  const styling = {
    backgroundImage: 'url(./Assets/bh.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }



  return (
    <>
      <div className='w-full h-screen sm:h-[390px] md:h-screen flex justify-center text-center lg:w-screen lg:h-screen'
      style={styling}>
        <div className='md:w-full md:h-screen sm:w-full sm:h-screen lg:w-full lg:h-96'>
          <div>
            <div className='text-slate-900 sm:p-8 sm:m-8 sm:text-3xl md:p-20 md:m-20 lg:p-28 lg:m-28 md:text-6xl lg:text-7xl font-Hind font-semibold'>
              Your Trusted Guardian in Every Radius
            </div>
            <div className='font-semibold font-Poppins text-white sm:font-medium md:font-semibold text-center'>
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
            <button className=' bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
      <Sales />
      
    </>
  )
}

export default Home