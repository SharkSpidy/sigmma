import React, { useRef, useEffect } from 'react'

interface Region {
  name: string
  shortCode: string
  emails: string[]
}

const regions: Region[] = [
  {
    name: 'North America',
    shortCode: 'NAMER',
    emails: ['info@sigmma.co.nz'],
  },
  {
    name: 'Asia-Pacific',
    shortCode: 'APAC',
    emails: ['sales@sigmma.co.nz'],
  },
  {
    name: 'Europe, Middle East & Africa',
    shortCode: 'EMEA',
    emails: ['ingridfr.sigmma.europe@outlook.com'],
  },
]

const ContactUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.reveal, .reveal-stagger')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} id="contact-us">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Contact Us by Region
            </h2>
            <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto">
              Reach out to our team in your region. We're here to help answer any questions about our products and services.
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div
                key={region.shortCode}
                className="flex flex-col items-center p-8 rounded-2xl border border-corp-blue/10 bg-gradient-to-br from-white to-ice-gray hover:border-corp-blue/30 transition-all duration-300"
              >
                <div className="text-sm font-semibold uppercase tracking-widest text-accent-cyan mb-2">
                  {region.shortCode}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-6 text-center">
                  {region.name}
                </h3>
                <div className="space-y-3 w-full">
                  {region.emails.map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl text-corp-blue bg-white border border-corp-blue/20 hover:bg-corp-blue hover:text-white hover:border-corp-blue font-semibold text-sm transition-all duration-300"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
