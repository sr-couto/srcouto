declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"factor-pedagogico-del-kitsch.mdx": {
	id: "factor-pedagogico-del-kitsch.mdx";
  slug: "factor-pedagogico-del-kitsch";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"la-manifestacion-irrepetible-de-una-lejania.mdx": {
	id: "la-manifestacion-irrepetible-de-una-lejania.mdx";
  slug: "la-manifestacion-irrepetible-de-una-lejania";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"extractos": {
"ada-lovelace.mdx": {
	id: "ada-lovelace.mdx";
  slug: "ada-lovelace";
  body: string;
  collection: "extractos";
  data: any
} & { render(): Render[".mdx"] };
};
"traducciones": {
"de-la-industria-textil-a-la-luna.mdx": {
	id: "de-la-industria-textil-a-la-luna.mdx";
  slug: "de-la-industria-textil-a-la-luna";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"el-ancho-de-banda-de-la-conciencia.mdx": {
	id: "el-ancho-de-banda-de-la-conciencia.mdx";
  slug: "el-ancho-de-banda-de-la-conciencia";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"el-diseno-centrado-en-las-personas.mdx": {
	id: "el-diseno-centrado-en-las-personas.mdx";
  slug: "el-diseno-centrado-en-las-personas";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"el-problema-con-el-diseno-de-banderas.mdx": {
	id: "el-problema-con-el-diseno-de-banderas.mdx";
  slug: "el-problema-con-el-diseno-de-banderas";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"la-autentificacion-de-tres-factores.mdx": {
	id: "la-autentificacion-de-tres-factores.mdx";
  slug: "la-autentificacion-de-tres-factores";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"la-comunicacion-mas-corta-de-la-historia.mdx": {
	id: "la-comunicacion-mas-corta-de-la-historia.mdx";
  slug: "la-comunicacion-mas-corta-de-la-historia";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"la-psicologia-del-diseno.mdx": {
	id: "la-psicologia-del-diseno.mdx";
  slug: "la-psicologia-del-diseno";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"licencia.mdx": {
	id: "licencia.mdx";
  slug: "licencia";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
"sobre-inteligencia-artificial.mdx": {
	id: "sobre-inteligencia-artificial.mdx";
  slug: "sobre-inteligencia-artificial";
  body: string;
  collection: "traducciones";
  data: InferEntrySchema<"traducciones">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
