import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
getBadge,
getCompartments,
getDuplicateItem,
getGroups,
getPriority,
getRucksacks,
  solutionA,
  solutionB,
} from "./solution.ts";
import { expect, flow } from "../utils.ts";

const exampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;


describe("Day 03", () => {
  describe("Solution A", () => {
    it('should get correct number of rucksacks',()=>{
      assertEquals(getRucksacks(exampleInput).length, 6);
    });

    describe('get compartments', ()=>{
      it('should split sack with 4 items',()=>{
        const sack = '0123';
        const compartments = getCompartments(sack);
        assertEquals(compartments[0].length, 2);
        assertEquals(compartments[1].length, 2);
      });
      it('should get correctly sized compartments',()=>{
        const sack = getRucksacks(exampleInput)[0];
        const compartments = getCompartments(sack);
        assertEquals(compartments[0].length, compartments[1].length);
      });

    });

    it('should find duplicate item in compartments',()=>{
      const sack = 'abcrABCr';
      const compartments = getCompartments(sack);
      const duplicateItem = getDuplicateItem(compartments);
      assertEquals(duplicateItem,'r');
    });

    describe('find priorities',()=>{
      describe('lowercase items',()=>{
        it('should prioritize a',()=>{
          const priority = getPriority('a');
          assertEquals(priority, 1);
        });

        it('should prioritize z',()=>{
          const priority = getPriority('z');
          assertEquals(priority, 26);
        });

      });
        describe('uppercase items',()=>{
          it('should prioritize A',()=>{
            const priority = getPriority('A');
            assertEquals(priority, 27);
          });

          it('should prioritize Z',()=>{
            const priority = getPriority('Z');
            assertEquals(priority, 52);
          });

        });
    });

    it('should get correct priority totals', () => {
      const result = solutionA(exampleInput)
      assertEquals(result,157);
    });
  });

  describe("Solution B", () => {
    it('should group elves correctly',()=>{
      const sacks = getRucksacks(exampleInput);
      const groupSize = getGroups(sacks).length;
      assertEquals(groupSize, 2);
    });

    it('should get the badge correctly',()=>{
      const group = ['abc1','def1','ghi1'];
      const badge = getBadge(group);
      expect(badge, "1");
    });

    it('get correct badge totals', () => {
      const result = solutionB(exampleInput)
      assertEquals(result, 70);
    })
  });
});
