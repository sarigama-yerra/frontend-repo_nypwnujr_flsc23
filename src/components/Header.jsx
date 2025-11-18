import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Globe2 } from 'lucide-react'

const navItems = [
  { to: '/product', label: 'Product' },
  { to: '/live-chat', label: 'Live chat' },
  { to: '/outcomes', label: 'Outcomes' },
  { to: '/legal', label: 'Privacy' },
  { to: '/pilot', label: 'Pilot' },
  { to: '/contact', label: 'Contact' },
]

const languages = ['EN', 'FR', 'DE', 'ES', 'IT']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState('EN')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close language dropdown on route change
    setLangOpen(false)
  }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
      scrolled ? 'shadow-sm' : ''
    }`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          {/* Left: Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2" aria-label="Colentia – Home">
              <div className="w-6 h-6 rounded-md bg-slate-900" aria-hidden="true"></div>
              <span className="text-slate-900 font-semibold tracking-tight">Colentia</span>
            </Link>
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 rounded px-1 ${
                        isActive ? 'text-slate-900' : 'text-slate-600'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Language + CTAs */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                className="hidden sm:inline-flex items-center gap-1 text-sm text-slate-700 border border-slate-200 rounded-md px-2.5 h-9 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe2 className="w-4 h-4" aria-hidden="true" />
                <span aria-live="polite">{lang}</span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <li key={l}>
                      <button
                        role="option"
                        aria-selected={lang === l}
                        onClick={() => {
                          setLang(l)
                          setLangOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none ${
                          lang === l ? 'text-slate-900' : 'text-slate-600'
                        }`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
            >
              Get a demo
            </Link>
            <Link
              to="/pilot"
              className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-md border border-slate-900 text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
            >
              Join pilot program
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
