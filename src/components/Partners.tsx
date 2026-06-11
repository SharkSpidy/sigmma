import React from 'react'

interface Partner {
  name: string
  category: string
  initials: string
  color: string
}

const partners: Partner[] = [
  { name: 'Adani Group', category: 'Airport Conglomerate', initials: 'AG', color: '#1a4480' },
  { name: 'Oman Airports', category: 'Airport Authority', initials: 'OA', color: '#006644' },
  { name: 'Civil Aviation Authority of Nepal', category: 'Aviation Regulator', initials: 'CAAN', color: '#8b0000' },
  { name: 'Airports Authority of India', category: 'Airport Operator', initials: 'AAI', color: '#FF6B00' },
  { name: 'NAIA Terminal 3', category: 'Terminal Operations', initials: 'NAIA', color: '#003087' },
  { name: 'Fraport', category: 'Airport Management', initials: 'FRA', color: '#E30613' },
  { name: 'GMR Airports', category: 'Infrastructure Group', initials: 'GMR', color: '#004B87' },
  { name: 'Airport Authority HK', category: 'Airport Operator', initials: 'AAHK', color: '#007B5F' },
]

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div className="flex-shrink-0 group mx-4">
    <div
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-corp-blue/10 bg-white hover:border-accent-cyan/40 transition-all duration-300 cursor-default"
      style={{ minWidth: '180px' }}
    >
      {/* Initials badge */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold leading-tight text-center"
        style={{ background: partner.color, fontSize: partner.initials.length > 3 ? '8px' : '10px' }}
      >
        {partner.initials}
      </div>
      <div>
        <div className="font-semibold text-charcoal text-xs leading-tight whitespace-nowrap">
          {partner.name}
        </div>
        <div className="text-charcoal/40 text-[10px] whitespace-nowrap mt-0.5">{partner.category}</div>
      </div>
    </div>
  </div>
)

const Partners: React.FC = () => {
  const doubled = [...partners, ...partners]

  return (
    <section
      id="partners"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F7F6 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="reveal text-center">
          <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Trusted Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-corp-blue leading-tight mb-4">
            Global Client Ecosystem
          </h2>
          <p className="text-charcoal/55 text-lg max-w-xl mx-auto">
            Delivering critical infrastructure solutions for some of the most recognised
            airport and industrial operators worldwide.
          </p>
        </div>
      </div>

      {/* Marquee slider */}
      <div className="reveal relative overflow-hidden">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #F4F7F6, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #F4F7F6, transparent)' }}
        />

        <div className="marquee-track py-2">
          {doubled.map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* FOR CONTACT--- MAKE CHANGES HEREEEE!!!!!!!!!!!!!!!!!!!! */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '✈️',
              title: 'Aviation-Grade Precision',
              text: 'Every BHS and PBB installation meets IATA and ICAO standards, backed by rigorous site acceptance testing.',
            },
            {
              icon: '🔧',
              title: 'End-to-End Accountability',
              text: 'From feasibility through commissioning, a single Sigmma entity owns the project outcome — no fragmented handoffs.',
            },
            {
              icon: '🌐',
              title: 'Cross-Border Execution',
              text: 'Proven delivery model spanning New Zealand, South Asia, the Middle East, and European markets.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bento-card flex gap-4 p-6 rounded-2xl bg-white border border-corp-blue/10"
            >
              <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <div className="font-display font-semibold text-charcoal text-sm mb-2">
                  {item.title}
                </div>
                <div className="text-charcoal/55 text-xs leading-relaxed">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
