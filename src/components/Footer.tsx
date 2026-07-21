import React from 'react'

const Footer: React.FC = () => {
  const subsidiaries = [
    { name: 'Rubber Bits NZ', url: 'https://rubberbitsnz.com/' },
    { name: 'Mexeltec', url: 'https://mexeltec.com/' },
    { name: 'Industrial Conveyors', url: 'https://industrialconveyors.co.nz/' },
    // { name: 'SelfTrust', url: 'https://www.selftrust.ro/en' },
  ]

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'linear-gradient(180deg, #002a52 0%, #001a35 100%)' }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-corp-blue flex items-center justify-center">
                <span className="text-accent-cyan font-display font-bold text-lg">S</span>
              </div>
              <span className="text-white font-display font-semibold text-xl tracking-tight">
                Sigmma Engineering Limited
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              A globally-oriented group delivering smart-engineered solutions across
              aviation infrastructure, material handling, and industrial components.
            </p>
            {/* Contact */}
            <a
              href="mailto:info@sigmma.co.nz"
              className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@sigmma.co.nz
            </a>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              Division
            </h4>
            <ul className="space-y-3">
              {subsidiaries.map((sub) => (
                <li key={sub.name}>
                  <a
                    href={sub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm hover:text-accent-cyan transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {sub.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Ecosystem', href: '#ecosystem' },
                { label: 'Capabilities', href: '#capabilities' },
                { label: 'Global Scale', href: '#metrics' },
                { label: 'Partners', href: '#partners' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 text-sm hover:text-accent-cyan transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Sigmma Engineering Limited. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-white/25 text-xs">Operational · Global</span>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
