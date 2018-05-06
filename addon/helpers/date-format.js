import { helper } from '@ember/component/helper';
import format from 'date-fns/format';

// Give it a date string or object first,
// and a string to format it.
export function dateFormat(params) {
  let defaultFormat = 'D. MMM YYYY';
  let date = params[0];
  let formatString = params[1] || defaultFormat;
  return format(date, formatString);
}

export default helper(dateFormat);
