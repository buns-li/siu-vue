import Vue from "vue";

export abstract class TSX<P> extends Vue {
	static install(_vue: typeof Vue): void {
		/**
		 * demo
		 *
		 * _vue.component("Component.name",Component)
		 */
	}
	props: (Readonly<{}> & Readonly<P>) | undefined;
}

export * from "vue";

export default Vue;
