import Ember from 'ember';

export default Ember.Controller.extend({
 showForm: false,

 actions: {
   newNote(){
     this.toggleProperty('showForm');
   }
 }
});
