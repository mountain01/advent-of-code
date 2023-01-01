import { describe, it } from "https://deno.land/std@0.168.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import {
windowHasDuplicates,
  shiftWindow,
  solutionA,
  solutionB,
} from "./solution.ts";
import { expect, flow } from "../utils.ts";

const exampleInput = ``;


describe("Day 06", () => {
  describe("Solution A", () => {
    describe('checking window', ()=>{
      it('should have duplicates in window', ()=>{
        let window = ['a','b','b','d'];
        expect(windowHasDuplicates(window), true);
        window = ['f','b','c', 'e','5','f'];
        expect(windowHasDuplicates(window), true);
      });

      it('should not be in the window', ()=>{
        let window = ['a','b','c','d'];
        expect(windowHasDuplicates(window), false);
      });
    });
    it('should shift the window', ()=>{
        let window = ['a','b','c','d'];
        const newWindow = shiftWindow(window,'f');
        expect(newWindow, ['b','c','d','f',]);
    });
    describe('find the correct solution', ()=>{
      it('should work for example 1', ()=>{
        const result = solutionA('bvwbjplbgvbhsrlpgdmjqwftvncz');
        expect(result, 5);
      });
      it('should work for example 2', ()=>{
        const result = solutionA('nppdvjthqldpwncqszvftbrmjlhg');
        expect(result, 6);
      });
      it('should work for example 3', ()=>{
        const result = solutionA('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
        expect(result, 10);
      });
      it('should work for example 4', ()=>{
        const result = solutionA('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
        expect(result, 11);
      });
      it('should work for example 5', ()=>{
        const result = solutionA('zcfafwzzqfrljwzlrfnpqdbhtmscgvjw');
        expect(result, 4);
      });
    });
  });

  describe("Solution B", () => {
    describe('find the correct solution', ()=>{
      it('should work for example 1', ()=>{
        const result = solutionB('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
        expect(result, 19);
      });
      it('should work for example 2', ()=>{
        const result = solutionB('bvwbjplbgvbhsrlpgdmjqwftvncz');
        expect(result, 23);
      });
      it('should work for example 3', ()=>{
        const result = solutionB('nppdvjthqldpwncqszvftbrmjlhg');
        expect(result, 23);
      });
      it('should work for example 4', ()=>{
        const result = solutionB('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
        expect(result, 29);
      });
      it('should work for example 5', ()=>{
        const result = solutionB('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
        expect(result, 26);
      });
    });
  });
});
