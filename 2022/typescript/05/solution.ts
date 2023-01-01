import { flow } from "../utils.ts";

export type Stacks = Record<string | number, string[]>;
export type Move = string[];
export type ParsedInput = [Stacks, Move[]];

export const splitInputToStacksAndOperations = (input: string) => {
  return input.split("\n\n");
};

export const getStacks = (unparsedStacks: string[]) => {
  const regExp = /([A-Z])/g;
  const stacks: Stacks = {};
  const stacksToParse = unparsedStacks[0].split("\n");
  stacksToParse.forEach((stack) => {
    const matches = stack.matchAll(regExp);
    for (const match of matches) {
      const { index } = match;
      const stackIndex = Math.floor(index! / 4);
      stacks[stackIndex] = (stacks[stackIndex] || []).concat(match[0]);
    }
  });
  return stacks;
};

export const getOperations = (input: string[]): Move[] => {
  const ops = input[1];
  const regex = /(\d+)/g;
  return ops.split("\n").map((op) => op.match(regex)) as unknown as Array<string[]>;
};

export const parseInput = (input: string): ParsedInput => {
  const splitInput = splitInputToStacksAndOperations(input);
  return [getStacks(splitInput), getOperations(splitInput)];
};

export const applyMove9000 = (move: Move, stacks: Stacks): Stacks => {
  const newStacks = JSON.parse(JSON.stringify(stacks));
  const [amount, fromIndex, toIndex] = move;
  const fromStack = newStacks[+fromIndex - 1];
  const toStack = newStacks[+toIndex - 1];
  for (let i = 0; i < +amount; i++) {
    toStack.unshift(fromStack.shift()!);
  }

  return newStacks;
};

export const applyMoves9000 = (parsedInput: ReturnType<typeof parseInput>) => {
  let stacks = parsedInput[0];
  const moves = parsedInput[1];
  moves.forEach((move, i) => {
    stacks = applyMove9000(move, stacks);
  });
  return stacks;
};
export const applyMove9001 = (move: Move, stacks: Stacks): Stacks => {
  const newStacks: Stacks = JSON.parse(JSON.stringify(stacks));
  const [amount, fromIndex, toIndex] = move;
  const fromStack = newStacks[+fromIndex - 1];
  const toStack = newStacks[+toIndex - 1];

  const fromContainers = fromStack.splice(0, +amount);
  toStack.splice(0, 0, ...fromContainers);

  return newStacks;
};

export const applyMoves9001 = (parsedInput: ReturnType<typeof parseInput>) => {
  let stacks = parsedInput[0];
  const moves = parsedInput[1];
  moves.forEach((move, i) => {
    stacks = applyMove9001(move, stacks);
  });
  return stacks;
};

export const getTopItems = (stacks: Stacks) => {
  return Object.values(stacks).map(stack => stack.shift()).join('');
};

export const solutionA = flow(
  parseInput,
  applyMoves9000,
  getTopItems
);

export const solutionB = flow(
  parseInput,
  applyMoves9001,
  getTopItems
);
