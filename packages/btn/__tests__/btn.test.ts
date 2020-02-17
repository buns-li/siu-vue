import { shallowMount } from "@vue/test-utils";
import cmp from "../lib/btn";

describe("btn", () => {
	test("renders props", async () => {
		const msg = "111";

		const onClick = jest.fn().mockReturnValue("clicked");

		const wrapper = shallowMount(cmp, {
			slots: { default: msg },
			propsData: {
				htmlType: "submit",
				size: "small",
				shape: "circle",
				disabled: true,
				type: "primary"
			},
			listeners: {
				click: onClick
			}
		});
		expect(wrapper.text()).toMatch(msg);
		expect(wrapper.attributes("type")).toMatch("submit");
		expect(wrapper.classes("is-small")).toBe(true);
		expect(wrapper.classes("is-disabled")).toBe(true);
		expect(wrapper.classes("is-primary")).toBe(true);
		expect(wrapper.classes("is-circle")).toBe(true);
		expect(wrapper.classes("is-block")).toBe(false);
		expect(wrapper.props("type")).toBe("primary");

		wrapper.find("button").trigger("click");
		expect(onClick()).toBe("clicked");
	});
});
