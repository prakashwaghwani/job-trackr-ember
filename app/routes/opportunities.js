import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('opportunity');
  },
  actions: {
    addOpportunity(){
      let opportunity = this.modelFor(this.routeName);
      opportunity.save().then((savedOpportunity) => {
        savedOpportunity.get('notes').invoke('save');
        savedOpportunity.get('contacts').invoke('save');
        this.transitionTo('opportunities.opportunity', savedOpportunity);
      });
    },
    delete(opportunity){
      opportunity.deleteRecord();
      opportunity.save();
    }
  }


});
