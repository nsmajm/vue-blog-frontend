import axios from 'axios';

export const http = axios.create({
  baseURL: `https://blog-api.nasimanjum.dev/api/api/`,
})