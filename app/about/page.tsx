import { SiteHeader } from "../components/SiteHeader";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { Reveal } from "../components/Reveal";
import Link from "next/link";
export const metadata = { title: "About" };
export default function AboutPage() {
  return <div className="page-frame"><SiteHeader />
    <main className="content-page"><Reveal><div className="section-heading"><p className="eyebrow">01 / About</p><h1>Hello, I'm Kai.</h1></div></Reveal>
      <div className="about-grid">
        <Reveal><ProfilePhoto /></Reveal>
        <Reveal><div className="prose">
          <p>I study computer engineering and systems programming with experience in embedded systems, computer architecture, robotics, digital logic and circuits design.</p>
          <p>My project work has involved integrated circuits, microcontrollers, sensor fusion, computer memory, multi-paradigm programming, software development, and deep learning algorithms.</p>
          <p>I have gained experience in DC/AC circuit analysis, digital electronics, and linear systems to understand the physical properties that makes computing work.</p>
          <p>Meanwhile, I enjoy exploring lower-level programming in C and assembly languages, and the implementation details that make systems reliable and understandable.</p>
          <p>This portfolio is a technical notebook as much as a showcase. I want to document not just what a project does, but its architecture, trade-offs, tests, and the iterations behind it.</p>
          <p><Link href="/projects" className="text-link">Explore my projects →</Link></p>
        </div></Reveal>
      </div>
    </main>
  </div>;
}
