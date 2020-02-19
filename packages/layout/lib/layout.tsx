import { TSX, CreateElement, VNode } from "@siu-vue/shared";
import { Component, Prop } from "vue-property-decorator";
import { LayoutProps, LayoutBlockProps } from "../types";

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
	@Prop(String) className?: string;
	@Prop(Boolean) hasAside?: boolean;
	static Header: typeof Header;
	static Content: typeof Content;
	static Footer: typeof Footer;

	render(): JSX.Element {
		this.$slots;

		return (
			<section class={["v-layout", this.hasAside && `has-aside`, this.className].filter(Boolean)}>
				{this.$slots.default || null}
			</section>
		);
	}
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
