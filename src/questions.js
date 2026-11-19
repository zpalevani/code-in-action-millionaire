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
export const QUESTIONS=levels.flatMap((group,level)=>group.map(([prompt,options,answer,explanation],i)=>({id:'CIA-'+String(level*4+i+1).padStart(3,'0'),level,prompt,options,answer,explanation,hint:'Consider the workflow and its purpose before selecting an answer.',source:'Code in Action course — '+['Plan mode','Compaction','Rewind','CLAUDE.md','Worktrees','Skills','Hooks','Verification','Headless automation','Plugins','Testing','Permissions','Integration','Evidence','Production workflow'][level],verification:'COURSE-SOURCED — CURRENT DOCS NOT YET AUDITED'})));
