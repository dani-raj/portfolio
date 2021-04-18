<template>
  <div id="projects">

    <div id="hero-section" :style="{ 'background-image': 'url(' + require('../assets/' + this.selectedField + '.jpg') + ')'}">
      <div class="links">
        <h1 class="header-text">Hi, I'm Daniel.</h1>
        <h2 class="header-text subheadline">I wish to become a Frontend Developer.</h2>
        <h2 class="header-text subheadline cta">Check out my coding projects, sideline design ideas or the work I did as a copywriter.</h2>
        <router-link :to="{ name: 'Projects', params: { toshow: 'fields', field: 'frontend' }}" class="link">Frontend</router-link> 
        <router-link :to="{ name: 'Projects', params: { toshow: 'fields', field: 'design' }}" class="link">UI Design</router-link> 
        <router-link :to="{ name: 'Projects', params: { toshow: 'fields', field: 'copywriting' }}" class="link">Copywriting</router-link>
      </div>
      <img src="../assets/down3.png" id="down-arrow" @click="scrollDown()">
    </div>

    <div id="fields" v-if="this.whatToShow === 'fields'">
      <FrontEnd v-if="this.selectedField === 'frontend' || this.selectedField === undefined"/>
      <Design v-if="this.selectedField === 'design'"/>
      <Copywriting v-if="this.selectedField === 'copywriting'"/>
    </div>

    <Details v-if="this.whatToShow === 'details'" />
  </div>
</template>

<script>
import FrontEnd from '@/components/FrontEnd.vue'
import Design from '@/components/Design.vue'
import Copywriting from '@/components/Copywriting.vue'
import Details from '@/views/Details.vue'

export default {
  components: {
    FrontEnd,
    Design,
    Copywriting,
    Details,
  },
  data() {
    return {
      whatToShow: '',
      selectedField: ''
    }
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        top: 760,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    setSelectedField() {
      return this.$route.params.field
    },
    setWhatToShow() {
      return this.$route.params.toshow
    },
  },
  watch: {
    setSelectedField() {
      this.selectedField = this.setSelectedField
    },
    setWhatToShow() {
      this.whatToShow = this.setWhatToShow
    }
  },
  created() {
      this.$route.params.field ? this.selectedField = this.$route.params.field : this.selectedField = 'frontend'
      this.$route.params.selectedproject ? this.whatToShow = 'details' : this.whatToShow = 'fields'
    }
}
</script>

<style scoped>

  #hero-section {
    height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all .3s ease-in;
  }
  #hero-section::after {
    content: '';
    background: #000;
    opacity: .7;
    height: 100%;
    width: 100%; 
     position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .header-text {
    color: #fff;
     font-size: 2.8rem;
  }
  .subheadline {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    opacity: .9;
    font-weight: lighter;
    max-width: 800px;
  }
  .cta {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  .links {
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  .link {
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    margin-right: 2rem;
  }
  .link:last-of-type {
    margin-right: 0;
  }
  .link.router-link-exact-active {
    text-decoration: underline;
    opacity: 1;
  }
  #down-arrow {
    z-index: 1000;
    width: 25px;
    position: absolute;
    bottom: 40px;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    box-sizing: border-box;
    opacity: .7;
  }
  #down-arrow:hover {
     opacity: 1;
  }

  @media only screen and (max-width : 768px) {
    #hero-section {
      background-position: center;
    }
    .link {
      font-size: 1.5rem;
    }
    .header-text {
      font-size: 2rem;
    }
    .subheadline {
      font-size: 1.4rem;
      max-width: 300px;
      margin: 1rem auto 2.4rem;
    }
  }

  @media only screen and (max-width : 520px) {
    .link {
      display: flex;
      flex-direction: column;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width : 320px) {
    .subheadline {
      font-size: 1.2rem;
    }
    .link{ 
      font-size: 1.2rem;
    }
  }



</style>