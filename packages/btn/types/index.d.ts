export type BtnType = "primary" | "success" | "danger" | "warning" | "dashed" | "link";

export type BtnSize = "small" | "medium" | "large";

export type BtnShape = "circle" | "round";

export interface IProps {
	/**
	 * 设置 button 原生的 type 值，可选值请参考 HTML 标准
	 */
	htmlType?: string;
	/**
	 * 按钮失效状态
	 */
	disabled?: boolean;
	/**
	 * 设置按钮类型，可选值为 primary、success、warning、danger、dashed、link 或者不设
	 */
	type?: BtnType;
	/**
	 * 设置按钮大小，可选值为 small、medium、large 或者不设
	 */
	size?: BtnSize;
	/**
	 * 设置按钮形状，可选值为 circle、 round 或者不设
	 */
	shape?: BtnShape;
	/**
	 * 将按钮宽度调整为其父宽度的选项
	 */
	block?: boolean;
	/**
	 * 设置按钮载入状态
	 */
	loading?: boolean;
	/**
	 * 设置按钮的图标类型
	 */
	icon?: string;
}
