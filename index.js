'use strict';

const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

module.exports = {
  name: 'ember-date-fns',

  included(app) {
    this._super.included.apply(this, arguments);

    this.import('vendor/-ember-date-fns-bundle.js');
    this.import('vendor/-ember-date-fns-shims.js');

    let config = app.options[this.name] || {};
    this.includedDateFns = config.includedDateFns || [];
  },

  treeForVendor() {
    let exposedFunctions = [
      'format',
      'distance_in_words_to_now'
    ]
    .concat(this.includedDateFns)
    .map(name => `date-fns/${name}`);

    return new WebpackDependencyPlugin({
      outputName: 'ember-date-fns',
      expose: [...new Set(exposedFunctions)]
    });
  }
};
