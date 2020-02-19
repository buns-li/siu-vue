import Vue from "vue";
import Layout from "./layout";

Layout.install = function(vue: typeof Vue): void {
	vue.component(Layout.name, Layout);
	vue.component(Layout.Header.name, Layout.Header);
	vue.component(Layout.Content.name, Layout.Content);
	vue.component(Layout.Footer.name, Layout.Footer);
};

if (typeof window !== "undefined" && window.Vue) {
	Layout.install(window.Vue);
}

export default Layout;
