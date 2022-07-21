<template>
  <div class="testimonials">
    <Testimonial/>
    <Footer/>
  </div>
</template>

<script>
import Testimonial from '../components/Testimonial.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'TestimonialsView',
  components: { Testimonial, Footer },
}
</script>