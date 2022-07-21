<template>

  <div class="container contact-2">

      <!-- testimonials Google Style -->

      <h2 class="text-center my-5 text-black">Testimonials
        <!-- <span>T</span><span>e</span><span>s</span><span>t</span><span>i</span><span>m</span><span>o</span><span>n</span><span>i</span><span>a</span><span>l</span><span>s</span><span>&nbsp;</span> -->
        
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"/></svg></span>
      </h2>

      <!-- Carousel -->

      <div class="container text-black text-center">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1"
              class="nav-circle active" aria-current="true"></button>
            <button id="nav-circle-center" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1" aria-label="Slide 2" class="nav-circle"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
              class="nav-circle"></button>
          </div>
          <div class="carousel-inner pb-5">

            <div class="carousel-item active">
              <img class="myimage" src="../assets/Images/joel3.jpg" alt="Joel Mukanya's image on testimonial carousel">
              <h5 class="my-3">Joel Mukanya - Lecture Academic</h5>
              <p class="text-wrap"><em>Sibongile is a well-behaved, outstanding, self-motivated and helpful person.
                  Sibongile works well with team and do well working alone, he always submit his work on time which is
                  very functional. I will suggest you to hire him on the spot</em></p>
            </div>
            <div class="carousel-item">
              <img class="myimage" src="#" alt="Hannah Dalwai's image on testimonial carousel">
              <h5 class="my-3">Hannah Dalwai - Lecture Assistant</h5>
              <p class="text-wrap"><em>Sibongile is a diligent and driven individual with a keen eye for design. He
                  is meticulous and always meets his deadlines in a timely manner. He will be a valuable asset to any
                  team lucky enough to have him.</em></p>
            </div>
            <div class="carousel-item">
              <div class="carousel-con-custom">
                <img class="myimage" src="#"
                  alt="Amanda Gudlwa's profile image on testimonial carousel">
                <h5 class="my-3">Amanda Gudlwa - Peer</h5>
                <p class="text-wrap"><em>Sibongile is a really great developer, always learning and in the forefront of
                    new ideas and innovations. And always avails himself to help others when the need arises.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div class="d-flex justify-content-center">
        <p>
          <button class="btn submit-con glow" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample" >
            View more testimonials
          </button>
        </p>
      </div>
      <div class="py-4 d-flex justify-content-center">
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <div class="row d-flex justify-content-center">
              <div class="col-md-4">
                <h4 class="text-center">Philani Mxathule - Peer</h4>
                <img src="#" alt="Philani's profile image" class="img-fluid"
                  >
                <p><em>Sbo is a very hardworking and intellegent person, who will do anything in his power to help a
                    person in need. Having him in any team is an advantage</em></p>
              </div>
              <div class="col-md-4">
                <h4 class="text-center">Silizwe Pani - Peer</h4>
                <img src="#" alt="Silizwe's profile image" class="img-fluid"
                  >
                <p><em>Sibongile is a great web developer, and has a a bright future. He is innovative and always ready
                    to learn and educate others.</em></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
</template>

<script>
export default {
    name: 'Testimonials'
}
</script>

<style>

</style>