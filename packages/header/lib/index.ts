import { VueConstructor } from "vue";
import Header from "./header";

Header.install = function(Vue: VueConstructor) {
	Vue.component(Header.name, Header);
};

if (typeof window !== "undefined" && window.Vue) {
	Header.install(window.Vue as VueConstructor);
}

export default Header;
