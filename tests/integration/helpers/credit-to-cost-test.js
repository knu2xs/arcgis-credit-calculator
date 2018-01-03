import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('credit-to-cost', 'helper:credit-to-cost', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{credit-to-cost inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
