import { addArrayElements, flow, intersection, chunk, mapTo } from "../utils.ts";

export type Compartment = string[];

export const getRucksacks = (input: string)=>{
  return input.split('\n');
};

export const getCompartments = (sack: string):Compartment=>{
  const len = sack.length /2;
  return [sack.slice(0,len), sack.slice(len)];
};

export const getDuplicateItem = ([compA, compB]: string[])=>{
  return intersection(compA.split(''),compB.split(''))[0];
}

export const getPriority = (item: string)=>{
  const asciiCode = item.charCodeAt(0);
  if(asciiCode >= 97){
    return asciiCode - 96;
  } else {
    return asciiCode - 38;
  }
};

export const getGroups = (sacks: string[])=>{
  return chunk(sacks,3);
};

export const getBadge = (group: string[])=>{
  const groupItems = group.map(sack=>sack.split(''));
  return intersection(...groupItems)[0];
};

export const solutionA = flow(
  getRucksacks,
  // ( sacks: string[] )=>sacks.map(getCompartments),
  mapTo(getCompartments),
  // (comps:Compartment[])=>comps.map(getDuplicateItem),
  mapTo(getDuplicateItem),
  // (items:string[])=>items.map(getPriority),
  mapTo(getPriority),
  addArrayElements
);

export const solutionB = flow(
  getRucksacks,
  getGroups,
  // (groups: Array<string[]>)=>groups.map(getBadge),
  mapTo(getBadge),
  // (items:string[])=>items.map(getPriority),
  mapTo(getPriority),
  addArrayElements
);
