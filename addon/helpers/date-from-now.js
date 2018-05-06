import { helper } from '@ember/component/helper';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
  Return the distance between the given date and now in words.
  @method dateFromNow
  @static
  @for date-fns/date-fom-now
  @param {Date|String|Number} date the given date
  @param {Object} options the object with options
  @return {String} the distance in words
  @public
*/
export function dateFromNow([date], options = {}) {
  return distanceInWordsToNow(date, options);
}

export default helper(dateFromNow);
