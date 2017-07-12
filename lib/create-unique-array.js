'use strict';

const createUniqueArray = array => {
  const set = new Set(array);
  return Array.from(set.values());
};

module.exports = createUniqueArray;
