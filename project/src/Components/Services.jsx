import React from 'react'
import { NavLink } from 'react-router-dom'



const Services = () => {

  const ServicesBaj = [
    {link : '/android', label : 'Learn More' },
    {link : '/apipenetrationtesting', label : 'Learn More' },
    {link : '/iospeneteration', label : 'Learn More' },
    {link : '/networkpenetration', label : 'Learn More' },
    {link : '/sourcecode', label : 'Learn More' },
    {link : '/webapplication', label : 'Learn More' },
  ]
  return (
    <>
      <div className='lg:w-screen md:w-screen h-40 bg-slate-100'>
        <div className='w-screen h-24 text-center items-center p-2 bg-slate-900'>
          <h1 className='text-5xl font-Hind font-bold pt-5 text-white'>Services</h1>
        </div>
      </div>
      <div className='w-screen h-full bg-slate-100'>
        <div className='w-screen text-center items-center justify-center lg:py-3 lg:mx-36 lg:px-36 md:mx-20'>
          <img src="./Assets/services/sr-11.webp" alt="" />
        </div>
        <div className='p-2'>
          <p className='text-xl font-Hind font-semibold md:p-2'>
            Discover the comprehensive suite of cybersecurity solutions offered by SecRadius.
            From Web Application Penetration Testing to API Penetration Testing, iOS and
            Android Apps Penetration Testing, Network Penetration Testing, and Source Code
            Review, our expertise covers every aspect of digital security.
          </p>
          <p className='text-xl font-Hind font-bold sm:hidden md:block text-justify md:p-2'>
            With a relentless commitment to excellence and a track record of success, we
            provide tailored solutions to protect your digital assets. Explore our services
            to learn how we can strengthen your defense against emerging cyber threats.
          </p>
          <p className='text-xl font-Hind font-bold sm:hidden md:block text-justify md:p-2'>At SecRadius, your security is our priority, and our services reflect that dedication.</p>
        </div>
      </div>
      <div className='lg:w-screen md:w-screen h-full py-10 md:px-10 bg-slate-100'>
        <div className='w-full h-full md:p-2 md:grid-cols-3 md:flex'>
          <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
            <div className='flex-wrap  px-3 text-justify py-2'>
              <img src="./Assets/services/sr-2.webp" alt="" className='w-44 h-40' />
              <h1 className='font-bold text-xl px-2 py-1 text-red-600'>Web Application Penetration</h1>
              <p>Web application penetration testing, also known as web
                app pentesting, is a security assessment aimed at
                identifying vulnerabilities  within web-based applications.
                Security experts use various techniques to simulate
                cyberattacks and discover weaknesses, such as SQL injection,
                cross-site scripting (XSS), and security misconfigurations.
                The goal is to help organizations secure their web applications
                and protect sensitive data.</p>
              <div className='py-2' >
                <p key={ServicesBaj[5].link} className='text-center cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>
                  <NavLink to={ServicesBaj[5].link} >{ServicesBaj[5].label}</NavLink>
                 </p>
              </div>
            </div>
          </div>
          <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
            <div className='flex-wrap  px-3 text-justify py-2'>
              <img src="./Assets/services/sr-6.webp" alt="" className='w-44 h-40' />
              <h1 className='font-bold text-xl px-2 py-1 text-red-600'>Network Penetration</h1>
              <p>Network penetration testing, often referred to as network pentesting or
                ethical hacking, involves assessing the security of an organization's
                network infrastructure. Pentesters identify vulnerabilities in routers,
                firewalls, switches, and other network components. They aim to find
                weaknesses that could be exploited to gain unauthorized access or
                disrupt network operations.</p>
              <div className='py-2'>
                <p key={ServicesBaj[3].link} className='text-center cursor-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>
                  <NavLink to={ServicesBaj[3].link}>{ServicesBaj[3].label}</NavLink></p>
              </div>
            </div>
          </div>
          <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
              <div className='flex-wrap  px-3 text-justify py-2'>
                <img src="./Assets/services/sr-3.webp" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1 text-red-600'>API Penetration Testing</h1>
                <p>API penetration testing focuses on the security of application
                programming interfaces (APIs), which allow different software
                components or services to communicate with each other. API
                pentesters assess the authentication, authorization, and data
                validation mechanisms of APIs to ensure they are protected against
                unauthorized access and potential exploits.</p>
                <div className='py-2'> 
                  <p key={ServicesBaj[1].label} className='text-center cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'
                 ><NavLink to={ServicesBaj[1].link}>{ServicesBaj[1].label}</NavLink></p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='pt-0 lg:w-screen md:w-screen h-full  py-8 md:px-10 bg-slate-100'>
        <div className='w-full h-full md:p-2 md:grid-cols-3 md:flex'>
            <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
              <div className='flex-wrap  px-3 text-justify py-2'>
                <img src="./Assets/services/sr-1.webp" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1 text-red-600'>IOS Apps Penetration</h1>
                <p>iOS app penetration testing involves evaluating the security of iOS mobile 
                applications. Penetration testers assess the app's code, server interactions, 
                and data storage to identify vulnerabilities that could be exploited by 
                attackers. The goal is to ensure that iOS apps are resilient to attacks 
                and protect user data.</p>
                <div className='py-2'> 
                  <p key={ServicesBaj[2].link} className='text-center cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>
                  <NavLink to={ServicesBaj[2].link}>{ServicesBaj[2].label}</NavLink></p>
                </div>
              </div>
            </div>
            <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
              <div className='flex-wrap  px-3 text-justify py-2'>
                <img src="./Assets/services/sr-5.webp" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1 text-red-600'>Source Code Review</h1>
                <p>Source code review, also known as code auditing or static analysis, 
                involves a thorough examination of an application's source code to 
                identify security flaws and coding errors. Security experts analyze 
                the codebase to find vulnerabilities like buffer overflows, injection 
                flaws, and insecure authentication mechanisms. The primary objective is 
                to eliminate coding vulnerabilities before they can be exploited.</p>
                <div className='py-2'> 
                  <p key={ServicesBaj[4].link} className='text-center cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>
                  <NavLink to={ServicesBaj[4].link}>{ServicesBaj[4].label}</NavLink></p>
                </div>
              </div>
            </div>
            <div className='sm:py-5 sm:my-5 sm:px-0 md:w-[380px] md:h-[580px] md:p-3 sm:w-[350px] shadow-lg bg-slate-900 text-white border border-black rounded-lg mx-2'>
              <div className='flex-wrap  px-3 text-justify py-2'>
                <img src="./Assets/services/sr-4.webp" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1 text-red-600'>Andriod Apps Penetration</h1>
                <p>Similar to iOS app penetration testing, this service focuses on 
                evaluating the security of Android mobile applications. Penetration 
                testers examine the app's code, data storage, and communication 
                protocols to uncover vulnerabilities that could be exploited. The 
                goal is to enhance the security of Android apps and protect user 
                information.</p>
                <div className='py-2'> 
                  <p key={ServicesBaj[0].link} className=' text-center cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-900 font-bold rounded-md
                 hover:bg-indigo-700 hover:p-3 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>
                  <NavLink to={ServicesBaj[0].link}>{ServicesBaj[0].label}</NavLink></p>
                </div>
              </div>
            </div>
       
      </div>
      </div>
      <div className='lg:w-screen md:w-screen h-20 bg-slate-100'>
        <div className='text-center justify-center items-center p-4'>
        <button className=' bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>GET STARTED</button>
        </div>
      </div>
    </>
  )
}

export default Services