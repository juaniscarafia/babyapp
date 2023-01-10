import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import "@/scss/main.scss";
import "@mdi/font/css/materialdesignicons.min.css";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);
app.component('Datepicker', Datepicker);

app.mount("#app");
