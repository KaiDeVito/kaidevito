import { SiteHeader } from "../components/SiteHeader";
import { Reveal } from "../components/Reveal";
import { IconPair } from "../components/IconPair";
import { site, emailConfigured } from "../lib/site";
export const metadata = { title: "Contact" };
export default function ContactPage() {
  const to = encodeURIComponent(site.email);
  return <div className="page-frame"><SiteHeader />
    <main className="content-page narrow-page"><Reveal>
      <p className="eyebrow">05 / Contact</p><h1>Let’s get in touch.</h1>
      <p className="lede">For internship opportunities, engineering conversations, or questions about a project, email is the best place to start. No contact form or account required.</p>
      {!emailConfigured && <p className="config-warning">Setup required: replace the placeholder email in <code>lib/site.ts</code> before publishing.</p>}
      <div className="contact-card">
        <a className="contact-icon tooltip-anchor" href={`mailto:${site.email}`} aria-label="Compose an email in the default mail application"><IconPair name="email" large /><span className="tooltip" role="tooltip">Email</span></a>
        <div><h2>Email Kai</h2><p>Choose your preferred email application.</p>
          <div className="contact-actions"><a className="text-button" href={`mailto:${site.email}`}>Email app ↗</a>
            <a className="text-button" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`} target="_blank" rel="noopener noreferrer">Gmail ↗</a>
            <a className="text-button" href={`https://outlook.office.com/mail/deeplink/compose?to=${to}`} target="_blank" rel="noopener noreferrer">Outlook ↗</a></div>
        </div>
      </div>
      <p className="fine-print">The mail links open an external email service or your device’s mail app. They do not send anything automatically.</p>
    </Reveal></main>
  </div>;
}
