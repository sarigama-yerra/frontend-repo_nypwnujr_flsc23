import React from 'react'
import { Link } from 'react-router-dom'

function Section({ children, muted = false }) {
  return (
    <section className={`${muted ? 'bg-slate-50' : 'bg-white'} py-20 sm:py-24`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

export default function Product() {
  const blocks = [
    { h: 'Signals and ingestion', t: 'Colentia connects to the tools you already use. It ingests emails, calendar events, chat messages, documents, tickets, tasks, and meeting transcripts with strict, least privilege permissions. Signals are normalized into a unified model with access checks enforced at query time. New items appear in the memory within roughly a minute.' },
    { h: 'Knowledge Q and A', t: 'Users ask natural language questions such as ‘What is the latest update on this launch’ or ‘Where is the final deck for the board meeting’. Colentia retrieves relevant items, applies your access rules, and returns a structured answer: what changed, who owns it, what the risks are, and which sources support the answer.' },
    { h: 'Project detection and project rooms', t: 'Colentia detects projects from patterns like recurring meetings, themed email threads, new shared folders, and a cluster of documents or tickets. Once a project is confirmed, it gets a Project Room with overview, objectives, timeline, owners, dependencies, risks, and key files, plus links to external tools.' },
    { h: 'Workspace provisioning', t: 'If you enable it, Colentia can automatically suggest or create new shared workspaces in systems such as Drive, SharePoint, Slack, or Teams when a new project is detected. It uses your naming conventions and permission templates so projects start organized.' },
    { h: 'Risk and dependency insights', t: 'Based on who is involved, where files live, and which tasks depend on which others, Colentia highlights single points of failure, overloaded owners, and overdue dependencies. Managers get a risk panel and can drill into the evidence behind each flag.' },
    { h: 'Continuity engine and handover packs', t: 'Before someone changes roles or leaves, Colentia can generate continuity packs summarizing their active projects, decisions, routines, and important context. The employee can review, edit, and redact content. When the successor arrives, they see a curated view with Q and A and links to all relevant material.' },
    { h: 'Daily Review', t: 'Each day, Colentia suggests newly detected projects, updated relationships, and possible corrections. Users only need a few clicks to confirm, adjust, or reject proposed changes. This keeps the memory accurate without heavy manual work.' },
    { h: 'Employee Data Console', t: 'Each user can see what data has been indexed about their work, including items, sources, timestamps, and how that data is used inside the product. They can delete or block specific items or categories, and those changes propagate through chat, packs, and dashboards.' },
    { h: 'Continuity Coverage and Gap Finder', t: 'Continuity Coverage shows how much of your important work is safely anchored in the system. Gap Finder highlights missing owners, stale projects, and weak handovers so you can close those gaps deliberately.' },
  ]

  return (
    <div>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">The complete AI memory system for your company</h1>
          <p className="text-lg text-slate-700 mb-8">Colentia brings together AI memory chat, continuity packs, project intelligence, and privacy controls into one coherent platform.</p>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Get a demo</Link>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-8">
          {blocks.map((b) => (
            <div key={b.h} className="p-6 rounded-xl border border-slate-200 bg-white">
              <h2 className="text-xl font-semibold mb-2">{b.h}</h2>
              <p className="text-slate-700 text-sm leading-relaxed">{b.t}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">See Colentia in action</h2>
          <p className="text-slate-700 mb-6">Walk through the memory, continuity, and project intelligence features with our team.</p>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Get a demo</Link>
        </div>
      </Section>
    </div>
  )
}
