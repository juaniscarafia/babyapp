import { createRouter, createWebHistory } from "vue-router";
import { useAccessStore } from "@/stores/access";
import BappLogin from "../components/Pages/Login.vue";
import BappHome from "../components/Pages/Home.vue";
import BappHistorico from "../components/Pages/Historico.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: BappLogin,
    },
    {
      path: "/",
      name: "home",
      component: BappHome,
    },
    {
      path: "/historico",
      name: "historico",
      component: BappHistorico,
    }
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAccessStore();

  if (authRequired && !auth.access) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
