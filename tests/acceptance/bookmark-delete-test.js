import { test } from 'qunit';
import moduleForAcceptance from 'ember-bookmarker/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bookmark delete');

test('visiting /bookmark-delete', function(assert) {
  visit('/bookmark-delete');

  andThen(function() {
    assert.equal(currentURL(), '/bookmark-delete');
  });
});
