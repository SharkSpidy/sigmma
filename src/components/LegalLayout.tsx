import React from 'react'
import { Link } from 'react-router-dom'

export interface LegalSection {
  id: string
  title: string
  body: React.ReactNode
}

interface Props {
  eyebrow: string
  title: string
  updated: string
  intro: React.ReactNode
  sections: LegalSection[]
}

const LegalLayout: React.FC<Props> = ({ eyebrow, title, updated, intro, sections }) => (
  <>
    <div className="hero-bg pt-32 pb-14 lg:pt-40 lg:pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">{eyebrow}</span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{title}</h1>
        <p className="text-white/60 text-sm">Last updated: {updated}</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <p className="text-charcoal/75 text-base leading-relaxed mb-10">{intro}</p>

      <nav aria-label="On this page" className="mb-12 p-6 rounded-2xl bg-ice-gray border border-corp-blue/10">
        <div className="text-xs font-semibold uppercase tracking-widest text-corp-blue mb-3">Contents</div>
        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm list-decimal list-inside text-charcoal/70">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-corp-blue hover:underline underline-offset-2">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-corp-blue mb-3">
              {i + 1}. {s.title}
            </h2>
            <div className="legal-body text-charcoal/75 text-[15px] leading-relaxed space-y-3">{s.body}</div>
          </section>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-corp-blue/10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link to="/privacy-policy" className="text-corp-blue hover:underline underline-offset-2">Privacy &amp; Cookie Policy</Link>
        <Link to="/terms-of-use" className="text-corp-blue hover:underline underline-offset-2">Website Terms of Use</Link>
        <Link to="/" className="text-charcoal/50 hover:text-corp-blue">← Back to home</Link>
      </div>
    </div>
  </>
)

export default LegalLayout
