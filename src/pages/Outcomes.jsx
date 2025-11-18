import React from 'react'
import { Link } from 'react-router-dom'

function Section({ children, muted = false }) {
  return (
    <section className={`${muted ? 'bg-slate-50' : 'bg-white'} py-20 sm:py-24`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

export default function Outcomes() {
  const metrics = [
    { h: 'Faster onboarding', t: 'Target: 50 percent reduction in ramp time for successors and new joiners inheriting projects, within 90 days.' },
    { h: 'Continuity Coverage', t: 'Target: 100 percent continuity coverage for key projects in the first few months of rollout.' },
    { h: 'Time to answer', t: 'Target: under three minutes to a correct, sourced answer for complex status questions.' },
    { h: 'Payback period', t: 'Target: less than two months payback for a typical small or mid sized organization at a standard seat price point.' },
  ]

  const qualitative = [
    'Fewer status meetings and follow up messages.',
    'Less repeated work due to missing context.',
    'More predictable project timelines.',
    'Improved confidence in handovers and role changes.',
  ]

  return (
    <div>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Outcomes you can measure</h1>
          <p className="text-lg text-slate-700">Colentia is designed to improve onboarding, reduce delays, and cut time spent hunting for information.</p>
        </div>
      </Section>

      <Section muted>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.h} className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-semibold mb-2">{m.h}</h3>
              <p className="text-slate-700 text-sm">{m.t}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Qualitative outcomes</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
            {qualitative.map((q, i) => (
              <li key={i} className="p-4 rounded-lg border border-slate-200 bg-white">{q}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl space-y-4 text-slate-700">
          <h3 className="text-xl font-semibold">How we measure during pilot</h3>
          <p>At pilot start, we baseline continuity coverage and time to answer for common questions.</p>
          <p>During the pilot, we track changes in coverage, response time, and reliance on manual status reports.</p>
          <p>At the end, we review the data with you and agree on next steps.</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Interested in the numbers for your own organization</h2>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Talk to us</Link>
        </div>
      </Section>
    </div>
  )
}
