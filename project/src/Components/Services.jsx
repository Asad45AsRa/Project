import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <>
      <div className='w-full h-full text-center'>
        <div style={{ backgroundImage: `url(${'./Assets/bg-10.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          className='w-full h-24 text-center justify-center text-black text-5xl my-3'>
          <h1 className='font-sans font-bold text-center py-2'>Our Services</h1>
        </div>
        <div className='pt-16 px-6 pl-14'>
          <div className='flex flex-wrap text-justify'>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-1.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>Web Application Penetration</h1>
              <p>Web application penetration testing, also known as web
                app pentesting, is a security assessment aimed at
                identifying vulnerabilities  within web-based applications.
                Security experts use various techniques to simulate
                cyberattacks and discover weaknesses, such as SQL injection,
                cross-site scripting (XSS), and security misconfigurations.
                The goal is to help organizations secure their web applications
                and protect sensitive data.</p>
            </div>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-2.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>API Penetration Testing</h1>
              <p>API penetration testing focuses on the security of application
                programming interfaces (APIs), which allow different software
                components or services to communicate with each other. API
                pentesters assess the authentication, authorization, and data
                validation mechanisms of APIs to ensure they are protected against
                unauthorized access and potential exploits.</p>
            </div>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-3.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>IOS Apps Penetration</h1>
              <p>iOS app penetration testing involves evaluating the security of iOS mobile 
                applications. Penetration testers assess the app's code, server interactions, 
                and data storage to identify vulnerabilities that could be exploited by 
                attackers. The goal is to ensure that iOS apps are resilient to attacks 
                and protect user data.</p>
            </div>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-5.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>Network Penetration</h1>
              <p>Network penetration testing, often referred to as network pentesting or 
                ethical hacking, involves assessing the security of an organization's 
                network infrastructure. Pentesters identify vulnerabilities in routers, 
                firewalls, switches, and other network components. They aim to find 
                weaknesses that could be exploited to gain unauthorized access or 
                disrupt network operations.</p>
            </div>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-4.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>Andriod Apps Penetration</h1>
              <p>Similar to iOS app penetration testing, this service focuses on 
                evaluating the security of Android mobile applications. Penetration 
                testers examine the app's code, data storage, and communication 
                protocols to uncover vulnerabilities that could be exploited. The 
                goal is to enhance the security of Android apps and protect user 
                information.</p>
            </div>
            <div className='flex-wrap w-96 px-11'>
              <img src="./Assets/services/sr-6.png" alt="" className='w-36 h-36' />
              <h1 className='font-bold text-xl px-2 py-1'>Source Code Review</h1>
              <p>Source code review, also known as code auditing or static analysis, 
                involves a thorough examination of an application's source code to 
                identify security flaws and coding errors. Security experts analyze 
                the codebase to find vulnerabilities like buffer overflows, injection 
                flaws, and insecure authentication mechanisms. The primary objective is 
                to eliminate coding vulnerabilities before they can be exploited.</p>
            </div>

          </div>
        </div>
        <div className='w-full my-6 h-96'
        style={{backgroundImage : `url(${'./Assets/bg-11.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          
        </div>
      </div>
      <Service />
    </>
  )
}

export default Services