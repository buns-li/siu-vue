import { TSX } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { IProps } from "../types";

@Component({
	name: "Layout"
})
class Layout extends TSX<IProps> {
	@Prop(String) className?: string;
	@Prop(Boolean) hasAside?: boolean;

	render(): JSX.Element {
		return (
			<section class={["sv-layout", this.hasAside && `has-aside`, this.className].filter(Boolean)}>
				{this.$slots.default || null}
			</section>
		);
	}
}

export default Layout;
