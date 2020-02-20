import Vue from "vue";
import { Row, Col } from "./grid";

const Grid = {
	install: function(vue: typeof Vue): void {
		vue.component(Row.name, Row);
		vue.component(Col.name, Col);
	}
};

if (typeof window !== "undefined" && window.Vue) {
	Grid.install(window.Vue);
}

export default Grid;
