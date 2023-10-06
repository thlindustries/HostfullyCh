import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'https://pomodoro.thlinc.com/api',
});
