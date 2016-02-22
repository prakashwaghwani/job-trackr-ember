import Ember from 'ember';

export default Ember.Controller.extend({
  showOpportunityForm: false,

  actions: {
    newOpportunity(){
      this.toggleProperty('showOpportunityForm');
    }
  }
});
