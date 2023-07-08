import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import AddPage from "./components/Add.vue";
import UpdatePage from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "SignIn",
    path: "/signin",
    component: SignIn,
  },
  {
    name: "AddPage",
    path: "/AddPage",
    component: AddPage,
  },
  {
    name: "UpdatePage",
    path: "/UpdatePage",
    component: UpdatePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
