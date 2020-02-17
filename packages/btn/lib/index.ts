import { VueConstructor } from "vue";
import Btn from "./btn";

Btn.install = function(Vue: VueConstructor): void {
	Vue.component(Btn.name, Btn);
};

if (typeof window !== "undefined" && window.Vue) {
	Btn.install(window.Vue as VueConstructor);
}

export default Btn;
