const getDefaultState = () => {
  return {
    allMovie: [],
    
    watchlist: [],
    watched: [],

    watchListLocal: localStorage.getItem("watchlist") || "",
    watchedLocal: localStorage.getItem("watched") || "",
  };
};
const state = getDefaultState();
const getters = {
  allMovie: (state) => state.allMovie,
  watchlist: (state) => state.watchlist,
  watched: (state) => state.watched,
};
const actions = {
  fetchWatchlist({ commit }, data) {
    if (data.status === "add") {
      commit("addMovieToWatchList", data.data);
    } else {
      commit("removeMovieFromWatchlist", data.data);
    }
  },
  fetchWatched({ commit }, data) {
    if (data.status === "add") {
      commit("addMovieToWatched", data.data);
    } else if (data.status === "moveToWatchlist") {
      commit("moveToWatchlist", data.data);
    } else {
      commit("removeMovieFromWatched", data.data);
    }
  },
  dataLocalStorage({commit}, data) {
    state.allMovie = [];
    if(data.watchlist) {
      commit("fetchDataLocalStogare", {name: "watchlist", data:JSON.parse(data.watchlist)});
    }
    if(data.watched) {
        commit("fetchDataLocalStogare", {name: "watched", data:JSON.parse(data.watched)});
    }
  }
};

const mutations = {
  addMovieToWatchList(state, data) {
    state.allMovie = [
      ...new Set(state.allMovie.map(o => JSON.stringify(o)))
    ].map(s => JSON.parse(s));


    state.watchlist = [{...data,src: convertToSlug(data.original_title)}, ...state.watchlist];
    localStorage.setItem(
      "watchlist",
      JSON.stringify(state.watchlist)
    );
  },

  removeMovieFromWatchlist(state, data) {
    state.allMovie = state.allMovie.filter((movie) => movie.id !== data);

    state.watchlist = state.watchlist.filter((movie) => movie.id !== data);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(state.watchlist)
    );
  },

  addMovieToWatched(state, data) {
    state.allMovie = [
      ...new Set(state.allMovie.map(o => JSON.stringify(o)))
    ].map(s => JSON.parse(s));

    state.watchlist = state.watchlist.filter((movie) => movie.id !== data.id);
    state.watched = [{...data,src: convertToSlug(data.original_title)}, ...state.watched];
    localStorage.setItem(
      "watchlist",
      JSON.stringify(state.watchlist)
    );
    localStorage.setItem(
      "watched",
      JSON.stringify(state.watched)
    );
  },

  removeMovieFromWatched(state, data) {
    state.allMovie = state.allMovie.filter((movie) => movie.id !== data);

    state.watched = state.watched.filter((movie) => movie.id !== data);
    localStorage.setItem(
      "watched",
      JSON.stringify(state.watched)
    );
  },

  moveToWatchlist(state, data) {
    state.watchlist = [{...data,src: convertToSlug(data.original_title)}, ...state.watchlist];
    state.watched = state.watched.filter((movie) => movie.id !== data.id);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(state.watchlist)
    );
    localStorage.setItem(
      "watched",
      JSON.stringify(state.watched)
    );
  },
  fetchDataLocalStogare(state, data){
    if(data.name === "watchlist") {
      state.watchlist = data.data;
      
      state.allMovie = [...data.data, ...state.allMovie];
    }
    if(data.name === "watched") {
      state.watched = data.data;
      
       state.allMovie = [...data.data, ...state.allMovie];
    }
 }
};

function convertToSlug(Text) {
  return Text
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'');
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
