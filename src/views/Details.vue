<template>
  <div id="details-page" ref="detailsTop">
      <div id="goBack">
          <img src="@/assets/back.png" id="back-arrow">
          <router-link :to="{ name: 'Projects', params: { toshow: 'fields', field: getField }}"><p>Go back</p></router-link>
      </div>

      <Emirates v-if="selectedProject === 'emirates'" /> 
      <Junipero v-if="selectedProject === 'junipero'" />
      <Mental v-if="selectedProject === 'mental'" />
      <GroceryList v-if="selectedProject === 'grocery'" />
      <Traffipax v-if="selectedProject === 'traffipax'" />
      <Rooter v-if="selectedProject === 'rooter'" />
      <Ideas v-if="selectedProject === 'ideas'"/>
      <Social v-if="selectedProject === 'social'" />
      <Mannequin v-if="selectedProject === 'mannequin'" />
  </div>
</template>

<script>
import Emirates from '@/views/Details/Emirates.vue'
import Junipero from '@/views/Details/Junipero.vue'
import Mental from '@/views/Details/Mental.vue'
import GroceryList from '@/views/Details/GroceryList.vue'
import Traffipax from '@/views/Details/Traffipax.vue'
import Rooter from '@/views/Details/Rooter.vue'
import Ideas from '@/views/Details/Ideas.vue'
import Social from '@/views/Details/Social.vue'
import Mannequin from '@/views/Details/Mannequin.vue'


export default {
  name: 'Details',
  components: {
    Emirates,
    Junipero,
    Mental,
    GroceryList,
    Traffipax,
    Rooter,
    Ideas,
    Social,
    Mannequin
  },
  computed: {
    selectedProject() {
      return this.$route.params.selectedproject
    },
    getField() {
      return this.$route.params.field
    }
  },
  methods: {
    goToTop() {
        window.scrollTo(0, 800);
    }
  },
  created() {
    this.goToTop()
 }
}
</script>

<style>
  #goBack {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    cursor: pointer;
  }
  #back-arrow {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  iframe {
    width: 850px;
    height: 550px;
    margin: 3rem auto;
  }
  .details {
    margin-bottom: 3rem;
  }
  .project-title {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    .project-title {
      font-size: 1.7rem;
    }
    iframe {
      width: 500px;
      height: 300px;
    }
  }

  @media (max-width: 600px) {
    iframe {
      width: 300px;
      height: 200px;
    }
  }

  @media (max-width: 320px) {
    iframe {
      width: 250px;
      height: 150px;
    }
  }

</style>