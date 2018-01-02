import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  tagName: 'tr',

  unitCount: '',
  creditCost: 0.1,

  init() {
    this._super(...arguments);
  },

  creditCount: computed('unitCount', function(){
    return (Number(this.get('creditObject.creditRate')) * Number(this.get('unitCount'))).toFixed(4);
  }),
  cost: computed('unitCount', function() {
    return (Number(this.get('creditObject.creditRate')) * Number(this.get('unitCount')) * Number(this.get('creditCost'))).toFixed(2);
  }),

});
