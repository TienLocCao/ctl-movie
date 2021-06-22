<template>
  <div className="result-card">
    <div className="poster-wrapper">
      <img
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
        :alt="movie.title + ' Poster'"
      />
      <div v-else className="filler-poster" />
    </div>
    
    <div className="info">
      <div className="header">
        <h3 className="title">{{movie.title}}</h3>
        <h4 className="release-date">
          <Moment format="YYYY">{{movie.release_date}}</Moment>
        </h4>
      </div>

      <div className="controls">
        <button
          className="btn"
          :disabled="watchlistDisabled()"
          @click="fetchWatchlist({status:'add', data:movie})"
        >
          Add to Watchlist
        </button>

        <button
          className="btn"
          :disabled="watchedDisabled()"
          @click="fetchWatched({status:'add', data:movie})"
        >
          Add to Watched
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    movie: Array,
  },
  setup(props) {
    const store = useStore();
    const watchlist = computed(() => store.state.saveMovie.watchlist);
    const watched = computed(() => store.state.saveMovie.watched);

    let storedMovie = () => { return watchlist.value.find((o) => o.id === props.movie.id);}
    let storedMovieWatched = () => { return watched.value.find((o) => o.id === props.movie.id);}
    
    const watchlistDisabled = () => {
      const result =  storedMovie()
      ? true
      : storedMovieWatched()
      ? true
      : false;
      return result;
    }
    const watchedDisabled = () => {
      const result = storedMovieWatched() ? true: false;
      return result;
    }

    const fetchWatchlist = (data)=>{
       store.dispatch('saveMovie/fetchWatchlist', data);
    };
    const fetchWatched = (data)=>{
       store.dispatch('saveMovie/fetchWatched', data);
    };
    return {
      watchlist,
      watched,

      storedMovie,
      storedMovieWatched,

      watchlistDisabled,
      watchedDisabled,

      fetchWatchlist,
      fetchWatched
    };
  },
};
</script>
