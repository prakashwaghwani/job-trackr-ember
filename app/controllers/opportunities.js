import Ember from 'ember';

export default Ember.Controller.extend({
  showOpportunityForm: false,
  showEverything: false,
  showDelete: false,
  actions: {
    newOpportunity(){
      this.toggleProperty('showOpportunityForm');
    },
    toggleOpportunity(id){
      this.toggleProperty('showEverything');
      this.transitionToRoute('/opportunities/'+id);
    },
    toggleDelete(opp){
      // debugger;
      this.toggleProperty('showDelete');
    }
  }
});
