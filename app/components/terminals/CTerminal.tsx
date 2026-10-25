
import {
  ProgramTerminal,
  type ProgramTerminalProps,
} from "../ProgramTerminal";

type CTerminalProps = Partial<
  Pick<ProgramTerminalProps, "source" | "command" | "output">
>;

export function CTerminal({
  source = `#include <stdio.h>

int main(void) {
    printf("Hello, world!\\n");
    return 0;
}`,
  command = "gcc main.c -o main && ./main",
  output = "Hello, world!",
}: CTerminalProps) {
  return (
    <ProgramTerminal
      language="C"
      source={source}
      command={command}
      output={output}
    />
  );
}
