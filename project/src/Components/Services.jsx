import React from 'react'

const Services = () => {
  return (
    <div className='h-screen w-screen bg-green-300'>
      <div className='w-full h-24 text-center items-center p-2'>
        <h1 className='text-5xl font-Hind font-bold pt-5'>Services</h1>
      </div>
      <div className='col-span-1 md:w-[80%] text-center md:mx-8 md:px-10'>
        <img src="./Assets/services/sr-36.png" alt="" className='inline h-60' />
      </div>
      <div className='col-span-1 flex flex-col justify-center p2 md:px-2 text-justify '>
        <p className='text-xl font-Hind font-bold md:p-2'>
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
      <div className='w-screen pt-10 h-screen bg-green-300'>
        <div className='p-5 w-full h-full '>
          <div className='grid-cols-3 flex p-2'>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-2.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>Web Application Penetration</h1>
                <p>Web application penetration testing, also known as web
                app pentesting, is a security assessment aimed at
                identifying vulnerabilities  within web-based applications.
                Security experts use various techniques to simulate
                cyberattacks and discover weaknesses, such as SQL injection,
                cross-site scripting (XSS), and security misconfigurations.
                The goal is to help organizations secure their web applications
                and protect sensitive data.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-6.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>Network Penetration</h1>
                <p>Network penetration testing, often referred to as network pentesting or 
                ethical hacking, involves assessing the security of an organization's 
                network infrastructure. Pentesters identify vulnerabilities in routers, 
                firewalls, switches, and other network components. They aim to find 
                weaknesses that could be exploited to gain unauthorized access or 
                disrupt network operations.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-3.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>API Penetration Testing</h1>
                <p>API penetration testing focuses on the security of application
                programming interfaces (APIs), which allow different software
                components or services to communicate with each other. API
                pentesters assess the authentication, authorization, and data
                validation mechanisms of APIs to ensure they are protected against
                unauthorized access and potential exploits.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            
          </div>
          <div className='grid-cols-3 flex p-2'>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-1.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>IOS Apps Penetration</h1>
                <p>iOS app penetration testing involves evaluating the security of iOS mobile 
                applications. Penetration testers assess the app's code, server interactions, 
                and data storage to identify vulnerabilities that could be exploited by 
                attackers. The goal is to ensure that iOS apps are resilient to attacks 
                and protect user data.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-5.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>Source Code Review</h1>
                <p>Source code review, also known as code auditing or static analysis, 
                involves a thorough examination of an application's source code to 
                identify security flaws and coding errors. Security experts analyze 
                the codebase to find vulnerabilities like buffer overflows, injection 
                flaws, and insecure authentication mechanisms. The primary objective is 
                to eliminate coding vulnerabilities before they can be exploited.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            <div className='col-span-1 p-3 border border-black rounded-lg mx-2'>
              <div className='flex-wrap w-84 px-3 text-justify py-2'>
                <img src="./Assets/services/sr-4.png" alt="" className='w-44 h-40' />
                <h1 className='font-bold text-xl px-2 py-1'>Andriod Apps Penetration</h1>
                <p>Similar to iOS app penetration testing, this service focuses on 
                evaluating the security of Android mobile applications. Penetration 
                testers examine the app's code, data storage, and communication 
                protocols to uncover vulnerabilities that could be exploited. The 
                goal is to enhance the security of Android apps and protect user 
                information.</p>
                <div className='py-2'> 
                  <button >Learn More</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services