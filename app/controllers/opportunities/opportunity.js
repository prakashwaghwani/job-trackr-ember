import Ember from 'ember';

export default Ember.Controller.extend({
 showNoteForm: false,
 showContactForm: false,
 notes: Ember.computed('model.notes', function(){
   return this.get('model.notes').sortBy('created_at').reverse();
 }),
 actions: {
   newNote(){
     this.toggleProperty('showNoteForm');
   },
   newContact(){
     this.toggleProperty('showContactForm');
   }
 }
});
