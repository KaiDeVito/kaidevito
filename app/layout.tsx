import type { Metadata, Viewport } from "next";
import "./styles/globals.css";
import "katex/dist/katex.min.css";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: { default: site.title, template: "%s | Kai DeVito" },
  description: site.tagline,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const themeBoot = `(function(){try{var t=localStorage.getItem('kd-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: themeBoot }} /></head>
    <body>{children}</body>
  </html>;
}
