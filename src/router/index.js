import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Add from '../components/Add.vue'
import Watched from '../components/Watched.vue'
import Watchlist from '../components/Watchlist.vue'
import WatchNow from '../components/WatchNow.vue'


const routes = [
  {
    path: '/404',
    name: '404',
    meta: {
      public: true
    },
    component: NotFound
  },
  {
    path: '/',
    name: 'Watchlist',
    meta: {
      public: false
    },
    component: Watchlist
  },
  {
    path: '/add',
    name: 'Add',
    meta: {
      public: false
    },
    component: Add
  },
  {
    path: '/watched',
    name: 'Watched',
    meta: {
      public: false
    },
    component: Watched
  },
  {
    path: "/:id/:src",
    name: 'WatchNow',
    meta: {
      public: false
    },
    component: WatchNow
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  mode: 'history',
  hash: false,
})
// =======================
import NProgress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

// ============================
export default router
