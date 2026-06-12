import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Scale', href: '#metrics' },
    { label: 'Partners', href: '#partners' },
  ]

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-corp-blue shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            {/* Stacked Badge Logo (No border) */}
            <div className="flex flex-col items-center justify-center bg-[#003566] rounded-2xl p-2.5 shadow-md">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1.5"
                style={{ backgroundColor: '#005A9C' }}
              >
                <span className="text-accent-cyan font-display font-black text-xl leading-none">S</span>
              </div>
              <span className="font-display font-bold text-white text-[11px] tracking-widest leading-none">
                SIGMMA
              </span>
            </div>
            
            {/* Restored New Zealand Text */}
            <span className="font-display font-medium text-white/90 text-sm tracking-wide">
              New Zealand
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-all duration-200 hover:text-accent-cyan relative group text-white/80"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a
              href="mailto:info@sigmma.com"
              className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-corp-blue ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-white font-medium text-sm hover:text-accent-cyan transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:info@sigmma.com"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar