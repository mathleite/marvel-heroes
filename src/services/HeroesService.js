import http from './HttpService';

const CHARACTERS_ROUTE = 'characters';

export default {
  list(offset, limit, nameStartsWith) {
    let params = {
      offset,
      limit,
    };

    if (nameStartsWith) {
      params = {
        ...params,
        nameStartsWith,
      }
    }
    return http.get(CHARACTERS_ROUTE, { params }).then(response => response.data.data);
  },
  fetchHeroComics(heroId) {
    const COMICS_ROUTE = `${CHARACTERS_ROUTE}/${heroId}/comics`;
    return http.get(COMICS_ROUTE)
      .then(response => response.data.data.results);
  },
};
