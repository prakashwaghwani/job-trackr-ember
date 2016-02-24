import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
