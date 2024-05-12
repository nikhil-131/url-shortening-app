import React from 'react'
import '../App.css'
import working from "../assets/images/illustration-working.svg"

const HomePage = () => {
  return (
    <div className='shorten-intro lg:w-[80%] md:w-[90%] w-full mx-auto flex md:flex-row flex-col-reverse gap-6 md:gap-0 lg:justify-center justify-between items-center lg:gap-8'>
      <div className="shorten-mojo xl:w-[40%] md:w-[60%] w-full text-center md:text-left">
        <h1 className='lg:text-6xl text-5xl font-extrabold leading-[4rem]'>More than just shorter links</h1>
        <p className='text-lg text-[#9e9aa7] font-medium'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className='bg-[#2acfcf] hover:bg-[#99E3E4] px-6 py-2 font-bold text-white text-xl rounded-full my-6'>Get Started</button>
      </div>
      <div className="shorten-desktop">
        <img className='w-[700px]' src={working} alt="" />
      </div>
    </div>
  )
}

export default HomePage
