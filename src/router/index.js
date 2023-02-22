import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexView from '../views/IndexView.vue';
import Review from "@/views/Review";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/review/:id',
    name: 'review',
    component: Review
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
