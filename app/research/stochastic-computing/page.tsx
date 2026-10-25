
import { SiteHeader } from "../../components/SiteHeader";
import { Reveal } from "../../components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "MathWorks Human Following Robot",
};

export default function StochasticResearch() {
  return (
    <div className="page-frame">
      <SiteHeader />

      <main className="content-page">
        <Link href="/research" className="back-link">
          ← All research
        </Link>

        <Reveal>
          <p className="eyebrow">
            In Progress / Computer Architecture & Deep Learning
          </p>

          <h1>Neural Networking with Stochastic Computing</h1>

          <p className="lede">
            Assessing stochastic computer architectures and their reliability for building more advanced neural networks.
          </p>
        </Reveal>

        <Reveal>
          <section className="showcase-section">
            <h2>Research Overview</h2>

            <p>
              
            </p>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
