import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  actions: {
    setCurrentUser(user){
      user = this.store.createRecord("user", {firstName: user._internalModel._data.firstName, email: user._internalModel._data.email});
      this.get("applicationController").set('currentUser', user);
    }
  }
});
