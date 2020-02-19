import { TSX } from "@siu-vue/shared";
import { Component, Prop, Model } from "vue-property-decorator";

import { AsiderProps } from "../types";

@Component({
	name: "Asider"
})
export default class Asider extends TSX<AsiderProps> {
	@Prop(String) cls?: string;
	@Prop({ type: Number, default: 256 }) width!: number;
	@Prop({ type: Number, default: 80 }) collapsedWidth?: number;
	@Prop(Boolean) collapsible?: boolean;
	@Model("collapsed", { type: Boolean, default: false }) collapsed?: boolean;

	private isCollapsed: boolean;

	constructor() {
		super();
		this.isCollapsed = !!this.collapsed;
	}

	onCollapsed() {
		this.$emit("collapsed", !this.collapsed);
	}

	render() {
		const asideWidth = `${this.isCollapsed ? this.collapsedWidth : this.width}px`;

		const isZeroWidth = this.collapsedWidth === 0;

		return (
			<aside
				class={[
					`v-layout-aside`,
					this.cls,
					this.isCollapsed && "is-collapsed",
					isZeroWidth && "is-zero-width",
					!isZeroWidth && this.$slots.trigger && "has-trigger"
				].filter(Boolean)}
				style={{
					width: asideWidth,
					maxWidth: asideWidth,
					minWidth: asideWidth,
					flex: `0 0 ${asideWidth}`,
					"-webkit-box-flex": 0
				}}
			>
				<div class="v-layout-aside-content">{this.$slots.default}</div>
				{this.$slots.trigger}
			</aside>
		);
	}
}
