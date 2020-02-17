import { VueConstructor } from "vue";
import Btn from "./btn";

Btn.install = function(Vue: VueConstructor) {
	Vue.component(Btn.name, Btn);
};

if (typeof window !== "undefined" && window.Vue) {
	Btn.install(window.Vue as VueConstructor);
}

export default Btn;
