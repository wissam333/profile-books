import { createRouter, createWebHistory } from "vue-router";
import profile from "../views/Profile.vue";
import editeprofile from "../views/EditProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "profile",
      component: profile,
    },
    {
      path: "/editeprofile",
      name: "editeprofile",
      component: editeprofile,
    },
  ],
});

export default router;
