import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  attachment: DS.attr('file'),
  date: DS.attr('string'),
  time: DS.attr('string'),
  created_at: DS.attr('date'),
  opportunity: DS.belongsTo('opportunity')
});
