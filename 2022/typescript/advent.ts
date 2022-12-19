import { readInputFile } from "./utils.ts";

const [day, puzzle] = Deno.args;

const input = await readInputFile(day);

const solutionFN = await import(`./${day}/solution.ts`).then((m) =>
  m[`solution${puzzle.toUpperCase()}`]
);

const result = solutionFN(input);

console.log(result);
