# Architecture

ScrollForge separates context, routines and reusable skills.

The orchestrator reads the project contract and routes work to specialists. Deterministic operations such as media probing, frame extraction and evidence validation are delegated to scripts. Human or agent judgment is limited to configuration choices and must be recorded.

Artifacts flow through immutable stages:

```text
source -> analysis -> raw frames -> optimized frames -> component -> QA -> evidence
```

Each stage consumes the prior stage manifest rather than rediscovering files.
