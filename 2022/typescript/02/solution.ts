import { addArrayElements, flow, readInputFile } from "../utils.ts";

const shapeScoreMap = {
  "X": 1,
  "Y": 2,
  "Z": 3,
  "A": 1,
  "B": 2,
  "C": 3,
};

const resultScoreMap = [6, 3, 0];
enum Result {
  Z,
  Y,
  X,
}

//rock A,X
// paper B,Y
// scissor C,Z

/**
 *  opponent: [win, draw, lose]
 */
const resultMap = {
  "A": ["Y", "X", "Z"],
  "B": ["Z", "Y", "X"],
  "C": ["X", "Z", "Y"],
};

/**
 *  opponent: [win, draw, lose]
 */
const resultMapB = {
  "A": ["B", "A", "C"],
  "B": ["C", "B", "A"],
  "C": ["A", "C", "B"],
};

type OpponentMoves = "A" | "B" | "C";
type SelfMoves = "X" | "Y" | "Z";

export type Round = [OpponentMoves, SelfMoves];

export const getRounds = (input: string) => {
  return input.split("\n").map((round) => round.split(" "));
};

export const compareRound = ([opponent, self]: Round) => {
  return resultMap[opponent].findIndex((move) => move === self);
};

export const compareRoundB = ([opponent, result]: Round): OpponentMoves => {
  return resultMapB[opponent][Result[result]] as OpponentMoves;
};

export const getScore = (round: Round) => {
  const result = compareRound(round);
  return shapeScoreMap[round[1]] + resultScoreMap[result];
};

export const getScoreB = (round: Round) => {
  const shape = compareRoundB(round);
  return shapeScoreMap[shape] + resultScoreMap[Result[round[1]]];
};

export const solutionA = flow(
  getRounds,
  (rounds: Round[]) => rounds.map(getScore),
  addArrayElements,
);

export const solutionB = flow(
  getRounds,
  (rounds: Round[]) => rounds.map(getScoreB),
  addArrayElements,
);

// const input = await readInputFile('02');
// solutionA(input);
