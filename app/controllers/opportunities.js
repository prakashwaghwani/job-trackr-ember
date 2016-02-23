import Ember from 'ember';

export default Ember.Controller.extend({
  showOpportunityForm: false,
  showEverything: false,
  actions: {
    newOpportunity(){
      this.toggleProperty('showOpportunityForm');
    },
    toggleOpportunity(id){
      this.toggleProperty('showEverything');
      this.transitionToRoute('/opportunities/'+id);
    }
  }
});
