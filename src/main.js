import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./input.css";
import { registerGlobalComponent } from "./utils/import";
import Toaster from "@meforma/vue-toaster";
const app = createApp(App);

registerGlobalComponent(app);
app.use(router);
app.use(Toaster);
app.mount("#app");
