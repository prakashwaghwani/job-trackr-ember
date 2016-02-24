import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addOpportunity(name, position, description){
      let newOpportunity = this.store.createRecord('opportunity', {name: name, position: position, description: description});
      newOpportunity.save().then((savedOpportunity) => {
        savedOpportunity.get('notes').invoke('save');
        savedOpportunity.get('contacts').invoke('save');
      });
    }
  }
});
