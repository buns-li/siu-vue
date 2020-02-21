import Vue from "vue";

import Btn from "@siu-vue/btn";
import Layout from "@siu-vue/layout";
import Grid from "@siu-vue/grid";

const Components = [Btn, Layout, Grid];

const VUI = {
	install(vue: typeof Vue) {
		Components.forEach(cmp => {
			cmp.install(vue);
		});
	},
	Btn,
	Layout,
	Row: Grid.Row,
	Col: Grid.Col
};

if (typeof window !== "undefined" && window.Vue) {
	VUI.install(window.Vue);
}

export default VUI;
