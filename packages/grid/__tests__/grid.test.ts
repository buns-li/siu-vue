import { shallowMount, mount } from "@vue/test-utils";
import "matchmedia-polyfill";
import "matchmedia-polyfill/matchMedia.addListener";
import { Row, Col } from "../lib/grid";

describe("grid", () => {
	test(" Row `type=flex` ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {
				type: "flex",
				align: "top",
				justify: "center"
			}
		});

		expect(wrapper.props("type")).toBe("flex");
		expect(wrapper.classes("v-row-flex")).toBe(true);
		expect(wrapper.classes("v-row")).toBe(false);

		expect(wrapper.props("align")).toBe("top");
		expect(wrapper.classes("align-top")).toBe(true);

		expect(wrapper.props("justify")).toBe("center");
		expect(wrapper.classes("justify-center")).toBe(true);
	});

	test(" Row type unset ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {}
		});

		expect(wrapper.props("type")).toBeFalsy();
		expect(wrapper.classes("v-row")).toBeTruthy();
		expect(wrapper.classes("v-row-flex")).toBeFalsy();
		expect(wrapper.classes("align-top")).toBeFalsy();
		expect(wrapper.classes("justify-center")).toBeFalsy();
	});

	test(" Row `gutter` ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {
				gutter: 10
			}
		});

		expect(wrapper.props("gutter")).toBe(10);
	});

	test(" Row object `gutter`  ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {
				gutter: {
					span: 10,
					xs: 5
				}
			}
		});

		expect(wrapper.props("gutter")).toHaveProperty("span");
		expect(wrapper.props().gutter.span).toBe(10);
	});

	test(" Row `breakpointMap` ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {
				breakpointMap: {
					xs: { max: 575 },
					sm: { min: 576, max: 767 }
				}
			}
		});

		expect(wrapper.vm.$data.responsiveMap).toBeTruthy();
		expect(wrapper.vm.$data.responsiveMap.xs).toBe("(max-width:575px)");
		expect(wrapper.vm.$data.responsiveMap.sm).toBe("(max-width:767px) and (min-width:576px)");
	});

	test(" Row empty `breakpointMap` ", () => {
		const wrapper = shallowMount(Row, {
			propsData: {
				breakpointMap: null
			}
		});

		expect(wrapper.vm.$data.responsiveMap).toBeTruthy();
		expect(wrapper.vm.$data.responsiveMap.xs).toBeFalsy();
		expect(wrapper.vm.$data.responsiveMap.sm).toBeFalsy();
		expect(wrapper.vm.$data.responsiveMap.md).toBeFalsy();
		expect(wrapper.vm.$data.responsiveMap.lg).toBeFalsy();
		expect(wrapper.vm.$data.responsiveMap.xl).toBeFalsy();
		expect(wrapper.vm.$data.responsiveMap.xxl).toBeFalsy();
	});

	test(" Col ", () => {
		const msg = "111";

		const wrapper = mount(Col, {
			slots: {
				default: msg
			},
			propsData: {
				span: 6,
				xs: 3,
				sm: 3,
				md: 3,
				lg: 3,
				xl: 3,
				xxl: 3
			}
		});
		expect(wrapper.text()).toMatch(msg);
		expect(wrapper.props("span")).toBe(6);
		expect(wrapper.classes("v-col-6")).toBeTruthy();

		expect(wrapper.props("xs")).toBe(3);
		expect(wrapper.classes("v-col-xs-3")).toBeTruthy();

		expect(wrapper.props("sm")).toBe(3);
		expect(wrapper.classes("v-col-sm-3")).toBeTruthy();

		expect(wrapper.props("md")).toBe(3);
		expect(wrapper.classes("v-col-md-3")).toBeTruthy();

		expect(wrapper.props("lg")).toBe(3);
		expect(wrapper.classes("v-col-lg-3")).toBeTruthy();

		expect(wrapper.props("xl")).toBe(3);
		expect(wrapper.classes("v-col-xl-3")).toBeTruthy();

		expect(wrapper.props("xxl")).toBe(3);
		expect(wrapper.classes("v-col-xxl-3")).toBeTruthy();
	});
});
