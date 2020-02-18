import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/header";
import { IProps } from "../types";

describe("header", () => {
	test("renders props", () => {
		const msg = "header";
		const wrapper = shallowMount(cmp, {
			propsData: {
				className: "cus-header",
				fixed: true
			} as IProps,
			slots: { default: msg }
		});
		expect(wrapper.text()).toMatch(msg);
		expect(wrapper.classes("cus-header")).toBe(true);
		expect(wrapper.classes("is-fixed")).toBe(true);
		expect(wrapper.props("height")).toBe(64);
	});
});
