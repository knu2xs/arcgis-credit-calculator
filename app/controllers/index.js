import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  creditArray: computed('model.@each.creditCost', function(){
    return this.get('model').mapBy('creditCost');
  }),
  creditTotal: computed.sum('creditArray')

});
