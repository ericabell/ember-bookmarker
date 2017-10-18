import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:bookmark']
});

test('fullName returns correct join of first and last', function(assert) {
  let model = this.subject({firstName: 'foo', lastName: 'bar'});
  assert.equal(model.get('fullName'), 'foo bar', 'valid fullname');
});
