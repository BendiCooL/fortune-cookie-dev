// Fortune Cookie Wisdom for Developers — one original line of fortune-cookie
// wisdom for a software developer (68 characters, within the 120 limit).
// Writes the entry text to /output/entry.txt. The /output directory is a
// mount point in the grader: create it, never delete it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every TODO you write is a letter to a stranger who shares your name.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
const length = [...LINE].length;
if (length < 1 || length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${length} characters, outside the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
