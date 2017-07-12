# Ember date-fns

[![npm version](https://badge.fury.io/js/ember-date-fns.svg)](https://badge.fury.io/js/ember-date-fns)
[![CircleCI](https://circleci.com/gh/oskarrough/ember-date-fns.svg?style=svg)](https://circleci.com/gh/oskarrough/ember-date-fns)

Lightweight date helpers for your ember-cli application thanks to [date-fns](https://date-fns.org/). If all you need is to format a date, Ember date-fns will help you.

If you are looking for more features, see [ember-moment](https://github.com/stefanpenner/ember-moment) instead.

## Installation

In your ember-cli project, run either

`yarn add ember-date-fns ember-browserify`

or

`npm install ember-date-fns ember-browserify --save`

Note: ember-browserify must be installed as well.
  
## Available helpers

All helpers map to the date-fns function of the same name.

+ [`date-format`](#date-format)
+ [`date-from-now`](#date-from-now)

## Usage

### `date-format`

Uses [format](https://date-fns.org/docs/format) to format a date object, string or timestamp.

```hbs
{{date-format date "D. MMM YYYY"}}
```

### `date-from-now`

Uses [distanceInWordsToNow](https://date-fns.org/docs/distanceInWordsToNow) to return "time ago". By default no suffix is added.

```hbs
{{date-from-now date addSuffix=true}}
```

## Contributing

The idea with this project is to expose the most useful date-fns helpers as Ember helpers. Currently only `format` is supported. Helpers will follow the format `date-helper-name`.

* `git clone git@github.com:oskarrough/ember-date-fns.git` 
* `cd ember-date-fns`
* `yarn`
* `bower install`
* `yarn test`
* `yarn start`

