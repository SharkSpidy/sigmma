import React, { useEffect, useRef } from 'react'

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 180)
    })
  }, [])

  const scrollToEcosystem = () => {
    document.querySelector('#ecosystem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen hero-bg flex flex-col justify-center overflow-hidden">
      {/* Geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Floating geometric accents */}
      <div className="absolute top-24 right-16 w-64 h-64 opacity-10 hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="8 4"/>
          <circle cx="100" cy="100" r="50" stroke="#00AEEF" strokeWidth="1" opacity="0.5"/>
          <circle cx="100" cy="100" r="4" fill="#00AEEF"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-12 w-40 h-40 opacity-10 hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="120" height="120" stroke="#00AEEF" strokeWidth="1.5" strokeDasharray="6 3"/>
          <rect x="50" y="50" width="60" height="60" stroke="#00AEEF" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          {/* <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-widest">
              Global Holdings Group
            </span>
          </div> */}

          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Advanced Solutions for{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(90deg, #00AEEF, #7dd3fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Airport Terminal
            </span>{' '}
            &amp; Industrial Operations
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-white/65 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Sigmma Engineering Limited includes a portfolio of specialized divisions delivering
            smart-engineered systems across Airports - aviation infrastructure, material handling systems,
            and industrial rubber products — spanning APAC, EMEA and NAMER.
          </p>

          {/* CTA group */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToEcosystem}
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2 group"
            >
              Explore Our Ecosystem
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/25 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 backdrop-blur-sm"
            >
              Our Capabilities
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/80 animate-bounce origin-top" style={{ animationDuration: '1.5s' }} />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L0 40 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
