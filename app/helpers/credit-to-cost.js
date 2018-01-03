import { helper } from '@ember/component/helper';

export function creditToCost(value/*, hash*/) {
  value = Number(value).toFixed(4) * 0.1;
  let dollars = Math.floor(value);
  let cents = Math.ceil(100 * (value - dollars)).toString().padStart(2, 0);
  dollars = dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${dollars}.${cents}`;
}

export default helper(creditToCost);
