import type * as Stitches from '@stitches/react';
export declare type TypographyVariant = 'display' | 'heading' | 'title' | 'subtitle' | 'body' | 'body-bold' | 'subtext' | 'subtext-bold' | 'caption' | 'caption-bold';
declare type TypographyVariantToken = `$${TypographyVariant}`;
export declare const defaultTheme: {
    prefix: string;
    media: {
        lg: string;
        md: string;
        sm: string;
        xl: string;
    };
    theme: {
        borderWidths: {
            large: string;
            medium: string;
            small: string;
        };
        colors: {
            'background-danger': string;
            'background-primary': string;
            'background-secondary': string;
            'background-side-nav': string;
            'background-success': string;
            'background-surface': string;
            'background-tertiary': string;
            'background-top-nav': string;
            'background-warning': string;
            'border-danger': string;
            'border-disabled': string;
            'border-primary': string;
            'border-success': string;
            'border-warning': string;
            'brand-default': string;
            'brand-active': string;
            'brand-hover': string;
            'brand-gradient': string;
            'palette-black': string;
            'palette-white': string;
            'palette-blue-50': string;
            'palette-blue-100': string;
            'palette-blue-200': string;
            'palette-blue-300': string;
            'palette-blue-400': string;
            'palette-blue-500': string;
            'palette-blue-600': string;
            'palette-blue-700': string;
            'palette-blue-800': string;
            'palette-blue-900': string;
            'palette-brown-50': string;
            'palette-brown-100': string;
            'palette-brown-200': string;
            'palette-brown-300': string;
            'palette-brown-400': string;
            'palette-brown-500': string;
            'palette-brown-600': string;
            'palette-brown-700': string;
            'palette-brown-800': string;
            'palette-brown-900': string;
            'palette-green-50': string;
            'palette-green-100': string;
            'palette-green-200': string;
            'palette-green-300': string;
            'palette-green-400': string;
            'palette-green-500': string;
            'palette-green-600': string;
            'palette-green-700': string;
            'palette-green-800': string;
            'palette-green-900': string;
            'palette-grey-50': string;
            'palette-grey-100': string;
            'palette-grey-200': string;
            'palette-grey-300': string;
            'palette-grey-400': string;
            'palette-grey-500': string;
            'palette-grey-600': string;
            'palette-grey-700': string;
            'palette-grey-800': string;
            'palette-grey-900': string;
            'palette-indigo-50': string;
            'palette-indigo-100': string;
            'palette-indigo-200': string;
            'palette-indigo-300': string;
            'palette-indigo-400': string;
            'palette-indigo-500': string;
            'palette-indigo-600': string;
            'palette-indigo-700': string;
            'palette-indigo-800': string;
            'palette-indigo-900': string;
            'palette-orange-50': string;
            'palette-orange-100': string;
            'palette-orange-200': string;
            'palette-orange-300': string;
            'palette-orange-400': string;
            'palette-orange-500': string;
            'palette-orange-600': string;
            'palette-orange-700': string;
            'palette-orange-800': string;
            'palette-orange-900': string;
            'palette-pink-50': string;
            'palette-pink-100': string;
            'palette-pink-200': string;
            'palette-pink-300': string;
            'palette-pink-400': string;
            'palette-pink-500': string;
            'palette-pink-600': string;
            'palette-pink-700': string;
            'palette-pink-800': string;
            'palette-pink-900': string;
            'palette-purple-50': string;
            'palette-purple-100': string;
            'palette-purple-200': string;
            'palette-purple-300': string;
            'palette-purple-400': string;
            'palette-purple-500': string;
            'palette-purple-600': string;
            'palette-purple-700': string;
            'palette-purple-800': string;
            'palette-purple-900': string;
            'palette-red-50': string;
            'palette-red-100': string;
            'palette-red-200': string;
            'palette-red-300': string;
            'palette-red-400': string;
            'palette-red-500': string;
            'palette-red-600': string;
            'palette-red-700': string;
            'palette-red-800': string;
            'palette-red-900': string;
            'palette-yellow-50': string;
            'palette-yellow-100': string;
            'palette-yellow-200': string;
            'palette-yellow-300': string;
            'palette-yellow-400': string;
            'palette-yellow-500': string;
            'palette-yellow-600': string;
            'palette-yellow-700': string;
            'palette-yellow-800': string;
            'palette-yellow-900': string;
            'primary-default': string;
            'primary-active': string;
            'primary-hover': string;
            'text-contrast': string;
            'text-danger': string;
            'text-disabled': string;
            'text-primary': string;
            'text-secondary': string;
            'text-success': string;
            'text-tertiary': string;
            'text-warning': string;
            'data-viz-danger-fill': string;
            'data-viz-danger-hover': string;
            'data-viz-danger-line': string;
            'data-viz-neutral-fill': string;
            'data-viz-neutral-hover': string;
            'data-viz-primary-fill': string;
            'data-viz-primary-fill-alt': string;
            'data-viz-primary-hover': string;
            'data-viz-primary-line': string;
            'data-viz-secondary-fill': string;
            'data-viz-secondary-fill-alt': string;
            'data-viz-secondary-hover': string;
            'data-viz-secondary-line': string;
            'data-viz-tertiary-fill': string;
            'data-viz-tertiary-fill-alt': string;
            'data-viz-tertiary-hover': string;
            'data-viz-tertiary-line': string;
            'data-viz-warning-fill': string;
            'data-viz-warning-hover': string;
            'data-viz-warning-line': string;
        };
        fonts: {
            mono: string;
            text: string;
        };
        fontSizes: {
            large: string;
            medium: string;
            small: string;
            'x-large': string;
            'x-small': string;
            'xx-large': string;
        };
        fontWeights: {
            bold: string;
            regular: string;
            semibold: string;
        };
        letterSpacings: {
            large: string;
            medium: string;
            small: string;
            'x-small': string;
        };
        lineHeights: {
            large: string;
            medium: string;
            small: string;
            'x-large': string;
            'x-small': string;
            'xx-large': string;
        };
        radii: {
            full: string;
            small: string;
        };
        shadows: {
            large: string;
            medium: string;
            small: string;
        };
        sizes: {
            large: string;
            medium: string;
            small: string;
            'x-large': string;
        };
        space: {
            medium: string;
            small: string;
            large: string;
            'x-large': string;
            'x-small': string;
        };
        transitions: {
            all: string;
            color: string;
            default: string;
            opacity: string;
            shadow: string;
            transform: string;
        };
        zIndices: {
            dropdown: string;
            modal: string;
            overlay: string;
            popover: string;
            sticky: string;
            tooltip: string;
        };
    };
    utils: {
        bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            backgroundColor: {
                readonly [Stitches.$$PropertyValue]: "backgroundColor";
            };
        };
        d: (value: Stitches.PropertyValue<'display'>) => {
            display: {
                readonly [Stitches.$$PropertyValue]: "display";
            };
        };
        h: (value: Stitches.PropertyValue<'height'>) => {
            height: {
                readonly [Stitches.$$PropertyValue]: "height";
            };
        };
        m: (value: Stitches.PropertyValue<'margin'>) => {
            margin: {
                readonly [Stitches.$$PropertyValue]: "margin";
            };
        };
        maxH: (value: Stitches.PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [Stitches.$$PropertyValue]: "maxHeight";
            };
        };
        maxW: (value: Stitches.PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [Stitches.$$PropertyValue]: "maxWidth";
            };
        };
        mb: (value: Stitches.PropertyValue<'marginBottom'>) => {
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "marginBottom";
            };
        };
        minH: (value: Stitches.PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [Stitches.$$PropertyValue]: "minHeight";
            };
        };
        minW: (value: Stitches.PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [Stitches.$$PropertyValue]: "minWidth";
            };
        };
        ml: (value: Stitches.PropertyValue<'marginLeft'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "marginLeft";
            };
        };
        mr: (value: Stitches.PropertyValue<'marginRight'>) => {
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "marginRight";
            };
        };
        mt: (value: Stitches.PropertyValue<'marginTop'>) => {
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "marginTop";
            };
        };
        mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
            marginLeft: {
                readonly [Stitches.$$PropertyValue]: "marginLeft";
            };
            marginRight: {
                readonly [Stitches.$$PropertyValue]: "marginLeft";
            };
        };
        my: (value: Stitches.PropertyValue<'marginTop'>) => {
            marginBottom: {
                readonly [Stitches.$$PropertyValue]: "marginTop";
            };
            marginTop: {
                readonly [Stitches.$$PropertyValue]: "marginTop";
            };
        };
        p: (value: Stitches.PropertyValue<'padding'>) => {
            padding: {
                readonly [Stitches.$$PropertyValue]: "padding";
            };
        };
        pb: (value: Stitches.PropertyValue<'paddingBottom'>) => {
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "paddingBottom";
            };
        };
        pl: (value: Stitches.PropertyValue<'paddingLeft'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "paddingLeft";
            };
        };
        pr: (value: Stitches.PropertyValue<'paddingRight'>) => {
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "paddingRight";
            };
        };
        pt: (value: Stitches.PropertyValue<'paddingTop'>) => {
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "paddingTop";
            };
        };
        px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
            paddingLeft: {
                readonly [Stitches.$$PropertyValue]: "paddingLeft";
            };
            paddingRight: {
                readonly [Stitches.$$PropertyValue]: "paddingLeft";
            };
        };
        py: (value: Stitches.PropertyValue<'paddingTop'>) => {
            paddingBottom: {
                readonly [Stitches.$$PropertyValue]: "paddingTop";
            };
            paddingTop: {
                readonly [Stitches.$$PropertyValue]: "paddingTop";
            };
        };
        size: (value: Stitches.PropertyValue<'width'>) => {
            height: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
        typography: (variant: TypographyVariantToken) => import("@stitches/react/types/css-util").CSSProperties;
        w: (value: Stitches.PropertyValue<'width'>) => {
            width: {
                readonly [Stitches.$$PropertyValue]: "width";
            };
        };
    };
};
export {};
//# sourceMappingURL=defaultTheme.d.ts.map