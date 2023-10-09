import React from 'react'

const About = () => {
  return (
    <div className='w-screen h-screen bg-green-300'>
      <div className='w-full justify-center items-center text-center'>
        <h1 className='text-5xl font-bold font-Hind pt-12'>About</h1>
        <h1 className='text-xl font-bold font-Hind pt-3'>Discover Our Story: Who We Are and What Drives Us</h1>
      </div>
      <div className='max-w-[1250px] mx-auto my-10 p-2 md:grid grid-cols-2 duration-500'>
        <div className='col-span-1 md:w-[80%] text-center'>
          <img src="./Assets/about/abc.png" alt="" />
        </div>
        <div className='col-span-1 flex flex-col justify-center text-justify p-2'>
          <h1 className='text-bold text-lg font-bold font-Hind'>About Our Cybersecurity Team and Expertise</h1>
          <p className='font-Poppins2'>At <strong>SecRadius</strong>,we are a team of passionate cybersecurity 
          experts dedicated to safeguarding the digital world. With a mission to 
          protect your online assets, we specialize in a wide range of services, 
          including Web Application Penetration Testing, API Penetration Testing, 
          iOS and Android Apps Penetration Testing, Network Penetration Testing, and 
          Source Code Review. Our commitment to excellence and years of experience in the 
          field ensure that your digital assets are fortified against emerging threats. 
          Get to know us better and learn how we can fortify your online presence</p>
        </div>
      </div>
    </div>
  )
}

export default About