import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/layout";
import { IProps } from "../types";

describe("layout", () => {
	test("renders props", async () => {
		const wrapper = shallowMount(cmp, {
			propsData: {
				hasAside: true,
				className: "layout-custom"
			} as IProps
		});
		expect(wrapper.classes("has-aside")).toBe(true);
		expect(wrapper.classes("layout-custom")).toBe(true);
		expect(wrapper.props("hasAside")).toBe(true);
		expect(wrapper.props("className")).toBe("layout-custom");
	});
});
