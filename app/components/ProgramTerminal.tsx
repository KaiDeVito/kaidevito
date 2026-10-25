"use client";

import { useState } from "react";

export interface ProgramTerminalProps {
    language: string;
    command: string;
    source: string;
    output: string;
}

export function ProgramTerminal({
    language,
    command,
    source,
    output,
}: ProgramTerminalProps) {
    const [showOutput, setShowOutput] = useState(false);

    return (
        <div className="terminal-demo">
            <div className="terminal-toolbar">
                <span>{language} Program Terminal</span>
            </div>

            <pre className="terminal-source">
                <code>{source}</code>
            </pre>

            <button
                type="button"
                className="text-button"
                onClick={() => setShowOutput(true)}
            >
                ▶ Show sample output
            </button>

            <pre className="terminal-output" role="status">
                {showOutput
                    ? `$ ${command}\n${output}`
                    : "$ Click 'Show sample output' to inspect a precomputed example."}
            </pre>
        </div>
    );
}
