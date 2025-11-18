import React from 'react'

function Section({ children }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[900px] px-6 sm:px-8">{children}</div>
    </section>
  )
}

export default function Legal() {
  return (
    <div>
      <Section>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3">Legal notice, privacy, and DPA</h1>
        <p className="text-sm text-slate-600">Effective date: [to be updated]</p>
      </Section>

      <Section>
        <nav aria-label="Quick links" className="mb-6">
          <ul className="flex flex-wrap gap-3 text-sm">
            {['Privacy Policy','Data Processing Addendum (DPA)','Cookie Policy','Security'].map((i) => (
              <li key={i}><a href={`#${i.toLowerCase().replace(/[^a-z]+/g,'-')}`} className="px-3 py-1 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">{i}</a></li>
            ))}
          </ul>
        </nav>
        <div className="prose prose-slate max-w-none">
          <h2 id="privacy-policy">Privacy Policy</h2>
          <p>Colentia provides an AI-powered enterprise memory platform. This website collects limited information such as pages viewed and form submissions in order to respond to enquiries and improve the site. You can request access, correction, or deletion of your data. For product data, processing is governed by the DPA below.</p>
          <h2 id="data-processing-addendum-dpa">Data Processing Addendum (DPA)</h2>
          <p>Under the DPA, the customer acts as the data controller and Colentia acts as the data processor. Colentia processes data strictly on documented instructions, implements appropriate security measures, and supports data subject rights and audits as required by applicable law.</p>
          <h2 id="cookie-policy">Cookie Policy</h2>
          <p>We use strictly necessary cookies to operate this site. With your consent, we may use privacy-friendly analytics cookies. You can change your preferences at any time via the Cookie settings link in the footer.</p>
          <h2 id="security">Security</h2>
          <p>Security controls include SSO support, encryption in transit and at rest, tenant isolation, audit logs, incident response processes, and disaster recovery planning. Additional details and documents are available on request.</p>
        </div>
      </Section>
    </div>
  )
}
