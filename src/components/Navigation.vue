<template>
  <header class="header-in-nav">
    <nav class="container-fluid container scroll navbar navbar-expand-md">
      <div class="branding">
        <router-link class="header" :to="{ name: HomeView }"
          ><img src="../assets/Images/sr.codes.png" alt="" class="branding-img"></router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link active" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
          <router-link class="link" to="/resume">Resume</router-link>
          <router-link class="link" to="/skills">Skills</router-link>
          <router-link class="link" to="/testimonials">Testimonials</router-link>
          <router-link class="link" to="/projects">projects</router-link>
          <router-link class="link" to="/contact">Contact</router-link>
        </ul>
      </div>
    </nav>
    <!-- <menuIcon @click="toggleMobileNav" class="fa fa-home menu-icon" v-show="mobile"/> -->
    <transition name="mobile-nav" >
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">About</router-link>
        <router-link class="link" to="#">Resume</router-link>
        <router-link class="link" to="#">Skills</router-link>
        <router-link class="link" to="#">Testimonials</router-link>
        <router-link class="link" to="#">projects</router-link>
        <router-link class="link" to="#">Contact</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
// import menuIcon from '../assets/Icons/bars-regular.svg'
export default {
    name: 'Navigation',
    components: {
        
     },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 750) {
                this.mobile = true;
                return; 
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    }, 
};
</script>

<style scoped>
.container {
    color: #fff !important;
}

@media (max-width: 1116px){
    .branding-img {
        display: none;
    }
}

.branding-img {
    position: absolute;
    top: 0;
    width: 90px;
}

.header-in-nav {
    background-color: rgba(7, 7, 7, 0.74);
    position: fixed;
    width: 100%;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -1px rgb(0, 0, 0, 0.06);
    z-index: 99;   
    
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color-ease;
    color: #fff;    
}

.link:hover {
    color: #1eb8b8;
}

nav {
    display: flex;
    padding: 25px 0;
}

nav .branding  {
    display: flex;
    align-items: center;
}

.header {
    font-weight: 600;
    font-size: 24px;
    color: #fff;
}

.nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}

ul {
    margin-right: 32px;
}

ul .link {
    margin-right: 32px;
}
ul .link:last-child {
    margin-right: 0;
}


.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
}

.mobile-nav {
    padding: 20px !important;
    width: 70% !important;
    max-width: 250px !important;
    display: none !important;
    flex-direction: column !important;
    position: fixed !important;
    height: 100% !important;
    background-color: #303030 !important;
    top: 0;
    left: 0;
}

.mobile-nav .link {
    padding: 15px 0;
    color: #fff !important;
}
</style>>
