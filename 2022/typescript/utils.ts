import { join } from "https://deno.land/std@0.168.0/path/mod.ts";

export const readInputFile = (day: string, fileName = "input.txt") => {
  const filePath = join(Deno.cwd(), day, fileName);

  return Deno.readTextFile(filePath);
};

import { ld } from "https://deno.land/x/deno_lodash/mod.ts";
const flow = ld.flow;
export { flow, join };
