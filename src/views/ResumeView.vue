<template>
  <div class="resume">
    <ResumeDetail/>
    <Footer/>
  </div>
</template>

<script>
import ResumeDetail from '../components/ResumeDetail.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ResumeView',
  components: { ResumeDetail, Footer },
}
</script>