<template>

  <div class="container contact-2 min-vh-100 mb-5 mb-custom" id="testimonials">


      <!-- testimonials Google Style -->

      <h1 class="text-center my-5 text-white">Testimonials
        <!-- <span>T</span><span>e</span><span>s</span><span>t</span><span>i</span><span>m</span><span>o</span><span>n</span><span>i</span><span>a</span><span>l</span><span>s</span><span>&nbsp;</span> -->
        
        <span><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"/></svg></span>
      </h1>

      <!-- Carousel -->

      <div class="container text-black text-center">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          
          <div class="carousel-inner pb-5">

   
      <div class="container py-3">
          <div class="row">
            <div class="col-md-6 my-4" v-for="(testimonial, index) in getTestimonials" :key="index">
              <div class="testimonial carousel-item active" >
                    <div class="intro-image ">
                        <img class="myimage img-fluid" :src="testimonial.refImg" alt="Hannah Dalwai's image on testimonial carousel" >
                    </div>
                    <div class="intro-quote">
                      <div class="intro-quote-content">
                          <blockquote>
                            <p>{{ testimonial.testimonialDesc }}</p>
                            <cite>{{ testimonial.refName }}, <strong>{{ testimonial.refTitle }}</strong></cite>
                          </blockquote>
                          
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    
            
          
          </div>
        </div>
      </div>
      <div>

      </div>
      
    </div>


    
                          
                    
</template>

<script>
export default {
    name: 'Testimonials',
    computed: {
      getTestimonials() {
        return this.$store.state.testimonials
      }
    }
}
</script>

<style scoped>
img {
    
    width:  300px;
    height: 300px;
    object-fit: cover;
    object-position: 0 0;
}


.mb-custom {
  margin-bottom: 100px !important;
}


 .testimonial {
        padding-bottom: 1rem;
        position: relative;
    }
    .intro-image {
        width: 60%;
        margin-bottom: 2rem;
        margin-left: 1rem;
        
    }
    .intro-image img {
        border-radius: 10px;
    }
    .intro-quote {
        width: calc(100% - 4rem);
        position: absolute;
        bottom: 0;
        left: 3rem;
        background-color: white;
        filter: drop-shadow(0 16px 24px rgba(0, 0, 0, .07)) drop-shadow(0 6px 30px rgba(0, 0, 0, .06)) drop-shadow(0 8px 10px rgba(0, 0, 0, .1));
        border-radius: 10px;
    }
    
    blockquote {
        margin: 1em 0;
        line-height: 1.45;
        position: relative;
        color: #383838;
        padding-left: 4rem;
        padding-right: 2rem;
    }
    
    blockquote:before {
        font-family: Georgia, serif;
        display: block;
        padding-left: 1rem;
        content: "\201C";
        font-size: 80px;
        position: absolute;
        left: 0;
        top: -20px;
        color: #b2b2b2;
    }
    
    blockquote p::after {
        font-family: Georgia, serif;
        content: " \201D";
    }
    
    blockquote cite {
        color: #999999;
        font-size: 14px;
        display: block;
        margin-top: 5px;
    }
    
    blockquote cite::before {
        content: "– "
    }
    
    @media (max-width: 1199.98px) {
        .testimonial {
            max-width: 450px;
            filter: drop-shadow(0 16px 24px rgba(0, 0, 0, .07)) drop-shadow(0 6px 30px rgba(0, 0, 0, .06)) drop-shadow(0 8px 10px rgba(0, 0, 0, .1));
        }
        .intro-image {
            margin: 0;
            width: initial;
        }
        .intro-image img  {
            border-radius: 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .block {
            background-color: initial;
        }
        .intro-quote {
            border-radius: inherit;
            position: initial;
            width: initial;
            padding: 1rem 0;
            filter: initial;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        blockquote {
            margin: 0;
            padding-right: 2rem;
        }
    }

</style>