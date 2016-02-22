import Ember from 'ember';

export function formatDate(datetime) {
  var datetime = new Date(datetime);
  var date = datetime.toDateString() + " " + datetime.toLocaleTimeString()
  return date
}

export default Ember.Helper.helper(formatDate);
