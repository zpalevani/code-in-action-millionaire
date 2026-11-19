// Course-grounded draft. Not independently certified against the latest Claude Code documentation.
const levels=[
[
["What is Plan mode designed for?",["Exploring before making edits","Publishing automatically","Storing passwords","Replacing tests"],0,"Plan mode supports investigation and planning before changes."],
["When should you request a plan?",["Before a risky multi-file change","After production breaks","Only after merging","When deleting logs"],0,"Planning helps identify scope and risks."],
["What makes a good implementation plan?",["Specific steps and checks","A promise of perfection","No tests","Only screenshots"],0,"A checkable plan names work and verification."],
["A proposed plan misses a requirement. What next?",["Revise it before implementation","Ignore the requirement","Disable tests","Deploy first"],0,"Correct the plan before executing."]
],
[
["What does context compaction address?",["Conversation context limits","Database schema errors","DNS propagation","Git permissions"],0,"Compaction summarizes older context."],
["How can you focus a compaction?",["Specify what context to preserve","Delete the repository","Change the domain","Disable source control"],0,"Focused summaries retain relevant details."],
["What is a compaction risk?",["Losing important details","Automatically publishing code","Creating secrets","Merging branches"],0,"Summaries can omit information."],
["Which details should survive a long-task summary?",["Decisions and active constraints","Only greetings","Only colors","Only timestamps"],0,"Preserve the decisions needed to continue accurately."]
],
[
["What is rewind useful for?",["Returning to an earlier checkpoint","Creating a new API key","Running DNS","Encrypting secrets"],0,"Rewind helps recover from an unwanted direction."],
["Why use checkpoints?",["To recover earlier work states","To guarantee no bugs","To bypass Git","To grant permissions"],0,"Checkpoints support recovery."],
["What should you inspect before rewinding?",["Which state will be restored","The site favicon","Email templates","Visitor location"],0,"Know what code and conversation state may change."],
["What should you do after restoring an earlier state?",["Recheck the files and tests","Assume deployment succeeded","Remove Git","Skip verification"],0,"Verify the restored state."]
],
[
["What is CLAUDE.md for?",["Project instructions and guidance","A secret store","A database engine","A build artifact"],0,"CLAUDE.md communicates project context and instructions."],
["What makes CLAUDE.md useful?",["Concise relevant instructions","Thousands of irrelevant lines","Private credentials","Only branding"],0,"Keep instructions relevant and maintainable."],
["What should not be stored in CLAUDE.md?",["Production secrets","Repository conventions","Test commands","Project architecture"],0,"Secrets should be kept out of repository instructions."],
["A team repeats the same project convention. Where can it document it?",["CLAUDE.md","An image alt tag","A DNS record","A CSS animation"],0,"Project guidance can live in CLAUDE.md."]
],
[
["Why use a Git worktree?",["Isolate parallel working directories","Disable merge conflicts","Store tokens","Create cloud storage"],0,"Worktrees allow separate working directories."],
["Two agents edit the same files. What is the risk?",["Conflicting edits","Guaranteed speedup","Automatic merge","Better security"],0,"Overlapping edits can conflict."],
["Before merging worktree changes, what should happen?",["Review and test the integration","Assume all tests pass","Delete history","Disable CI"],0,"Integration still needs review."],
["Which task is a good worktree candidate?",["Independent feature implementation","Sharing one uncommitted file","Editing production secrets","Skipping review"],0,"Independent tasks benefit from isolated worktrees."]
],
[
["What is a Claude Code skill?",["A reusable workflow","A Git branch","A SQL table","A network proxy"],0,"Skills package repeatable instructions."],
["When is a skill useful?",["For recurring multi-step procedures","For hiding errors","For storing passwords","For bypassing checks"],0,"Skills help standardize repeatable work."],
["What should a skill include?",["Clear steps and intended outcome","Only a vague slogan","Credentials","Untested promises"],0,"Useful skills define a procedure."],
["How do skills differ from a one-off prompt?",["They are reusable across tasks","They guarantee correctness","They disable hooks","They require a database"],0,"Skills are designed for reuse."]
],
[
["What is a PreToolUse hook for?",["Checking an action before execution","Editing completed output","Hosting a webpage","Buying credits"],0,"PreToolUse runs before a tool operation."],
["Which hook can inspect a tool result?",["PostToolUse","PreToolUse","SessionStart only","A CSS hook"],0,"PostToolUse is invoked after tool use."],
["What is appropriate for a hard tool restriction?",["A programmatic blocking control","A vague reminder","A decorative badge","An untested note"],0,"Deterministic controls are stronger for non-negotiable rules."],
["What should happen if a safety hook blocks an operation?",["Investigate the reason","Silently bypass it","Disable all logs","Mark success"],0,"Understand and address the restriction."]
],
[
["What is strong evidence a coding task passed tests?",["Executed test output","The agent saying done","A nice screenshot","A long plan"],0,"Verification should rely on observed execution."],
["A test fails after a change. What next?",["Investigate and fix it","Claim success anyway","Delete the test","Deploy immediately"],0,"Failed checks must be addressed."],
["What is the role of an independent review?",["Find issues missed by implementation","Guarantee perfection","Replace all tests","Remove human oversight"],0,"Review provides another opportunity to catch defects."],
["Why run integration tests?",["To verify components work together","To replace requirements","To generate credentials","To avoid code review"],0,"Integration tests validate interactions."]
],
[
["What is non-interactive Claude execution useful for?",["Scripted automation","Manual CSS design only","Storing passwords","Changing DNS"],0,"Non-interactive runs support automation."],
["Why request structured output for automation?",["To make output easier to parse","To guarantee truth","To avoid all checks","To grant access"],0,"Schemas can make outputs machine-readable."],
["What should automated workflows do with uncertain results?",["Report uncertainty and evidence","Invent a success result","Hide failures","Disable logs"],0,"Automation should preserve honest status."],
["What should you verify after a headless task?",["Exit status and resulting artifacts","Only the prompt length","The theme color","The hostname alone"],0,"Inspect actual results, not just instructions."]
],
[
["Why review third-party plugins?",["They can access tools and data","They are always harmless","They cannot execute actions","They require no permissions"],0,"Plugins may introduce security risks."],
["What should be checked before plugin installation?",["Provenance and permissions","Logo color only","Popularity alone","Number of screenshots"],0,"Review trust and requested access."],
["Which is a risky plugin practice?",["Pasting secrets into untrusted instructions","Reviewing source","Limiting permissions","Testing safely"],0,"Do not expose credentials to untrusted code."],
["What should you do if a plugin requests unnecessary access?",["Decline or restrict it","Grant everything","Disable warnings","Ignore provenance"],0,"Use least privilege."]
],
[
["A feature is finished but no tests ran. Is it verified?",["No","Yes","Only if the UI is purple","Only if the commit exists"],0,"Implementation and verification are separate."],
["What is the safest deployment order?",["Test then deploy then smoke-test","Deploy then plan","Skip staging","Ignore errors"],0,"Validate before and after deployment."],
["A browser screenshot looks correct. What remains?",["Functional and security checks","Nothing","Only changing colors","Deleting test files"],0,"Visual appearance alone does not prove correctness."],
["What should an agent report at handoff?",["Changes, tests, limitations","Only praise","Only a link","Unverified claims as facts"],0,"A handoff should be auditable."]
],
[
["A policy must prevent pushing to main. What should enforce it?",["A blocking control and repository protection","A vague reminder","A color scheme","A comment in CSS"],0,"Enforce important restrictions with tooling."],
["Why is least privilege useful?",["Limits the damage of mistakes","Guarantees zero bugs","Makes prompts shorter","Replaces authentication"],0,"Minimize unnecessary access."],
["A task needs a secret. Where should it live?",["A dedicated secret store","A public repository","A README example with real values","A screenshot"],0,"Keep credentials out of source control."],
["What should you do with an unexpected permission request?",["Review its necessity before granting","Accept automatically","Publish credentials","Ignore logs"],0,"Permission changes warrant scrutiny."]
],
[
["Several agents finish independently. What is still needed?",["Integration and regression tests","No further checks","Automatic production push","Deletion of branches"],0,"Parallel output needs combined validation."],
["A review finds conflicting assumptions. What next?",["Resolve and retest","Merge without discussion","Hide the issue","Disable review"],0,"Resolve conflicts before shipping."],
["What is a useful acceptance criterion?",["Observable testable behavior","Make it great","No mistakes ever","Users will love it"],0,"Measurable criteria enable verification."],
["A deployed feature fails smoke tests. What should you do?",["Investigate and consider rollback","Claim release success","Delete logs","Ignore the report"],0,"Production failures require action."]
],
[
["What is a strong defense against fabricated test claims?",["Require command outputs and independent checks","Trust confidence","Disable CI","Avoid reviews"],0,"Verification must be evidence-based."],
["Why distinguish course content from current documentation?",["Product behavior may change","All docs are identical forever","Course content is automatically official","It removes testing"],0,"Educational sources and current product documentation can differ."],
["A security rule exists only in an instruction file. What is the risk?",["It may not be enforced deterministically","It becomes an API key","It changes DNS","It deletes commits"],0,"Hard controls need actual enforcement."],
["What is the best final sign-off for a production release?",["Verified tests, security review, and deployment checks","A successful prompt alone","A logo review","An untested promise"],0,"Production sign-off needs evidence."]
],
[
["A complex workflow is repeatedly executed. What is the best design?",["Reusable skill plus verification","One giant untested prompt","Manual secret sharing","No audit trail"],0,"Combine repeatability with checks."],
["How should automation handle irreversible operations?",["Use approvals and appropriate controls","Run silently","Ignore safeguards","Assume rollback exists"],0,"High-impact actions warrant safeguards."],
["Why separate development and production resources?",["Reduce risk to live systems","Guarantee faster prompts","Eliminate security reviews","Make code shorter"],0,"Isolation protects production."],
["An agent claims a deployment succeeded, but the live site is a placeholder. What is correct?",["Deployment worked but feature delivery failed","The game is complete","Tests are unnecessary","The placeholder is production-ready"],0,"Deployment success is not feature completion."]
]
];
const extraQuestions=[[["Why separate planning from execution?",["To review scope before changes","To avoid documentation","To disable permissions","To hide mistakes"],0,"A plan can be reviewed before changes are applied."],["What is a practical planning deliverable?",["A list of edits and validation steps","An unverified success claim","A secret token","A deleted branch"],0,"A useful plan identifies implementation and checks."]],[["After compaction, what should you verify?",["Critical constraints remain represented","The website has deployed","All tests ran","Git is disabled"],0,"A compacted summary may omit important constraints."],["Which is a poor candidate to discard during compaction?",["An explicit production safety restriction","An irrelevant greeting","Repeated filler","An obsolete aside"],0,"Safety and task constraints should survive summaries."]],[["Why is Git still useful alongside rewind?",["It provides versioned change history","It replaces all tests","It makes secrets safe","It prevents every bug"],0,"Version control remains important for durable history."],["Before a risky refactor, what should you establish?",["A known-good state and tests","Only a new theme","A public secret","A fake test report"],0,"Recovery and checks reduce risk."]],[["Where should project-specific conventions be documented?",["Project guidance such as CLAUDE.md","A random screenshot","A DNS TXT record","An API key"],0,"A project instruction file can communicate conventions."],["A project instruction conflicts with an enforced security policy. What next?",["Follow the enforced policy","Ignore the policy","Delete audit logs","Publish secrets"],0,"Instructions must not bypass security controls."]],[["What does a worktree not guarantee?",["Conflict-free integration","A separate working directory","Independent checked-out files","A separate branch checkout"],0,"Parallel work still needs integration checks."],["What should parallel tasks minimize?",["Overlapping file edits","Code review","Test coverage","Clear ownership"],0,"Reducing overlapping edits lowers conflict risk."]],[["A reusable task has changed. What should you update?",["Its skill instructions and tests","Only the logo","Unrelated credentials","Git history"],0,"Reusable workflows should stay current."],["What helps a skill remain dependable?",["Clear scope and verification steps","Unbounded permissions","No examples","Unreviewed changes"],0,"Define the skill's scope and expected checks."]],[["Why avoid relying solely on a hook's description?",["Its behavior must be tested","Descriptions execute themselves","It always blocks errors","Hooks replace CI"],0,"Test the actual hook execution path."],["What should a hook failure policy specify?",["Whether execution blocks or continues","Only text color","A logo","A domain name"],0,"Failure behavior affects enforcement."]],[["What is the distinction between unit and integration tests?",["Unit tests isolate parts; integration tests test interactions","They are identical","Integration tests are only screenshots","Unit tests require production"],0,"Different tests cover different failure modes."],["A passing unit test does not establish what?",["That deployment works end-to-end","That one tested function behaved as expected","That a test ran","That the assertion passed"],0,"Production behavior requires broader verification."]],[["What is an automation safety practice?",["Limit permissions and log outcomes","Disable all validation","Hardcode secrets in prompts","Assume every run succeeds"],0,"Limit scope and preserve evidence."],["What is a risk of unattended automation?",["Errors can propagate without review","It always runs faster","It cannot edit files","It guarantees correctness"],0,"Unattended workflows need guardrails."]],[["What should you do with an unknown plugin's requested access?",["Inspect and limit it","Approve automatically","Share passwords","Ignore the request"],0,"Grant only justified access."],["Why prefer official plugin documentation?",["It clarifies supported capabilities and permissions","It guarantees no vulnerabilities","It replaces testing","It removes the need for review"],0,"Official docs help assess capabilities but do not eliminate risk."]],[["What is a meaningful smoke test?",["Check a critical user flow after deployment","Only check that DNS resolves","Read a marketing slogan","Count files"],0,"Smoke tests verify essential functionality."],["What should a test report include?",["Commands, results, and limitations","Only a success emoji","No failure details","A guess"],0,"Evidence and scope make test reports useful."]],[["Why hash session tokens in storage?",["Reduce exposure if the database leaks","Make sessions permanent","Disable authentication","Guarantee zero attacks"],0,"Storing hashes reduces direct exposure of bearer tokens."],["What should a session API validate?",["Authorization and allowed state transitions","Only button colors","Only client-side scores","Only display names"],0,"The server must enforce session state."]],[["Why check the result of a concurrent update?",["To detect conflicting state changes","To change the theme","To skip tests","To increase winnings"],0,"Concurrent actions must not silently overwrite one another."],["Which database update helps prevent duplicate answers?",["Conditional update with expected game state","An unrestricted write","Only a disabled button","A CSS class"],0,"Server-side conditional state transitions help prevent duplicates."]],[["What should a security review cover?",["Secrets, auth, input validation, and abuse controls","Only animations","Only typography","Only branding"],0,"Security reviews examine multiple trust boundaries."],["Why must a browser's answer key be untrusted?",["Users can inspect client code","It is encrypted by default","It is a database","It cannot be modified"],0,"Server-side validation is necessary for trustworthy scoring."]],[["How should a release handle a failed staging check?",["Block promotion until resolved","Ship anyway","Delete evidence","Call it complete"],0,"Failed checks should block production promotion."],["What does release readiness require?",["Verified requirements and deployment checks","Only a commit","Only a screenshot","Only a plan"],0,"Release readiness is evidence-based."]]];
for(let level=0;level<levels.length;level++)levels[level].push(...extraQuestions[level]);
export const QUESTIONS=levels.flatMap((group,level)=>group.map(([prompt,options,answer,explanation],i)=>({id:'CIA-'+String(level*6+i+1).padStart(3,'0'),level,prompt,options,answer,explanation,hint:'Consider the workflow and its purpose before selecting an answer.',source:'Code in Action course — '+['Plan mode','Compaction','Rewind','CLAUDE.md','Worktrees','Skills','Hooks','Verification','Headless automation','Plugins','Testing','Permissions','Integration','Evidence','Production workflow'][level],verification:'COURSE-SOURCED — CURRENT DOCS NOT YET AUDITED'})));

// Replace eight backend-specific draft questions with course-grounded Claude Code material.
const replacements=[
['Why does Code in Action recommend a cold second opinion?', ['To catch assumptions the first review missed','To skip running tests','To replace source control','To publish without review'],0,'A separate review can identify blind spots in a change.','Code review'],
['What should you examine first when reviewing an unattended agent run?', ['The actual diff','The agent\'s confidence','The marketing page','The session title'],0,'Review the code diff before trusting the summary.','Unattended runs'],
['What does the course recommend for tests in automated coding?', ['Make tests a required gate','Run tests only when asked','Replace tests with screenshots','Trust the completion message'],0,'Executed tests are a release gate, not a verbal promise.','Verification'],
['What is the purpose of the Claude GitHub Action?', ['Run Claude in GitHub workflows','Replace every Git commit','Host the production database','Guarantee approval'],0,'The GitHub Action integrates Claude into repository workflows.','GitHub Action'],
['What is a Claude Code plugin marketplace used for?', ['Discovering and installing plugins','Storing model context','Running browser CSS','Replacing project tests'],0,'Marketplaces distribute installable Claude Code plugins.','Plugins'],
['Before installing a plugin, what does the course advise?', ['Inspect its source and permissions','Grant every requested permission','Copy credentials into its README','Skip provenance checks'],0,'Plugins may execute hooks and other components, so inspect provenance and permissions.','Plugin installation'],
['What is a plugin manifest for?', ['Describing plugin metadata and components','Encrypting production secrets','Replacing CLAUDE.md','Publishing DNS records'],0,'A plugin manifest describes the plugin package.','Plugin packaging'],
['Why inspect plugin components beyond the main skill?', ['Hooks and other components can also execute','Only the icon can run code','Plugins never access tools','Manifests are always harmless'],0,'Plugin components can run alongside existing workflows.','Plugin trust']
];
export const COURSE_QUESTIONS=QUESTIONS.map((q,i)=>{if(i<82)return q;const [prompt,options,answer,explanation,section]=replacements[i-82];return {...q,prompt,options,answer,explanation,source:'Code in Action course — '+section};});
