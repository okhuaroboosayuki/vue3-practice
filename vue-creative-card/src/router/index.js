import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/unused/Home.vue'
// import Account from '../views/unused/Account.vue'
// import UpdateProfile from '../views/unused/UpdateProfile.vue'
// import UserOrders from '../views/unused/UserOrders.vue'

// import AppHome from "../views/AppHome.vue";
// import Create from "../views/Create.vue";
// import Admin from "../views/Admin.vue";
// import Category from "../views/Category.vue";
// import NotFound from "../views/NotFound.vue";

const AppHome = () => import(/* webpackChunkName: Admin */ "../views/AppHome.vue");
const Create = () => import(/* webpackChunkName: Create */ "../views/Create.vue");
const Admin = () => import(/* webpackChunkName: Admin */ "../views/Admin.vue");
const Category = () => import(/* webpackChunkName: Category */ "../views/Category.vue");
const NotFound = () => import(/* webpackChunkName: NotFound */ "../views/NotFound.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/unused//About.vue')
  // },
  // {
  //   path: '/account/:userId',
  //   name: 'Account',
  //   component: Account,
  //   children: [
  //     {
  //       path: 'update',
  //       name: 'UpdateProfile',
  //       component: UpdateProfile
  //     },
  //     {
  //       path: 'orders',
  //       name: 'UserOrders',
  //       component: UserOrders
  //     }
  //   ]
  // },
  {
    path: "/category/:category",
    name: "Category",
    component: Category,
  },
  {
    path: "/create/:id/:page",
    name: "Create",
    component: Create,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
