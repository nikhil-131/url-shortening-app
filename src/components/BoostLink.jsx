import React from 'react'
import '../App.css'

const BoostLink = () => {
  return (
    <div className='linkBoost w-full pt-12 pb-6 bg-[#3b3054] bg-[url("./assets/images/bg-shorten-desktop.svg")] text-white text-center flex flex-col gap-4'>
      <h1 className='md:text-3xl text-xl font-bold'>Boost your links today</h1>
      <button className='bg-[#2acfcf] hover:bg-[#99E3E4] w-fit mx-auto font-semibold px-5 py-2 rounded-full'>Get Started</button>
    </div>
  )
}

export default BoostLink
