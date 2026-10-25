export const site = {
  name: "Kai DeVito",
  title: "Kai DeVito | Computer Engineering Portfolio",
  tagline: "Embedded systems, computer architecture, and software.",
  email: "krd55610@uga.edu",
  linkedin: "https://www.linkedin.com/in/kai-devito-7236b42b1/",
  handshake: "https://app.joinhandshake.com/profiles/5zu6am",
  indeed: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage--homepage-frontend",
  github: "https://github.com/KaiDeVito",
};

// Empty for USERNAME.github.io.
// "/repository-name" for GitHub project Pages.
const prefix = (
  process.env.NEXT_PUBLIC_BASE_PATH || ""
).replace(/\/+$/, "");

export function asset(path: string): string {
  // Preserve external URLs and special URL schemes.
  if (/^(https?:\/\/|data:|blob:)/i.test(path)) {
    return path;
  }

  // Normalize Windows-style separators.
  let normalized = path.replace(/\\/g, "/");

  // Remove leading relative-directory markers.
  normalized = normalized.replace(/^(?:\.\/|\.\.\/)+/, "");

  // Remove leading slashes.
  normalized = normalized.replace(/^\/+/, "");

  // Remove an optional public/ prefix.
  normalized = normalized.replace(/^public\//, "");

  // Avoid adding the GitHub Pages prefix twice.
  const base = prefix.replace(/^\/+/, "");

  if (base && (
    normalized === base ||
    normalized.startsWith(`${base}/`)
  )) {
    normalized = normalized.slice(base.length).replace(/^\/+/, "");
  }

  // Encode spaces and special characters safely.
  const encoded = normalized
    .split("/")
    .map(segment => encodeURIComponent(decodeSafe(segment)))
    .join("/");

  return `${prefix}/${encoded}`;
}

function decodeSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export const emailConfigured =
  !site.email.startsWith("REPLACE_");
