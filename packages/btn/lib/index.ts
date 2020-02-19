import Vue from "vue";

import Btn from "./btn";

Btn.install = function(vue: typeof Vue): void {
	vue.component(Btn.name, Btn);
};

if (typeof window !== "undefined" && window.Vue) {
	Btn.install(window.Vue);
}

export default Btn;
