import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  today: computed('', function () {
    return new Date();
  }),
  lastChristmas: computed('', function () {
    return new Date('2016-12-24');
  })
});
