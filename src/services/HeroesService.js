import HeroesMock from '@/mocks/heroes.mock.json';

export default {
  list() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(HeroesMock);
      }, 1500);
    });
  },
};
