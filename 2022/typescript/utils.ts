import { join } from "https://deno.land/std@0.168.0/path/mod.ts";
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

export const readInputFile = (day: string, fileName = "input.txt") => {
  const filePath = join(Deno.cwd(), day, fileName);

  return Deno.readTextFile(filePath);
};

export const addArrayElements = (array: number[])=>array.reduce((a, b)=>a+b,0);

export const expect = <T>(actual: T, expected: T) => {
  assertEquals(actual, expected);
};

export const mapTo = (mapFn:any) => (input:any[]) => input.map(mapFn);

import { ld } from "https://deno.land/x/deno_lodash/mod.ts";
const flow = ld.flow;
const intersection = ld.intersection;
const chunk = ld.chunk;
export { flow, join, intersection, chunk };
