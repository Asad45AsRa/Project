import React, { useState, useEffect, useMemo } from 'react'

const Sales = () => {

  const  data1 = useMemo(() => [
    { heading: 'APPLICATION PENETRATION TESTING', description: 'API pentesting evaluates the security of application programming interfaces, ensuring they"re protected against unauthorized access and exploits.', image: './Assets/slides/sl-1.png' },
    { heading: 'VULNERABILITIES ASSESSMENTS', description: 'iOS app penetration testing assesses the security of iOS mobile apps, identifying code, server, and data vulnerabilities to protect user data.', image: './Assets/slides/sl-2.png' },
    { heading: 'SOC-2 COMPILANCE', description: 'Android app penetration testing evaluates Android mobile apps for vulnerabilities in code, data storage, and communication protocols, enhancing app security.', image: './Assets/slides/sl-4.png' },
  ], [])

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data1]);


  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% duration-500'>
      <div className='max-w-[1250px] mx-auto my-0 py-10 p-2 md:grid grid-cols-2 duration-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className='col-span-1 md:w-[80%] text-center py-2'>
        <img src={data1[currentIndex].image} alt="" className='inline h-60' />
      </div>
      <div className='col-span-1 flex flex-col justify-center py-2 duration-500'>
        <h1 className='text-[#00df9a] font-bold my-2 text-justify duration-500'>{data1[currentIndex].heading}</h1>
        <p className='m-2y '>{data1[currentIndex].description}</p>
        <div className='py-2'>
        <button className='inline w-[30%] p-2 py-2'>Get Started</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sales;