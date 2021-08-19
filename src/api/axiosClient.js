import axios from 'axios';

const MainApi = axios.create({
baseURL: 'https://api.themoviedb.org',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default MainApi;