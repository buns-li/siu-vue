import { TSX } from "@siu-vui/shared";
import { Component, Prop } from "vue-property-decorator";
import { IProps } from "../types";

@Component({
	name: "Header"
})
export default class Header extends TSX<IProps> {
	@Prop(String) className?: string;
	@Prop(Boolean) fixed?: boolean;
	@Prop({ default: 64 }) height?: number;

	render(): JSX.Element {
		return (
			<header
				class={["v-layout-header", this.fixed && "is-fixed"].filter(Boolean)}
				style={{ height: this.height + "px", lineHeight: this.height + "px" }}
			>
				{this.$slots.default || null}
			</header>
		);
	}
}
