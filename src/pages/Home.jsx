import React from 'react'
import { Link } from 'react-router-dom'

function Eyebrow({ children }) {
  return <p className="text-xs uppercase tracking-wider text-slate-500">{children}</p>
}

function Section({ children, className = '' }) {
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

function Pill({ children }) {
  return <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 bg-white">{children}</span>
}

function FeatureCard({ title, desc, detail }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-slate-900/10">
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700 text-sm mb-3">{desc}</p>
      <p className="text-slate-500 text-sm">{detail}</p>
    </div>
  )
}

function Tile({ icon, title, text }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
      <div className="mb-3" aria-hidden="true">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-700 text-sm">{text}</p>
    </div>
  )
}

function ChatExample({ question, answer }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="p-4 rounded-lg border border-slate-200 bg-white">
        <p className="text-slate-900"><span className="font-medium">You:</span> {question}</p>
      </div>
      <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
        <div className="space-y-2 text-slate-800 text-sm">
          {answer.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Section className="pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-5">Stop knowledge loss. Find answers instantly.</h1>
            <p className="text-lg text-slate-700 mb-8">Colentia captures your company’s memory so every project, decision, and dependency stays accessible. Anyone can ask a question and get the right answer in seconds, backed by verified sources.</p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20">Get a demo</Link>
              <Link to="/pilot" className="inline-flex h-11 px-5 items-center rounded-md border border-slate-900 text-slate-900 text-sm font-medium hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20">Join pilot program</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {['On premises or cloud','Role based access control','We do not read your content','Edits and deletions apply instantly'].map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
              <div className="text-slate-500 text-sm">Abstract product illustration</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Everything your company needs */}
      <Section>
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Everything your company needs to remember and move faster</h2>
          <p className="text-slate-700">A unified AI memory that organizes projects, preserves context, and keeps everyone aligned.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="AI memory and chat" desc="Answers that reflect how your organization actually works, with owners, acronyms, workflows, and timestamps." detail="Every answer includes citations and links back to the original source." />
          <FeatureCard title="No knowledge loss" desc="Continuity packs and successor Q and A preserve critical decisions, links, and dependencies through every handover." detail="Continuity Coverage KPI shows how much work is safe from knowledge loss." />
          <FeatureCard title="Project intelligence" desc="Colentia detects projects from real work signals, provisions workspaces, and tracks them in real time." detail="Mind Map, Project Room, and Priority Board give a live picture of what is happening." />
        </div>
      </Section>

      {/* Complete platform */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Complete platform for operational memory</h2>
          <p className="text-slate-700">Everything you need to stop knowledge loss and keep your team aligned.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'AI Memory Chat', d: 'Ask anything and get linked answers you can trust, with owners, timestamps, and source citations.' },
            { t: 'Continuity Engine', d: 'Generate successor ready continuity packs and scoped Q and A at exit or role change, without manual documentation.' },
            { t: 'Project Intelligence', d: 'Detect new initiatives automatically, infer owners, and keep a live project room updated with status, risks, and dependencies.' },
            { t: 'Priority and Risk', d: 'A priority board and risk and dependency alerts that highlight single points of failure and delayed work before they become crises.' },
            { t: 'Privacy and Governance', d: 'Built for security and compliance, with strict role based access control, audit trails, and clear data boundaries.' },
            { t: 'Daily Review', d: 'A one minute a day queue to confirm, correct, or remove updates, keeping the system accurate and trustworthy.' },
          ].map((f) => (
            <Tile key={f.t} title={f.t} text={f.d} icon={<div className="w-8 h-8 rounded-md bg-slate-900" />} />
          ))}
        </div>
      </Section>

      {/* See the chat in action */}
      <Section>
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">See the chat in action</h2>
          <p className="text-slate-700">Ask anything about your projects. Get instant answers with context, owners, and sources.</p>
        </div>
        <div className="space-y-6">
          {[
            {
              q: 'What is blocking the Germany rollout and who owns the fix',
              a: 'The rollout is waiting on a legal review for data residency and GDPR alignment. A missing DPIA template is blocking sign off.\nOwner: Sarah Chen, Legal\nNext milestone: DPIA approval due by 15 November\nRisk level: High\nSources: 2 recent documents and 1 meeting note, all accessible by the user.'
            },
            {
              q: 'Show the final decision on premium pricing and the source',
              a: 'The final decision is to set Enterprise tier at 199 dollars per seat per month. This includes all advanced features plus dedicated support.\nOwner: Marcus Wei, Product\nNext milestone: Launch planned for Q1 2026\nRisk level: Low\nSources: Final pricing memo and leadership approval email.'
            },
            {
              q: 'I am new to Project Aurora. Who are the three experts and what is the next milestone',
              a: 'Key experts on Project Aurora are Emma Rodriguez (Tech Lead), James Park (Design), and Lisa Kumar (Product Manager).\nOwner: Emma Rodriguez\nNext milestone: Beta release scheduled for 1 December\nRisk level: Medium\nSources: project brief, roadmap document, and last project review.'
            },
            {
              q: 'What slipped more than ten days for my team this week',
              a: 'Two items slipped more than ten days:\n• API integration delayed by 12 days due to a vendor dependency\n• Mobile app testing delayed by 15 days because of limited test capacity\nOwner: Development team\nNext milestone: Sprint review on 8 November\nRisk level: High\nSources: sprint board and weekly status update.'
            },
            {
              q: 'What new projects were detected this week',
              a: 'Three new projects were detected from recurring meetings and new documents:\n• AI chatbot pilot\n• Customer portal redesign\n• Analytics dashboard version 3\nOwner: Auto detected based on patterns, pending confirmation\nNext milestone: kickoff sessions scheduled\nRisk level: Low\nSources: meeting invites and initial design docs.'
            }
          ].map((c, i) => (
            <ChatExample key={i} question={c.q} answer={c.a} />
          ))}
        </div>
      </Section>

      {/* Measurable outcomes */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Measurable outcomes</h2>
          <p className="text-slate-700">Targets until pilot results are available.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: '50% faster onboarding', d: 'Goal: reduce time for successors and new joiners to reach effectiveness by around half within the first 90 days when they inherit projects.' },
            { t: '100% continuity coverage at 90 days (target)', d: 'Continuity Coverage KPI aims for each key project to have a living context pack within 90 days of deployment.' },
            { t: 'Under 2 months payback for a typical SME', d: 'For a typical small or mid sized organization, the expected payback period is less than two months at standard seat pricing.' },
            { t: 'Under 3 minutes to a correct status answer', d: 'Target time from question to a correct, cited status answer is under three minutes, even for complex projects.' },
          ].map((m) => (
            <div key={m.t} className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-semibold mb-2">{m.t}</h3>
              <p className="text-slate-700 text-sm">{m.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Problem */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">The Problem</h2>
            <p className="text-slate-700 leading-relaxed">Knowledge work runs on context, but that context is fragile. When people change roles or leave, teams lose decisions, rationales, and links. Information is scattered across email, chat, documents, tickets, and tools. New joiners often have to rebuild understanding from scratch. Leaders rely on manual status reports and endless update meetings just to know what is happening.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: 'Employees can spend close to a full workday each week searching for information.', l: 'Based on research from McKinsey.' },
              { t: 'Almost half of digital workers say they struggle to find the information they need to do their jobs effectively.', l: 'Gartner survey finding.' },
              { t: 'Large enterprises can lose tens of millions per year due to inefficient knowledge sharing and repeated work.', l: 'Panopto workplace knowledge research.' },
              { t: 'Poor communication and context put a significant share of project budgets at risk.', l: 'PMI project communication research.' },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white">
                <p className="text-slate-900 text-sm mb-2">{s.t}</p>
                <p className="text-slate-500 text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Solution */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">The solution</h2>
          <div className="space-y-4 text-slate-700">
            <p>Colentia creates a structured AI memory for your company. It continuously ingests signals from your tools, organizes them by project, owner, and dependency, and gives everyone an interface where they can ask questions and get reliable answers.</p>
            <p>Continuity packs preserve decisions, links, and dependencies so successors can ramp up fast. Project intelligence highlights risks, delays, and single points of failure. Leaders get live, sourced status instead of waiting for manual reports.</p>
            <p>Everything is built for privacy and compliance. Role based access control and employee controls determine who can see what. Redactions and deletions update the AI memory in under a minute.</p>
          </div>
        </div>
      </Section>

      {/* Built private band */}
      <Section>
        <div className="max-w-3xl mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Built private, deployed your way</h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'On premises deployment option for customers who want everything inside their own cloud.',
            'Choice of EU regions for data residency.',
            'Role based access control wired to your identity provider.',
            'You keep control of encryption keys and decide who sees what.',
            'Colentia only sees telemetry about performance and uptime, not your content.',
          ].map((b, i) => (
            <li key={i} className="p-4 rounded-lg border border-slate-200 bg-white text-sm">{b}</li>
          ))}
        </ul>
      </Section>

      {/* Trust and compliance built in */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mb-6">
          <h3 className="text-xl font-semibold mb-2">Trust and compliance built in</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            'EU residency',
            'On premises deployment option',
            'Single sign on (SSO) support',
            'Automatic user management (SCIM)',
            'Employee Data Console',
            'Works council ready materials',
            'Built in privacy checks aligned with GDPR',
          ].map((p) => (
            <span key={p} className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 bg-white">{p}</span>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section>
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Works with your existing tools</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: 'Google Workspace', d: 'Docs, Sheets, Slides, Drive, Calendar, Gmail, Meet recordings and transcripts.' },
            { n: 'Microsoft 365', d: 'Teams, OneDrive, Outlook.' },
            { n: 'Slack', d: 'Channels and messages.' },
            { n: 'Notion', d: 'Pages and databases.' },
            { n: 'Confluence', d: 'Spaces and pages.' },
            { n: 'Jira', d: 'Issues and projects.' },
            { n: 'Asana', d: 'Tasks and projects.' },
            { n: 'Zoom', d: 'Recordings and transcripts.' },
            { n: 'More integrations coming soon.', d: '' },
          ].map((i) => (
            <div key={i.n} className="p-6 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-slate-200" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{i.n}</h3>
                {i.d && <p className="text-slate-700 text-sm mt-1">{i.d}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design partner pilot */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Design partner pilot</h2>
          <p className="text-slate-700">Join a structured three month design partner pilot with a clear success plan. We baseline your continuity coverage and time to get a reliable status answer, then track improvements over the pilot.</p>
        </div>
        <ol className="grid md:grid-cols-3 gap-6 list-decimal pl-5">
          <li className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold mb-2">Baseline and setup</h3>
            <p className="text-sm text-slate-700">Connect core tools, define your pilot scope, and measure current continuity coverage and time to answer.</p>
          </li>
          <li className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold mb-2">Run and refine</h3>
            <p className="text-sm text-slate-700">Your teams use Colentia for real work. Weekly reviews tune ingestion, privacy rules, and project intelligence.</p>
          </li>
          <li className="p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="font-semibold mb-2">Evaluate impact</h3>
            <p className="text-sm text-slate-700">At the end of three months, we compare metrics and decide how to scale.</p>
          </li>
        </ol>
        <div className="mt-8 flex items-center gap-3">
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Get a demo</Link>
          <Link to="/pilot" className="inline-flex h-11 px-5 items-center rounded-md border border-slate-900 text-slate-900 text-sm font-medium hover:bg-slate-50">Join pilot program</Link>
        </div>
      </Section>

      {/* Questions */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Questions</h2>
          <p className="text-slate-700 mb-6">We are happy to talk about security, deployment, or specific use cases.</p>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Contact us</Link>
        </div>
      </Section>
    </div>
  )
}
