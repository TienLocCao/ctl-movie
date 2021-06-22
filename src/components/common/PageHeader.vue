<template>
  <div id="page-header">
    <div @click="toggle" class="toggleNav" >
      <div v-bind:class="navBarToggle ? 'arrow-left': 'left-align'" class="icon"></div>
    </div>
    <div class="logo">HELLO</div>
    <div @click="toggle" class="bg-opacity"  v-bind:class="{ 'active': navBarToggle }"></div>
    <nav v-bind:class="{ 'active': navBarToggle }">
        <div class="narbar-nav"  @click="toggle">
            <router-link to="/">
                <span>Watch List</span>
            </router-link>
            <router-link to="/watched">
                <span>Watched</span>
            </router-link>
            <router-link to="/add">
                <span>+ Add</span>
            </router-link>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
    name: 'page-header',
    data() {
        return {
            navBarToggle: false
        };
    },
    methods: {
        toggle: function () {
            this.navBarToggle = !this.navBarToggle;
        }
    }
}
</script>
