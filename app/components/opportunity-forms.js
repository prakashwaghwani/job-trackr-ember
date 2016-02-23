import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      let name = this.get('name');
      let position = this.get('position');
      let description = this.get('description');

      this.sendAction('action', name, position, description);
    }
  }
});
