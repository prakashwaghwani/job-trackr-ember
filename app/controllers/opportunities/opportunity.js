import Ember from 'ember';

export default Ember.Controller.extend({
 showNoteForm: false,
 showContactForm: false,
 actions: {
   newNote(){
     this.toggleProperty('showNoteForm');
   },
   newContact(){
     this.toggleProperty('showContactForm');
   }
 }
});
