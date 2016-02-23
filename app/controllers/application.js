import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: null,
  session: Ember.inject.service('session'),
  needs:['opportunities'],
  showEverything: Ember.computed.alias('controllers.opportunities.showEverything'),

  updateCurrentUser: function(){

    if (this.get("session.isAuthenticated")){
      this.get('store').findRecord('user', 'me').then((user)=>{
        this.set("currentUser", user);
      });
    }
  }.on('init'),
  actions: {
    logout(){
      this.get('session').invalidate();
    },
    makeTrue(){
      this.set('showEverything', false);
    }
  }
});
