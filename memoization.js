'use strict';

const smartSelect = (() => {
  const cache = {};

  const querySelector = (query) => {
    const format = query.charAt(0) === '#' ? query : `#${query}`;
    const selection = document.querySelector(format);

    if (format in cache) {
      return cache[format];
    }

    cache[format] = selection;
    return selection;
  }

  return {
    superQuery : querySelector
  }
})();

console.log(smartSelect.superQuery('main'));
console.log(smartSelect.superQuery('main'));
console.log(smartSelect.superQuery('secondMain'));
console.log(smartSelect.superQuery('#secondMain'));
