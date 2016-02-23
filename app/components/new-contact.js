import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      // debugger;
      let name=this.get('name');
      let phone=this.get('phone');
      let email=this.get('email');
      this.sendAction('action',name, phone, email);
    }
  }
});
