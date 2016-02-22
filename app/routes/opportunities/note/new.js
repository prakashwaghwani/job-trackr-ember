import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return {};
},
renderTemplate() {
  this.render('opportunities.note.new', { into: 'application' });
},
actions: {
    save() {
      const opportunity = this.modelFor('opportunity');
      const newNote = this.get('store').createRecord('note', this.currentModel);
      newNote.set('opportunity', opportunity);
      newNote.save();
    }
  }
});
