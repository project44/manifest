export interface DocMeta {
	description: string;
	slug: string;
	title: string;
	toc: TOC[];
}

export interface SidebarItem {
	collapsible?: boolean;
	collapsed?: boolean;
	slug: string;
	items?: SidebarItem[];
	title: string;
}

export interface TOC {
	content: string;
	slug: string;
	lvl: number;
}
