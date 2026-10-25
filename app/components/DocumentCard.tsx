import { asset } from "../lib/site";

export function DocumentCard({
    title,
    description,
    file,
}: {
    title: string;
    description: string;
    file: string;
}) {
    return (
        <article className="document-card">
            <div className="document-symbol" aria-hidden="true">
                PDF
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
                className="text-button"
                href={asset(`${file}`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} PDF in a new tab`}
            >
                Open PDF <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
}
