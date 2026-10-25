
import {
  ProgramTerminal,
  type ProgramTerminalProps,
} from "../ProgramTerminal";

type JavaTerminalProps = Partial<
  Pick<ProgramTerminalProps, "source" | "command" | "output">
>;

export function JavaTerminal({
  source = `
public class Test {
    public static void main(String[] args) {
        println("Hello, world!");
    }
}`,
  command = "javac main.java && java main.java",
  output = "Hello, world!",
}: JavaTerminalProps) {
  return (
    <ProgramTerminal
      language="Java"
      source={source}
      command={command}
      output={output}
    />
  );
}
