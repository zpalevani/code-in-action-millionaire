import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSE_QUESTIONS} from '../public/questions.js';

test('six distinct questions at each of 15 levels',()=>{
 assert.equal(COURSE_QUESTIONS.length,90);
 for(let level=0;level<15;level++){
  const qs=COURSE_QUESTIONS.filter(q=>q.level===level);
  assert.equal(qs.length,6,'level '+level);
  assert.equal(new Set(qs.map(q=>q.prompt)).size,6,'distinct prompts level '+level);
 }
});
test('question format and course provenance',()=>{
 for(const q of COURSE_QUESTIONS){
  assert.equal(q.options.length,4,q.id);
  assert.equal(new Set(q.options).size,4,q.id);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);
  assert.ok(q.explanation.length>15,q.id);
  assert.ok(q.hint.length>10,q.id);
  assert.ok(q.source.startsWith('Code in Action course'),q.id);
  assert.ok(!/guaranteed after question 5|session API|database update|browser.s answer key/i.test(q.prompt),q.id);
 }
});
