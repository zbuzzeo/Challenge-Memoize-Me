'use strict';

const smartSelect = (() => {
  const cache = {};

  const querySelector = (query) => {
    const format = query.charAt(0) === '#' ? query : `#${query}`;

    if (format in cache) {
      return cache[format];
    }

    const selection = document.querySelector(format);
    cache[format] = selection;
    return selection;
  }

  return {
    superQuerySelector : querySelector
  }
})();
