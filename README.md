# Ember date-fns

[![npm version](https://badge.fury.io/js/ember-date-fns.svg)](https://badge.fury.io/js/ember-date-fns)
[![CircleCI](https://circleci.com/gh/oskarrough/ember-date-fns.svg?style=svg)](https://circleci.com/gh/oskarrough/ember-date-fns)

Lightweight date helpers for your ember-cli application thanks to [date-fns](https://date-fns.org/). If all you need is to format a date, Ember date-fns will help you.

If you are looking for more features, see [ember-moment](https://github.com/stefanpenner/ember-moment) instead.

## Installation

In your ember-cli project, run either

`ember install ember-date-fns`

or

`yarn add ember-date-fns`

or

`npm install --save ember-date-fns`


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

### Exposing additional date-fns

`date-fns` provides many functions for manipulating dates. In order to reduce bundle size only `date-fns/distance_in_words_to_now` and `date-fns/format` helpers are included by default. However you can import any functions anywhere in your application.

Example:

```javascript
// app/components/some-component.js

import Ember from 'ember';
import endOfDay from 'date-fns/end_of_day';

// Your component code here...
```
