<template>
    <div class="container mwidth min-vh-100" id="resume">
<div class="container d-flex flex-column justify-content-center contact-2">

      <!-- About Google Style -->

      <h1 class="text-center mb-5 text-white " > Work & Education
        <!-- <span>W</span><span>o</span><span>r</span><span>k</span><span>&nbsp;</span><span
          style="color: rgb(52,168,83);">&</span><span>&nbsp;</span><span>E</span><span>d</span><span>u</span><span>c</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>&nbsp;</span> -->
          <span
         class="svgicon"><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
        </span>
      </h1>
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4  class="text-center">Work Experience</h4>
<div class="timeline" >
            <div class="container-t left" v-for="(work, index) in getResume.work" :key="index">
              <div class="content">
<div class="container rounded my-5 py-1 con-hover" style="box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);">
            <h6> <strong>{{ work.nameOfOrg }}  - {{ work.period }} - {{ work.role }}</strong> </h6>
            <p>{{ work.description }}</p>
          </div>
              </div>
            </div>
          </div>
          </div>
           <div class="col-md-6">
            <h4  class="text-center">Education</h4>
            <div class="timeline" >
            <div class="container-t right" v-for="(educate, index) in getResume.education" :key="index">
              <div class="content">
<div class="container rounded my-5 py-1 con-hover" style="box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);">
            <h6> <strong>{{ educate.nameOfInst }}  - {{ educate.periodE }}</strong> </h6>
            <p>{{ educate.descriptionE }}</p>
          </div>
              </div>
            </div>
          </div>
          </div> 
        </div>
    </div>
    </div>
    </div>
   
</template>

<script>
export default {
    name: 'ResumeDetail',
    computed: {
      getResume() {
        return this.$store.state.resume
      }
    }
}
</script>

<style scoped>
.con-hover {
/* From https://css.glass */
background: rgba(255, 255, 255, 0.87);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.6px);
-webkit-backdrop-filter: blur(7.6px);
border: 1px solid rgba(255, 255, 255, 0.43);
}


.svgicon {
  color: white !important;
}


.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 191px;
  background-color: rgb(0, 0, 0);
  top: 5px;
  bottom: 0;
  left: 0;
  margin-left: -15px;
}


.container-t::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  right: -17px;
  background-color: white;
  border: 4px solid #000000;
  top: 3px;
  left: -21px;
  border-radius: 50%;
  z-index: 1;
}

.mwidth {
  margin-bottom: 5em;
}

</style>