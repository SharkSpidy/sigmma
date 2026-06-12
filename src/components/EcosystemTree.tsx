import React, { useState, useRef, useEffect, useCallback } from 'react'

interface Company {
  id: string
  name: string
  url: string
  tagline: string
  specialization: string
  description: string
  icon: React.ReactNode
  tags: string[]
  region: string
}

const companies: Company[] = [
  {
    id: 'rubber-bits',
    name: 'Rubber Bits NZ',
    url: 'https://rubberbitsnz.com/',
    tagline: 'Precision Rubber Engineering',
    specialization: 'Rubber & Industrial Solutions',
    description:
      'Specialists in custom-engineered rubber products like sheets, gaskets, seals, and conveyor belting solutions for industries like food, airports, mining, quary, cement and dairy across New Zealand.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      </svg>
    ),
    tags: ['Rubber Sheeting', 'Conveyor Belts', 'Industrial Gaskets'],
    region: 'New Zealand',
  },
  {
    id: 'mexeltec',
    name: 'Mexeltec',
    url: 'https://mexeltec.com/',
    tagline: 'Airport & Terminal Systems',
    specialization: 'Airport Solutions',
    description:
      'End-to-end integrators of airport terminal infrastructure including design consultancy of Baggage Handling Systems (BHS) and security screening.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l2 6H4L6 3zM6 9v12M18 3l-2 6h4L18 3zM18 9v12M6 15h12" />
        <path strokeLinecap="round" d="M3 21h18" />
      </svg>
    ),
    tags: ['BHS Designs', 'IT Integration', 'Controls And Software'],
    region: 'World Wide',
  },
  {
    id: 'industrial-conveyors',
    name: 'Industrial Conveyors Limited',
    url: 'https://industrialconveyors.co.nz/',
    tagline: 'Material Handling Mastery',
    specialization: 'Material Handling Systems',
    description:
      'Designers and manufacturers of airport conveyor systems and material handling for various industries.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="9" width="20" height="4" rx="1" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path strokeLinecap="round" d="M6 13v2M18 13v2" />
        <path strokeLinecap="round" d="M9 9V7M15 9V7" />
      </svg>
    ),
    tags: ['Airport Converyor System', 'Material Handling', 'Airport Security Equipment'],
    region: 'New Zealand',
  },
  {
    id: 'selftrust',
    name: 'SelfTrust',
    url: 'https://www.selftrust.ro/en',
    tagline: 'Enterprise Trust Solutions',
    specialization: 'Technology & Assurance',
    description:
      'Manufacturers of Baggage Handling Systems Turnkey, ATRS, Self Bag Drops, Warehouse automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tags: ['BHS', 'ATRS', 'Warehouse Automation'],
    region: 'Romania / Europe',
  },
]

const EcosystemTree: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [linesDrawn, setLinesDrawn] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLinesDrawn(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleNodeClick = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }, [])

  const activeCompany = companies.find((c) => c.id === activeId)

  // Tree diagram coordinates
  const parentX = 80
  const parentY = 220
  const childX = 280
  const childYs = [80, 175, 270, 365]

  return (
    <section id="ecosystem" ref={sectionRef} className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center mb-10 lg:mb-16">
          <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Corporate Ecosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-corp-blue leading-tight mb-4">
            The Sigmma Family
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Four specialized divisions. Unified strategy. Explore Each Division.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden flex items-center justify-center gap-2 text-charcoal/50 text-[11px] uppercase tracking-wider font-semibold mb-6">
          <svg className="w-4 h-4 animate-pulse text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Swipe to explore diagram
        </div>

        <div className="reveal flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Left Side: Horizontally scrollable Tree Graphic */}
          <div className="w-full lg:flex-1 overflow-x-auto pb-6 sm:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="relative mx-auto lg:mx-0" style={{ width: '600px', height: '460px' }}>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 460"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Main horizontal line to spine */}
                <line
                  x1={parentX + 110} y1={parentY}
                  x2={childX - 10} y2={parentY}
                  stroke="#004B87" strokeWidth="1.5" opacity="0.15"
                />
                {/* Vertical spine */}
                <line
                  x1={childX - 10} y1={childYs[0]}
                  x2={childX - 10} y2={childYs[3]}
                  stroke="#004B87" strokeWidth="1.5" opacity="0.15"
                />
                
                {/* Branch lines and connection dots */}
                {childYs.map((cy, i) => {
                  const compId = companies[i].id
                  const isHovered = hoveredId === compId
                  const isActive = activeId === compId
                  const lit = isHovered || isActive
                  
                  return (
                    <g key={compId}>
                      <line
                        x1={childX - 10} y1={cy}
                        x2={childX + 14} y2={cy}
                        stroke={lit ? '#00AEEF' : '#004B87'}
                        strokeWidth={lit ? 2.5 : 1.5}
                        opacity={lit ? 1 : 0.2}
                        className="transition-all duration-300"
                        style={lit ? { filter: 'drop-shadow(0 0 5px rgba(0,174,239,0.7))' } : {}}
                      />
                      <circle
                        cx={childX - 10} cy={cy} r="3"
                        fill={lit ? '#00AEEF' : '#004B87'}
                        opacity={lit ? 1 : 0.3}
                        className="transition-all duration-300"
                      />
                    </g>
                  )
                })}
                
                {/* Animated Draw Line */}
                {linesDrawn && (
                  <line
                    x1={parentX + 110} y1={parentY}
                    x2={childX - 10} y2={parentY}
                    stroke="#00AEEF" strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset="0"
                    opacity="0"
                  />
                )}
              </svg>

              {/* Parent Node */}
              <div
                className="absolute flex flex-col items-center justify-center z-10"
                style={{
                  left: `${parentX}px`,
                  top: `${parentY - 64}px`,
                  width: '120px',
                  height: '120px',
                }}
              >
                <div
                  className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center cursor-default shadow-lg"
                  style={{
                    background: 'linear-gradient(145deg, #003566, #004B87)',
                    boxShadow: '0 0 0 4px rgba(0,75,135,0.15), 0 8px 32px rgba(0,75,135,0.3)',
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center mb-1">
                    <span className="text-accent-cyan font-display font-bold text-lg">S</span>
                  </div>
                  <span className="text-white font-display font-bold text-sm tracking-wide">SIGMMA</span>
                </div>
              </div>

              {/* Child Nodes */}
              {companies.map((company, i) => {
                const cy = childYs[i]
                const isActive = activeId === company.id
                const isHovered = hoveredId === company.id
                const lit = isActive || isHovered

                return (
                  <div
                    key={company.id}
                    className="absolute z-10"
                    style={{
                      left: `${childX + 14}px`,
                      top: `${cy - 34}px`,
                      width: '310px',
                    }}
                  >
                    <button
                      onMouseEnter={() => setHoveredId(company.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => handleNodeClick(company.id)}
                      className="w-full text-left"
                      aria-expanded={isActive}
                      aria-label={`View ${company.name} details`}
                    >
                      <div
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-300 cursor-pointer"
                        style={{
                          borderColor: lit ? '#00AEEF' : 'rgba(0,75,135,0.15)',
                          background: lit
                            ? 'linear-gradient(135deg, rgba(0,75,135,0.05), rgba(0,174,239,0.06))'
                            : 'white',
                          boxShadow: lit
                            ? '0 0 0 3px rgba(0,174,239,0.15), 0 8px 24px rgba(0,75,135,0.12)'
                            : '0 2px 8px rgba(0,75,135,0.06)',
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{
                            background: lit
                              ? 'linear-gradient(135deg, #004B87, #005fa3)'
                              : 'rgba(0,75,135,0.07)',
                            color: lit ? 'white' : '#004B87',
                          }}
                        >
                          {company.icon}
                        </div>
                        <div className="min-w-0">
                          <div
                            className="font-display font-semibold text-sm leading-tight transition-colors duration-300"
                            style={{ color: lit ? '#004B87' : '#1C1E21' }}
                          >
                            {company.name}
                          </div>
                          <div className="text-[11px] text-charcoal/45 font-medium mt-0.5 truncate">
                            {company.tagline}
                          </div>
                        </div>
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 ml-auto transition-all duration-300"
                          style={{
                            color: lit ? '#00AEEF' : '#004B87',
                            opacity: lit ? 1 : 0.3,
                            transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                          }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side / Bottom: Details Card Container */}
          <div className="w-full lg:w-96 flex-shrink-0 mt-2 lg:mt-0">
            {activeCompany ? (
              <div className="preview-card-enter bg-white rounded-2xl border border-corp-blue/10 shadow-xl overflow-hidden">
                <div className="px-6 pt-6 pb-5" style={{ background: 'linear-gradient(135deg, #003566, #004B87)' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-accent-cyan text-[10px] font-semibold uppercase tracking-widest">
                        {activeCompany.region}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white mt-1">
                        {activeCompany.name}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">{activeCompany.specialization}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent-cyan flex-shrink-0">
                      {activeCompany.icon}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-5">
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-5">
                    {activeCompany.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeCompany.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-corp-blue bg-corp-blue/8 px-3 py-1 rounded-full border border-corp-blue/12"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {activeCompany.id !== 'selftrust' && (
                    <a
                      href={activeCompany.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                    >
                      Visit Website
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl border-2 border-dashed border-corp-blue/15 h-full min-h-48 flex flex-col items-center justify-center text-center px-8 py-12"
                aria-live="polite"
              >
                <div className="w-12 h-12 rounded-2xl bg-corp-blue/6 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-corp-blue/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                  </svg>
                </div>
                <p className="text-charcoal/40 text-sm font-medium">
                  Select a division node to explore its specialization and visit its website.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemTree