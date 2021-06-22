import {createStore} from "vuex"

import movie from "./modules/movie";
import saveMovie from "./modules/save-movie";

export default createStore({
  modules: {
    movie,
    saveMovie
  },
  strict: false
});
