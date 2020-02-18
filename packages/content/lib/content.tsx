import { TSX } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { IProps } from "../types";

@Component({
	name: "Content"
})
export default class Content extends TSX<IProps> {
	@Prop(String) className?: string;

	render(): JSX.Element {
		return <div class={["v-layout-content", this.className].filter(Boolean)}>{this.$slots.default || null}></div>;
	}
}
