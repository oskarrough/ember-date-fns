import Ember from 'ember';
import distanceInWordsToNow from 'npm:date-fns/distance_in_words_to_now';

// Takes a date (object or number) and returns "time ago"
export function dateFromNow([date], options) {
  options = options || {};
  let dateFromNow = distanceInWordsToNow(date, options);
	return `${dateFromNow}`;
}

export default Ember.Helper.helper(dateFromNow);

