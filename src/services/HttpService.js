import axios from 'axios';

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: 1,
    apikey: '8387b2f04c670b98d3c45a9ac6b5220d',
    hash: '0a432510b1368824cf02d321e9636e58',
  },
});
