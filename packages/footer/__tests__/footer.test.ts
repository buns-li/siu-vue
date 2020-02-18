import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/footer";
import { IProps } from "../types";

describe("footer", () => {
	test("renders props", () => {
		const msg = "footer";
		const wrapper = shallowMount(cmp, {
			propsData: {
				className: "cus-footer"
			} as IProps,
			slots: { default: msg }
		});
		expect(wrapper.text()).toMatch(msg);
		expect(wrapper.classes("cus-footer")).toBe(true);
	});
});
