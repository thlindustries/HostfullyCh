import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'https://hostfullychback-production.up.railway.app/',
});
