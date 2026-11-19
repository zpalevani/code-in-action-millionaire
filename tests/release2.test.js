import test from 'node:test';import assert from 'node:assert/strict';import {QUESTIONS} from '../src/questions.js';import {LADDER,payout,guaranteed,shuffle,audienceVotes} from '../src/game.js';
test('15 prize levels',()=>{assert.equal(LADDER.length,15);assert.equal(LADDER.at(-1),1000000)});
test('guaranteed milestones',()=>{assert.equal(guaranteed(4),0);assert.equal(guaranteed(5),1000);assert.equal(guaranteed(10),32000)});
test('walk-away winnings',()=>{assert.equal(payout(6,'walk'),2000);assert.equal(payout(15,'win'),1000000)});
test('bank has four alternatives for every tier',()=>{for(let level=0;level<15;level++){const group=QUESTIONS.filter(q=>q.level===level);assert.equal(group.length,6,'tier '+level);for(const q of group){assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation);assert.ok(q.hint);assert.ok(q.source)}}});
test('question identifiers unique',()=>assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length));
test('shuffling preserves correct answer',()=>{for(const q of QUESTIONS){const s=shuffle(q,12345);assert.equal(s.options[s.answer],q.options[q.answer])}});
test('audience votes total 100',()=>{for(let i=0;i<4;i++)for(let seed=0;seed<100;seed++)assert.equal(audienceVotes(i,seed).reduce((a,b)=>a+b,0),100)});

test('exactly 90 questions across 15 tiers',()=>{assert.equal(QUESTIONS.length,90);assert.equal(new Set(QUESTIONS.map(q=>q.prompt)).size,90)});
test('all answer choices are distinct within each question',()=>{for(const q of QUESTIONS)assert.equal(new Set(q.options).size,4,q.id)});
test('all explanations and source labels exist',()=>{for(const q of QUESTIONS){assert.ok(q.explanation.length>15,q.id);assert.ok(q.source.includes('Code in Action'),q.id)}});
test('all wrong-answer payouts follow milestone rules',()=>{for(let n=0;n<=15;n++)assert.equal(payout(n,'lost'),n>=10?32000:n>=5?1000:0)});
test('walk-away payout tracks the most recently cleared level',()=>{for(let n=0;n<=15;n++)assert.equal(payout(n,'walk'),n?LADDER[n-1]:0)});
