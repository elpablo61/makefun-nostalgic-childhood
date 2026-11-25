import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line — one sentence, one childhood scene at dusk: mother peeling
// cassava on the back step, the neighbour's radio, the cat, and the warm spot
// where father's sandals were. Present tense, no explaining, slow landing.
const ENTRY =
  "At dusk your mother peels cassava on the back step while the neighbour's radio plays a song she hums without knowing the words, and the cat curls into the warm spot where your father's sandals were.";

if (ENTRY.length > 280) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 280 limit.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
