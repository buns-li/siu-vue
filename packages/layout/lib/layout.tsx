import { TSX, CreateElement, VNode } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { LayoutProps, LayoutBlockProps } from "../types";

import Asider from "./asider";

function createBlock(
	h: CreateElement,
	tag: "header" | "footer" | "content",
	slots: { [key: string]: VNode[] | undefined },
	cls?: string
): JSX.Element {
	return h(
		tag === "content" ? "div" : tag,
		{
			class: cls ? [`v-layout-${tag}`, cls] : `v-layout-${tag}`
		},
		[slots.default || null]
	);
}

@Component({
	name: "Header"
})
class Header extends TSX<LayoutBlockProps> {
	@Prop(String) cls?: string;

	render(h: CreateElement): JSX.Element {
		return createBlock(h, "header", this.$slots, this.cls);
	}
}

@Component({
	name: "Content"
})
class Content extends TSX<LayoutBlockProps> {
	@Prop(String) cls?: string;

	render(h: CreateElement): JSX.Element {
		return createBlock(h, "content", this.$slots, this.cls);
	}
}

@Component({
	name: "Footer"
})
class Footer extends TSX<LayoutBlockProps> {
	@Prop(String) cls?: string;

	render(h: CreateElement): JSX.Element {
		return createBlock(h, "footer", this.$slots, this.cls);
	}
}

@Component({
	name: "Layout"
})
class Layout extends TSX<LayoutProps> {
	static Header: typeof Header;
	static Content: typeof Content;
	static Footer: typeof Footer;
	static Asider: typeof Asider;

	@Prop(String) cls?: string;
	@Prop(Boolean) hasAside?: boolean;

	render(): JSX.Element {
		return (
			<section class={["v-layout", this.hasAside && `has-aside`, this.cls].filter(Boolean)}>
				{this.$slots.default}
			</section>
		);
	}
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Asider = Asider;

export default Layout;
