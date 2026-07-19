import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("inspector rejects missing arguments", () => {
  const result = spawnSync(process.execPath, ["scripts/inspect-video.mjs"], { encoding:"utf8" });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Usage:/);
});

test("extractor rejects invalid FPS", () => {
  const result = spawnSync(process.execPath, ["scripts/extract-frames.mjs","missing.mp4","dist/frames","0"], { encoding:"utf8" });
  assert.equal(result.status, 2);
  assert.match(result.stderr, /fps:1-60/);
});

test("evidence validator rejects incomplete bundle", () => {
  const result = spawnSync(process.execPath, ["scripts/validate-evidence.mjs","tests/fixtures/incomplete-evidence.json"], { encoding:"utf8" });
  assert.equal(result.status, 3);
  assert.match(result.stderr, /Missing fields/);
});
