
import { SiteHeader } from "../../components/SiteHeader";
import { Reveal } from "../../components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "MathWorks Human Following Robot",
};

export default function SmartManufacturingResearch() {
  return (
    <div className="page-frame">
      <SiteHeader />

      <main className="content-page">
        <Link href="/research" className="back-link">
          ← All research
        </Link>

        <Reveal>
          <p className="eyebrow">
            Completed / Deep Learning & Robotics Engineering
          </p>

          <h1>Smart Manufacturing Research Group</h1>

          <p className="lede">
            Operated a deep learning quality control system to generate inspection reports on factory-assembled parts.
          </p>
        </Reveal>

        <Reveal>
          <section className="showcase-section">
            <h2>Research Overview</h2>

            <p>
              Employed deep learning with robotics to assess the quality of factory parts of various materials.
            </p>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
