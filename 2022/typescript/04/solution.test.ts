import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  getPairs,
  getRange,
  isContained,
  isContainedBy,
  isOverlapped,
  isOverlappedBy,
  solutionA,
  solutionB,
} from "./solution.ts";
import { expect, flow } from "../utils.ts";

const exampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe("Day 04", () => {
  it("should get pairs correctly", () => {
    const pairs = getPairs(exampleInput);
    expect(pairs.length, 6);
  });
  describe("Solution A", () => {
    describe("creating ranges", () => {
      it("should create a single digit range correctly", () => {
        const rangeInput = "5-5";
        const range = getRange(rangeInput);
        expect(range, [6]);
      });
      it("should create a range correctly", () => {
        const rangeInput = "2-5";
        const range = getRange(rangeInput);
        expect(range, [2, 3, 4, 5]);
      });
    });

    describe("checking ranges", () => {
      it("should have B inside A", () => {
        const rangeB = "3-5";
        const rangeA = "2-6";
        let result = isContainedBy(rangeA, rangeB);
        expect(result, false);
        result = isContainedBy(rangeB, rangeA);
        expect(result, true);
      });
      it("should not contain if there is no overlap", () => {
        const rangeB = "7-9";
        const rangeA = "2-6";
        let result = isContainedBy(rangeA, rangeB);
        expect(result, false);
        result = isContainedBy(rangeB, rangeA);
        expect(result, false);
      });
      it("should have A inside B", () => {
        const rangeA = "3-5";
        const rangeB = "2-6";
        let result = isContainedBy(rangeA, rangeB);
        expect(result, true);
        result = isContainedBy(rangeB, rangeA);
        expect(result, false);
      });
      it("should be contained if ranges are the same", () => {
        const rangeA = "2-6";
        const rangeB = "2-6";
        const result = isContainedBy(rangeA, rangeB);
        expect(result, true);
      });

      describe("either is contained", () => {
        it("single range contains", () => {
          const a = "6-6";
          const b = "5-7";
          expect(isContained(a, b), true);
        });
        it("A is contained by B", () => {
          const rangeA = "3-6";
          const rangeB = "2-6";
          let result = isContained(rangeA, rangeB);
          expect(result, true);
          result = isContained(rangeB, rangeA);
          expect(result, true);
        });

        it("B is contained by A", () => {
          const rangeA = "3-9";
          const rangeB = "5-8";
          let result = isContained(rangeA, rangeB);
          expect(result, true);
          result = isContained(rangeB, rangeA);
          expect(result, true);
        });

        it("overlap but not contained", () => {
          const rangeA = "3-6";
          const rangeB = "5-8";
          let result = isContained(rangeA, rangeB);
          expect(result, false);
          result = isContained(rangeB, rangeA);
          expect(result, false);
        });
      });
    });
    it("should get the correct answer", () => {
      const result = solutionA(exampleInput);
      assertEquals(result, 2);
    });
  });

  describe("Solution B", () => {
    describe("overlaps", () => {
      it("A overlaps B", () => {
        const a = "34-65";
        const b = "57-80";
        expect(isOverlappedBy(a, b), true);
      });
      it("B overlaps A", () => {
        const a = "57-80";
        const b = "34-65";
        expect(isOverlappedBy(a, b), true);
      });
    });
    describe("no overlap", () => {
      it("A does not overlap B", () => {
        const a = "10-50";
        const b = "534-6909";
        expect(isOverlappedBy(a, b), false);
      });
      it("B does not overlap A", () => {
        const b = "534-6909";
        const a = "10-50";
        expect(isOverlappedBy(b, a), false);
      });
      it("should not overlap", () => {
        const b = "534-6909";
        const a = "10-50";
        expect(isOverlapped(b, a), false);
      });
    });
    it("should get the correct answer", () => {
      const result = solutionB(exampleInput);
      assertEquals(result, 4);
    });
  });
});
