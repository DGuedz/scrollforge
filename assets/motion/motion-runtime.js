const clamp = value => Math.min(1, Math.max(0, value));
const segment = (progress, start, end) => clamp((progress - start) / Math.max(end - start, Number.EPSILON));
const easeOutCubic = value => 1 - Math.pow(1 - value, 3);

function transformFor(preset, amount) {
  const distance = 40 * (1 - amount);
  const scale = 0.94 + 0.06 * amount;
  const map = {
    "fade-up": "translate3d(0," + distance + "px,0)",
    "fade-down": "translate3d(0," + (-distance) + "px,0)",
    "fade-left": "translate3d(" + distance + "px,0,0)",
    "fade-right": "translate3d(" + (-distance) + "px,0,0)",
    "scale-in": "scale(" + scale + ")",
    "fade-only": "none"
  };
  return map[preset] || map["fade-up"];
}

export function createScrollForgeMotion({ root, cues, reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches }) {
  if (!(root instanceof Element)) throw new TypeError("root must be an Element");
  const nodes = new Map();
  for (const cue of cues) {
    if (!(cue.enterStart < cue.enterEnd && cue.enterEnd <= cue.exitStart && cue.exitStart < cue.exitEnd)) {
      throw new RangeError("Invalid timing order for cue: " + cue.id);
    }
    const node = document.createElement(cue.tag || "h2");
    node.className = "sf-motion-copy";
    node.dataset.align = cue.align || "left";
    node.textContent = cue.copy;
    root.append(node);
    nodes.set(cue.id, node);
  }
  function update(progress) {
    const value = clamp(progress);
    for (const cue of cues) {
      const node = nodes.get(cue.id);
      const entering = easeOutCubic(segment(value, cue.enterStart, cue.enterEnd));
      const exiting = segment(value, cue.exitStart, cue.exitEnd);
      const visibility = reducedMotion ? Number(value >= cue.enterEnd && value < cue.exitStart) : entering * (1 - exiting);
      node.style.opacity = String(visibility);
      node.style.transform = reducedMotion ? "none" : transformFor(cue.enterPreset, entering);
      node.setAttribute("aria-hidden", visibility <= 0.01 ? "true" : "false");
    }
  }
  return { update, destroy: () => { for (const node of nodes.values()) node.remove(); nodes.clear(); } };
}
