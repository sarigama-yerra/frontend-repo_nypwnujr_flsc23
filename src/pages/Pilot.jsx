import React from 'react'
import { Link } from 'react-router-dom'

function Section({ children, muted = false }) {
  return (
    <section className={`${muted ? 'bg-slate-50' : 'bg-white'} py-20 sm:py-24`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

export default function Pilot() {
  return (
    <div>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Design partner pilot</h1>
          <p className="text-lg text-slate-700">A three month partnership to prove value and shape the roadmap together.</p>
        </div>
      </Section>

      <Section muted>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-700">
            <h2 className="text-xl font-semibold">Who the pilot is for</h2>
            <ul className="space-y-2 text-sm">
              <li>• Have multiple projects running in parallel</li>
              <li>• Use tools like Google Workspace, Microsoft 365, Slack, Notion, Jira, or Asana</li>
              <li>• Care about continuity when people move or leave</li>
              <li>• Need strong privacy and compliance from day one.</li>
            </ul>
          </div>
          <div className="space-y-4 text-slate-700">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="space-y-2 text-sm">
              <li>• Full access to the Colentia platform for the pilot scope.</li>
              <li>• Help connecting initial tool integrations and configuring access rules.</li>
              <li>• Baseline and end of pilot measurements for continuity and time to answer.</li>
              <li>• Weekly check in sessions with our team.</li>
              <li>• Priority input on roadmap and feature shaping.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: 'Baseline and setup', t: 'Connect core tools, define your pilot scope, and measure current continuity coverage and time to answer.' },
            { h: 'Run and refine', t: 'Your teams use Colentia for real work. Weekly reviews tune ingestion, privacy rules, and project intelligence.' },
            { h: 'Evaluate impact', t: 'At the end of three months, we compare metrics and decide how to scale.' },
          ].map((s) => (
            <div key={s.h} className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-semibold mb-2">{s.h}</h3>
              <p className="text-slate-700 text-sm">{s.t}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">How to join</h2>
          <p className="text-slate-700 mb-6">If you want to join the pilot, tell us a bit about your team size, tool stack, and biggest continuity pain point.</p>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Apply for pilot</Link>
        </div>
      </Section>
    </div>
  )
}
