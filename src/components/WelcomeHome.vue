<template>
  <div class="container contact-2">
    <div class="row">
        <div class="col-md-5 d-flex justify-content-center">
            <img src="../assets/Images/Sibongile_about_2-removebg-preview.png" class="img-fluid" alt="" id="first-img">
            <img src="../assets/Images/Sibongile-about_1-removebg-preview.png" alt="" id="second-img">
        </div>
        <div class="col-md-7 mt-5">
            <h1 class="font-weight-light text-white">Who Am I?</h1>
            <div class="my-5">
          <div class="rounded py-4 con-hover" style="box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);" data-aos="fade-left"
            data-aos-easing="ease-in-back" data-aos-duration="50000">
            <p>Hi there, I'm Sibongile Rwayi, an aspiring full-stack developer. I have an altruistic personality, always
              willing to go the extra mile and help where I can. I lead by example and go above and beyond to be a
              positive role model to people around me. I'm intrigued by the various concepts emanating from the
              digital world and I try to learn to understand as much as I can. I'm currently attenting a six-month long
              intensive bootcamp at <em><mark style="background-color: black;"><a
                    href="https://www.lifechoices.co.za"><span style="color: rgb(169, 202, 54);"
                      class="text-decoration-none">life</span><span style="color: white;">choices</span></a></mark></em>
              Coding Academy to strengthen my coding abilities.
            </p>
          </div>
        </div>
            <button type="button" class="btn btn-primary me-5">View Projects</button>
            <button type="button" class="btn btn-primary">Contact Me!</button>

        </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'WelcomeHome'
}
</script>

<style scoped>
#first-img{
  
}

@media (max-width: 767.27px){
  #first-img{
  display: none;
  }
  #second-img{
    display: flex;
  }
}

#second-img{
  display: none;
}




</style>