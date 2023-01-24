import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import "@/scss/main.scss";
import "@mdi/font/css/materialdesignicons.min.css";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);
app.use(router);
app.component("Datepicker", Datepicker);

const pinia = createPinia();

pinia.use((context) => {
  const storeId = context.store.$id;

  if (storeId === 'access') {
    const serilizer = {
      serialize: JSON.stringify,
      deserialize: JSON.parse
    }

    // sync store from localstorage
    const fromStorage = serilizer.deserialize(window.localStorage.getItem(storeId));
    if (fromStorage) {
      context.store.$patch(fromStorage);
    }

    // listen for changes from localstorage
    context.store.$subscribe((mutation,state) =>{
      window.localStorage.setItem(storeId,serilizer.serialize(state));
    })
  }
})

app.use(pinia);

app.mount("#app");
