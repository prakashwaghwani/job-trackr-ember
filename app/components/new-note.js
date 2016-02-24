import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      let content=this.get('content');
      let attachment=this.get('attachment');
      this.sendAction('action', content, attachment);
      this.set('content', "");
      this.sendAction('clearNoteForm');
    }
  }
});
