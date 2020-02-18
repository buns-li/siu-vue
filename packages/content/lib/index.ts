import { VueConstructor } from "vue";
import Content from "./content";

Content.install = function(Vue: VueConstructor): void {
	Vue.component(Content.name, Content);
};

if (typeof window !== "undefined" && window.Vue) {
	Content.install(window.Vue as VueConstructor);
}

export default Content;
