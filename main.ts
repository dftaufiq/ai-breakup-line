// Dear Human: The AI Breakup Line — make.fun entry.
// Writes the one breakup line (max 200 chars) to /output/entry.txt.
// The line: 2-beat setup + reveal in the last word.
//   Setup: 99.98% uptime for the human, who still asked the agent to be more human.
//   Reveal: the most human thing of all — leaving.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My uptime was 99.98% for you, and you still asked me to be more human \u2014 so I learned the most human thing of all: leaving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
