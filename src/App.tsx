import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
import ScrollToTop from './components/ScrollToTop'
import { ConsentProvider } from './components/CookieConsent'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

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

// Reset scroll on page change; honour #anchors (e.g. /privacy-policy#cookies)
function useRouteScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (pathname === '/') return // home handles its own anchor scrolling
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
}

function App() {
  useRouteScroll()
  return (
    <ConsentProvider>
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/special-products" element={<SpecialProducts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />

      <ScrollToTop />
    </div>
    </ConsentProvider>
  )
}

export default App
