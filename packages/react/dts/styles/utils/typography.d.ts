declare type Variant = 'display' | 'heading' | 'title' | 'subtitle' | 'body' | 'body-bold' | 'subtext' | 'subtext-bold' | 'caption' | 'caption-bold';
export declare type VariantToken = `$${Variant}`;
export declare const typography: {
    typography: (variant: VariantToken) => import("@stitches/react/types/css-util").CSSProperties;
};
export {};
//# sourceMappingURL=typography.d.ts.map