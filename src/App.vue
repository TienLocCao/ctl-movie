<template>
  <div>
    <div id="nav" v-if="!$route.meta.public">
      <PageHeader/>
    </div>
    <div class="page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import "./assets/styles/reset.css";
import "./assets/styles/style.css";

import PageHeader from "@/components/common/PageHeader";
import { useStore } from "vuex";
import { onMounted } from "vue";

import MainApi from './api/axiosClient';
export default {
  components: {
    PageHeader,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      localStorage.length > 0 &&
        store.dispatch("saveMovie/dataLocalStorage", localStorage);
    });
    MainApi.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        if (!error.response) {
          window.location.reload();
        } else {
           return Promise.reject(error);
        }
      }
     )

    return {
      onMounted,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
