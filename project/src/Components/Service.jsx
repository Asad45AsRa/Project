import React from 'react'

const Service = () => {
    return (
        <div className='w-full h-screen mt-3'>
            <div className='w-full h-96 bg-gradient-to-r from-[#050812] via-[#070C1B] to-[#0b1538] text-center justify-center'>
                <div className='pt-32'>
                    <h1 className='text-white text-4xl font-bold p-2'>API Penetration Testing</h1>
                </div>
                <div className='p-2'>
                    <button className='p-2 rounded-none'>GET STARTED</button>
                </div>
            </div>
            <div className='max-w-[1250px] mx-auto my-10 p-2 md:grid grid-cols-2 duration-500'>
                <div className='col-span-1 md:w-[80%] text-center'>
                    <img src="./Assets/services/Api.webp" alt="" className='inline h-80' />
                </div>
                <div className='col-span-1 flex flex-col justify-center'>
                    <h className="py-2 font-bold text-green-400 text-xl">API Penetration Testing</h>
                    <p className='text-[black] font-semibold my-2 text-justify'>
                        API penetration testing is assessing an application's API for security flaws. 
                        It involves checking authentication, authorization, input validation, data 
                        protection, and more. Tools like Burp Suite are used. Findings are reported, 
                        vulnerabilities fixed, and retesting done. Regular testing is essential to 
                        prevent security breaches.</p>
                </div>
            </div>
        </div>
    )
}

export default Service