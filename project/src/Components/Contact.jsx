import React from 'react'

const Contact = () => {
  return (
    
    <>
    <div className='w-full h-20 justify-center text-center pt-2'>
      <h1 className='font-bold text-4xl pt-2'>Contact Us</h1>
    </div>

    <div className='px-3 py-3'>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    
    </div>
    <div style={{backgroundImage : `url(${'./Assets/contact/cn-2.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
    className='w-full h-80'>
      
    </div>
    </>
  )
}

export default Contact