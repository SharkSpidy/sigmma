// Cookie / tracking consent storage and third-party script gating.
// Nothing non-essential runs until the visitor opts in.

export const CONSENT_KEY = 'sigmma-cookie-consent'
export const CONSENT_VERSION = 1 // bump to re-prompt everyone after a material change
const CLARITY_ID = 'x53vsh5hgu'

export interface ConsentRecord {
  analytics: boolean
  version: number
  timestamp: string
}

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] }
  }
}

export function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentRecord
    if (parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== 'boolean') return null
    return parsed
  } catch {
    return null
  }
}

export function writeConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    analytics,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
  } catch {
    /* storage blocked: choice applies for this page view only */
  }
  return record
}

function loadClarity() {
  if (window.clarity || document.getElementById('clarity-script')) return
  const stub = function (...args: unknown[]) {
    ;(stub.q = stub.q || []).push(args)
  } as NonNullable<Window['clarity']>
  window.clarity = stub
  const s = document.createElement('script')
  s.id = 'clarity-script'
  s.async = true
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`
  document.head.appendChild(s)
}

function clearClarityCookies() {
  const names = ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM']
  const host = window.location.hostname
  const parts = host.split('.')
  const domains = ['', host, `.${host}`]
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join('.')}`, `.${parts.slice(-3).join('.')}`)
  names.forEach((n) =>
    domains.forEach((d) => {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`
    }),
  )
}

/** Start or stop optional services to match the visitor's current choice. */
export function applyConsent(analytics: boolean) {
  if (analytics) {
    loadClarity()
    window.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
  } else if (window.clarity) {
    // Withdrawal: tell Clarity to stop and erase its cookies.
    window.clarity('consent', false)
    clearClarityCookies()
  }
}
