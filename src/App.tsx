import React, { useEffect, useRef, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EcosystemTree from './components/EcosystemTree'
import Capabilities from './components/Capabilities'
import GlobalMetrics from './components/GlobalMetrics'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' // 1. Add this import

function App() {
  // Intersection observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-stagger')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <EcosystemTree />
        <Capabilities />
        <GlobalMetrics />
        <Partners />
      </main>
      <Footer />
      
      {/* 2. Add the component here so it renders on every page */}
      <ScrollToTop /> 
    </div>
  )
}

export default App