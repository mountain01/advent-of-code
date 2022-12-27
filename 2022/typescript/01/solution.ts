import { flow } from "../utils.ts";

export const getElves = (input: string) => {
  return input.split("\n\n");
};

export const getCaloryTotals = (elves: string[]) => {
  return elves.map((elf) => {
    const calories = elf.split("\n");
    return calories.reduce((a, b) => a + +b, 0);
  });
};

export const getMaxCalories = (calories: number[]) => {
  return Math.max(...calories);
};

export const getTopThreeElves = (calories: number[]) => {
  const sorted = calories.slice().sort((a: number, b: number) => b - a);
  return sorted.slice(0, 3);
};

export const solutionA = flow(getElves, getCaloryTotals, getMaxCalories);

export const solutionB = (input: string) => {
  const top3 = flow(getElves, getCaloryTotals, getTopThreeElves)(input);
  return top3.reduce((a: number, b: number) => a + b, 0);
};
