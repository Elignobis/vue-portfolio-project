<template>
  <div class="projects">
    <ProjectDetail/>
    <Footer/>
  </div>
</template>

<script>
import ProjectDetail from '../components/ProjectDetail.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'HomeView',
  components: { ProjectDetail, Footer },
}
</script>