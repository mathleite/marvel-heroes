import http from './HttpService';

export default {
  list(offset, limit) {
    return http.get('characters', {
      params: {
        offset,
        limit,
      },
    }).then((response) => {
      return response.data.data;
    });
  },
};
