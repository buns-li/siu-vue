import { TSX } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { IProps, BtnType, BtnShape, BtnSize } from "../types";

@Component({
	name: "Btn"
})
export default class Btn extends TSX<IProps> {
	@Prop({ default: "button" }) htmlType!: string;
	@Prop(Boolean) disabled?: boolean;
	@Prop(String) type?: BtnType;
	@Prop(String) size?: BtnSize;
	@Prop(String) shape?: BtnShape;
	@Prop(Boolean) block?: boolean;
	@Prop(Boolean) loading?: boolean;
	@Prop(String) icon?: string;

	handleClick(evt: Event): void {
		this.$emit("click", evt);
	}

	render(): JSX.Element {
		const { handleClick, htmlType, disabled, type, size, shape, block, loading, icon } = this;

		return (
			<button
				onClick={handleClick}
				type={htmlType}
				disabled={disabled}
				class={[
					"v-btn",
					type && `is-${type}`,
					size && `is-${size}`,
					shape && `is-${shape}`,
					block && `is-${block}`,
					disabled && `is-disabled`
				].filter(Boolean)}
			>
				{loading ? <i class="v-i-loading"></i> : null}
				{icon && !loading ? <i class={icon}></i> : null}
				{this.$slots.default || null}
			</button>
		);
	}
}
