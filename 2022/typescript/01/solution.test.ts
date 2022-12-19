import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  getCaloryTotals,
  getElves,
  getMaxCalories,
  getTopThreeElves,
  solutionA,
solutionB,
} from "./solution.ts";
import { flow } from "../utils.ts";

const exampleInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;


describe("Day 01", () => {
  describe("Solution A", () => {
    it("should get correct number of elves", () => {
      const elves = getElves(exampleInput);
      assertEquals(elves.length, 5);
    });

    it("should get calory counts", () => {
      const expectedCalories = [6000, 4000, 11000, 24000, 10000];

      const elves = getElves(exampleInput);
      const actualCalories = getCaloryTotals(elves);

      for (let i = 0; i < actualCalories.length; i++) {
        const calories = actualCalories[i];
        assertEquals(calories, expectedCalories[i]);
      }
    });
    it("should get highest total calory count", () => {
      const elves = getElves(exampleInput);
      const actualCalories = getCaloryTotals(elves);

      assertEquals(getMaxCalories(actualCalories), 24000);
    });

    it("should do the whole thing", () => {
      const actual = solutionA(exampleInput);
      assertEquals(actual, 24000);
    });
  });

  describe("Solution B", () => {
    it("should get the top 3 elves", () => {
      const expectedCalories = [10000,11000,24000].reverse();

      const actualTop3 = flow(getElves, getCaloryTotals, getTopThreeElves)(
        exampleInput,
      );

      for (let i = 0; i < actualTop3.length; i++) {
        const total = actualTop3[i];

        assertEquals(total, expectedCalories[i]);
      }
    });

    it("should get total calories of top three elves", () => {
      assertEquals(solutionB(exampleInput), 45000);
    });
  });
});
