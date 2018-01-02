import { helper } from '@ember/component/helper';

export function formatFloatingPoint(num/*, hash*/) {
  const integer = Math.floor(num);
  const decimal = Math.floor((num - integer) * 10000).toString().padStart(4, 0);
  return `${integer}.${decimal}`;
}

export default helper(formatFloatingPoint);
