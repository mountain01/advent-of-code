import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  solutionA,
  solutionB,
} from "./solution.ts";
import { flow } from "../utils.ts";

const exampleInput = ``;


describe("Day {{name}}", () => {
  describe("Solution A", () => {
    it('should not be implemented', () => {
      const result = solutionA(exampleInput)
      assertEquals(result, 'Not Implemented');
    })
  });

  describe("Solution B", () => {
    it('should not be implemented', () => {
      const result = solutionB(exampleInput)
      assertEquals(result, 'Not Implemented');
    })
  });
});
