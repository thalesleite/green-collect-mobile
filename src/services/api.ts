import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.136.197:3333'
});

export default api;