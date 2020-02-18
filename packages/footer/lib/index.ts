import { VueConstructor } from "vue";
import Footer from "./footer";

Footer.install = function(Vue: VueConstructor): void {
	Vue.component(Footer.name, Footer);
};

if (typeof window !== "undefined" && window.Vue) {
	Footer.install(window.Vue as VueConstructor);
}

export default Footer;
