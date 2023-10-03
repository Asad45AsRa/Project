import React, {useState} from 'react'

const About = () => {

  const team = [
    {Name : 'Haroon Hameed', AsA : 'CEO', image : './Assets/team/t-1.jpeg'},
    {Name : 'Hanan Ahmed', AsA : 'CTO', image : './Assets/team/t-2.jpeg'},
    {Name : 'Tanveer Ahmed', AsA : 'Sr Software Engineer', image : './Assets/team/t-3.jpeg'},
    {Name : 'Javed Jamal', AsA : 'Lead Penetration Tester', image : './Assets/team/t-4.jpg'},
    {Name : 'Zubair Ali', AsA : 'Security Engineer', image : './Assets/team/t-5.jpg'},
    {Name : 'Usama Ijaz', AsA : 'Operational', image : './Assets/team/t-3.jpeg'},
  ]

  const [current, setCurrent] = useState(0)

  const previousTeamFunction = () => {
    if(current === 0) setCurrent(team.length -1);
    else setCurrent(current - 1)
  }

  const nextTeamFunction = () => {
    if(current === team.length - 1) setCurrent(0);
    else setCurrent(current + 1)
  }
  
  return (
    <>
      <div className='justify-center text-white bg-slate-700 mt-10 py-7 items-center'>
        <h1 className='text-5xl font-semibold items-center center px-96 mx-32'>About Us</h1>
      </div>
      <div className='flex justify-center pt-3 px-20 text-justify bg-slate-100 mix-blend-multiply border-amber-50 pb-4 pr-2 pl-2 rounded-md mt-10'>
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
        <img src="./Assets/about/abt-2.jpg" alt=""className='mix-blend-multiply' />
      </div>
      <div className='items-center justify-center w-full h-auto px-5 py-10'>
        <h1 className='mx-28 px-96 text-3xl font-serif font-bold'>Our Team</h1>
        <div className='bg-slate-100 border-solid'>
          Asad
        </div>
      </div>
    </>
  )
}

export default About