import React, { useEffect, useRef, useState } from 'react'

interface Metric {
  value: number
  suffix: string
  prefix?: string
  label: string
  sublabel: string
  icon: React.ReactNode
}

const metrics: Metric[] = [
  {
    value: 20,
    suffix: '+',
    label: 'Team Members',
    sublabel: 'Across NZ, India & Europe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: 4,
    suffix: '',
    label: 'Global Subsidiaries',
    sublabel: 'Specialised operating companies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: 3,
    suffix: '',
    label: 'Countries',
    sublabel: 'NZ · Romania · India',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 1.2,
    suffix: 'B+',
    prefix: 'USD ',
    label: 'Projects Planned',
    sublabel: 'Combined pipeline value',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const isFloat = target % 1 !== 0
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  return count
}

const MetricCard: React.FC<{ metric: Metric; index: number; started: boolean }> = ({
  metric,
  index,
  started,
}) => {
  const count = useCounter(metric.value, 2000, started)

  return (
    <div
      className="bento-card group relative p-7 rounded-2xl bg-white border border-corp-blue/10 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background accent on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,75,135,0.03), rgba(0,174,239,0.04))' }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, #00AEEF, transparent)',
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-corp-blue/8 text-corp-blue flex items-center justify-center mb-5 group-hover:bg-corp-blue group-hover:text-white transition-all duration-300">
          {metric.icon}
        </div>

        {/* Number */}
        <div className="metric-number text-4xl lg:text-5xl text-corp-blue mb-2 leading-none">
          {metric.prefix || ''}
          {metric.value % 1 !== 0 ? count.toFixed(1) : count}
          <span className="text-accent-cyan">{metric.suffix}</span>
        </div>

        {/* Label */}
        <div className="font-display font-semibold text-charcoal text-base mb-1">
          {metric.label}
        </div>
        <div className="text-charcoal/45 text-xs font-medium">{metric.sublabel}</div>
      </div>
    </div>
  )
}

const GlobalMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metrics" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14 text-center">
          <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Our Footprint
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-corp-blue leading-tight mb-4">
            Presence &amp; Scale
          </h2>
          <p className="text-charcoal/55 text-lg max-w-xl mx-auto">
            A lean, expert-led group with a project pipeline that punches well above its weight.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="reveal-stagger grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} started={started} />
          ))}
        </div>

        {/* World map visual bar */}
        <div className="reveal">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #003566 0%, #004B87 60%, #005fa3 100%)' }}
          >
            <div className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left text */}
                <div className="lg:w-1/3">
                  <h3 className="font-display font-bold text-2xl text-white mb-3 leading-tight">
                    Operating Across Three Continents
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    With offices in New Zealand and India, and a European foothold through SelfTrust
                    in Romania, Sigmma bridges markets that few holding groups dare to connect.
                  </p>
                </div>

                {/* Office cards */}
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  {[
                    { city: 'Auckland', country: 'New Zealand', flag: '🇳🇿', role: 'HQ & Operations' },
                    { city: 'Delhi', country: 'India', flag: '🇮🇳', role: 'Project Delivery' },
                    { city: 'Bucharest', country: 'Romania', flag: '🇷🇴', role: 'Tech & Compliance' },
                  ].map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl p-4 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 group"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    >
                      <div className="text-2xl mb-2">{office.flag}</div>
                      <div className="font-display font-semibold text-white text-sm">{office.city}</div>
                      <div className="text-white/45 text-xs mb-1">{office.country}</div>
                      <div
                        className="text-[10px] font-semibold uppercase tracking-wider text-accent-cyan/70 group-hover:text-accent-cyan transition-colors duration-300"
                      >
                        {office.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalMetrics
