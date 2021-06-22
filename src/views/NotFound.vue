<template>
  <v-app>
    <div class="page-error">
      <div class="text-center">
        <h1>404</h1>
        <h2 class="my-4">Sorry, page not found</h2>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped lang="css">
h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #fff;
  text-shadow: rgba(255, 255, 255, 0.3) 1px 1px,
    rgba(255, 255, 255, 0.2) 2px 2px, rgba(255, 255, 255, 0.3) 3px 3px;
}
</style>
