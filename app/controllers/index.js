import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  // creditTotal: computed.sum('model.@each.creditCost', function(){
  //   return this.get('model').mapBy('creditCost');
  // }),
  // costTotal: computed.sum('model.@each.cost', function(){
  //   return this.get('model').mapBy('cost');
  // })

  creditTotal: computed('model.@each.creditCost', function(){
    return this.get('model').sum('creditCost');
  }),
  costTotal: computed.sum('model.@each.cost', function(){
    return this.get('model').sum('cost');
  })

});
