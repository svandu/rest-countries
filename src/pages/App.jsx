import React from 'react'
import ContainerNav from '../components/ContainerNav'
import HeroSection from '../components/HeroSection'
import '../assets/page-style/App.css'

function App() {
  return (
    <div className="root-container">
      <div className="hero-sec">
        <HeroSection />
        <ContainerNav />  
      </div>
    </div>
  )
}

export default App