import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: null,
  session: Ember.inject.service('session'),

  updateCurrentUser: function(){

    if (this.get("session.isAuthenticated")){
      this.get('store').findRecord('user', 'me').then((user) => {
        user = this.store.createRecord('user', {firstName: user._internalModel._data.firstName, email: user._internalModel._data.email});
        this.set("currentUser", user);
      });
    }
  }.on('init'),
  actions: {
    logout(){
      this.get('session').invalidate();
    }
  }
});
