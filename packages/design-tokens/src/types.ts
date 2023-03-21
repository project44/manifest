export interface Token {
  value: number | string;
  name: string;
  attributes: {
    category: string;
    type: string;
    item?: string;
    subitem?: string;
  };
  path: string[];
}
