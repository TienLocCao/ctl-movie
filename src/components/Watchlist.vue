<template>
  <div className="movie-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">My Watchlist</h1>
        <span className="count-pill">
          {{ watchlistCount }}
          {{ watchlistCount === 1 ? "Movie" : "Movies" }}
        </span>
      </div>
      <template v-if="watchlist.length > 0">
        <div className="movie-grid">
          <template v-for="movie in watchlist" :key="movie.id">
            <MovieCard :movie="movie" type="watchlist" />
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
        const watchlist= computed(() => useStore().state.saveMovie.watchlist);
        const watchlistCount = computed(() => watchlist.value.length);
        return {
            watchlist,
            watchlistCount
        }
    }
};
</script>