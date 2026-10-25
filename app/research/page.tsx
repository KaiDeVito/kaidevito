import { SiteHeader } from "../components/SiteHeader";
import { Reveal } from "../components/Reveal";
import Link from "next/link";
export const metadata = { title: "Research" };
export default function ResearchPage() {
  return <div className="page-frame"><SiteHeader />
    <main className="content-page">
      <Reveal><p className="eyebrow">03 / Research</p><h1>Questions worth investigating.</h1>
      <p className="config-warning">! This section is being worked on, however it will be completed soon.</p>
      </Reveal>
      <Reveal><article className="research-entry"><div className="research-meta">Ongoing · Embedded AI & Electronics</div>
        <h2>MathWorks Human Following Robot</h2><p>Exploring computer vision and deep learning integration into a microcontroller-powered system.</p>
        <Link className="text-link" href="/research/human-following-robot">Read project overview ↗</Link></article></Reveal>
      <Reveal><article className="research-entry"><div className="research-meta">Ongoing · Computer Architecture</div>
        <h2>Stochastic Computing for Neural Networks</h2><p>Identify stochastic computing techniques to explain how their potential for finetuning AI systems.</p>
        <Link className="text-link" href="/research/stochastic-computing">Read project overview ↗</Link></article></Reveal>
      <Reveal><article className="research-entry"><div className="research-meta">Completed · Deep Learning & Robotics Engineering</div>
        <h2>Smart Manufacturing Research Group</h2><p>Operated a deep learning quality control system to generate inspection reports on factory-assembled parts.</p>
        <Link className="text-link" href="/research/smart-manufacturing-research">Read project overview ↗</Link></article></Reveal>
    </main>
  </div>;
}