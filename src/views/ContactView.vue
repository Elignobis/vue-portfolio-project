<template>
  <div class="contact">
    <ContactForm/>
    <Footer/>
  </div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ContactView',
  components: { ContactForm, Footer },
}
</script>