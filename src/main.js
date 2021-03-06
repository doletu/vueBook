import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./input.css";
import { registerGlobalComponent } from "./utils/import";

const app = createApp(App);

registerGlobalComponent(app);
app.use(router);
app.mount("#app");
