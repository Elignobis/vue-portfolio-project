<template>
    <div class="container">
<div class="container d-flex flex-column justify-content-center contact-2">

      <!-- About Google Style -->

      <h2 class="text-center mb-5 text-black" > Work & Education
        <!-- <span>W</span><span>o</span><span>r</span><span>k</span><span>&nbsp;</span><span
          style="color: rgb(52,168,83);">&</span><span>&nbsp;</span><span>E</span><span>d</span><span>u</span><span>c</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>&nbsp;</span> -->
          <span
         ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>
        </span>
      </h2>

      <div class="row">

        <!-- Work Section -->

        <div class="col-md-6">
          <h4  class="text-center">Work Experience</h4>
          <div class="timeline">
            <div class="container-t left">
              <div class="content">
<div class="container rounded my-5 py-1 con-hover" >
            <h6> <strong>Premier Foods - Dec, 2019 - Mar, 2021 - Sales Assistant</strong> </h6>
            <p>Represent the company to customers. Assist the delivery driver in managing customer transitions, ensuring
              invoices are completed and returned. Stocking and restocking products.</p>
          </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-t left">
              <div class="content">
<div class="container rounded my-5 py-1 con-hover" >
            <h6><strong>MasterCard Scholars Foundation UCT - Mar, 2020 - Dec, 2020 - Program Mentor</strong> </h6>
            <p>Peer mentored a second year MasterCard Scholar from the EBE faculty.</p>
          </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-t left">
              <div class="content">
                <div class="container rounded my-5 py-1 con-hover" >
            <h6><strong>Lain Transcriptions - Feb 2020 - September 2020 - IsiXhosa Translator and transcriber</strong>
            </h6>
            <p>Translated and transcribed various research study interviews from IsiXhosa to English.</p>
          </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-t left">
              <div class="content">
                <div class="container rounded my-5 py-1 con-hover" >
            <h6><strong>University of Cape Town - November, 2019 - January 2020 - Orientation Leader</strong> </h6>
            <p> Assisted in the organization, preparation, implementation, and evaluation of the 2020 Faculty of
              Humanities' orientation program.</p>
          </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-t left">
              <div class="content">
              <div class="container rounded my-5 py-1 con-hover" >
            <h6><strong>Shawco Education - Nov, 2018 - Jul, 2019 - Project Director</strong> </h6>
            <p>Responsible for the overall management of 1 of 13 projects under the Shawco Education sector.
              Coordinating and leading student mentors and tutors, liaised with schools and parents of the learner
              participants participates.</p>
          </div>
        </div>  
              </div>
            </div>
          </div>
          
          
          
          
          

        <!-- Education section -->
        <div class="col-md-6">
          <h4  class="text-center">Education</h4>
          <div class="container rounded-3 my-5 py-2 con-hover" >
            <h6><strong>Life Choices Coding Academy - Mar, 2022 - Present.</strong></h6>
            <p>I'm currently attending a six-month-long intensive codding bootcamp at Salesian Life Choices. We are
              learning different programming languages, databases and other vital technologies in order to be able to
              create responsive customer centric websites and applications.</p>
          </div>
          <div class="container rounded my-5 py-2 con-hover" >
            <h6><strong>Bachelor of Social Sciences at the University of Cape Town - 2017 - Dec, 2020</strong></h6>
            <p>I majored in Politics & governance, and Sociology. I held volunteering roles in the residences I lived in
              and participated in various volunteering organisations in the university</p>
          </div>
          <div class="container rounded my-5 py-2 con-hover" >
            <h6><strong>Matric at Esangweni Senior Secondary School - 2012 - November 2016.</strong></h6>
            <p>I was one of the top performing students in my cohort. Selected into the UCT 100-up project.</p>
          </div>
        </div>
      </div>

    </div>
    </div>
   
</template>

<script>
export default {
    name: 'ResumeDetail'
}
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 170px;
  background-color: white;
  top: 5px;
  bottom: 0;
  left: 0;
  margin-left: -3px;
}


.container-t::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #000000;
  top: 3px;
  left: -13px;
  border-radius: 50%;
  z-index: 1;
}

</style>