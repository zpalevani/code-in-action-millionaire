# Release 2 candidate — deployment gate

This branch is **not production-ready** and is intentionally separate from main. Do not merge or deploy until the checks below pass.

## New Cloudflare resources only

1. In the Cloudflare account, create a NEW D1 database named `code-in-action-millionaire-db`. Do not reuse any database belonging to MCP Jeopardy.
2. Record the new database UUID. The repository's main-branch Wrangler configuration has no D1 binding; Release 2 needs a D1 binding `DB` pointing to the newly created database.
3. Apply `schema.sql` to that new D1 database. Do not run migrations against any other database.
4. Configure `RATE_LIMIT_SECRET` as a Worker secret with a strong random value.
5. For initial staging, set `REQUIRE_TURNSTILE=false`; before public production release, create separate Turnstile credentials, configure `TURNSTILE_SITE_KEY` and secret `TURNSTILE_SECRET_KEY`, then set `REQUIRE_TURNSTILE=true`.
6. Run `npm test` and then execute browser, D1, security and concurrent-request integration tests against a staging Worker.
7. Only after all checks pass, merge into `main` and deploy the new Worker.

**Do not change** MCP Jeopardy's GitHub repository, Worker, database, routes, domain, or secrets.

## Current scope / limitations

- Browser UI now calls server endpoints; server validates answers, winnings, and lifeline usage.
- Sessions are temporary, authenticated with a random token whose hash is stored in D1.
- Question pool: **90 course-grounded drafts, six per tier**. The numerical target is met, but the questions are **not independently verified** against current official documentation.
- Official current-doc accuracy review is outstanding.
- Optional results email is not in this candidate.
- Cloudflare account configuration and staging tests are outstanding.
- Production deployment is not authorized until verification gates pass.

## Current verification status

- Unit-test assertions have been expanded to cover all 90 questions and payout levels. Their execution has **not** been verified.
- No successful staging D1 integration test, Cloudflare build, production smoke test, or security review has been observed.
- **Do not interpret a user-reported deployment as proof that Release 2 is functional.** Confirm the exact deployed commit and branch and exercise the API.
