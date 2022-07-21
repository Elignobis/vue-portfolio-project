<template>
  <div class="home">
    <HomeDetails/>
    <rooter-view/>
  </div>
</template>

<script>
import HomeDetails from '../components/HomeDetails.vue';


export default {
  name: 'HomeView',
  components: { HomeDetails },
}
</script>

<style scoped>
.home {
  height: 100vh;
  /* 
  background-image: radial-gradient(
    circle,
      rgba(206, 205, 228, 0.426) 0%,
    rgba(191, 191, 250, 0.392) 42%,
    rgba(164, 226, 238, 0.473) 100%
    ), url("../assets/Images/joshua-sortino-LqKhnDzSF-8-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; */
  
}

/* .home{
  width: 100%;
  height: 100vh;
  background: #000;
  display:  block; 
} */
</style>
