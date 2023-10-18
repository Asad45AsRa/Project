import React from 'react'
import { NavLink } from 'react-router-dom'

const SourceCode = () => {
  return (
    <>
      <div className='w-full h-62 mt-3'>
        <div className='w-full h-34 bg-gradient-to-r from-[#050812] via-[#070C1B] to-[#0b1538] text-center justify-center'>
          <div className='pt-32'>
            <h1 className='text-white text-4xl font-bold p-2'>Source Code Review</h1>
          </div>
          <div className='p-2'>
            <NavLink to='/contact'>
              <button className='p-2 bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300'>GET STARTED</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='w-screen h-full'>
        <div className=' pt-24 mt-0 w-full h-full pb-3 shadow-lg bg-slate-100'>
          <div className=' max-w-[1250px] mx-auto my-0 sm:pb-0 p-3 md:grid grid-cols-2 duration-500 md:border-b-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
              <img src="./Assets/SourceCode/sor-1.webp" alt="" className='mix-blend-normal' />
            </div>
            <div className='col-span-1 flex flex-col justify-center text-justify p-2 bg-transparent'>
              <h1 className='text-bold text-lg font-bold font-Hind'>SOURCE CODE REVIEW</h1>
              <p className=' font-Poppins2'>Source Code Review, also known as code review or static code analysis, is a systematic process of examining the source code of a software application to identify and
                correct coding issues, vulnerabilities, and maintainability concerns It helps uncover coding errors, logic flaws, and software bugs early in the development cycle, reducing the cost and effort
                required for later bug fixes Source code reviews play a critical role in identifying security vulnerabilities, such as SQL injection, cross-site scripting, and authentication weaknesses, enabling
                developers to address them proactively By examining code for adherence to coding standards, readability, and best practices, source code reviews enhance the overall quality and maintainability of
                software</p>

            </div>
          </div>
        </div>
      </div>
      <div className='w-screen md:h-[1360px] lg:h-full bg-slate-100'>
        <div className='p-3 mx-2 text-justify border-t-2 border-black pt-3'>
          <div className='text-center justify-center font-semibold font-Hind'>
            <h1 className='pt-5 text-3xl'>What is Source Code Review</h1>
          </div>
          <div className='pt-5 font-Poppins '>
            <p className='font-semibold'>Source Code Review, often referred to as code review or static code analysis, is a systematic and manual examination of the source code of a software application. The primary purpose of this process is to identify and correct issues, vulnerabilities, and maintainability concerns within the codebase. It is a fundamental part of the software development lifecycle and can be conducted by individual developers, peer reviewers, or specialized tools. Here are key aspects of source code review</p>
            <div className='px-2 p-2'>
              <p><strong>Objective:</strong>The primary goal of source code review is to ensure that the code adheres to coding standards, best practices, and quality requirements. It aims to improve the overall quality of the codebase</p>
              <p><strong>Bug Identification:</strong> Code reviews help identify coding errors, logic flaws, and software bugs early in the development cycle, reducing the cost and effort required for later bug fixes.</p>
              <p><strong>Security Assessment:</strong> By examining code for adherence to coding standards, readability, and best practices, source code reviews enhance the overall quality and maintainability of software.</p>
              <p><strong>Quality Assurance:</strong> Ensuring the security of sensitive data stored on iOS devices and transmitted over networks is a critical aspect of iOS penetration testing.</p>
              <p><strong>Knowledge Sharing:</strong> Code reviews facilitate knowledge sharing among team members. They provide a platform for developers to learn from one another and maintain consistent coding standards.</p>
              <p><strong>Efficiency Improvement:</strong>Regular code reviews streamline the development process, reduce the need for debugging, and lead to faster, more reliable software releases.</p>
              <p><strong>Feedback and Collaboration:</strong> Developers collaborate during code reviews, providing feedback and suggestions to improve code quality, efficiency, and maintainability.</p>
              <p><strong>Documentation:</strong> Code reviews often result in documentation or comments that explain the rationale behind code changes, making it easier for others to understand and maintain the code in the future.</p>
              <p>In summary, source code review is a critical quality assurance practice that improves the security, reliability, and maintainability of software applications while enhancing developer collaboration and reducing the risk of costly post-release issues. It's an integral part of software development, ensuring that code meets established standards and delivers the expected functionality.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${'./Assets/SourceCode/sor-2.webp'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className='w-full h-80 my-6 mix-blend-multiply'>
      </div>
      <div className='w-screen h-full'>
        <div className=' pt-24 mt-0 w-full h-full pb-3 shadow-lg bg-slate-100'>
          <div className=' max-w-[1250px] mx-auto my-0 sm:pb-0 p-3 md:grid grid-cols-2 duration-500 md:border-b-2'>
            <div className='col-span-1 flex flex-col justify-center text-justify px-2 h-96 bg-transparent'>
              <h1 className='text-bold text-lg font-bold font-Hind'>Benefits of Source Code Review</h1>
              <p className='md:hidden sm:hidden lg:block font-Poppins2'> source code reviews are a vital practice in software development, providing numerous benefits that lead to higher-quality, more secure, and maintainable software, as well as fostering a collaborative and skilled development team.</p>
              <ul className='overflow-y-auto'>

                <li><strong>Bug Identification:</strong> Code reviews help identify and rectify coding errors and software bugs early in the development process, reducing the cost and effort required for later bug fixes.</li>
                <li><strong>Enhanced Code Quality:</strong> Code review enforces coding standards, best practices, and design guidelines, resulting in higher-quality and more maintainable code.</li>
                <li><strong>Security Improvement:</strong> Code reviews help identify and address security vulnerabilities, such as SQL injection, cross-site scripting, and authentication issues, reducing the risk of security breaches.</li>
                <li><strong>Knowledge Sharing:</strong> Developers collaborate during code reviews, sharing their expertise and knowledge, which promotes skill development and maintains consistent coding standards across the team.</li>
                <li><strong>Consistency and Maintainability:</strong> Code reviews ensure that code is well-structured and readable, making it easier for other team members to understand, modify, and maintain the code in the future.</li>
                <li><strong>Early Detection of Design Flaws:</strong> Code review helps uncover design and architectural issues before they become entrenched, allowing for more efficient corrective action.</li>
                <li><strong>Efficiency and Productivity:</strong>  Regular code reviews can streamline the development process, reduce the need for debugging, and lead to faster, more reliable software releases.</li>
                <li><strong>Documentation:</strong> Comments and documentation resulting from code reviews provide valuable insights into the rationale behind code changes, aiding in understanding and maintaining the codebase</li>
                <li><strong>Peer Learning:</strong> Code reviews create a learning environment where developers learn from each other, improve their skills, and gain insights into different approaches to problem-solving.</li>
              </ul>
            </div>
            <div className='col-span-1 md:w-[90%] text-center pt-8 pl-8 px-3'>
              <img src="./Assets/SourceCode/sor-3.webp" alt="" className='mix-blend-multiply' />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${'./Assets/SourceCode/sor-4.webp'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className='w-full h-96 my-6 mix-blend-multiply text-center'>
        <div className='pt-72 pb-4'>
          <NavLink to='/contact'>
            <button className=' bg-slate-900 text-white rounded-md hover:bg-indigo-700 hover:rounded-none hover:font-bold font-Hind duration-300 p-2'>GET STARTED</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default SourceCode