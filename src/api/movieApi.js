import axiosClient from "./axiosClient";

const movieApi = {
  search: (value) => {
    // const url = `/3/search/movie?api_key=${process.env.VUE_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${value}`;
    const url = `/3/search/movie?api_key=3ceee4a2e8da7a79f7d0bf79c7a3bc6f&language=en-US&page=1&include_adult=false&query=${value}`;
    return axiosClient.get(url);
  }
}

export default movieApi;