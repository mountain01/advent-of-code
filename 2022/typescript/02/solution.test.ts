import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  compareRound,
  getRounds,
  getScore,
  Round,
  solutionA,
  solutionB,
} from "./solution.ts";
import { flow } from "../utils.ts";

const exampleInput = `A Y
B X
C Z`;

describe("Day 02", () => {
  describe("Solution A", () => {
    it("should get correct number of rounds", () => {
      assertEquals(getRounds(exampleInput).length, 3);
    });

    describe("correctly compares round", () => {
      it("should win", () => {
        const round: Round = ["A", "Y"];
        const result = compareRound(round);
        assertEquals(result, 0);
      });
      it("should lose", () => {
        const round: Round = ["B", "X"];
        const result = compareRound(round);
        assertEquals(result, 1);
      });
      it("should draw", () => {
        const round: Round = ["C", "Z"];
        const result = compareRound(round);
        assertEquals(result, 2);
      });
    });

    describe("calculate score correctly", () => {
      describe("shape", () => {
        it("should get correct score for Rock (X)", () => {
          const round: Round = ["A", "X"];
          assertEquals(getScore(round), 1);
        });
        it("should get correct score for Paper (Y)", () => {
          const round: Round = ["B", "Y"];
          assertEquals(getScore(round), 2);
        });
        it("should get correct score for Scissor (Z)", () => {
          const round: Round = ["C", "Z"];
          assertEquals(getScore(round), 3);
        });
      });
      describe("round result", () => {
        it("should get correct score for Win", () => {
          const round: Round = ["C", "X"];
          assertEquals(getScore(round), 7);
        });
        it("should get correct score for Draw", () => {
          const round: Round = ["B", "X"];
          assertEquals(getScore(round), 4);
        });
        it("should get correct score for Lose", () => {
          const round: Round = ["A", "X"];
          assertEquals(getScore(round), 1);
        });
      });
    });

    it('should get correct total score', () => {
      const result = solutionA(exampleInput);
      assertEquals(result, 15);
    });
  });

  describe("Solution B", () => {
    it("should run a test", () => {
      assertEquals(3, 3);
    });
  });
});
