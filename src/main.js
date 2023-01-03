import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import "@/scss/main.scss";
import "@mdi/font/css/materialdesignicons.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
