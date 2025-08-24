import { useState } from 'react'

import './App.css'
import HeroSection from './component/Hero'
import Navbar from './component/Navbar'
import Header from './component/Header'
import SearchPage from './component/SearchPage'

function App() {

  return (
    <>
    <Header />
    <HeroSection />
    <SearchPage />
    </>
  )
}

export default App
