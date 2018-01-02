import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  creditTotal: computed.sum('model.@each.units', function(){
    return this.get('model').mapBy('creditCost');
  }),
  costTotal: computed.sum('model.@each.units', function(){
    return this.get('model').mapBy('cost');
  })

});
