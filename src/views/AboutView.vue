<template>
  <div class="about" id="about">
    <WelcomeHome/>
    <Footer/>
  </div>
</template>

<script>
import WelcomeHome from '../components/WelcomeHome.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'HomeView',
  components: { WelcomeHome, Footer },
}
</script>
