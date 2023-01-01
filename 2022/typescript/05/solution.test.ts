import {
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
  applyMove9000,
  applyMove9001,
  getOperations,
  getStacks,
  getTopItems,
  parseInput,
  solutionA,
  solutionB,
  splitInputToStacksAndOperations,
} from "./solution.ts";
import { expect, flow } from "../utils.ts";

const exampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe("Day 05", () => {
  describe("parse input", () => {
    let splitInput = splitInputToStacksAndOperations(exampleInput);
    describe("operations", () => {
      const operations = getOperations(splitInput);
      it("should get the correct number of operations", () => {
        expect(operations.length, 4);
      });
      describe('correct operations', () => {
        it('op [0] should be correct', () => {
          expect(operations[0], ['1', '2', '1']);
        });
        it('op [1] should be correct', () => {
          expect(operations[1], ['3', '1', '3']);
        });
        it('op [2] should be correct', () => {
          expect(operations[2], ['2', '2', '1']);
        });
        it('op [3] should be correct', () => {
          expect(operations[3], ['1', '1', '2']);
        });
      });
    });
    describe("stacks", () => {
      it("should get 3 stacks", () => {
        const stacks = getStacks(splitInput);
        const stackSize = Object.keys(stacks).length;
        expect(stackSize, 3);
      });
      describe("stacks should have correct containers", () => {
        const stacks = getStacks(splitInput);

        it("stack [0] should be correct", () => {
          expect(stacks[0], ["N", "Z"]);
        });
        it("stack [1] should be correct", () => {
          expect(stacks[1], ["D", "C", "M"]);
        });
        it("stack [2] should be correct", () => {
          expect(stacks[2], ["P"]);
        });
      });
    });
  });
  describe("Solution A", () => {


    describe('apply operations', () => {
      let parsedInput: ReturnType<typeof parseInput>;
      beforeEach(() => {
        parsedInput = parseInput(exampleInput);
      });
      it('should correctly apply a move', () => {
        const move = parsedInput[1][0];
        const stacks = parsedInput[0];
        const newStacks = applyMove9000(move, stacks);
        expect(newStacks[0], ['D', 'N', 'Z'])
        expect(newStacks[1], ['C', 'M'])
      });
    });
    it('should get top items correctly', ()=>{
      const stacks = getStacks(splitInputToStacksAndOperations(exampleInput));
      const output = getTopItems(stacks);
      expect(output, 'NDP');
    })
    it("should get the correct answer", () => {
      const result = solutionA(exampleInput);
      assertEquals(result, "CMZ");
    });
  });

  describe("Solution B", () => {
    describe('move containers',()=>{
      let parsedInput: ReturnType<typeof parseInput>;
      beforeEach(() => {
        parsedInput = parseInput(exampleInput);
      });
      it('should move one container correctly',()=>{
        const stacks = parsedInput[0];
        const move = parsedInput[1][0];
        const newStacks = applyMove9001(move, stacks);
        expect(newStacks[0], ['D', 'N', 'Z'])
        expect(newStacks[1], ['C', 'M'])
      });
      it('should move more than one container correctly',()=>{
        const stacks = parsedInput[0];
        const move = ['3','2','1']
        const newStacks = applyMove9001(move, stacks);
        expect(newStacks[0], ['D','C','M','N','Z']);
        expect(newStacks[1], []);
      });
    });
    it("should get the correct answer", () => {
      const result = solutionB(exampleInput);
      assertEquals(result, "MCD");
    });
  });
});
