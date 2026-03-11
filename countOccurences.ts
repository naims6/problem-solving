const arr: string[] = [
  "naim",
  "tawhid",
  "zon",
  "motu",
  "patlu",
  "naim",
  "zon",
  "zon",
  "patlu",
  "sorker",
];

const occurences = arr.reduce<Record<string, number>>((acc, val) => {
  acc[val] = acc[val] ? acc[val] + 1 : 1;
  return acc;
}, {});

console.log(occurences);
