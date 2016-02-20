import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser(){
      var email = this.get('email');
      var password = this.get('password');
      var firstname = this.get('firstName');
      var lastname = this.get('lastName');

      var user = this.store.createRecord('user', {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
      });

      user.save();
      this.transitionTo("users.user", user);
    }
  }
});
