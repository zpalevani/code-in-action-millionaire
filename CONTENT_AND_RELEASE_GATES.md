# Source grounding and production gates

Primary curriculum: user-supplied 725-line Code in Action lesson transcript (2026-11-19). Ground questions in the lesson; do not imply the lesson has been independently verified against current Anthropic documentation.

Covered subjects: Plan mode and plan review; directed compaction; rewind/checkpoints; goals and loops; worktrees; CLAUDE.md versus blocking hooks; skills and verification; permission modes; PreToolUse, PostToolUse and Stop hooks; routines and headless mode; Agent SDK; GitHub code review/actions; plugins and supply-chain trust.

## Content acceptance
Every shipped question requires an unambiguous correct answer, three plausible distractors, an explanation, and an exact supporting lesson heading or line range. Any version-specific claim needs separate verification against current official docs. Exclude unsupported claims. The current 90-question Release 2 bank is a draft, not certified content.

## Architecture decision
Ship a fully tested browser-only Release 1 before considering D1-backed Release 2. Release 2 adds operational and security complexity without being required for a single-player educational game. Do not merge release/2.0 until the question bank, API, D1, security and deployment gates pass.

## Unverified production gates
- Confirm Cloudflare deploy succeeded and HTML/CSS/JS responses are current.
- Inspect rendered desktop/mobile pages and keyboard/reduced-motion accessibility.
- Test 15-question win, wrong answers before/after milestones, walk away, back home and restart.
- Test 50:50, prewritten hint, simulated audience and skip, including one-time-use.
- Run automated unit tests and a real browser end-to-end test.
- Manually verify every shipped question against the supplied lesson.
- Keep virtual prize, prewritten hint and simulated audience disclosures visible.

Do not claim any gate passed without observed test results.
