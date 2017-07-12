'use strict';

const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

module.exports = {
  name: 'ember-date-fns',
  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.import('vendor/-ember-date-fns-bundle.js');
    this.import('vendor/-ember-date-fns-shims.js');

    const config = app.options[this.name] || {};
    this.includedDateFns = config.includedDateFns || [];
  },
  treeForVendor() {
    const exposedFunctions = [
      'format',
      'distance_in_words_to_now'
    ].concat(this.includedDateFns);

    return new WebpackDependencyPlugin({
      outputName: 'ember-date-fns',
      expose: exposedFunctions.map(name => `date-fns/${name}`)
    });
  }
};
