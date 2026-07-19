import { readFile } from "node:fs/promises";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/validate-evidence.mjs <evidence.json>");
  process.exit(2);
}
const data = JSON.parse(await readFile(file, "utf8"));
const required = ["schemaVersion","runId","sourceSha256","environment","commands","artifacts","claims"];
const missing = required.filter(key => data[key] === undefined);
if (missing.length) {
  console.error(`Missing fields: ${missing.join(", ")}`);
  process.exit(3);
}
if (data.schemaVersion !== "1.0.0" || !/^[a-f0-9]{64}$/.test(data.sourceSha256)) {
  console.error("Invalid schemaVersion or sourceSha256");
  process.exit(3);
}
if (!Array.isArray(data.commands) || data.commands.length === 0 || data.commands.some(item => !Number.isInteger(item.exitCode))) {
  console.error("At least one command with an integer exitCode is required");
  process.exit(3);
}
console.log("Evidence bundle is structurally valid");
