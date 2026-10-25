import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><h1>Page not found.</h1><p>That route doesn’t appear to exist.</p><Link href="/" className="text-button">Back to home</Link></main>;
}
