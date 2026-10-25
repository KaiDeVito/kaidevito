
import {
  ProgramTerminal,
  type ProgramTerminalProps,
} from "../ProgramTerminal";

type PythonTerminalProps = Partial<
  Pick<ProgramTerminalProps, "source" | "command" | "output">
>;

export function PythonTerminal({
  source = `
print("Hello, world!")
`,
  command = "python3 main.py",
  output = "Hello, world!",
}: PythonTerminalProps) {
  return (
    <ProgramTerminal
      language="Python"
      source={source}
      command={command}
      output={output}
    />
  );
}
