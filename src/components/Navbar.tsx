import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-corp-blue flex items-center justify-center shadow-md">
              <span className="text-accent-cyan font-display font-bold text-lg leading-none">S</span>
            </div>
            <span
              className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-corp-blue' : 'text-white'
              }`}
            >
              Sigmma
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-all duration-200 hover:text-accent-cyan relative group ${
                  scrolled ? 'text-charcoal' : 'text-white/80'
                }`}
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
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
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
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="navbar-glass border-t border-corp-blue/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-charcoal font-medium text-sm hover:text-accent-cyan transition-colors"
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
