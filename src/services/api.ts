import axios from 'axios';
import md5 from 'md5';

const publicKey = '5c9b7afe0ceb1cc660e98595df54f06e'
const privateKey = 'b1477c6084c8a478d8c3ca1d54e78eccded182a3';

const time = Number(new Date());

const hash = md5(time + privateKey+publicKey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash
  }
});

export default api