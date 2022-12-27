import { flow, readInputFile } from "../utils.ts";

const shapeScoreMap = {
  "X": 1,
  "Y": 2,
  "Z": 3,
};

const resultScoreMap = [6, 3, 0];

//rock A,X
// paper B,Y
// scissor C,Z

/**
 *  opponent: [win, draw, lose]
 */
const resultMap = {
  "A": ['Y', 'X', 'Z'],
  "B": ['Z', 'Y', 'X'],
  "C": ['X','Z','Y'],
};

type OpponentMoves = "A" | "B" | "C";
type SelfMoves = "X" | "Y" | "Z";

export type Round = [OpponentMoves, SelfMoves];

export const getRounds = (input: string) => {
  return input.split("\n").map((round) => round.split(" "));
};

export const compareRound = ([opponent, self]: Round): Outcome => {
  return resultMap[opponent].findIndex((move) => move === self);
};

export const getScore = (round: Round) => {
  const result = compareRound(round);
  return shapeScoreMap[round[1]] + resultScoreMap[result];
};

export const solutionA = flow(
  getRounds,
  (rounds: Round[]) => rounds.map(getScore),
  (scores: number[]) => scores.reduce((a: number, b: number) => a + b, 0),
);

export const solutionB = flow(()=>'Not Implemented');

// const input = await readInputFile('02');
// solutionA(input);