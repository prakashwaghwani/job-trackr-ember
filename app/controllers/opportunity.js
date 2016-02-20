import Ember from 'ember';

export default Ember.Controller.extend({
  show_note_form: false,

  actions: {
    createNote(){
      var content = this.get('content');
      var note = this.store.createRecord('note', {
        content: content
      });
      note.save();
    },

    newNote(){
      this.toggleProperty('show_note_form');
    }
  }
});
