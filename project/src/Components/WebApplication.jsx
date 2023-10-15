import React from 'react'

const WebApplication = () => {
  return (
    <>
      <div className='w-full h-62 mt-3'>
        <div className='w-full h-34 bg-gradient-to-r from-[#050812] via-[#070C1B] to-[#0b1538] text-center justify-center'>
          <div className='pt-32'>
            <h1 className='text-white text-4xl font-bold p-2'>Web Application Penetration</h1>
          </div>
          <div className='p-2'>
            <button className='p-2 bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300'>GET STARTED</button>
          </div>
        </div>
      </div>
      <div className='w-screen h-full'>
        <div className=' pt-24 mt-0 w-full h-full pb-3 shadow-lg bg-slate-100'>
          <div className=' max-w-[1250px] mx-auto my-0 sm:pb-0 p-3 md:grid grid-cols-2 duration-500 md:border-b-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
              <img src="./Assets/webPent/web-3.png" alt="" className='mix-blend-normal' />
            </div>
            <div className='col-span-1 flex flex-col justify-center text-justify p-2 bg-transparent'>
              <h1 className='text-bold text-lg font-bold font-Hind'>WEB APPLICATION PENETRATION</h1>
              <p className=' font-Poppins2'>
              Web Application Penetration Testing, often referred to as web app pen testing, is a critical security assessment process. 
              It involves probing and assessing web applications for vulnerabilities and weaknesses that could be exploited by malicious 
              actors. The goal is to identify and fix these vulnerabilities to protect sensitive data, maintain application integrity, 
              and ensure robust cybersecurity in an interconnected digital world  and broken authentication. This proactive approach helps 
              organizations safeguard their online assets and maintain user trust in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen md:h-[1360px] lg:h-full bg-slate-100'>
        <div className='p-3 mx-2 text-justify border-t-2 border-black pt-3'>
          <div className='text-center justify-center font-semibold font-Hind'>
            <h1 className='pt-5 text-3xl'>What is Web Application Penetration</h1>
          </div>
          <div className='pt-5 font-Poppins font-semibold'>
            <p>Web Application Penetration Testing, often referred to as web app pen testing, is a security assessment 
                process for web applications. It involves systematically probing and evaluating the application's security 
                posture to identify vulnerabilities that could be exploited by malicious actors. Here's a detailed breakdown 
                of web application penetration testing in points</p>
            <div className='px-2'>
             <p><strong>Objective:</strong>The primary goal of web application penetration testing is to uncover security weaknesses and vulnerabilities within a web application to enhance its security posture.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${'./Assets/APIPentration/api-3.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className='w-full h-80 my-3 mix-blend-multiply'>
      </div>
      <div className='w-screen h-full'>
        <div className=' pt-24 mt-0 w-full h-full pb-3 shadow-lg bg-slate-100'>
          <div className=' max-w-[1250px] mx-auto my-0 sm:pb-0 p-3 md:grid grid-cols-2 duration-500 md:border-b-2'>
          <div className='col-span-1 flex flex-col justify-center text-justify px-2 h-96 bg-transparent'>
              <h1 className='text-bold text-lg font-bold font-Hind'>Benefits of API Penetration Testing</h1>
              <p className='md:hidden sm:hidden lg:block font-Poppins2'>The benefits of API penetration testing are significant and essential for ensuring the security and integrity of your software systems and data. Here are the key advantages
               </p>
               <ul className='overflow-y-auto'>
                
               <li><strong>Vulnerability Identification:</strong> API penetration testing helps identify vulnerabilities and weaknesses in your APIs, enabling you to fix them before malicious actors exploit these vulnerabilities</li>
               <li><strong>Data Protection:</strong> It safeguards sensitive data by detecting and addressing security issues that could lead to data breaches, unauthorized access, or data manipulation</li>
               <li><strong>Compliance:</strong> Many regulatory frameworks and industry standards require organizations to conduct regular security testing, including API assessments, to ensure compliance and protect user data</li>
               <li><strong>Preventing Unauthorized Access:</strong> By verifying the effectiveness of authentication and authorization mechanisms, API penetration testing prevents unauthorized users from accessing sensitive data and functionality</li>
               <li><strong>Mitigating Injection Attacks</strong> Testing for vulnerabilities like SQL injection and Cross-Site Scripting (XSS) helps prevent data manipulation or unauthorized code execution, which are common goals of attackers</li>
               <li><strong>Error Handling and Information Leakage:</strong> Proper error handling is essential to avoid exposing sensitive information in error responses. API penetration testing helps identify and rectify these issues to prevent information leakage</li>
               <li><strong>Building Trust</strong> Demonstrating a commitment to API security through testing and vulnerability remediation builds trust with users and partners, assuring them that their data is handled with care</li>
               <li><strong>Continuous Improvement:</strong> Regular API penetration testing and vulnerability assessments lead to ongoing improvement in security practices, helping organizations stay ahead of evolving security threats.</li>
               <li><strong>Cost Savings:</strong>  Detecting and fixing security issues early is more cost-effective than dealing with the financial and reputational consequences of a data breach or service disruption</li>
               </ul>
            </div>
            <div className='col-span-1 md:w-[80%] text-center pt-10'>
              <img src="./Assets/APIPentration/api-4.jpg" alt="" className='mix-blend-multiply' />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${'./Assets/APIPentration/api-6.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className='w-full h-80 my-3 mix-blend-multiply text-center'>
          <div className='pt-72'>
          <button className=' bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>GET STARTED</button>
          </div>
      </div>
    </>
  )
}

export default WebApplication