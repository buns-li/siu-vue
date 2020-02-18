import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/content";
import { IProps } from "../types";

describe("content", () => {
	test("renders props", () => {
		const msg = "content";
		const wrapper = shallowMount(cmp, {
			propsData: {
				className: "cus-content"
			} as IProps,
			slots: { default: msg }
		});
		expect(wrapper.text()).toMatch(msg);
		expect(wrapper.classes("cus-content")).toBe(true);
	});
});
