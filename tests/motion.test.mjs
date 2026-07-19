import test from "node:test";
import assert from "node:assert/strict";

class FakeElement {
  constructor() { this.children=[]; this.style={}; this.dataset={}; this.attributes={}; }
  append(node) { this.children.push(node); }
  remove() { this.removed=true; }
  setAttribute(name, value) { this.attributes[name]=value; }
}
globalThis.Element = FakeElement;
globalThis.document = { createElement: () => new FakeElement() };
globalThis.matchMedia = () => ({ matches:false });

const { createScrollForgeMotion } = await import("../assets/motion/motion-runtime.js");

const cue = { id:"line-one", copy:"One precise line", tag:"h2", align:"center", enterPreset:"fade-up", enterStart:0.1, enterEnd:0.2, exitStart:0.4, exitEnd:0.5 };

test("copy follows enter, hold and fade-out windows", () => {
  const root = new FakeElement();
  const motion = createScrollForgeMotion({ root, cues:[cue], reducedMotion:false });
  assert.equal(root.children.length, 1);
  motion.update(0.05);
  assert.equal(Number(root.children[0].style.opacity), 0);
  motion.update(0.25);
  assert.equal(Number(root.children[0].style.opacity), 1);
  motion.update(0.5);
  assert.equal(Number(root.children[0].style.opacity), 0);
});

test("unordered cue timings fail closed", () => {
  const root = new FakeElement();
  assert.throws(() => createScrollForgeMotion({ root, cues:[{...cue, enterEnd:0.6}] }), /Invalid timing order/);
});
