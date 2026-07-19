import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

test("JSON contracts parse", async () => {
  for (const file of ["schemas/project.schema.json","schemas/evidence.schema.json",".codex-plugin/plugin.json","package.json"]) {
    assert.doesNotThrow(() => JSON.parse(await readFile(file, "utf8")));
  }
});

test("all skills have required frontmatter", async () => {
  const dirs = await readdir("skills");
  assert.equal(dirs.length, 7);
  for (const dir of dirs) {
    const content = await readFile(join("skills", dir, "SKILL.md"), "utf8");
    assert.match(content, /^---\nname: [a-z0-9-]+\ndescription: .+\n---\n/);
  }
});
