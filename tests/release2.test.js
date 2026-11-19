import test from 'node:test';import assert from 'node:assert/strict';import {QUESTIONS} from '../src/questions.js';import {LADDER,payout,guaranteed,shuffle,audienceVotes} from '../src/game.js';
test('15 prize levels',()=>{assert.equal(LADDER.length,15);assert.equal(LADDER.at(-1),1000000)});
test('guaranteed milestones',()=>{assert.equal(guaranteed(4),0);assert.equal(guaranteed(5),1000);assert.equal(guaranteed(10),32000)});
test('walk-away winnings',()=>{assert.equal(payout(6,'walk'),2000);assert.equal(payout(15,'win'),1000000)});
test('bank has four alternatives for every tier',()=>{for(let level=0;level<15;level++){const group=QUESTIONS.filter(q=>q.level===level);assert.ok(group.length>=2,'tier '+level);for(const q of group){assert.equal(q.options.length,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation);assert.ok(q.hint);assert.ok(q.source)}}});
test('question identifiers unique',()=>assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length));
test('shuffling preserves correct answer',()=>{for(const q of QUESTIONS){const s=shuffle(q,12345);assert.equal(s.options[s.answer],q.options[q.answer])}});
test('audience votes total 100',()=>{for(let i=0;i<4;i++)for(let seed=0;seed<100;seed++)assert.equal(audienceVotes(i,seed).reduce((a,b)=>a+b,0),100)});
