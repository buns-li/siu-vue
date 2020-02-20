import Vue from "vue";

import Btn from "@siu-vue/btn";
import Layout from "@siu-vue/layout";

const Components = [Btn, Layout];

const VUI = {
	install(vue: typeof Vue) {
		Components.forEach(cmp => {
			cmp.install(vue);
		});
	},
	Btn,
	Layout
};

if (typeof window !== "undefined" && window.Vue) {
	VUI.install(window.Vue);
}

export default VUI;
