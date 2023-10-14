import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import {AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {

  const menuLinks = [
    { link: '/', label: "Home" },
    { link: '/about', label: "About" },
    { link: '/services', label: "Services" },
    { link: '/blog', label: "Blog's" },
    { link: '/contact', label: "Contact" },
    { link: '/quote', label: "Quotes" },
  ]

  return (
    <>
      <div className='w-screen md:h-96 sm:h-full bg-slate-900 text-white duration-500'>
        <div>
          <div className='text-xl font-bold font-Quicksand ml-2 pt-2'>
            Sec<span className='text-green-400'>Radius</span>
          </div>
          <div className='md:flex text-center md:justify-between sm:justify-center p-3 border-b pb-7 border-double border-white'>
            <div className='p-3 md:w-[450px] lg:w[500] sm:w-full'>
              <h className="text-lg font-Hind font-semibold">Contact other Platforms</h>
              <div className='flex p-1 md:px-10 sm:px-24'>
                <AiFillPhone size={20} color='white' /> <p className='px-2'>PhoneNo</p>
              </div>
              <div className='flex p-1 md:px-10 sm:px-24'>
                <AiOutlineMail size={20} color='white' /> <p className='px-2'>Email</p>
              </div>
              <div className='flex p-1 md:px-10 sm:px-24'>
                <MdLocationPin size={20} color='white' /> <p className='px-2'>Location</p>
              </div>
            </div>
            <div className='text-white sm:px-0 p-3 md:w-[450px] lg:w[500] sm:w-full'>
              <h1 className='text-lg font-Hind font-semibold'>Menu</h1>
              <ul>
                {
                  menuLinks.map((item) => (
                    <li key={item.label}>
                      <NavLink to={item.link} className='hover:text-red-600'>{item.label}</NavLink>
                    </li>
                  ))
                }
              </ul>
              <p></p>
            </div>
            <div className='p-3 md:w-[450px] lg:w[500] sm:w-full'>
              <h1 className="text-lg font-Hind font-semibold">Follow Us</h1>
              <ul className='flex text-center px-15 justify-center p-2 items-center'>
                <li className='md:px-15'><a href="/" className=''><AiFillTwitterCircle size={28} color='white' /></a></li>
                <li className='md:px-15'><a href="/"><AiFillFacebook size={28} color='white'/></a></li>
                <li className='md:px-15'><a href="/"><AiFillLinkedin size={28} color='white'/></a></li>
              </ul>
              <p className='text-justify'>We combine years of worldwide expertise and 
                tenacity to help our clients navigate the 
                ever-changing cyber security threat landscape.</p>
            </div>
            <div className='p-3  md:w-[450px] lg:w[500] sm:w-full'>
              <h1 className="text-lg font-Hind font-semibold">Legal</h1>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-screen h-15 bg-slate-100'>
        <div className='w-full h-full justify-center text-center p-3'>
          <p className='py-1 font-semibold font-Poppins italic'>© 2023 SecRadius. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer