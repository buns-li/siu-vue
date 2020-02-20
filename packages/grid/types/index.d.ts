import Vue from "vue";

export type FlexAlign = "top" | "middle" | "bottom";
export type FlexJustify = "start" | "end" | "center" | "space-around" | "space-between";
export type GutterMap = Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", number>;
export type BreakpointMap = Record<keyof GutterMap, Partial<{ max: number; min: number }>>;

export interface RowProps {
	/*
	 * 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}
	 *
	 * @type number | GutterMap
	 */
	gutter?: number | GutterMap;
	/**
	 * flex 布局下的垂直对齐方式：top middle bottom
	 *
	 * @default middle
	 *
	 * @type "top" | "middle" | "bottom"
	 */
	align?: FlexAlign;
	/**
	 * flex 布局下的水平排列方式：start end center space-around space-between
	 *
	 * @default center
	 *
	 * @type "start" | "end" | "center" | "space-around" | "space-between"
	 */
	justify?: FlexJustify;
	/*
	 * 布局模式，可选 flex , refer: https://caniuse.com/#search=flex
	 *
	 * @type "flex"|undefined
	 */
	type?: "flex";
	/**
	 * 截断距离的映射
	 *
	 * @default
	 * {
	 * 		xs: {max: 575},
	 * 		sm: {min:576},
	 * 		md: {min:768},
	 * 		lg: {min:992},
	 * 		xl: {min:1200},
	 * 		xxl: {min:1600}
	 * }
	 *
	 * @type Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", Partial<{ max: number; min: number }>>
	 */
	breakpointMap?: BreakpointMap;
}

export declare class Row extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<RowProps>) | undefined;
}

export type ColSomeProps = Pick<ColProps, "offset" | "pull" | "push">;

export interface ColProps {
	/**
	 * 栅格左侧的间隔格数，间隔内不可以有栅格
	 *
	 * @default 0
	 *
	 * @type number
	 */
	offset?: number;
	/**
	 * 栅格向左移动格数
	 *
	 * @default 0
	 *
	 * @type number
	 */
	pull?: number;
	/**
	 * 栅格向右移动格数
	 *
	 * @default 0
	 *
	 * @type number
	 */
	push?: number;
	/**
	 * 栅格占位格数，为 0 时相当于 display: none
	 *
	 * @type number
	 */
	span?: number;
	/**
	 * 栅格顺序，flex 布局模式下有效
	 *
	 * @type number
	 */
	order?: number;
	/**
	 *
	 * xs模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	xs?: number | ColSomeProps;
	/**
	 *
	 * sm模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	sm?: number | ColSomeProps;
	/**
	 *
	 * md模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	md?: number | ColSomeProps;
	/**
	 *
	 * lg模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	lg?: number | ColSomeProps;
	/**
	 *
	 * xl模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	xl?: number | ColSomeProps;
	/**
	 *
	 * xxl模式下的响应式栅格，可为栅格数或一个包含其他属性的对象
	 *
	 * @type number | ColSomeProps
	 */
	xxl?: number | ColSomeProps;
}

export declare class Col extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<ColProps>) | undefined;
}
