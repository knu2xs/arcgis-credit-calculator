import { helper } from '@ember/component/helper';

export function formatFloatingPoint(value/*, hash*/) {

  let integer = Math.floor(value);
  let decimal = Math.ceil(100 * (value - integer)).toString().padStart(4, 0);
  integer = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${integer}.${decimal}`;
}

export default helper(formatFloatingPoint);
