import { TSX } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { IProps } from "../types";

@Component({
	name: "Footer"
})
export default class Footer extends TSX<IProps> {
	@Prop(String) className?: string;

	render(): JSX.Element {
		return <div class={["v-layout-footer", this.className].filter(Boolean)}>{this.$slots.default || null}></div>;
	}
}
