# Ember date-fns

[![CircleCI](https://circleci.com/gh/oskarrough/ember-date-fns.svg?style=svg)](https://circleci.com/gh/oskarrough/ember-date-fns)

Date helpers for your ember-cli application thanks to [date-fns](https://date-fns.org/). If all you need is to format a date, Ember date-fns will help you.

If you are looking for more features, this is not yet the place. See [ember-moment](https://github.com/stefanpenner/ember-moment). But know that moment.js alone adds 2-300 kb to your application whereas date-fns is a few kb.

## Installation

In your ember-cli project, run either

`yarn add ember-date-fns`

or

`npm install ember-date-fns --save-dev`

## How to use

Now you'll have the following helpers available.

```hbs
{{date-format date "D. MMM YYYY"}}
```

It accepts both a date object, string or timestamp. See https://date-fns.org/docs/format.

## Contributing

The idea with this project is to expose the most useful date-fns helpers as Ember helpers. Currently only `format` is supported. Helpers will follow the format `date-helper-name`.

* `git clone <repository-url>` this repository
* `cd ember-date-fns`
* `npm install`
* `bower install`
* `npm test`
* `npm start`

