import React, { useState } from 'react'

function Section({ children }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <Section>
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Get in touch</h1>
          <p className="text-lg text-slate-700">Share a bit about your organization and we will follow up with next steps.</p>
        </div>
      </Section>

      <Section>
        {!sent ? (
          <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1">Full name *</label>
                <input id="name" name="name" required className="w-full h-11 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1">Work email *</label>
                <input id="email" name="email" type="email" required className="w-full h-11 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/20" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-800 mb-1">Company *</label>
                <input id="company" name="company" required className="w-full h-11 px-3 rounded-md border border-slate-300" />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-800 mb-1">Role or job title</label>
                <input id="role" name="role" className="w-full h-11 px-3 rounded-md border border-slate-300" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-slate-800 mb-1">Company size</label>
                <select id="size" name="size" className="w-full h-11 px-3 rounded-md border border-slate-300">
                  <option>1–20</option>
                  <option>21–50</option>
                  <option>51–200</option>
                  <option>201–1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-800 mb-1">Country or region</label>
                <input id="country" name="country" className="w-full h-11 px-3 rounded-md border border-slate-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">I am interested in</label>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {['demo','pilot','security and privacy','partnership','other'].map((k) => (
                  <label key={k} className="inline-flex items-center gap-2">
                    <input type="checkbox" name="interest" value={k} className="rounded border-slate-300" />
                    <span className="capitalize">{k}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-1">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded-md border border-slate-300" />
            </div>
            <p className="text-xs text-slate-600">We use this information only to respond to your enquiry and to plan demos or pilots.</p>
            <div>
              <button type="submit" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Send message</button>
            </div>
          </form>
        ) : (
          <div className="p-6 rounded-xl border border-slate-200 bg-white max-w-2xl">
            <p className="text-slate-800">Thank you. We will get back to you within one or two business days.</p>
          </div>
        )}
      </Section>
    </div>
  )
}
