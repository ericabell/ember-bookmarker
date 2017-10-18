import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(bookmark) { Ember.logger.info('save called');},
    cancel() { Ember.logger.info('cancel called');}
  }
});
