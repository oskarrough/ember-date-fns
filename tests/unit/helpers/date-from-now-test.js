import { dateFromNow } from 'dummy/helpers/date-from-now';
import { module, test } from 'qunit';

module('Unit | Helper | date from now');

test('it works', function (assert) {
  let result = dateFromNow([1481022124443]);
  assert.ok(typeof result === 'string', 'it is a string');
});

test('you can include a suffix', function (assert) {
  let result = dateFromNow([1481022124443], {addSuffix: true});
  assert.ok(result.indexOf(' ago') > -1);
});

