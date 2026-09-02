import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Product {
  id: string
  name: string
  description: string
  /**
   * IMAGE PLACEHOLDER
   * ------------------
   * Point this at the real product photo whenever it's ready, e.g.
   *   image: '/images/products/self-bag-drop.jpg'
   * Any image dropped into /public/images/products/ using this filename
   * will automatically replace the placeholder — no other code changes needed.
   * Until then, the card gracefully falls back to a branded icon tile.
   */
  image: string
}

const products: Product[] = [
  {
    id: 'advanced-self-service-bag-drop',
    name: 'Advance Self-Service Bag Drop',
    description:
      'Lets passengers tag and check their own luggage in seconds. Integrated weight and size verification keeps every bag compliant while cutting queue times at check-in.',
    image: '/images/products/advance-self-service-bag-drop.jpg',
  },
  {
    id: 'self-check-in-kiosk',
    name: 'Self Check-In Kiosk',
    description:
      'Puts check-in in the passenger\u2019s hands. Travellers verify documents, choose seats and print boarding passes independently, freeing staff for higher-value tasks.',
    image: '/images/products/self-check-in-kiosk.jpg',
  },
  {
    id: 'automatic-tray-return-systems',
    name: 'Automatic Tray Return Systems',
    description:
      'Automatically recirculates emptied security trays back to the front of the queue. Keeps checkpoint flow moving and significantly increases screening throughput.',
    image: '/images/products/automatic-tray-return-systems.jpg',
  },
  {
    id: 'return-tray-systems',
    name: 'Return Tray Systems',
    description:
      'A streamlined tray recirculation solution that carries trays from the collection point back to loading. Built for continuous duty, reducing manual handling on the line.',
    image: '/images/products/return-tray-systems.jpg',
  },
  {
    id: 'baggage-reclaim-carousels',
    name: 'Baggage Reclaim Carousels',
    description:
      'Heavy-duty flat-bed carousels engineered for reliable, high-volume baggage reclaim in arrivals halls, built for durability and smooth continuous operation.',
    image: '/images/products/baggage-reclaim-carousels.jpg',
  },
  {
    id: 'baggage-reclaim-carousels-inclined',
    name: 'Baggage Reclaim Carousels (Inclined)',
    description:
      'An inclined-belt reclaim carousel that lifts bags to a comfortable collection height, improving ergonomics and giving passengers a clearer view of arriving luggage.',
    image: '/images/products/baggage-reclaim-carousels-inclined.jpg',
  },
  {
    id: 'vertical-baggage-diverters',
    name: 'Vertical Baggage Diverters',
    description:
      'Precision-engineered diverters that transfer bags between vertical conveyor levels within the BHS, keeping sortation accurate even at high throughput.',
    image: '/images/products/vertical-baggage-diverters.jpg',
  },
  {
    id: 'horizontal-baggage-diverters',
    name: 'Horizontal Baggage Diverters',
    description:
      'Reliable pusher and diverter units that redirect bags across horizontal conveyor lines to the correct sortation destination, minimising mishandling.',
    image: '/images/products/horizontal-baggage-diverters.jpg',
  },
  {
    id: 'merge-units-mdb-connection',
    name: 'Merge Units \u2014 MDB Connection',
    description:
      'Combines multiple baggage input lines into a single, synchronised conveyor flow via MDB connection, preserving spacing and sequence for downstream screening.',
    image: '/images/products/merge-units-mdb-connection.jpg',
  },
  {
    id: 'curved-belt-conveyors',
    name: 'Curved Belt Conveyors',
    description:
      'Space-efficient curved conveyor sections that navigate directional changes within the baggage system without compromising belt speed or bag orientation.',
    image: '/images/products/curved-belt-conveyors.jpg',
  },
]

/** Generic icon used as the placeholder tile until a real product photo is supplied. */
const PlaceholderIcon: React.FC = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
    <rect x="4" y="6" width="24" height="20" rx="2" />
    <circle cx="11" cy="13" r="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 21l6-6 4 4 5-6 9 9" />
  </svg>
)

const ProductImage: React.FC<{ image: string; name: string }> = ({ image, name }) => {
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-ice-gray border border-corp-blue/10">
      {/* Fallback placeholder (always present underneath) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-corp-blue/25">
        <PlaceholderIcon />
        <span className="text-[10px] font-semibold uppercase tracking-widest">Image coming soon</span>
      </div>
      {/* Real image — swap the `image` path above in the data array to activate.
          If the file isn't found yet, onError hides it and the placeholder shows through. */}
      <img
        ref={imgRef}
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          ;(e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
    </div>
  )
}

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  return (
    <div
      className="bento-card rounded-2xl overflow-hidden border border-corp-blue/10 bg-white cursor-default p-5 flex flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <ProductImage image={product.image} name={product.name} />
      <h3 className="font-display font-bold text-base text-charcoal mt-5 mb-2 leading-snug">
        {product.name}
      </h3>
      <p className="text-charcoal/55 text-sm leading-relaxed">{product.description}</p>
    </div>
  )
}

const SpecialProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

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
    <div ref={sectionRef}>
      {/* Page header */}
      <section className="hero-bg pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal">
            <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
              SelfTrust &middot; Product Range
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Special Products
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
              Engineered by SelfTrust, our airport-grade self-service and baggage handling systems
              are built for demanding, high-throughput terminal environments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="reveal mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #003566, #004B87)' }}
          >
            <div className="text-center sm:text-left">
              <div className="text-white font-display font-semibold text-base">
                Interested in a SelfTrust product?
              </div>
              <div className="text-white/55 text-sm mt-0.5">
                Get in touch and our team will help you find the right fit for your terminal.
              </div>
            </div>
            <a
              onClick={() => {
                navigate('/#contact-us')
                setTimeout(() => {
                  document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-corp-blue bg-white font-semibold text-sm hover:bg-accent-cyan hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpecialProducts
