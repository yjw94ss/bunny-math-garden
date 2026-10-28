import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, evaluate, splitAmount, sequenceNext } from '../learning.mjs';

test('四节课都有可判断的小题且答案正确', () => {
  assert.equal(lessons.length, 4);
  for (const lesson of lessons) {
    assert.ok(lesson.questions.length >= 3);
    for (const q of lesson.questions) {
      assert.ok(q.options.includes(q.answer));
      assert.equal(evaluate(q, q.answer), true);
      assert.equal(evaluate(q, q.options.find(x => x !== q.answer)), false);
    }
  }
});
test('平均分：合计不变、每组一样多、不整除不成立', () => {
  assert.deepEqual(splitAmount(8, 2), [4,4]);
  assert.deepEqual(splitAmount(9, 3), [3,3,3]);
  assert.equal(splitAmount(7, 2), null);
  assert.equal(splitAmount(5, 0), null);
});
test('规律接龙按整个模式循环而不是只看最后一个', () => {
  assert.equal(sequenceNext(['红','蓝'], 3), '蓝');
  assert.equal(sequenceNext(['圆','方','三角'], 4), '方');
});
