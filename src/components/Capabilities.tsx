import React, { useState } from 'react'

interface Capability {
  id: string
  category: string
  title: string
  description: string
  items: { label: string; detail: string }[]
  accent: string
  icon: React.ReactNode
  size: 'large' | 'medium' | 'small'
}

const capabilities: Capability[] = [
  {
    id: 'airport',
    category: 'Aviation Infrastructure',
    title: 'Airport Solutions',
    description:
      'Full-lifecycle airport terminal systems integration — from conceptual design through to manufacturing, commissioning and ongoing maintenance of critical airside and landside infrastructure.',
    items: [
      { label: 'BHS Systems', detail: 'Baggage handling & inline screening' },
      { label: 'ATRS', detail: 'Automatic Tray Retrieval System' },
      { label: 'Security Screening', detail: 'Departures and Arrivals for Bags and People' },
      { label: 'Terminal Fit-Out', detail: 'Airline Counters, CCTV, FIDS' },
    ],
    accent: '#004B87',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 24h24M8 24V12l8-6 8 6v12" />
        <rect x="13" y="17" width="6" height="7" rx="0.5" />
        <path strokeLinecap="round" d="M11 15h2M19 15h2" />
        <path strokeLinecap="round" d="M16 6v3" />
      </svg>
    ),
    size: 'large',
  },
  {
    id: 'material',
    category: 'Logistics & Industry',
    title: 'Material Handling Systems',
    description:
      'Smart-engineered conveyor and sorting systems that maximise throughput, reduce downtime, and adapt to the dynamic demands of modern logistics and manufacturing.',
    items: [
      { label: 'Conveyor Systems', detail: 'Belt, roller & chain' },
      { label: 'Automated Sorting', detail: 'High-speed divert & merge' },
      { label: 'Custom Designs', detail: 'Site-specific flow design' },
      { label: 'Cargo Systems', detail: 'Air Cargo' },
    ],
    accent: '#005fa3',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="13" width="28" height="6" rx="1.5" />
        <circle cx="7" cy="23" r="3" />
        <circle cx="25" cy="23" r="3" />
        <path strokeLinecap="round" d="M7 13v-3M25 13v-3M12 13V9M20 13V9" />
        <path strokeLinecap="round" d="M4 10h24" />
      </svg>
    ),
    size: 'large',
  },
  {
    id: 'rubber',
    category: 'Industrial Components',
    title: 'Rubber & Industrial Solutions',
    description:
      'Bespoke rubber compounds and engineered components meeting the toughest industrial standards — built for sealing, conveying, and protecting in the harshest environments.',
    items: [
      { label: 'Rubber Sheetings', detail: 'Custom profiles & compounds' },
      { label: 'Conveyor Belting', detail: 'Heavy-duty & food-grade' },
      { label: 'Industrial Gaskets', detail: 'Chemical & thermal resistant' },
    ],
    accent: '#00AEEF',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="5" />
        <path strokeLinecap="round" d="M16 5v4M16 23v4M5 16h4M23 16h4" />
        <path strokeLinecap="round" d="M8.9 8.9l2.8 2.8M20.3 20.3l2.8 2.8M8.9 23.1l2.8-2.8M20.3 11.7l2.8-2.8" />
      </svg>
    ),
    size: 'medium',
  },
]

const CapabilityCard: React.FC<{ cap: Capability; index: number }> = ({ cap, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="bento-card rounded-2xl overflow-hidden border border-corp-blue/10 bg-white cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${cap.accent}, #00AEEF)`
            : `linear-gradient(90deg, ${cap.accent}55, ${cap.accent}22)`,
        }}
      />

      <div className="p-7 lg:p-8">
        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? `linear-gradient(135deg, ${cap.accent}, #005fa3)`
                : `${cap.accent}12`,
              color: hovered ? 'white' : cap.accent,
            }}
          >
            {cap.icon}
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full transition-all duration-300"
            style={{
              color: cap.accent,
              background: `${cap.accent}10`,
            }}
          >
            {cap.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-charcoal mb-3 leading-tight">
          {cap.title}
        </h3>

        {/* Description */}
        <p className="text-charcoal/55 text-sm leading-relaxed mb-6">
          {cap.description}
        </p>

        {/* Feature items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cap.items.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-2.5 p-3 rounded-xl transition-all duration-300"
              style={{ background: hovered ? `${cap.accent}06` : '#F4F7F6' }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-300"
                style={{ background: hovered ? '#00AEEF' : cap.accent }}
              />
              <div>
                <div className="text-charcoal font-semibold text-xs">{item.label}</div>
                <div className="text-charcoal/45 text-[11px] mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Capabilities: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F4F7F6 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
                Core Competencies
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-corp-blue leading-tight">
                Built for Critical
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #004B87, #00AEEF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Infrastructure
                </span>
              </h2>
            </div>
            <p className="text-charcoal/55 text-base leading-relaxed max-w-md lg:text-right">
              Three verticals that collectively serve some of the world's most demanding operational
              environments — from runways to factory floors.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.id} cap={cap} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #003566, #004B87)' }}
        >
          <div className="text-center sm:text-left">
            <div className="text-white font-display font-semibold text-base">
              Need a tailored solution?
            </div>
            <div className="text-white/55 text-sm mt-0.5">
              Our engineering teams work across verticals to deliver integrated outcomes.
            </div>
          </div>
          <a
            href="mailto:info@sigmma.com"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-corp-blue bg-white font-semibold text-sm hover:bg-accent-cyan hover:text-white transition-all duration-300 shadow-lg"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
