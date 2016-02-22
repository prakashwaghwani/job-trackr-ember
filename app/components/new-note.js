import Ember from 'ember';

export default Ember.Component.extend({
  // paramContent: this.get('content'),
  actions: {
    submit(){
      // debugger;
      let content=this.get('content');
      this.sendAction('action', content);
    }
  }
});
