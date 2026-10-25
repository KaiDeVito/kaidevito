import { SiteHeader } from "../components/SiteHeader";
import { Reveal } from "../components/Reveal";
import { DocumentCard } from "../components/DocumentCard";
export const metadata = { title: "Documents" };
export default function DocumentsPage() {
  return <div className="page-frame"><SiteHeader />
    <main className="content-page"><Reveal><p className="eyebrow">04 / Documents</p><h1>Résumé & Project Documentations</h1>
    <p className="lede">Here is where you access my résumé and other files laying the project's technical specifications. You may open the PDF and zoom, download, or print it.</p>
    </Reveal>
    <div className="document-grid">
      <Reveal><DocumentCard title="Résumé" description="A concise overview for engineering and internship applications." file="Resume Kai DeVito 2026.pdf" /></Reveal>
      <Reveal><DocumentCard title="Electronics Tool Bench Technical Documentation" description="A detailed analysis of the tool bench's hardware and software specs." file="Electronics_Tool_Bench_Technical_Documentation.pdf" /></Reveal>
      <Reveal><DocumentCard title="Electronics Tool Bench User Manual" description="A casual, slapstick-styled look into using the tool bench." file="Electronics_Tool_Bench_User_Manual.pdf" /></Reveal>
    </div>
    </main>
  </div>;
}
