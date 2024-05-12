import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import ShortenSearch from './components/ShortenSearch'
import BoostLink from './components/BoostLink'
import Footer from './components/Footer'



const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/'; // Using cors-anywhere proxy

function App() {

  return (
    <>
      <div className="container w-full mx-auto">
        <NavBar />
        <HomePage />
        <ShortenSearch />
        <BoostLink />
        <Footer />
      </div>
    </>
  )
}

export default App
