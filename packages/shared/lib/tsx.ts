import Vue, { VueConstructor } from "vue";

export abstract class TSX<P> extends Vue {
	static install(_vue: VueConstructor) {}
	props: (Readonly<{}> & Readonly<P>) | undefined;
}
