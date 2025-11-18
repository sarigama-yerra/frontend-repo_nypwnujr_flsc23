import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'colentia_cookie_prefs'

export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setOpen(true)
      return
    }
    try {
      const prefs = JSON.parse(saved)
      setAnalytics(!!prefs.analytics)
      setMarketing(!!prefs.marketing)
    } catch {
      setOpen(true)
    }

    const handler = () => setOpen(true)
    window.addEventListener('open-cookie-settings', handler)
    return () => window.removeEventListener('open-cookie-settings', handler)
  }, [])

  const save = (next) => {
    const prefs = { analytics: next.analytics, marketing: next.marketing }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setOpen(false)

    // Placeholder hooks for privacy-friendly analytics integration
    // if (prefs.analytics) { /* load Plausible/PostHog */ }
    // if (prefs.marketing) { /* load marketing pixels/tags */ }
  }

  if (!open) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-[1280px] bg-white border border-slate-200 rounded-lg shadow-lg p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-sm text-slate-700 flex-1">
            We use cookies to operate this site. Only strictly necessary cookies load by default. You can opt in to analytics and marketing cookies.
          </p>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-slate-800">
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="rounded border-slate-300" />
              Analytics
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-slate-800">
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="rounded border-slate-300" />
              Marketing
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-sm h-9 px-3 rounded-md border border-slate-900 text-slate-900 hover:bg-slate-50"
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Reject all
            </button>
            <button
              className="text-sm h-9 px-3 rounded-md bg-slate-900 text-white hover:bg-slate-800"
              onClick={() => save({ analytics, marketing })}
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
