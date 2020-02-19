import { VueConstructor } from "vue";

import Btn from "@siu-vue/btn";
import Layout from "@siu-vue/layout";

const Components = [Btn, Layout];

const VUI = {
	install(Vue: VueConstructor) {
		Components.forEach(cmp => {
			cmp.install(Vue);
		});
	},
	Btn,
	Layout
};

if (typeof window !== "undefined" && window.Vue) {
	VUI.install(window.Vue);
}

export default VUI;
