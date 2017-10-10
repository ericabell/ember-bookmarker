import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  isAdmin: DS.attr('boolean'),
  created: DS.attr('date')
});
