import Ember from 'ember';

const {Controller, computed} = Ember;

export default Controller.extend({
  today: computed('', function () {
    return new Date();
  }),
  lastChristmas: computed('', function () {
    return new Date('2016-12-24');
  })
});
