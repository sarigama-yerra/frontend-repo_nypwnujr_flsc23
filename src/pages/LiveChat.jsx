import React from 'react'
import { Link } from 'react-router-dom'

function Section({ children, muted = false }) {
  return (
    <section className={`${muted ? 'bg-slate-50' : 'bg-white'} py-20 sm:py-24`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

const examples = [
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
]

function Message({ role, children }) {
  return (
    <div className={`rounded-lg px-4 py-3 border ${role === 'user' ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-200'}`}>
      <p className="text-sm text-slate-800"><span className="font-medium">{role === 'user' ? 'You' : 'Colentia'}:</span> {children}</p>
    </div>
  )
}

export default function LiveChat() {
  return (
    <div>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Chat with your company’s memory</h1>
          <p className="text-lg text-slate-700 mb-2">Colentia’s chat understands your projects, teams, and decisions. It gives sourced answers instead of guesses.</p>
        </div>
      </Section>

      <Section muted>
        <div className="max-w-3xl space-y-4 text-slate-700">
          <p>Colentia’s chat is not a generic model. It answers only from your organization’s data, filtered through your access rules.</p>
          <p>Every answer shows why it is correct by listing owners, timestamps, and links back to the underlying emails, documents, or tickets.</p>
          <p>If access rules or redactions change, future answers update automatically.</p>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 h-[480px] overflow-y-auto rounded-xl border border-slate-200 p-4 bg-white space-y-3">
            {examples.map((e, i) => (
              <div key={i} className="space-y-2">
                <Message role="user">{e.q}</Message>
                <Message role="assistant">
                  {e.a.split('\n').map((l, idx) => (
                    <span key={idx} className="block">{l}</span>
                  ))}
                </Message>
              </div>
            ))}
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-semibold mb-2">Sources</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-slate-400 mt-2"/><span>Documents, emails, and tickets relevant to each answer will appear here with titles and timestamps.</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-slate-400 mt-2"/><span>Access rules are enforced on every item.</span></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Colentia checks permissions on every query and every document.',
            'An employee will never see content they would not see in the original tool.',
            'Audit logs record who asked what and which sources were used, for compliance and debugging.',
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white text-sm text-slate-700">{t}</div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Try the chat with your own data</h2>
          <Link to="/contact" className="inline-flex h-11 px-5 items-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Get a demo</Link>
        </div>
      </Section>
    </div>
  )
}
