<template>
  <div class="add-page">
    <div class="container">
      <div class="add-content">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Search for a movie"
            @keyup="onChange"
            v-model="query"
          />
        </div>
        <template v-if="dataSearch.length > 0 ">
          <ul class="results">
            <li v-for="movie in dataSearch" :key="movie.id">
              <ResultCard :movie="movie" />
            </li>
          </ul>
        </template>
        <template v-else>
          <p class="results notification">No Data!</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ResultCard from "./ResultCard";
import {computed, ref, onUnmounted } from "vue";
import { useStore } from 'vuex';
export default {
  components: {
    ResultCard,
  },
  setup() {
    const store = useStore();
    const query = ref("");
    const dataSearch= computed(() => store.state.movie.listMovie);
    const loading= computed(() => store.state.movie.loading);
   
    let onChange = () => {
      if(query.value) {
        store.dispatch('movie/fetchMovie', query.value);
      } else {
        store.dispatch('movie/setDefaultState');
      }
    }
    onUnmounted (() => {
       store.dispatch('movie/setDefaultState');
    });
    return {
      query,
      onChange,
      dataSearch,
      loading,
    };
  },
};
</script>