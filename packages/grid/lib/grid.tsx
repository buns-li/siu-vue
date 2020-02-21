import { TSX } from "@siu-vue/shared";
import { Component, Prop, Provide, Inject } from "vue-property-decorator";
import { RowProps, ColProps, FlexAlign, FlexJustify, BreakpointMap, GutterMap, ColSomeProps } from "../types";

import enquire from "enquire.js";

const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"] as (keyof GutterMap)[];

function transformBreakpointMap(breakpointMap?: BreakpointMap): Record<keyof GutterMap, string> {
	if (!breakpointMap) return {} as Record<keyof GutterMap, string>;

	return responsiveArray.reduce((prev: Record<keyof GutterMap, string>, cur: keyof GutterMap) => {
		const option = breakpointMap[cur];

		if (!option) return prev;

		let str = "";

		if (option.max) {
			str += `(max-width:${option.max}px)`;
		}

		if (option.min) {
			str += (str === "" ? "" : " and ") + `(min-width:${option.min}px)`;
		}
		prev[cur] = str;
		return prev;
	}, {} as Record<keyof GutterMap, string>);
}

@Component({
	name: "Row"
})
class Row extends TSX<RowProps> {
	@Prop({
		type: [Number, Object],
		default() {
			return {
				xs: { max: 575 },
				sm: { min: 576 },
				md: { min: 768 },
				lg: { min: 992 },
				xl: { min: 1200 },
				xxl: { min: 1600 }
			};
		}
	})
	breakpointMap?: BreakpointMap;
	@Prop(String) type?: "flex";
	@Prop(String) align?: FlexAlign;
	@Prop(String) justify?: FlexJustify;
	@Prop([Number, Object]) gutter?: number | GutterMap;

	@Provide() rowContext = this;

	private responsiveMap: Record<keyof GutterMap, string> = transformBreakpointMap(this.breakpointMap);
	screens: Partial<Record<keyof GutterMap, boolean>> = {
		xs: false,
		sm: false,
		md: false,
		lg: false,
		xl: false,
		xxl: false
	};
	/**
	 * 计算gutter的实际值
	 *
	 * @returns number
	 */
	public calcGutter(): number {
		if (typeof this.gutter === "object") {
			const { screens, gutter } = this;
			for (let l = responsiveArray.length; l--; ) {
				const breakpoint = responsiveArray[l];
				if (screens[breakpoint] && gutter[breakpoint] !== undefined) {
					return gutter[breakpoint];
				}
			}
			return 0;
		}
		return this.gutter as number;
	}
	/**
	 * 注册media查询监听
	 */
	private doRegisterMedia(): void {
		responsiveArray
			.filter(screen => this.responsiveMap[screen])
			.map((screen: keyof GutterMap) => {
				enquire.register(this.responsiveMap[screen], {
					match: () => {
						this.screens[screen] = true;
					},
					unmatch: () => {
						/** */
						this.screens[screen] = false;
					},
					destroy() {
						/** */
					}
				});
			});
	}
	/**
	 * 取消media监听
	 */
	private doUnRegisterMedia(): void {
		responsiveArray.filter(screen => this.responsiveMap[screen]).map(screen => enquire.unregister(screen));
	}

	created() {
		this.rowContext = this;
		this.doRegisterMedia();
	}

	beforeDestory() {
		this.doUnRegisterMedia();
	}

	render(): JSX.Element {
		const { type, align, justify } = this;

		const gutter = this.calcGutter();

		const styles = gutter > 0 ? { marginLeft: `${gutter / -2}px`, marginRight: `${gutter / -2}px` } : {};

		return (
			<div
				class={{
					[`v-row`]: !type,
					[`v-row-flex`]: !!type,
					[`align-${align}`]: type && align,
					[`justify-${justify}`]: type && justify
				}}
				style={styles}
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
	@Inject() rowContext!: Row;

	@Prop({ type: Number, default: 0 }) offset?: number;
	@Prop({ type: Number, default: 0 }) pull?: number;
	@Prop({ type: Number, default: 0 }) push?: number;
	@Prop(Number) span?: number;
	@Prop(Number) order?: number;
	@Prop([Number, Object]) xs?: number | ColSomeProps;
	@Prop([Number, Object]) sm?: number | ColSomeProps;
	@Prop([Number, Object]) md?: number | ColSomeProps;
	@Prop([Number, Object]) lg?: number | ColSomeProps;
	@Prop([Number, Object]) xl?: number | ColSomeProps;
	@Prop([Number, Object]) xxl?: number | ColSomeProps;

	render(): JSX.Element {
		const { rowContext, span, order, offset, push, pull } = this;

		let classes = {
			[`v-col`]: true,
			[`v-col-${span}`]: span !== undefined,
			[`v-col-order-${order}`]: order,
			[`v-col-offset-${offset}`]: offset,
			[`v-col-push-${push}`]: push,
			[`v-col-pull-${pull}`]: pull
		};

		responsiveArray.forEach(size => {
			let sizeProps = {} as Record<keyof ColProps, number | undefined>;
			if (typeof this[size] === "number") {
				sizeProps.span = this[size] as number;
			} else if (typeof this[size] === "object") {
				sizeProps = (this[size] || {}) as Record<keyof ColProps, number | undefined>;
			}

			classes = {
				...classes,
				[`v-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
				[`v-col-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
				[`v-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
				[`v-col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
				[`v-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
			};
		});

		let styles = {};

		if (rowContext) {
			const gutter = rowContext.calcGutter();
			if (gutter > 0) {
				styles = {
					paddingLeft: `${gutter / 2}px`,
					paddingRight: `${gutter / 2}px`
				};
			}
		}

		return (
			<div class={classes} style={styles}>
				{this.$slots.default}
			</div>
		);
	}
}

export { Row, Col };
