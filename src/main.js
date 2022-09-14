import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = 'https://localhost:8000/api/'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$axios = axios

app.mount("#app");
