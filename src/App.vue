<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation/>
      
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';


export default {
  name: "App",
  components: { Navigation },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style>
body {
  background: rgb(206, 205, 228);
  background: radial-gradient(
    circle,
    rgba(206, 205, 228, 1) 0%,
    rgba(191, 191, 250, 1) 42%,
    rgb(164, 226, 238) 100%
  );
}
</style>
