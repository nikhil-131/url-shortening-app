import React, { useState } from 'react'
import '../App.css'
import logo from "../assets/images/logo.svg"
import menuImg from "../assets/images/menu.svg"
import closeImg from "../assets/images/close.svg"

const NavBar = () => {
    const [popupMenu, setPopupMenu] = useState(false);

    return (
        <header>
            <nav className='my-6 mx-auto lg:w-[80%] w-[90%] flex justify-between'>
                <div className="logo-left flex gap-4 items-center">
                    <img src={logo} alt="" />
                    <div className="md:flex hidden nav-info text-sm gap-4 font-semibold text-[#9e9aa7]">
                        <p className='cursor-pointer hover:text-[#232127]'>Features</p>
                        <p className='cursor-pointer hover:text-[#232127]'>Pricing</p>
                        <p className='cursor-pointer hover:text-[#232127]'>Resources</p>
                    </div>
                </div>
                <div className="logo-right text-sm md:flex hidden gap-4 font-semibold">
                    <button className='bg-transparent text-[#9e9aa7] hover:text-[#232127]'>Login</button>
                    <button className='bg-[#2acfcf] hover:bg-[#99E3E4] text-white px-4 rounded-full'>Sign Up</button>
                </div>
                <div className="imageMenu md:hidden block">
                    <img onClick={() => setPopupMenu(true)} className='w-6' src={menuImg} alt="" />
                </div>
                {popupMenu &&
                    <div className="headerList md:w-[50vw] w-[70vw] h-full bg-white absolute right-0 top-0 text-lg">
                    <div className="listItems h-full flex flex-col justify-center items-center gap-4">
                        <p className='cursor-pointer hover:text-[#232127]'>Features</p>
                        <p className='cursor-pointer hover:text-[#232127]'>Pricing</p>
                        <p className='cursor-pointer hover:text-[#232127]'>Resources</p>
                        <button className='bg-transparent text-[#9e9aa7] hover:text-[#232127]'>Login</button>
                        <button className='bg-[#2acfcf] hover:bg-[#99E3E4] text-white px-4 rounded-full'>Sign Up</button>
                        <img onClick={() => setPopupMenu(false)} className='w-8 absolute top-[5%] right-[8%]' src={closeImg} alt="" />
                    </div>
                </div>}
            </nav>
        </header>
    )
}

export default NavBar
