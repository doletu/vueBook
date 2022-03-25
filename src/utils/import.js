import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authlayout"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/defaultlayout"))
  );
  app.component(
    "DashBoard-layout",
    defineAsyncComponent(() => import("@/layouts/authlayout"))
  );
}
