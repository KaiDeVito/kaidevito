
import { SiteHeader } from "../../components/SiteHeader";
import { Reveal } from "../../components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "MathWorks Human Following Robot",
};

export default function HumanFollowingRobotPage() {
  return (
    <div className="page-frame">
      <SiteHeader />

      <main className="content-page">
        <Link href="/research" className="back-link">
          ← All research
        </Link>

        <Reveal>
          <p className="eyebrow">
            Ongoing / Embedded AI & Electronics
          </p>

          <h1>MathWorks Human Following Robot</h1>

          <p className="lede">
            Exploring computer vision and deep learning integration into a microcontroller-powered system.
          </p>
        </Reveal>

        <Reveal>
          <section className="showcase-section">
            <h2>Research Overview</h2>

            <p>
              This research investigates the
              integration of computer vision and
              deep learning into an embedded
              robotic system.
            </p>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
