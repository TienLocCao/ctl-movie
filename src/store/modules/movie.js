// import { createStore } from 'vuex'
import movieApi from "./../../api/movieApi";

const getDefaultState = () => {
  return {
    listMovie: [],
    loadding: false,
    error: false
  }
};
const state = getDefaultState();
const getters = {
  listMovie: state => state.listMovie,
  loadding: state => state.loadding,
  error: state => state.error,
};
const actions = {
  fetchStart({ commit }, data) {
    commit("statusLoading", data);
  },
  async fetchMovie({ commit }, data) {
    await movieApi.search(data)
      .then(response => {
        commit("fetchSucceed", response.data);
      })
      .catch(error => {
        commit("fetchFaild", error.response.data);
      });
  },
  setDefaultState({ commit }) {
    commit("resetState");
  },
};

const mutations = {
  statusLoading(state, data) {
    state.loading = data;
  },
  fetchSucceed(state, data) {
    state.listMovie = data.results;
    state.loading = false;
  },
  fetchFaild(state) {
    state.listMovie = [];
    state.loading = false;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};

export default({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
})