const ANSWER_LINES = ["Undo."];

const render = (lines: string[]): string => lines.join("\n") + "\n";
const print = (text: string): void => process.stdout.write(text);

print(render(ANSWER_LINES));
