import { bookmarkTitle } from 'ember-bookmarker/helpers/bookmark-title';
import { module, test } from 'qunit';

module( 'Unit | Helper | bookmark title');

test('bookmark title should combine title and about appropriately', function(assert) {
  let result = bookmarkTitle(['canary', 'baz']);
  assert.equal(result, 'canary - baz');
})


test('bookmarkTitle should handle when about is null', function(assert) {
  let result = bookmarkTitle(['canary', null]);
  assert.equal(result, 'canary');
})
