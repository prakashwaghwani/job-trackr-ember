import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('opportunity', params.opportunity_id);
  },
  actions: {
    createNote(content){
      let opportunity = this.modelFor(this.routeName);
      let newNote = this.store.createRecord('note',{content: content, opportunity: opportunity});
      newNote.save();
    },
    createContact(name,phone,email){

      let opportunity = this.modelFor(this.routeName);
      let newContact = this.store.createRecord('contact',{name: name, phone: phone, email: email, opportunity: opportunity});
      newContact.save();
    },
    deleteNote(note){
      note.deleteRecord();
      note.save();
    },
    deleteContact(contact){
      contact.deleteRecord();
      contact.save();
    }
  }
});
