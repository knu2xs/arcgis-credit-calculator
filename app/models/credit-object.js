import DS from 'ember-data';
import { computed } from '@ember/object';

const _creditCost = 0.1;

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  creditRate: DS.attr('number'),
  unitRate: DS.attr('number'),
  units: DS.attr('number', { defaultValue: 0 }),

  rate: computed('creditRate', 'unitRate', function(){
    return Number(this.get('creditRate')) / Number(this.get('unitRate'));
  }),

  creditCost: computed('rate', 'units', function(){
    return this.get('rate') * this.get('units');
  }),

  cost: computed('creditCost', function(){
    return this.get('creditCost') * _creditCost;
  }),

});
