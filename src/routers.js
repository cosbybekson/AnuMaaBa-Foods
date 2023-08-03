import SignUpView from "./views/SignUp.vue";
import HomeView from "./views/Home.vue";
import LogInView from "./views/LogIn.vue";
import UpdateView from "./views/Update.vue";
import AddView from "./views/Add.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "signUp",
    component: SignUpView,
    path: "/sign-up",
  },
  {
    name: "home",
    component: HomeView,
    path: "/",
  },
  {
    name: "login",
    component: LogInView,
    path: "/login",
  },
  {
    name: "add",
    component: AddView,
    path: "/add",
  },
  {
    name: "update",
    component: UpdateView,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
