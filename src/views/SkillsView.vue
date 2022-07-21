<template>
  <div class="Skills">
    <SkillCards/>
    <Footer/>
  </div>
</template>

<script>
import SkillCards from '../components/SkillCards.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'SkillsView',
  components: { SkillCards, Footer },
}
</script>