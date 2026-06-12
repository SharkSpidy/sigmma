import React from 'react'

// Array for files starting with an alphabet (Scrolls Right)
const rightScrollingLogos = [
  'jetairways.png',
  'hp.png',
  'indigo.png',
  'kuwait.png',
  'airasia.png',
  'cial.png',
  'gofirst.png',
  'honeywell.png',
  'hp.png',
  'spicejet.png',
  'wwfs.png',
]

// Array for files starting with '2' (Scrolls Left)
const leftScrollingLogos = [
  '2alkhalili.png',
  '2asha.png',
  '2assystemstup.png',
  '2maldives.png',
  '2cg.png',
  'qatar.png',
  'emirates.png',
  'saudia.png',
  'ethihad.png',
  'oman.png',
]

const PartnerLogoImage: React.FC<{ filename: string }> = ({ filename }) => {
  /* NOTE ON IMAGE PATHS: 
    Depending on your bundler (Vite, Webpack, Next.js), dynamic paths from 'src/assets' 
    might need to be imported directly. If the images don't load with this string path, 
    consider moving the 'images' folder to your 'public' directory and using:
    src={`/images/${filename}`}
  */
  const imagePath = `/src/assets/images/${filename}`

  return (
    <div className="flex-shrink-0 group mx-4">
      <div
        className="flex items-center justify-center px-5 py-3.5 rounded-xl border border-corp-blue/10 bg-white hover:border-accent-cyan/40 hover:shadow-sm transition-all duration-300 cursor-default"
        style={{ width: '180px', height: '90px' }}
      >
        <img
          src={imagePath}
          alt={filename.split('.')[0]} // Uses filename without extension as alt text
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
        />
      </div>
    </div>
  )
}

const Partners: React.FC = () => {
  // We double the arrays so the marquee loop appears seamless
  const doubledRightLogos = [...rightScrollingLogos, ...rightScrollingLogos, ...rightScrollingLogos]
  const doubledLeftLogos = [...leftScrollingLogos, ...leftScrollingLogos, ...leftScrollingLogos]

  return (
    <section
      id="partners"
      className="py-20 lg:py-28 relative"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F7F6 100%)' }}
    >
      {/* Inline styles for the specific marquee animations */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: scroll-left 25s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: scroll-right 25s linear infinite;
          }
          /* Pause animation on hover */
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>

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

      {/* Marquee slider container */}
      <div className="reveal relative overflow-hidden flex flex-col gap-6">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #F4F7F6, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #F4F7F6, transparent)' }}
        />

        {/* Row 1: Alphabet files -> Scrolling Right */}
        <div className="animate-marquee-right py-2">
          {doubledRightLogos.map((filename, i) => (
            <PartnerLogoImage key={`right-${filename}-${i}`} filename={filename} />
          ))}
        </div>

        {/* Row 2: Number '2' files -> Scrolling Left */}
        <div className="animate-marquee-left py-2">
          {doubledLeftLogos.map((filename, i) => (
            <PartnerLogoImage key={`left-${filename}-${i}`} filename={filename} />
          ))}
        </div>
      </div>

      {/* FOR CONTACT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="reveal grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🌎',
              title: 'NAMER Region',
              text: 'info@sigmma.co.nz',
            },
            {
              icon: '🌏',
              title: 'APAC Region',
              text: 'sales@sigmma.co.nz',
            },
            {
              icon: '🌍',
              title: 'EMEA Region',
              text: 'ingridfr.sigmma.europe@outlook.com',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bento-card flex gap-4 p-6 rounded-2xl bg-white border border-corp-blue/10 hover:shadow-md transition-shadow duration-300"
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