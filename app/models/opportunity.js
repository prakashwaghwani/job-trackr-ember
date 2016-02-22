import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  contacts: DS.hasMany('contact', { async: true }),
  notes: DS.hasMany('note', { async: true })
});
