import { helper } from '@ember/component/helper';

export function formatCurrency(value) {

  let dollars = Math.floor(value);
  let cents = Math.ceil(100 * (value - dollars)).toString().padStart(2, 0);

  return `${dollars}.${cents}`;
}

export default helper(formatCurrency);
