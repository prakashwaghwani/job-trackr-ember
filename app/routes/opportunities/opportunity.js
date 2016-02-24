import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    // debugger
    return this.store.findRecord('opportunity', params.opportunity_id);
  },
  actions: {
    createNote(content, attachment){
      let opportunity = this.modelFor(this.routeName);
      let newNote = this.store.createRecord('note',{content: content,attachment: attachment, opportunity: opportunity});
      var file = document.getElementById('file-field').files[0];
      newNote.set('attachment', file);
      newNote.save();
    },
    createContact(name,phone,email){
     let opportunity = this.modelFor(this.routeName);
     let newContact = this.store.createRecord('contact',{name: name, phone: phone, email: email});
     newContact.get('opportunities').pushObject(opportunity);
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
