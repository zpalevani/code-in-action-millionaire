# The Million-Dollar Prompt

**Master Claude Code. Climb the million-dollar ladder.**

A standalone, browser-based educational quiz created by **Zara Palevani** for the **Code in Action** course. Players answer 15 increasingly challenging multiple-choice questions for a chance to reach a **virtual $1,000,000** prize.

> **Release status:** Release 1 is on `main`. Release 2 is in development on `release/2.0` and **has not been verified or promoted to production**. The Release 2 question bank contains 90 *draft* questions; official documentation review and end-to-end tests remain outstanding.

**Proposed public domain:** https://code-millionaire.zarapalevani.com — domain configuration and current deployment state have not been independently verified.

## Gameplay

- Solo game with **15 questions**, four choices each, and increasing difficulty.
- Prize ladder: **$100 · $200 · $300 · $500 · $1,000 · $2,000 · $4,000 · $8,000 · $16,000 · $32,000 · $64,000 · $125,000 · $250,000 · $500,000 · $1,000,000**.
- Guaranteed winnings after five correct answers: **$1,000**; after ten: **$32,000**.
- A wrong answer ends the game at the latest guaranteed milestone.
- **Walk Away** keeps the winnings earned at the last correctly answered question.
- Four one-time lifelines:
  - **50:50:** removes two incorrect choices.
  - **Ask AI:** shows a *prewritten* hint; it does **not** contact an AI service.
  - **Ask the Audience:** displays *simulated* votes, not responses from real people.
  - **Skip:** replaces the current question with another question at the same difficulty level.
- All prizes are **virtual and have no cash value**.

## Release 2 architecture

| Area | Implementation |
| --- | --- |
| Frontend | Vanilla HTML, CSS, and JavaScript in `public/` |
| Backend | Cloudflare Worker in `src/index.js` |
| Questions | `src/questions.js` — 90 draft questions across 15 levels |
| Scoring | Server-side validation and prize calculation |
| Sessions | Temporary authenticated sessions stored in dedicated Cloudflare D1 |
| Authentication | Random bearer token; SHA-256 token hash stored in D1 |
| Persistence | Browser stores session reference in `sessionStorage` for refresh recovery |
| Rate limiting | D1-backed request counter; requires `RATE_LIMIT_SECRET` |
| Bot protection | Optional Turnstile integration; production should require it |
| Automated checks | Node test suite in `tests/` and GitHub Actions workflow |

**Important:** Release 2's D1 and security integration is committed as code but **has not been confirmed working in Cloudflare**. Email results, accounts, and a public leaderboard are not part of this release candidate.

## Repository structure

```text
.github/workflows/ci.yml        GitHub Actions checks
public/index.html               Game page
public/style.css                Styles
public/app.js                   Browser client
src/index.js                    Cloudflare Worker API
src/game.js                     Prize, shuffle and lifeline utilities
src/questions.js                90 draft questions
schema.sql                      Dedicated D1 database schema
tests/release2.test.js          Node unit tests
wrangler.jsonc                  Release 1 Worker configuration
wrangler.release2.example.jsonc Release 2 D1 configuration template
RELEASE_2.md                    Deployment gates and limitations
```

## Local development

Requires **Node.js 22+**, npm, and a separate Cloudflare account/project for this application.

```bash
npm install
npm test
npm run dev
```

**Note:** The current `wrangler.jsonc` does **not** contain the Release 2 D1 binding. API gameplay requires a D1 database and the schema. Do not treat a successful static page load as evidence that gameplay works.

## Release 2 deployment checklist

1. Create a **new D1 database** named `code-in-action-millionaire-db` in Cloudflare. Never reuse MCP Jeopardy infrastructure.
2. Copy the relevant settings from `wrangler.release2.example.jsonc` into `wrangler.jsonc`, replacing the placeholder D1 UUID with the **new database's actual UUID**. The `DB` binding must point to that database.
3. Apply `schema.sql` to the new database (for example, using `npx wrangler d1 execute code-in-action-millionaire-db --remote --file=./schema.sql`). **Double-check the database name and account before executing.**
4. Configure a strong `RATE_LIMIT_SECRET` as a Cloudflare Worker secret. Do not commit it.
5. Configure a **separate** Turnstile site key and secret for this game; set `REQUIRE_TURNSTILE=true` for production.
6. Run `npm test` and syntax checks, and verify the GitHub Actions workflow is green.
7. Test a complete game against a staging deployment, including wrong answers, both milestones, all lifelines, refresh recovery, concurrency, expired sessions, and deletion.
8. Review all 90 questions against current official Claude Code documentation and correct or replace any inaccurate content.
9. Only after these checks pass, merge `release/2.0` into `main` and deploy. Confirm the live game works end to end.

See [RELEASE_2.md](RELEASE_2.md) for the deployment gate.

## Known limitations

- The 90 questions are **drafts**, not independently verified current product documentation.
- Test files and CI workflow exist, but successful execution has not been confirmed here.
- The dedicated Cloudflare D1 database and production secrets have not been verified.
- The game has not undergone a complete security review or browser-based end-to-end test.
- Optional email results are not implemented.

## Isolation and safety

**This project is completely independent of MCP Jeopardy.** Do not modify or reuse MCP Jeopardy's GitHub repository, Cloudflare Worker, D1 database, domain, configuration, routes, or secrets. Any Release 2 database, Turnstile site, Worker secrets, and staging environment must be dedicated to The Million-Dollar Prompt.

## Attribution

Created by **Zara Palevani**. Independent educational project; **not affiliated with Anthropic or any television game show**. No real-money prizes.
