export interface Slug {
  pathName: string;
}

export interface NavItem {
  children?: NavItem[];
  title: string;
  url: string;
}

export interface TOCItem {
  content: string;
  slug: string;
  lvl: number;
}
