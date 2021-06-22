<template>
  <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">My Watched</h1>
        <span className="count-pill">
          {{watchedCount}} {{watchedCount === 1 ? "Movie" : "Movies"}}
        </span>
      </div>
      <template v-if="watched.length > 0">
          <div className="movie-grid">
            <template v-for="movie in watched" :key="movie.id">
              <MovieCard :movie="movie" type="watched" />
            </template>
          </div>
        </template>
        <template v-else>
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        </template>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
import {computed } from "vue";
import { useStore } from 'vuex';
export default {
    components: {
        MovieCard
    },
    setup(){
        const watched= computed(() => useStore().state.saveMovie.watched);
        const watchedCount = computed(() => watched.value.length);
        return {
            watched,
            watchedCount
        }
    }
};
</script>