import { dateFormat } from 'dummy/helpers/date-format';
import { module, test } from 'qunit';

module('Unit | Helper | date format');

// test('it fails when it should', function(assert) {
//   let result = dateFormat(['42']);
//   console.log(result);
//   assert.ok(typeof result === 'string');
//   assert.ok(result === 'Invalid Date', 'it is an invalid date');
// });

test('it is able to format a date object', function(assert) {
  let today = new Date();
  let result = dateFormat([today, 'YYYY']);
  assert.ok(typeof result === 'string');
  assert.ok(result !== 'Invalid Date', 'it is not an invalid date');
  assert.ok(Number(result) >= 2017);
});

test('it supports date timestamps', function(assert) {
  let today = new Date().getTime();
  let result = dateFormat([today, 'YYYY']);
  assert.ok(Number(result) >= 2017);
});

test('it supports date strings', function(assert) {
  let today = new Date().toString();
  let result = dateFormat([today, 'YYYY']);
  assert.ok(Number(result) >= 2017);
});
