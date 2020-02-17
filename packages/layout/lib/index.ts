import { VueConstructor } from "vue";
import Layout from "./layout";

Layout.install = function(Vue: VueConstructor) {
	Vue.component(Layout.name, Layout);
};

if (typeof window !== "undefined" && window.Vue) {
	Layout.install(window.Vue as VueConstructor);
}

export default Layout;
