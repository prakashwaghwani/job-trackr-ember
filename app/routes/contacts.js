// import Ember from 'ember';

// export default Ember.Route.extend({
//   model(){
//     return this.store.findAll('contact');
//   }//,
//   // DOUBLE CHECK SYNTAX ->
//   // actions: {
//   //   addContact(){
//   //     let contact = this.modelFor(this.routeName);
//   //     contact.save().then((savedcontact) => {
//   //       savedContact.get('notes').invoke('save');
//   //       savedContact.get('contacts').invoke('save');
//   //       this.transitionTo('contacts.contact', savedContact);
//   //     });
//   //   },
//   //   delete(contact){
//   //     contact.deleteRecord();
//   //     contact.save();
//   //   }
//   // }
// });

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.store.findAll('contact');
  }
});