import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opportunity-forms', 'Integration | Component | opportunity forms', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{opportunity-forms}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#opportunity-forms}}
      template block text
    {{/opportunity-forms}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
