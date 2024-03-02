import axios from 'axios';

export const http = axios.create({
  baseURL: `https://vue-blog-backend-git-main-nsmajm.vercel.app/api/`,
})