import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  attachment: DS.attr('file'),
  opportunity: DS.belongsTo('opportunity')
});
