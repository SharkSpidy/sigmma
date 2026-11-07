import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { applyConsent, readConsent, writeConsent } from '../lib/consent'

interface ConsentContextValue {
  openPreferences: () => void
}

const ConsentContext = createContext<ConsentContextValue>({ openPreferences: () => {} })
export const useConsent = () => useContext(ConsentContext)

const Toggle: React.FC<{
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
  label: string
}> = ({ checked, disabled, onChange, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={() => onChange?.(!checked)}
    className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 ${
      checked ? 'bg-corp-blue' : 'bg-charcoal/25'
    } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
        checked ? 'translate-x-5' : ''
      }`}
    />
  </button>
)

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [decided, setDecided] = useState(true) // avoid banner flash before we read storage
  const [analytics, setAnalytics] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const prefsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = readConsent()
    if (saved) {
      setAnalytics(saved.analytics)
      applyConsent(saved.analytics)
    } else {
      setDecided(false)
    }
  }, [])

  const save = useCallback((value: boolean) => {
    writeConsent(value)
    setAnalytics(value)
    applyConsent(value)
    setDecided(true)
    setShowPrefs(false)
  }, [])

  const openPreferences = useCallback(() => setShowPrefs(true), [])

  // Escape closes the preferences dialog; lock background scroll while open
  useEffect(() => {
    if (!showPrefs) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowPrefs(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    prefsRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [showPrefs])

  return (
    <ConsentContext.Provider value={{ openPreferences }}>
      {children}

      {/* First-visit banner */}
      {!decided && !showPrefs && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-corp-blue/15 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex-1">
              <h2 id="cookie-banner-title" className="font-display font-bold text-charcoal text-base mb-1.5">
                Your privacy on sigmma.co.nz
              </h2>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                We use essential storage to run this site and, only with your permission, analytics
                cookies (Microsoft Clarity) to understand how it is used. See our{' '}
                <Link to="/privacy-policy#cookies" className="text-corp-blue underline underline-offset-2 hover:text-accent-cyan-dark">
                  Privacy &amp; Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 lg:flex-shrink-0">
              <button
                onClick={() => save(false)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-corp-blue/30 text-corp-blue hover:bg-corp-blue/5 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => setShowPrefs(true)}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-corp-blue/30 text-corp-blue hover:bg-corp-blue/5 transition-colors"
              >
                Customise
              </button>
              <button onClick={() => save(true)} className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold">
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences dialog */}
      {showPrefs && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-charcoal/60" onClick={() => setShowPrefs(false)}>
          <div
            ref={prefsRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-prefs-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 focus:outline-none"
          >
            <h2 id="cookie-prefs-title" className="font-display font-bold text-xl text-charcoal mb-2">
              Cookie preferences
            </h2>
            <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
              Choose which optional technologies may run. You can change this at any time from the
              “Cookie settings” link in the footer.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-charcoal">Strictly necessary</div>
                  <p className="text-charcoal/55 text-xs leading-relaxed mt-1">
                    Remembers your cookie choice and keeps the site working. Always on.
                  </p>
                </div>
                <Toggle checked disabled label="Strictly necessary (always on)" />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-charcoal">Analytics</div>
                  <p className="text-charcoal/55 text-xs leading-relaxed mt-1">
                    Microsoft Clarity records anonymised usage (clicks, scrolling, page views, and
                    session replays) so we can improve the site. Sets the _clck and _clsk cookies.
                  </p>
                </div>
                <Toggle checked={analytics} onChange={setAnalytics} label="Analytics cookies" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => save(false)}
                className="flex-1 px-5 py-2.5 rounded-lg text-sm font-semibold border border-corp-blue/30 text-corp-blue hover:bg-corp-blue/5 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => save(analytics)}
                className="flex-1 px-5 py-2.5 rounded-lg text-sm font-semibold border border-corp-blue/30 text-corp-blue hover:bg-corp-blue/5 transition-colors"
              >
                Save my choices
              </button>
              <button onClick={() => save(true)} className="flex-1 btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold">
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  )
}
