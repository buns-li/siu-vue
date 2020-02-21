import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/layout";
import { LayoutProps, LayoutBlockProps } from "../types";

describe("layout", () => {
	test("renders props", async () => {
		const wrapper = shallowMount(cmp, {
			propsData: {
				hasAside: true,
				cls: "layout-custom"
			} as LayoutProps
		});
		expect(wrapper.classes("has-aside")).toBe(true);
		expect(wrapper.classes("layout-custom")).toBe(true);
		expect(wrapper.props("hasAside")).toBe(true);
		expect(wrapper.props("cls")).toBe("layout-custom");
	});

	test(" Header ", async () => {
		const wrapper = shallowMount(cmp.Header, {
			propsData: {
				cls: "header-custom"
			} as LayoutBlockProps
		});
		expect(wrapper.props("cls")).toBe("header-custom");
		expect(wrapper.classes("header-custom")).toBe(true);
	});

	test(" Content ", async () => {
		const wrapper = shallowMount(cmp.Content, {
			propsData: {
				cls: "content-custom"
			} as LayoutBlockProps
		});
		expect(wrapper.props("cls")).toBe("content-custom");
		expect(wrapper.classes("content-custom")).toBe(true);
	});

	test(" Footer ", async () => {
		const wrapper = shallowMount(cmp.Footer, {
			propsData: {
				cls: "footer-custom"
			} as LayoutBlockProps
		});
		expect(wrapper.props("cls")).toBe("footer-custom");
		expect(wrapper.classes("footer-custom")).toBe(true);
	});
});
