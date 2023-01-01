import { flow, mapTo, range } from "../utils.ts";

export const getPairs = (input: string) => {
  return input.split("\n");
};

export const toPairs = (input: string) => input.split(",");

export const getRange = (input: string) => {
  const [start, end] = [input[0], input.at(-1)];
  if (start === end) return [+start + 1];
  return range(start, +end! + 1);
};

export const isContainedBy = (rangeA: string, rangeB: string) => {
  const [startA, endA] = getRangeStartAndEnd(rangeA);
  const [startB, endB] = getRangeStartAndEnd(rangeB);
  if (startA < startB) return false;
  if (endA > endB) return false;
  return true;
};

export const isContained = (rangeA: string, rangeB: string) => {
  return isContainedBy(rangeA, rangeB) || isContainedBy(rangeB, rangeA);
};

export const isOverlappedBy = (rangeA: string, rangeB: string) => {
  const [startA, endA] = getRangeStartAndEnd(rangeA);
  const [startB, endB] = getRangeStartAndEnd(rangeB);
  return endA >= startB && endB >= startA;
};

export const isOverlapped = (rangeA: string, rangeB: string) => {
  return isOverlappedBy(rangeA, rangeB) || isOverlappedBy(rangeB, rangeA);
};

const getRangeStartAndEnd = (range: string) => {
  const numRegex = new RegExp(/(\d+)-(\d+)/);
  const [, first, last] = range.match(numRegex)!;

  return [+first, +last];
};

const getLength = flow(
  (pairs: string[]) => pairs.filter((pair) => pair),
  (pairs: any[]) => pairs.length,
);

const mapToPairs = flow(
  getPairs,
  mapTo(toPairs),
);

export const solutionA = flow(
  mapToPairs,
  mapTo(([a, b]: string[]) => isContained(a, b)),
  getLength,
);

export const solutionB = flow(
  mapToPairs,
  mapTo(([a, b]: string[]) => isOverlapped(a, b)),
  getLength,
);
