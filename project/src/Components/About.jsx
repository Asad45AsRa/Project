import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const About = () => {

  const clients = [
    {Name : 'Apple', image : './Assets/clients/cl-1.png'},
    {Name : 'Microsoft', image : './Assets/clients/cl-2.png'},
    {Name : 'Nokia', image : './Assets/clients/cl-3.png'},
    {Name : 'Google', image : './Assets/clients/cl-4.png'},
    {Name : 'Facebook', image : './Assets/clients/cl-5.png'},
    {Name : 'WhatsApp', image : './Assets/clients/cl-6.png'},
    {Name : 'YouTube', image : './Assets/clients/cl-7.png'},
    {Name : 'UpWork', image : './Assets/clients/cl-8.png'},
    {Name : 'Fiverr', image : './Assets/clients/cl-9.png'},
  ]

  const team = [
    { Name: 'Haroon Hameed', AsA: 'CEO', image: './Assets/team/t-1.jpeg',description: ` old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own` },
    { Name: 'Hanan Ahmed', AsA: 'CTO', image: './Assets/team/t-2.jpeg', description: ' old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own' },
    { Name: 'Tanveer Ahmed', AsA: 'Sr Software Engineer', image: './Assets/team/t-3.jpeg', description: ' old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own' },
    { Name: 'Javed Jamal', AsA: 'Lead Penetration Tester', image: './Assets/team/t-4.jpg', description: ' old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own' },
    { Name: 'Zubair Ali', AsA: 'Security Engineer', image: './Assets/team/t-5.jpg', description: ' old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own' },
    { Name: 'Usama Ijaz', AsA: 'Operational', image: './Assets/team/t-3.jpeg', description: ' old site with only 6 articles and are currently indexing at 30th+ index. Ignore the clicks in the first image because 60% clicks are my own' },
  ]

  const [current, setCurrent] = useState(0)

  const previousTeamFunction = () => {
    if (current === 0) setCurrent(team.length - 1);
    else setCurrent(current - 1)
  }

  const nextTeamFunction = () => {
    if (current === team.length - 1) setCurrent(0);
    else setCurrent(current + 1)
  }

  return (
    <>
      <div className='justify-center text-white bg-slate-700 mt-10 py-7 items-center'>
        <h1 className='text-5xl font-semibold items-center center px-96 mx-32'>About Us</h1>
      </div>
      <div className='flex justify-center pt-3 px-20 text-justify bg-slate-100 mix-blend-multiply border-amber-50 pb-4 pr-2 pl-2 rounded-md mt-10 transform-gpu'>
        <p className='font-serif text-gray-700 pt-20 px-4'>
          At <strong>SecRadius</strong>, our priority is to keep our customers safe and secure from malicious hackers.
          We are a group of white-hat hackers & security experts who help companies to harden their
          security. Each web or mobile application has vulnerabilities as there is no patch for human
          mistakes. Keep running an application without a penetration test is no more than keeping the
          entire company's data and customers records at risk. We work together to provide a hack-proof
          security to our clients that will keep them safe from malicious hackers. This prevents the
          clients from a data breach and save them from being hacked. We simulate a hacker's approach
          in order to identify each and every security hole present in the target application, a final
          documentation is provided with a complete methodology to reproduce each vulnerability along
          with the patches which will make the security hack-proof. Don't be late, secure yourself
          before you get hacked.
        </p>
        <img src="./Assets/about/abt-2.jpg" alt="" className='mix-blend-multiply' />
      </div>
      <div className='items-center justify-center w-92 h-96 px-5 py-10'>
        <h1 className='mx-28 px-96 text-3xl font-serif font-bold'>Our Team</h1>
        <div className=' px-4 py-2'>
          <div className='flex py-2'>
            <div className='px-32 py-10 mx-4 border-solid bg-slate-200'>
              <h4 className='text-lg font-semibold font-Poppins px-3'>Name</h4>
              <h4 className='text-lg font-semibold font-Poppins px-3'>{team[current].Name}</h4>
              <p className='text-lg font-semibold font-Poppins px-3'>Destination</p>
              <p className='text-lg font-semibold font-Poppins px-3'>{team[current].AsA}</p>
              <p className='text-lg font-semibold font-Poppins px-3'>DesCription</p>
              <p className='text-lg font-semibold font-Poppins px-3'>{team[current].description}</p>
            </div>
            <div className='px-5 py-2 mx-4 bg-slate-200 border-solid items-center'>
              <img src={team[current].image} alt="" className='rounded-xl w-80 h-64' />
            </div>
          </div>
          <div className="flex justify-between text-white  items-center text-center pb-96">
            <button className='text-black bg-blue-500 hover:bg-blue-600 p-2 rounded-full'
              onClick={previousTeamFunction}>
              <FiArrowLeft />
            </button>
            <button className='text-black bg-blue-500 hover:bg-blue-600 p-2 rounded-full'
              onClick={nextTeamFunction}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div style={{backgroundImage : `url(${'./Assets/bg-8.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}
      className='w-full h-96 mt-8 mix-blend-overlay'>
        <div className='text-right justify-center pt-28 text-4xl text-white font-Poppins font-semibold px-40'>
          <h1 className='px-20'>YOUR DATA</h1>
          <p><span className='border-b border-white-solid-xl'>IS</span> SAFE WITH US</p>
          </div>
          <div className='py-4 text-right px-80'>
            <button className='py-2 px-2 text-white font-semibold items-center outline-none bg-red-600 hover:bg-red-700 hover:py-2.5 hover:px2.5 text-hover:xl
              hover:rounded-md duration-300'>GET STARTED</button>
          </div>
      </div>
      <div className='items-center justify-center w-92 h-auto px-5 py-10 pt-6'>
      <h1 className='mx-28 px-96 text-3xl font-serif font-bold'>Our Clients</h1>
      <div className='flex'>
        {clients.map((item)=> (
          <div key={clients.Name} className='items-center justify-center px-3 py-3'>
            <img src={item.image} alt=""className='mix-blend-multiply bg-white w-36 h-36' /> <p>{item.Name}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default About