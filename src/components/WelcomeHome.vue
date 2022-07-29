<template>
  <div class="container contact-2 mwidth my-5" id="about">
    <div class="row">
        <div class="col-md-5 d-flex justify-content-center">
            <img src="../assets/Images/scott-rodgerson-G6dXvXN2gVM-unsplash-removebg-preview.png" class="img-fluid" alt="" id="first-img">
            <img src="../assets/Images/Sibongile-about_1-removebg-preview.png" alt="" id="second-img">
        </div>
        <div class="col-md-7 mt-5">
            <h1 class="font-weight-light text-white">Who Am I?</h1>
            <div class="my-5">
          <div class="rounded py-4 con-hover text-center" style="box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);" data-aos="fade-left"
            data-aos-easing="ease-in-back" data-aos-duration="50000">
            <p class="text-center">Hi there, I'm Sibongile Rwayi, an aspiring full-stack developer. I have an altruistic personality, always
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
            
            
      <router-link to="/contact"><button type="button" class="btn btn-custom glow">Contact Me!</button></router-link>
            
            

        </div>
    </div>
  </div>
  <div class="area">
        <ul class="squares">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
 name: 'WelcomeHome'
}
</script>

<style scoped>

.btn-custom {
  cursor: pointer;
  z-index: 1000;
}
.glow:hover::after{
  transform: translate(0, 0);
}
.glow:hover {
    border: 2px solid transparent;
    color: rgb(246, 241, 250);
    transform: scale(1.02);
    will-change: transform;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

}


@keyframes btn-call {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 50%;
    left: 0;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  75% {
    top: 0;
    left: 50%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

.btn-custom {
  animation: btn-call 5s infinite;
    -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
          box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
  z-index: -1;
  -webkit-animation-name: btn-call;
          animation-name: btn-call;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.btn-custom{
  background-color: #060C1F;
  color: white;
}

::-webkit-scrollbar {
  width: 7px;
  background-color: #59CBE8;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  border-radius: 30px;
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #E5E5E5;
  border-radius: 30px;
}


li {
  z-index: -11;
}

#about{ 
  margin-bottom: 0;
}

.con-hover {
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.87);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.6px);
-webkit-backdrop-filter: blur(7.6px);
border: 1px solid rgba(255, 255, 255, 0.43);
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

.mwidth {
  margin-bottom: .5em;
  min-height: 80vh;
}

.squares {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.squares li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 8s linear infinite;
    bottom: -150px;
}

.squares li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.squares li:nth-child(2) {
    left: 10%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 12s;
}

.squares li:nth-child(3) {
    left: 70%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
}

.squares li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.squares li:nth-child(5) {
    left: 65%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
}

.squares li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 0s;
}

.squares li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 4s;
}

.squares li:nth-child(8) {
    left: 50%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 30s;
}

.squares li:nth-child(9) {
    left: 20%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
    animation-duration: 25s;
}

.squares li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

.squares li:nth-child(11) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
}

.squares li:nth-child(12) {
    left: 50%;
    width: 70px;
    height: 70px;
    animation-delay: 2s;
    animation-duration: 7s;
}

.squares li:nth-child(13) {
    left: 20%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.squares li:nth-child(14) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}




</style>