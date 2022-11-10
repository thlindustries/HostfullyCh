import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'https://thlbooking.herokuapp.com/',
});
