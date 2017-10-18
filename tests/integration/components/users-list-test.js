import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('users-list', 'Integration | Component | users list', {
  integration: true
});

test('img class is set to avatar', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list fake-url sample-email}}`);

  assert.equal(this.$('img').attr('class'), 'avatar');

  // Template block usage:
  this.render(hbs`
    {{#users-list fake-url sample-email}}
      template block text
    {{/users-list}}
  `);

  assert.equal(this.$('img').attr('class'), 'avatar');
});
