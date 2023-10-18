import React, { useState } from 'react';

const Contact = () => {
  const [inValue, setInValue] = useState('');
  const [message, setMessage] = useState('');

  const inputHandler = (e) => {
    setInValue(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className='w-screen h-20 justify-center text-center pt-2 bg-slate-900'>
        <h1 className='font-bold text-4xl pt-2 text-white'>Contact Us</h1>
      </div>

      <div className='px-3 py-3 xl:px-16 xl:py-8'>
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
          <div className="bg-white p-6 xl:p-8 rounded shadow-md w-full xl:w-96">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-slate-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-slate-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Services</label>
                <select
                  className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:slate-blue-500"
                  value={inValue}
                  onChange={inputHandler}
                  required
                  placeholder='Select Your Required Service'
                >
                  
                  <option value="Andriod Apps Penetration">Web Application Penetration</option>
                  <option value="network penetration">Network Penetration</option>
                  <option value="API penetration testing">API Penetration Testing</option>
                  <option value="IOS apps penetration">IOS Apps Penetration</option>
                  <option value="source code review">Source Code Review</option>
                  <option value="android apps penetration">Android Apps Penetration</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:border-slate-500 font-semibold"
                  placeholder="Your Message"
                  rows="7"
                  value={message}
                  onChange={messageHandler}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-slate-900 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${'./Assets/contact/cn-2.webp'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className='w-full h-80'>
      </div>
    </>
  );
};

export default Contact;