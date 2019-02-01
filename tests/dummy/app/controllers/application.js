import Controller from '@ember/controller';
import { computed } from '@ember/object';
import getISOYear from 'date-fns/get_iso_year';

export default Controller.extend({
  today: computed(function () {
    return new Date();
  }),

  lastChristmas: computed(function () {
    return new Date('2016-12-24');
  }),

  year: computed(function() {
    return getISOYear(new Date());
  })
});
