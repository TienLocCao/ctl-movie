<template>
  <div className="inner-card-controls">
    <template v-if="type === 'watchlist'">
      <button className="ctrl-btn" @click="fetchWatched('add', movie)">
        <i className="fa fa-eye"></i>
      </button>

      <button className="ctrl-btn" @click="fetchWatchlist('remove', movie.id)">
        <i className="fa-fw fa fa-times"></i>
      </button>
    </template>
    <template v-if="type === 'watched'">
      <button
        className="ctrl-btn"
        @click="fetchWatched('moveToWatchlist', movie)"
      >
        <i className="fa fa-eye-slash"></i>
      </button>

      <button className="ctrl-btn" @click="fetchWatched('remove', movie.id)">
        <i className="fa-fw fa fa-times"></i>
      </button>
    </template>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
    props: {
        type: String,
        movie: Array
    },
    setup() {
         const store = useStore();
        const fetchWatchlist = (status, data) => {
            store.dispatch('saveMovie/fetchWatchlist', {status,data});
        }
        const fetchWatched = (status, data) => {
            store.dispatch('saveMovie/fetchWatched', {status,data});
        }
        return {
            fetchWatchlist,
            fetchWatched
        }
    }
}
</script>