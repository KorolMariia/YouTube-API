import axios from 'axios';import { ACCESS_KEY } from '../config/config';

const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com',
});

export const searchVideo = (query) => {
  return youtubeAPI.get(`/youtube/v3/search?`, {
    params: {
      key: ACCESS_KEY,
      q: query,
      part: 'snippet',
      type: 'video',
      maxResults: 15,
    },
  });
};
