import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  creditRate: DS.attr('number'),
  unitMeasure: DS.attr('string'),
  unitRate: DS.attr('number'),
  units: DS.attr('number', { defaultValue: '' }),

  rate: computed('creditRate', 'unitRate', function(){
    return Number(this.get('creditRate')) / Number(this.get('unitRate'));
  }),

  creditCost: computed('rate', 'units', function(){
    return this.get('rate') * this.get('units');
  })

});
