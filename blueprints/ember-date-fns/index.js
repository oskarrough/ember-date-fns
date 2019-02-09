/* eslint-env node */

module.exports = {
  description: 'Add `date-fns` to the consumer application',

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'date-fns', target: '^1.30.1' },
    ]);
  },
};
