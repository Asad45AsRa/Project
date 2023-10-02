import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {

  const backgroundContainer = {
    backgroundImage: `url(${'./Assets/bg-5.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
        <div className='py-1 pl-48'>
                <button className='py-1 px-1 rounded-md items-center outline-none bg-red-600 hover:bg-red-700 hover:text-yellow-200'>get Started</button>
            </div>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Home