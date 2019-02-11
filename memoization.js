'use strict';

const smartSelector = (() => {
  const getElementById = ((id) => {
    let cache = {};

    return (id) => {
      if (id in cache) {
        return cache[id];
      } else {
        let select = document.getElementById(id);

        cache[id] = select;
        return select;
      }
    }
  })();

  const querySelector = ((query) => {
    let cache = {};

    return (query) => {
      if (query in cache) {
        return cache[query];
      } else {
        let select = document.querySelector(query);

        cache[query] = select;
        return select;
      }
    }
  })();
  
  return {
    superGetId : getElementById,
    superQuery : querySelector
  }
})();

