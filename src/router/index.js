import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import ReviewPage from "@/pages/ReviewPage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/review/:id',
    name: 'review',
    component: ReviewPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
