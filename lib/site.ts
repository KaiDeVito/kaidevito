// EDIT THESE VALUES before you publish. No private contact details are included.
export const site = {
  name: "Kai DeVito",
  title: "Kai DeVito | Computer Engineering Portfolio",
  tagline: "Embedded systems, computer architecture, and software.",
  email: "REPLACE_WITH_YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/",
  handshake: "https://joinhandshake.com/",
  indeed: "https://www.indeed.com/",
  github: "https://github.com/",
};

// NEXT_PUBLIC_BASE_PATH is empty for USERNAME.github.io; /repository-name for project Pages.
// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
// export function asset(path: string): string {
//   return `${prefix}/${path.replace(/^\/+/, "")}`;
// }
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  const normalized = path
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^(?:public\/)+/, "");

  return `${prefix}/${normalized}`;
}

export const emailConfigured = !site.email.startsWith("REPLACE_");

