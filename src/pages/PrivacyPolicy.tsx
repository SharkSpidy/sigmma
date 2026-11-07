import React from 'react'
import LegalLayout, { LegalSection } from '../components/LegalLayout'
import { useConsent } from '../components/CookieConsent'

const EMAIL = 'info@sigmma.co.nz'

const PrivacyPolicy: React.FC = () => {
  const { openPreferences } = useConsent()

  const sections: LegalSection[] = [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: (
        <>
          <p>
            Sigmma Engineering Limited (“<strong>Sigmma</strong>”, “we”, “us”) is a New Zealand company operating
            sigmma.co.nz. We supply aviation infrastructure, material handling and industrial components to customers
            around the world. We are the agency responsible for the personal information described in this policy.
          </p>
          <p>
            Privacy questions or requests: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </>
      ),
    },
    {
      id: 'what-we-collect',
      title: 'What information we collect',
      body: (
        <>
          <p>This website is an information site. It has no accounts, online shop or web forms. We collect personal information in only two ways:</p>
          <ul>
            <li>
              <strong>Information you send us.</strong> When you email one of our regional contacts, we receive your
              email address, name, company, role, the content of your message and anything you attach.
            </li>
            <li>
              <strong>Information collected automatically.</strong> Our servers and hosting provider record technical
              data such as IP address, browser and device type, pages requested and timestamps. If you accept analytics
              cookies, Microsoft Clarity also collects usage data: pages viewed, clicks, scrolling, mouse movement,
              approximate location (derived from IP), referrer and session replays. Clarity masks sensitive fields by default.
            </li>
          </ul>
          <p>We do not knowingly collect information from children, and the site is not directed at anyone under 16.</p>
        </>
      ),
    },
    {
      id: 'how-we-use',
      title: 'How we use it, and why',
      body: (
        <>
          <ul>
            <li>To respond to enquiries, prepare quotes and manage business relationships.</li>
            <li>To operate, secure and troubleshoot the website, and to prevent misuse.</li>
            <li>With your consent, to analyse how the site is used and improve it.</li>
            <li>To meet legal obligations and to establish or defend legal claims.</li>
          </ul>
          <p>
            Where the GDPR or UK GDPR applies to you (for example, if you contact our Europe, Middle East &amp; Africa team
            from the EEA or UK), our legal bases are: your <strong>consent</strong> (analytics cookies), our{' '}
            <strong>legitimate interests</strong> in running and securing a B2B website and answering business enquiries, taking
            steps <strong>at your request before a contract</strong>, and <strong>legal obligation</strong>.
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      body: (
        <>
          <p>
            Cookies are small files stored on your device. We only run non-essential technologies after you opt in through
            our cookie banner. You can accept, reject or customise, and change your mind at any time.{' '}
            <button type="button" onClick={openPreferences} className="font-semibold text-corp-blue underline underline-offset-2 hover:text-accent-cyan-dark">
              Open cookie settings
            </button>
            .
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Provider</th>
                  <th>Purpose</th>
                  <th>Category</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sigmma-cookie-consent</td>
                  <td>Sigmma (browser local storage)</td>
                  <td>Remembers your cookie choice</td>
                  <td>Strictly necessary</td>
                  <td>Until you clear it or the policy materially changes</td>
                </tr>
                <tr>
                  <td>_clck</td>
                  <td>Microsoft Clarity</td>
                  <td>Persists a Clarity user ID and settings for the site</td>
                  <td>Analytics (consent required)</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_clsk</td>
                  <td>Microsoft Clarity</td>
                  <td>Groups page views into one session recording</td>
                  <td>Analytics (consent required)</td>
                  <td>1 day</td>
                </tr>
                <tr>
                  <td>CLID, MUID, ANONCHK, SM</td>
                  <td>Microsoft Clarity / Bing</td>
                  <td>Identify first visit and return visits, and Clarity session sync</td>
                  <td>Analytics (consent required)</td>
                  <td>Session to 1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Withdrawing consent.</strong> Switching analytics off stops Clarity and removes its cookies. You can also
            block or delete cookies in your browser settings; the site works without them. Clarity’s own handling of data is
            described in the{' '}
            <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a>.
          </p>
          <p>
            <strong>Fonts.</strong> The site loads its typefaces (Sora and Inter) from Google Fonts. Your browser therefore
            sends your IP address and browser details to Google when a page loads. This is needed to display the site as designed.
          </p>
        </>
      ),
    },
    {
      id: 'sharing',
      title: 'Who we share information with',
      body: (
        <>
          <p>We do not sell personal information. We share it only with:</p>
          <ul>
            <li>Service providers that help us run the site and our email: website hosting, email providers (including Microsoft Outlook for some regional mailboxes), and Google Fonts.</li>
            <li>Microsoft, as provider of Clarity analytics, if you consent.</li>
            <li>Other Sigmma group companies and regional teams, so your enquiry reaches the right people.</li>
            <li>Professional advisers, and regulators or law enforcement where the law requires or permits.</li>
            <li>A purchaser, if our business or part of it is sold, subject to this policy.</li>
          </ul>
          <p>
            The subsidiary and partner websites we link to (such as Rubber Bits NZ, Mexeltec and Industrial Conveyors) are
            run independently and have their own privacy policies.
          </p>
        </>
      ),
    },
    {
      id: 'overseas',
      title: 'Transfers outside New Zealand',
      body: (
        <p>
          Our providers and regional teams operate in other countries, so your information may be processed outside
          New Zealand, including in the United States, Europe and Asia. Where we disclose personal information overseas
          we take reasonable steps to ensure it is protected by comparable safeguards (for example, by contract or
          by using providers subject to privacy laws or frameworks that protect it in a similar way), as required by
          the Privacy Act 2020 (IPP 12) and, where relevant, the GDPR and UK GDPR.
        </p>
      ),
    },
    {
      id: 'marketing',
      title: 'Marketing communications and consent',
      body: (
        <>
          <p>
            We do not run a mailing list through this website and we do not send unsolicited marketing. We will send
            you marketing or promotional emails only if you have asked for them or otherwise given consent (or we
            have an existing business relationship and the message is relevant to it, as the Unsolicited Electronic Messages Act 2007 allows).
          </p>
          <p>
            Every marketing message will identify us and include a working unsubscribe option. You can also withdraw
            consent at any time by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Withdrawing consent does not
            affect service messages about an existing order or enquiry. Emailing us with a business enquiry is not
            consent to marketing.
          </p>
        </>
      ),
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      body: (
        <p>
          We keep enquiry correspondence for as long as needed to deal with it and for our ongoing business relationship, and
          then for the period required for accounting, tax, warranty and legal purposes (typically up to 7 years in
          New Zealand). Analytics data is retained by Microsoft Clarity in line with its standard retention settings. When information
          is no longer needed we delete or anonymise it.
        </p>
      ),
    },
    {
      id: 'security',
      title: 'Data security',
      body: (
        <>
          <p>
            We take reasonable steps to protect personal information against loss, misuse and unauthorised access, including:
          </p>
          <ul>
            <li>HTTPS encryption for all traffic to sigmma.co.nz.</li>
            <li>Access to business mailboxes limited to staff who need it, with strong passwords and, where available, multi-factor authentication.</li>
            <li>Choosing reputable hosting and email providers, and keeping website software and dependencies up to date.</li>
            <li>No payment card data is collected or stored through this site.</li>
          </ul>
          <p>
            No method of transmission or storage is completely secure, and email in particular is not encrypted end to end,
            so please avoid sending highly sensitive information by email. If a privacy breach is likely to cause you serious
            harm we will notify you and the Office of the Privacy Commissioner as the Privacy Act 2020 requires.
          </p>
        </>
      ),
    },
    {
      id: 'rights',
      title: 'Your rights',
      body: (
        <>
          <p>
            Under the Privacy Act 2020 you may ask us to confirm whether we hold personal information about you, to give you
            access to it, and to correct it (IPPs 6 and 7). We will respond within 20 working days.
          </p>
          <p>
            If the GDPR or UK GDPR applies to you, you also have the right to erasure, to restrict or object to processing,
            to data portability, to withdraw consent at any time, and to complain to your local data protection authority.
            Residents of other regions may have similar rights under local law, and we will honour them where they apply.
          </p>
          <p>To exercise any right, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We may need to verify your identity first.</p>
        </>
      ),
    },
    {
      id: 'complaints',
      title: 'Complaints',
      body: (
        <p>
          Please contact us first so we can try to fix the problem. If you are not satisfied, you can complain to the New Zealand
          Office of the Privacy Commissioner at{' '}
          <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer">privacy.org.nz</a> or, if you are in the
          EEA or UK, to your local supervisory authority.
        </p>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: (
        <p>
          We may update this policy from time to time. The “last updated” date at the top shows when it last changed. If a change
          affects how we use cookies or analytics, we will ask for your consent again.
        </p>
      ),
    },
  ]

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy & Cookie Policy"
      updated="7 November 2026"
      intro="This policy explains what personal information Sigmma Engineering Limited collects through sigmma.co.nz, how we use and protect it, and the choices you have. It is written to comply with the New Zealand Privacy Act 2020 and, for visitors in Europe and the UK, the GDPR and UK GDPR."
      sections={sections}
    />
  )
}

export default PrivacyPolicy
