import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      let content=this.get('content');
      this.sendAction('action', content);
      this.set('content', "");
      this.sendAction('clearNoteForm');
    }
  }
});
