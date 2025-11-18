import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-slate-900" aria-hidden="true"></div>
              <span className="text-slate-900 font-semibold tracking-tight">Colentia</span>
            </div>
            <p className="text-slate-600 text-sm">
              Colentia is your company’s AI memory. Pronounced ‘koh LEN tee ah’.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-slate-900 font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/legal" className="text-slate-600 hover:text-slate-900">Privacy Policy</Link></li>
                <li><Link to="/legal" className="text-slate-600 hover:text-slate-900">DPA</Link></li>
                <li><Link to="/legal" className="text-slate-600 hover:text-slate-900">Cookie Policy</Link></li>
                <li><Link to="/legal" className="text-slate-600 hover:text-slate-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-slate-900">Status page</a></li>
                <li><Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900">Press</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 Colentia. All rights reserved.</p>
          <button
            className="text-sm text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline"
            onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
            aria-label="Open cookie settings"
          >
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  )
}
