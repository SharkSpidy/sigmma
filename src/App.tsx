import React, { useEffect } from 'react'
import { Analytics } from "@vercel/analytics/next"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EcosystemTree from './components/EcosystemTree'
import Capabilities from './components/Capabilities'
import GlobalMetrics from './components/GlobalMetrics'
import Partners from './components/Partners'
import SpecialProducts from './components/SpecialProducts'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' // 1. Add this import

// Reveal-on-scroll animation, shared by every route
function useRevealAnimation() {
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
}

function Home() {
  useRevealAnimation()

  return (
    <>
      <Hero />
      <EcosystemTree />
      <Capabilities />
      <GlobalMetrics />
      <Partners />
      <ContactUs />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/special-products" element={<SpecialProducts />} />
        </Routes>
      </main>
      <Footer />

      {/* 2. Add the component here so it renders on every page */}
      <ScrollToTop />
    </div>
  )
}

export default App
