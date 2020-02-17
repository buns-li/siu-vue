import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/header";

describe("header", () => {
	test("renders props", () => {
		const msg = "111";
		const wrapper = shallowMount(cmp, {
			slots: { default: msg }
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
