import React, {useState} from 'react';
import Typed from 'react-typed';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const Home = () => {

  const [current, setCurrent] = useState(0)

  const slider = [
    {id : 1, Text : 'Application \n Penetration Testing', image : './Assets/Slides/sl-1.png'},
    {id : 2, Text : 'Cloud Security', image : './Assets/Slides/sl-2.png'},
    {id : 3, Text : 'Volnerability \n Assessments', image : './Assets/Slides/sl-1.png'},
    {id : 4, Text : 'Soc 2 Compliance', image : './Assets/Slides/sl-3.png'}
  ]

  const backgroundContainer = {
    backgroundImage: `url(${'./Assets/bg-7.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const previousSliderFunction = () => {
    if(current === 0) setCurrent(slider.length -1);
    else setCurrent(current - 1)
  }

  const nextSliderFunction = () => {
    if(current === slider.length - 1) setCurrent(0);
    else setCurrent(current + 1)
  }



  return (
    <>
      <div style={backgroundContainer} className='w-full h-screen opacity-2 shadow-md brightness-75 pt-10'>
        <div className='text-green-500 max-w-[880px] mt-[-96px] w-full h-screen max-auto flex flex-col justify-center pl-96'>
          <pre className='text-white
         text-5xl font-Poppins'>SHIELD YOUR </pre>
          <h1 className='text-white text-5xl font-mono font-bold'>A G E N C Y</h1>
          <p>Some text herte will b soon Now again</p>
          <p>Some text herte will b soon Now again</p>
          <div>
            <p>Hello Asad ul islam</p>
            <Typed
              strings={['Love', 'Soo', 'Much', 'Inshira']}
              typeSpeed={120}
              backSpeed={146}
              loop
            />
          </div>
          <div className='py-2'>
            <button className='py-2 px-2 text-white font-semibold items-center outline-none bg-red-600 hover:bg-red-700 hover:py-2.5 hover:px2.5 text-hover:xl
              hover:rounded-md duration-300'>GET STARTED</button>
          </div>
        </div>
          <div className='text-white max-w-[880px] mt-[-90px] w-full h-16 max-auto flex justify-center pl-96'>
           <div className='flex text-center items-center px-4 py-2'>
           <p className='text-3xl font-bold font-Poppins uppercase cursor-pointer text-left'>{slider[current].Text}</p> <img src= {slider[current].image} alt="" className='
           w-32 h-24 px-4 mix-blend-multiply rounded-sm'/>
           </div>
          </div>
          <div className="flex justify-between text-white px-44 items-center text-center">
        <button className='text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full'
         onClick={previousSliderFunction}>
          <BsArrowLeft />
        </button>
        <button className='text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full bottom-14'
        onClick={nextSliderFunction}>
          <BsArrowRight />
        </button>
      </div>
      </div>
    </>
  )
}

export default Home