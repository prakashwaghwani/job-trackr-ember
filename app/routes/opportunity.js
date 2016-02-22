import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('opportunity', params.opportunity_id);
  },
  actions: {
    save(){
      let opportunity = this.currentModel
      const newNote = this.get('store').createRecord('note', this.modelFor('note'));
      newNote.set('opportunity', opportunity);
      newNote.save();
    }
  }
});
