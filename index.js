'use strict';

const WebpackDependencyPlugin = require('./lib/webpack-dependency-plugin');

module.exports = {
  name: 'ember-date-fns',
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/-ember-date-fns-bundle.js');
    this.import('vendor/-ember-date-fns-shims.js');
  },
  treeForVendor() {
    return new WebpackDependencyPlugin({
      outputName: 'ember-date-fns',
        expose: [
          'date-fns/format',
          'date-fns/distance_in_words_to_now',
        ]
    });
  }
};
