<template>
  <div class="watch-now">
    <div class="watch-now__top">
      <div class="content-left">
        <img
          :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
          :alt="movie.title + 'Poster'"
        />
      </div>
      <div class="content-right">
        <div class="movie-detai">
          <h1 class="entry-title">{{ movie.title }}</h1>
          <p class="org_title">{{ movie.original_title }}</p>
          <p class="released">
            <span class="released">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              {{ movie.release_date }}
            </span>
          </p>
          <p class="item-content">
            {{ movie.overview }}
          </p>
          
          <p class="vote_average">
            <i class="fa fa-star yellow" aria-hidden="true"></i>{{ movie.vote_average }}/10
          </p>

          <div class="watch-now__button">
              <button class="btn btn-back" @click="goBack">Back</button>
              <button class="btn btn-success" @click="toWatch">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const allMovie = computed(() => useStore().state.saveMovie.allMovie);
    const movie = ref([]);

    onMounted(() => {
      if(!allMovie.value.find((f) => f.id === +route.params.id && f.src === route.params.src)) {
        router.push("/404");
        return;        
      }
      movie.value = allMovie.value.find((f) => f.id === +route.params.id && f.src === route.params.src);
    });

    const goBack = () => {
      window.history.state.back ? router.go(-1) : router.push({path: "/"});
    }

    const toWatch = () => {
        alert("Not yet!")
    }
    return {
      allMovie,
      movie,

      goBack,
      toWatch,
    };
  },
};
</script>