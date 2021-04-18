import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/components/Projects.vue'
import FrontEnd from '@/components/FrontEnd.vue'
import Design from '@/components/Design.vue'
import Copywriting from '@/components/Copywriting.vue'
import Details from '@/views/Details.vue'
import Emirates from '@/views/Details/Emirates.vue'
import Junipero from '@/views/Details/Junipero.vue'
import Mental from '@/views/Details/Mental.vue'
import GroceryList from '@/views/Details/GroceryList.vue'
import Traffipax from '@/views/Details/Traffipax.vue'
import Rooter from '@/views/Details/Rooter.vue'
import Ideas from '@/views/Details/Ideas.vue'
import Social from '@/views/Details/Social.vue'
import Mannequin from '@/views/Details/Mannequin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/projects/frontend',
    name: 'Home',
    component: Projects,
  },
  {
    path: '/projects/:field',
    name: "Projects",
    component: Projects,
    children: [
      {
        path: '',
        component: FrontEnd
      },
      {
        path: 'design',
        component: Design
      },
      {
        path: 'copywriting',
        component: Copywriting
      },
      {
        path: 'details/:selectedproject',
        component: Details,
        name: 'Details',
        children: [
          {
            path: 'emirates',
            component: Emirates
          },
          {
            path: 'traffipax',
            component: Traffipax
          },
          {
            path: 'junipero',
            component: Junipero
          },
          {
            path: 'mental',
            component: Mental
          },
          {
            path: 'grocerylist',
            component: GroceryList
          },
          {
            path: 'traffipax',
            component: Traffipax
          },
          {
            path: 'rooter',
            component: Rooter
          },
          {
            path: 'ideas',
            component: Ideas
          },
          {
            path: 'mannequin',
            component: Mannequin
          },
          {
            path: 'social',
            component: Social
          },
        ]
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
