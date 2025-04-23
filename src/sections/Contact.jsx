import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

     useEffect(() => {
        AOS.init({ duration: 800, offset: 200, easing: 'ease-in-sine' });
      }, []);
  return (
    <div className='pb-20 bg-gray-50'>
        <section id='Contact' className='lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2
        grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10'>

    <div data-aos="zoom-in" className='bg-white p-10 flex flex-col justify-center items-start gap-6 rounded-xl shadow-xl'>
    <h1 className='text-2xl text-black font-semibold'>Send Us a Message</h1>
    <p className='text-gray-600'>We’d love to hear from you. Let us help you discover smart property solutions.</p>
    
    <form className='flex flex-col gap-4 w-full'>
    <input type="text" placeholder='Enter your full name here' 
    className='w-full px-6 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl'
    required />

    <input type="email" placeholder='Enter your email here' 
    className='w-full px-6 py-3 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-xl'
    required />

    <input type="tel" placeholder='Enter your phone number here' 
    className='w-full px-6 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-xl' />

    <textarea name="" id="id" cols="30" rows="5"
    placeholder='Enter your message here...' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500' required></textarea>

    <button type='submit' className='bg-blue-600 w-full text-md px-8 py-3 text-white font-semibold
    rounded-2xl transition-all duration-300 hover:bg-blue-800 cursor-pointer'>SUBMIT</button>
    </form>
    </div>

    <div className='flex flex-col justify-center items-start gap-6 lg:p-20 p-6'>
    <h3 data-aos="fade-up" data-aos-delay="200" className='text-lg text-blue-600 font-semibold tracking-wide'>REACH OUT TO THE FUTURE</h3>
    <h1 data-aos="fade-up" data-aos-delay="400" className='text-black text-[40px]
    font-semibold leading-tight'>Power Your Property Journey with AI</h1>
    <p data-aos="fade-up" data-aos-delay="600" className='text-gray-700 text-lg'>
    Whether you're a first-time homebuyer, a seasoned investor, or a real estate professional, our AI-driven tools are built to guide your decisions. Contact us today to explore smarter, faster, and more personalized real estate solutions.
    </p>
    <button data-aos="fade-up" data-aos-delay="800" className='bg-blue-600 w-full text-md px-8 py-3 text-white font-semibold
    rounded-2xl transition-all duration-300 hover:bg-blue-800 cursor-pointer'>Contact Us</button>
    </div>

    </section>
    </div>
  )
}

export default Contact

