import { TSX } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { RowProps, ColProps, FlexAlign, FlexJustify, BreakpointMap, GutterMap } from "../types";

import enquire from "enquire.js";

const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"] as (keyof GutterMap)[];

@Component({
	name: "Row"
})
class Row extends TSX<RowProps> {
	@Prop({
		type: [Number, Object],
		default: {
			xs: { max: 575 },
			sm: { min: 576 },
			md: { min: 768 },
			lg: { min: 992 },
			xl: { min: 1200 },
			xxl: { min: 1600 }
		}
	})
	breakpointMap?: BreakpointMap;
	@Prop(String) type?: "flex";
	@Prop(String) align?: FlexAlign;
	@Prop(String) justify?: FlexJustify;
	@Prop([Number, Object]) gutter?: number | GutterMap;

	private responsiveMap: Record<keyof GutterMap, string> = this.transformBreakpointMap();

	transformBreakpointMap(): Record<keyof GutterMap, string> {
		const { breakpointMap } = this;

		if (!breakpointMap) return {} as Record<keyof GutterMap, string>;

		return responsiveArray.reduce((prev: Record<keyof GutterMap, string>, cur: keyof GutterMap) => {
			const option = breakpointMap[cur];

			let str = "";

			if (option.max) {
				str += `(max-width:${option.max}px)`;
			}

			if (option.min) {
				str += (str === "" ? "" : "and ") + `(min-width: ${option.min}px)`;
			}
			prev[cur] = str;
			return prev;
		}, {} as Record<keyof GutterMap, string>);
	}

	calcGutter(): number {
		if (typeof this.gutter === "object") {
		}

		return this.gutter as number;
	}

	doRegisterMedia() {
		responsiveArray
			.filter(screen => this.responsiveMap[screen])
			.map((screen: keyof GutterMap) => {
				enquire.register(this.responsiveMap[screen], {
					match() {
						/** */
					},
					unmatch() {
						/** */
					},
					destroy() {
						/** */
					}
				});
			});
	}

	created() {
		this.transformBreakpointMap();
	}

	render(): JSX.Element {
		const { type, align, justify, breakpointMap, gutter } = this;

		return (
			<div
				class={{
					[`v-row`]: !type,
					[`v-row-flex`]: !!type,
					[`align-${align}`]: type && align,
					[`justify-${justify}`]: type && justify
				}}
			>
				{this.$slots.default}
			</div>
		);
	}
}

@Component({
	name: "Col"
})
class Col extends TSX<ColProps> {
	render(): JSX.Element {
		return <div>{this.$slots.default}</div>;
	}
}

export { Row, Col };
