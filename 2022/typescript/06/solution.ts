import { flow, uniq } from "../utils.ts";

export const windowHasDuplicates = (window: string[]) => {
  return uniq(window).length !== window.length;
};

export const findStartSequence = (windowSize = 4) => (stream: string) => {
  let window = new Array(windowSize).fill('');
  for (let i = 0; i < stream.length; i++) {
    const char = stream[i];
    window = shiftWindow(window, char);
    if (i > windowSize - 2 && !windowHasDuplicates(window)) return i + 1;
  }
  return -1;
};

export const shiftWindow = (window: string[], char: string) => {
  const newWindow = window.slice();
  newWindow.shift();
  newWindow.push(char);
  return newWindow;
}


export const solutionA = flow(
  findStartSequence(4)
);

export const solutionB = flow(
  findStartSequence(14)
);
