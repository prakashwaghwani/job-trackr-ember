import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick: function() {
    alert("DoubleClickableComponent was clicked!");
    Ember.Logger.info("DoubleClickableComponent was clicked!");
    return true;
  }
});