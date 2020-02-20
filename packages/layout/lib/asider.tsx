import { TSX } from "@siu-vue/shared";
import { Component, Prop, Model, Watch } from "vue-property-decorator";
import { AsiderProps, AsiderTriggerFn } from "../types";

@Component({
	name: "Asider"
})
export default class Asider extends TSX<AsiderProps> {
	@Model("collapse", { type: Boolean, default: false }) collapsed?: boolean;
	@Prop(String) cls?: string;
	@Prop({ type: Number, default: 256 }) width!: number;
	@Prop({ type: Number, default: 80 }) collapsedWidth?: number;
	@Prop(Boolean) collapsible?: boolean;
	@Prop(Function) trigger?: AsiderTriggerFn;
	@Prop({ type: Number, default: "768" }) breakpointWidth?: number;

	private mql: MediaQueryList | undefined;

	private isCollapsed = false;

	@Watch("collapsed")
	onCollapseChanged(val: boolean) {
		this.isCollapsed = val;
	}

	responsiveHandler(): void {
		if (this.mql) {
			this.$emit("breakpoint", this.mql.matches);
		}
	}

	created() {
		this.isCollapsed = !!this.collapsed;

		if (window.matchMedia && this.breakpointWidth) {
			(this.mql = window.matchMedia(`(max-width: ${this.breakpointWidth}px)`)).addEventListener(
				"change",
				this.responsiveHandler
			);
		}
	}

	beforeDestroy() {
		if (this.mql) {
			this.mql.removeEventListener("change", this.responsiveHandler);
		}
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
					this.trigger && "has-trigger"
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
				{this.trigger ? this.trigger(this.isCollapsed, "v-layout-aside-trigger") : null}
			</aside>
		);
	}
}
