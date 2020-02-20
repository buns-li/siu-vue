import Vue, { VNode } from "vue";

export interface LayoutProps {
	/*
	 * 自定义样式名称
	 * @type string
	 */
	cls?: string;
	/**
	 * 是否存在aside
	 * @default false
	 * @type boolean
	 */
	hasAside?: boolean;
}

export type LayoutBlockProps = Pick<LayoutProps, "cls">;

export declare class Header extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<LayoutBlockProps>) | undefined;
}

export declare class Content extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<LayoutBlockProps>) | undefined;
}

export declare class Footer extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<LayoutBlockProps>) | undefined;
}

export type AsiderTriggerFn = (collapseStatus: boolean, supportClassName: string) => VNode[] | undefined;

export interface AsiderProps extends LayoutBlockProps {
	/**
	 *
	 * asider的宽度值
	 *
	 * @default 256
	 *
	 * @type number
	 */
	width: number;
	/**
	 * collapse状态下的宽度,最低支持0
	 *
	 * @default 80
	 * @type number
	 */
	collapsedWidth?: number;
	/**
	 * 当前是否收起的状态,支持v-model
	 *
	 * @type boolean
	 */
	collapsed?: boolean;
	/**
	 * 是否支持收起
	 *
	 * @type boolean
	 */
	collapsiable?: boolean;
	/**
	 * 自定义触发器
	 *
	 * @type AsiderTriggerFn
	 */
	trigger?: AsiderTriggerFn;
}

export declare class Asider extends Vue {
	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<AsiderProps>) | undefined;
}

export declare class Layout extends Vue {
	static Header: typeof Header;
	static Content: typeof Content;
	static Footer: typeof Footer;
	static Asider: typeof Asider;

	static install(vue: typeof Vue): void;
	props: (Readonly<{}> & Readonly<LayoutProps>) | undefined;
}
