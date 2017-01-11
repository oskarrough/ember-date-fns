// To use ember-browserify in an ember-cli addon it's
// currently required to import from the /app folder
// BEFORE you import the same module in the /addon folder.
import format from 'npm:date-fns/format';

export { default, dateFormat } from 'ember-date-fns/helpers/date-format';
