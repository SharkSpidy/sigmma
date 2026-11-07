import React from 'react'
import LegalLayout, { LegalSection } from '../components/LegalLayout'
import { Link } from 'react-router-dom'

const EMAIL = 'info@sigmma.co.nz'

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    body: (
      <p>
        By accessing or using sigmma.co.nz (the “Site”), operated by Sigmma Engineering Limited (“Sigmma”, “we”), you agree to
        these terms and to our <Link to="/privacy-policy">Privacy &amp; Cookie Policy</Link>. If you do not agree, please do not use the Site.
      </p>
    ),
  },
  {
    id: 'information-only',
    title: 'Information only; no offer',
    body: (
      <>
        <p>
          The Site describes our group, capabilities and products, including special products such as baggage handling and
          check-in equipment. Content is general information and is not an offer capable of acceptance. Specifications,
          availability and images may change without notice and are indicative only.
        </p>
        <p>
          Any supply of goods or services is governed by a separate written quotation or contract agreed with us, not by
          this Site. Please contact us for a quote.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property rights',
    body: (
      <>
        <p>
          The Site and its content, including text, graphics, layout, product descriptions, photographs, diagrams, logos and
          the SIGMMA name and branding, are owned by or licensed to Sigmma and are protected by New Zealand and international
          copyright, trade mark and other intellectual property laws. All rights are reserved.
        </p>
        <p>
          You may view the Site and print or download extracts for your own internal business use, provided you keep all
          copyright and trade mark notices. You may not copy, modify, republish, sell, scrape, or create derivative works
          from the Site without our prior written permission.
        </p>
        <p>
          <strong>Third-party marks.</strong> Names and logos of airlines, airports, manufacturers and customers shown on
          the Site belong to their respective owners. They are shown only to identify organisations we have worked with or
          products we supply, and do not imply endorsement or any wider affiliation.
        </p>
        <p>
          If you believe content on the Site infringes your rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with details and we will review it promptly.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Site unlawfully or in a way that harms others;</li>
          <li>attempt to gain unauthorised access to the Site, our servers or connected systems;</li>
          <li>introduce malware or interfere with the Site’s operation or security;</li>
          <li>use automated tools to scrape or overload the Site; or</li>
          <li>misrepresent your identity or affiliation when contacting us.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'links',
    title: 'Third-party links',
    body: (
      <p>
        The Site links to websites run by our divisions, partners and others. We do not control and are not responsible for their
        content or privacy practices. A link is not an endorsement.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer and limit of liability',
    body: (
      <>
        <p>
          We take care to keep the Site accurate and available but provide it “as is”. To the maximum extent permitted by law,
          we do not warrant that it will be error-free, uninterrupted or free of harmful components, and we exclude liability for
          any loss arising from your use of, or reliance on, the Site.
        </p>
        <p>
          Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited (including under the
          Fair Trading Act 1986). Where liability cannot be excluded, it is limited to the extent the law allows.
        </p>
      </>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of New Zealand and the parties submit to the non-exclusive jurisdiction of the New
        Zealand courts. Mandatory consumer protections in your own country are not affected.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes and contact',
    body: (
      <p>
        We may update these terms at any time by posting a revised version here; continued use of the Site means you accept the
        changes. Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
]

const TermsOfUse: React.FC = () => (
  <LegalLayout
    eyebrow="Legal"
    title="Website Terms of Use"
    updated="7 November 2026"
    intro="These terms govern your use of sigmma.co.nz. They cover intellectual property, acceptable use and the limits of our responsibility for the information on this website."
    sections={sections}
  />
)

export default TermsOfUse
