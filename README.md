# Ember date-fns

[![CircleCI](https://circleci.com/gh/oskarrough/ember-date-fns.svg?style=svg)](https://circleci.com/gh/oskarrough/ember-date-fns)

Date helpers for your ember-cli application thanks to [date-fns](https://date-fns.org/). If all you need is to format a date, Ember date-fns will help you.

If you are looking for more features, this is not yet the place. See [ember-moment](https://github.com/stefanpenner/ember-moment). But know that moment.js alone adds 2-300 kb to your application whereas date-fns is a few kb.

## Installation

In your ember-cli project, run either

`yarn add ember-date-fns`

or

`npm install ember-date-fns --save`
  
## Available helpers

All helpers map to the date-fns function of the same name.

+ [`date-format`](#date-format)
+ [`date-from-now`](#date-from-now)

## Usage

### `date-format`
Like any date-fns method accepts both a date object, string or timestamp. [Docs](https://date-fns.org/docs/format).

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

* `git clone <repository-url>` this repository
* `cd ember-date-fns`
* `yarn`
* `bower install`
* `yarn test`
* `yarn start`

