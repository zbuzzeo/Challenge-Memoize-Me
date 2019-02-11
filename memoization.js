'use strict';

const smartSelect = (() => {
  let cache = {};

  const querySelector = (query) => {
    let query = query.charAt(0) === '#' ? query : `#${query}`;
    let selection = document.querySelector(query);

    if (query in cache) {
      console.log('Checking cache..');
      return cache[query];
    }

    console.log('Running querySelector');
    cache[query] = selection;
    return selection;
  }

  return {
    superQuery : querySelector
  }
})();

smartSelect.superQuery('main');
smartSelect.superQuery('main');
smartSelect.superQuery('secondMain');
