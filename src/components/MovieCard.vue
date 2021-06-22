<template>
  <div className="movie-card">
    <div className="overlay" @click="gotoMovie(movie.id, movie.src)">
      <button class="btn-watch-now">Watch now</button>
    </div>
    <img
      v-lazyload
      :data-src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
      :alt="movie.title + 'Poster'"
    />
    <MovieControls :type="type" :movie="movie" />
  </div>
</template>

<script>

import MovieControls from "./MovieControls";
import {useRouter} from 'vue-router'

import lazyload from './../directives/lazyload';

export default {
  components: {
    MovieControls,
  },
  props: {
    type: String,
    movie: Array,
  },
  directives: {
    lazyload
  },
  setup() {
    const router = useRouter();

    const gotoMovie = (id, src) => {
      const path = `/${id}/${src}`;
      router.push({ path: path });
    }
    return {
      gotoMovie,
    }
  }
};
</script>
