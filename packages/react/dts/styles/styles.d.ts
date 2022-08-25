import { CSS as StitchesCSS } from '@stitches/react';
export declare type CSS = StitchesCSS<typeof config>;
export declare type Theme = typeof theme;
export declare const styled: <Type extends import("@stitches/react/types/util").Function | import("react").ComponentType<any> | keyof JSX.IntrinsicElements, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, {
    borderWidths: {
        large: string;
        medium: string;
        small: string;
    };
    colors: {
        'palette-black': any;
        'palette-white': any;
        'palette-blue-50': any;
        'palette-blue-100': any;
        'palette-blue-200': any;
        'palette-blue-300': any;
        'palette-blue-400': any;
        'palette-blue-500': any;
        'palette-blue-600': any;
        'palette-blue-700': any;
        'palette-blue-800': any;
        'palette-blue-900': any;
        'palette-brown-50': any;
        'palette-brown-100': any;
        'palette-brown-200': any;
        'palette-brown-300': any;
        'palette-brown-400': any;
        'palette-brown-500': any;
        'palette-brown-600': any;
        'palette-brown-700': any;
        'palette-brown-800': any;
        'palette-brown-900': any;
        'palette-green-50': any;
        'palette-green-100': any;
        'palette-green-200': any;
        'palette-green-300': any;
        'palette-green-400': any;
        'palette-green-500': any;
        'palette-green-600': any;
        'palette-green-700': any;
        'palette-green-800': any;
        'palette-green-900': any;
        'palette-grey-50': any;
        'palette-grey-100': any;
        'palette-grey-200': any;
        'palette-grey-300': any;
        'palette-grey-400': any;
        'palette-grey-500': any;
        'palette-grey-600': any;
        'palette-grey-700': any;
        'palette-grey-800': any;
        'palette-grey-900': any;
        'palette-indigo-50': any;
        'palette-indigo-100': any;
        'palette-indigo-200': any;
        'palette-indigo-300': any;
        'palette-indigo-400': any;
        'palette-indigo-500': any;
        'palette-indigo-600': any;
        'palette-indigo-700': any;
        'palette-indigo-800': any;
        'palette-indigo-900': any;
        'palette-orange-50': any;
        'palette-orange-100': any;
        'palette-orange-200': any;
        'palette-orange-300': any;
        'palette-orange-400': any;
        'palette-orange-500': any;
        'palette-orange-600': any;
        'palette-orange-700': any;
        'palette-orange-800': any;
        'palette-orange-900': any;
        'palette-pink-50': any;
        'palette-pink-100': any;
        'palette-pink-200': any;
        'palette-pink-300': any;
        'palette-pink-400': any;
        'palette-pink-500': any;
        'palette-pink-600': any;
        'palette-pink-700': any;
        'palette-pink-800': any;
        'palette-pink-900': any;
        'palette-purple-50': any;
        'palette-purple-100': any;
        'palette-purple-200': any;
        'palette-purple-300': any;
        'palette-purple-400': any;
        'palette-purple-500': any;
        'palette-purple-600': any;
        'palette-purple-700': any;
        'palette-purple-800': any;
        'palette-purple-900': any;
        'palette-red-50': any;
        'palette-red-100': any;
        'palette-red-200': any;
        'palette-red-300': any;
        'palette-red-400': any;
        'palette-red-500': any;
        'palette-red-600': any;
        'palette-red-700': any;
        'palette-red-800': any;
        'palette-red-900': any;
        'palette-yellow-50': any;
        'palette-yellow-100': any;
        'palette-yellow-200': any;
        'palette-yellow-300': any;
        'palette-yellow-400': any;
        'palette-yellow-500': any;
        'palette-yellow-600': any;
        'palette-yellow-700': any;
        'palette-yellow-800': any;
        'palette-yellow-900': any;
        'data-viz-danger-fill': any;
        'data-viz-danger-hover': any;
        'data-viz-danger-line': any;
        'data-viz-neutral-fill': any;
        'data-viz-neutral-hover': any;
        'data-viz-primary-fill': any;
        'data-viz-primary-fill-alt': any;
        'data-viz-primary-hover': any;
        'data-viz-primary-line': any;
        'data-viz-secondary-fill': any;
        'data-viz-secondary-fill-alt': any;
        'data-viz-secondary-hover': any;
        'data-viz-secondary-line': any;
        'data-viz-tertiary-fill': any;
        'data-viz-tertiary-fill-alt': any;
        'data-viz-tertiary-hover': any;
        'data-viz-tertiary-line': any;
        'data-viz-warning-fill': any;
        'data-viz-warning-hover': any;
        'data-viz-warning-line': any;
        'brand-default': any;
        'brand-active': any;
        'brand-hover': any;
        'brand-gradient': any;
        'background-danger': any;
        'background-primary': any;
        'background-secondary': any;
        'background-side-nav': any;
        'background-success': any;
        'background-surface': any;
        'background-tertiary': any;
        'background-top-nav': any;
        'background-warning': any;
        'border-danger': any;
        'border-disabled': any;
        'border-primary': any;
        'border-success': any;
        'border-warning': any;
        'primary-default': any;
        'primary-active': any;
        'primary-hover': any;
        'text-contrast': any;
        'text-danger': any;
        'text-disabled': any;
        'text-primary': any;
        'text-secondary': any;
        'text-success': any;
        'text-tertiary': any;
        'text-warning': any;
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
    zIndices: {
        dropdown: string;
        modal: string;
        overlay: string;
        popover: string;
        sticky: string;
        tooltip: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "marginRight";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
        marginRight: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "paddingBottom";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingBottom";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "paddingRight";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "paddingRight";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingTop";
        };
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        height: {
            readonly [$$PropertyValue]: "width";
        };
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
        };
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, import("@stitches/react/types/css-util").CSS<{
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, {
    borderWidths: {
        large: string;
        medium: string;
        small: string;
    };
    colors: {
        'palette-black': any;
        'palette-white': any;
        'palette-blue-50': any;
        'palette-blue-100': any;
        'palette-blue-200': any;
        'palette-blue-300': any;
        'palette-blue-400': any;
        'palette-blue-500': any;
        'palette-blue-600': any;
        'palette-blue-700': any;
        'palette-blue-800': any;
        'palette-blue-900': any;
        'palette-brown-50': any;
        'palette-brown-100': any;
        'palette-brown-200': any;
        'palette-brown-300': any;
        'palette-brown-400': any;
        'palette-brown-500': any;
        'palette-brown-600': any;
        'palette-brown-700': any;
        'palette-brown-800': any;
        'palette-brown-900': any;
        'palette-green-50': any;
        'palette-green-100': any;
        'palette-green-200': any;
        'palette-green-300': any;
        'palette-green-400': any;
        'palette-green-500': any;
        'palette-green-600': any;
        'palette-green-700': any;
        'palette-green-800': any;
        'palette-green-900': any;
        'palette-grey-50': any;
        'palette-grey-100': any;
        'palette-grey-200': any;
        'palette-grey-300': any;
        'palette-grey-400': any;
        'palette-grey-500': any;
        'palette-grey-600': any;
        'palette-grey-700': any;
        'palette-grey-800': any;
        'palette-grey-900': any;
        'palette-indigo-50': any;
        'palette-indigo-100': any;
        'palette-indigo-200': any;
        'palette-indigo-300': any;
        'palette-indigo-400': any;
        'palette-indigo-500': any;
        'palette-indigo-600': any;
        'palette-indigo-700': any;
        'palette-indigo-800': any;
        'palette-indigo-900': any;
        'palette-orange-50': any;
        'palette-orange-100': any;
        'palette-orange-200': any;
        'palette-orange-300': any;
        'palette-orange-400': any;
        'palette-orange-500': any;
        'palette-orange-600': any;
        'palette-orange-700': any;
        'palette-orange-800': any;
        'palette-orange-900': any;
        'palette-pink-50': any;
        'palette-pink-100': any;
        'palette-pink-200': any;
        'palette-pink-300': any;
        'palette-pink-400': any;
        'palette-pink-500': any;
        'palette-pink-600': any;
        'palette-pink-700': any;
        'palette-pink-800': any;
        'palette-pink-900': any;
        'palette-purple-50': any;
        'palette-purple-100': any;
        'palette-purple-200': any;
        'palette-purple-300': any;
        'palette-purple-400': any;
        'palette-purple-500': any;
        'palette-purple-600': any;
        'palette-purple-700': any;
        'palette-purple-800': any;
        'palette-purple-900': any;
        'palette-red-50': any;
        'palette-red-100': any;
        'palette-red-200': any;
        'palette-red-300': any;
        'palette-red-400': any;
        'palette-red-500': any;
        'palette-red-600': any;
        'palette-red-700': any;
        'palette-red-800': any;
        'palette-red-900': any;
        'palette-yellow-50': any;
        'palette-yellow-100': any;
        'palette-yellow-200': any;
        'palette-yellow-300': any;
        'palette-yellow-400': any;
        'palette-yellow-500': any;
        'palette-yellow-600': any;
        'palette-yellow-700': any;
        'palette-yellow-800': any;
        'palette-yellow-900': any;
        'data-viz-danger-fill': any;
        'data-viz-danger-hover': any;
        'data-viz-danger-line': any;
        'data-viz-neutral-fill': any;
        'data-viz-neutral-hover': any;
        'data-viz-primary-fill': any;
        'data-viz-primary-fill-alt': any;
        'data-viz-primary-hover': any;
        'data-viz-primary-line': any;
        'data-viz-secondary-fill': any;
        'data-viz-secondary-fill-alt': any;
        'data-viz-secondary-hover': any;
        'data-viz-secondary-line': any;
        'data-viz-tertiary-fill': any;
        'data-viz-tertiary-fill-alt': any;
        'data-viz-tertiary-hover': any;
        'data-viz-tertiary-line': any;
        'data-viz-warning-fill': any;
        'data-viz-warning-hover': any;
        'data-viz-warning-line': any;
        'brand-default': any;
        'brand-active': any;
        'brand-hover': any;
        'brand-gradient': any;
        'background-danger': any;
        'background-primary': any;
        'background-secondary': any;
        'background-side-nav': any;
        'background-success': any;
        'background-surface': any;
        'background-tertiary': any;
        'background-top-nav': any;
        'background-warning': any;
        'border-danger': any;
        'border-disabled': any;
        'border-primary': any;
        'border-success': any;
        'border-warning': any;
        'primary-default': any;
        'primary-active': any;
        'primary-hover': any;
        'text-contrast': any;
        'text-danger': any;
        'text-disabled': any;
        'text-primary': any;
        'text-secondary': any;
        'text-success': any;
        'text-tertiary': any;
        'text-warning': any;
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
    zIndices: {
        dropdown: string;
        modal: string;
        overlay: string;
        popover: string;
        sticky: string;
        tooltip: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "marginRight";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
        marginRight: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "paddingBottom";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingBottom";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "paddingRight";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "paddingRight";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingTop";
        };
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        height: {
            readonly [$$PropertyValue]: "width";
        };
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
        };
    };
}>>, config: {
    prefix: "manifest";
    media: {
        lg: `(min-width: ${string})`;
        md: `(min-width: ${string}})`;
        sm: `(min-width: ${string}})`;
        xl: `(min-width: ${string}})`;
    };
    theme: {
        borderWidths: {
            large: string;
            medium: string;
            small: string;
        };
        colors: {
            'palette-black': any;
            'palette-white': any;
            'palette-blue-50': any;
            'palette-blue-100': any;
            'palette-blue-200': any;
            'palette-blue-300': any;
            'palette-blue-400': any;
            'palette-blue-500': any;
            'palette-blue-600': any;
            'palette-blue-700': any;
            'palette-blue-800': any;
            'palette-blue-900': any;
            'palette-brown-50': any;
            'palette-brown-100': any;
            'palette-brown-200': any;
            'palette-brown-300': any;
            'palette-brown-400': any;
            'palette-brown-500': any;
            'palette-brown-600': any;
            'palette-brown-700': any;
            'palette-brown-800': any;
            'palette-brown-900': any;
            'palette-green-50': any;
            'palette-green-100': any;
            'palette-green-200': any;
            'palette-green-300': any;
            'palette-green-400': any;
            'palette-green-500': any;
            'palette-green-600': any;
            'palette-green-700': any;
            'palette-green-800': any;
            'palette-green-900': any;
            'palette-grey-50': any;
            'palette-grey-100': any;
            'palette-grey-200': any;
            'palette-grey-300': any;
            'palette-grey-400': any;
            'palette-grey-500': any;
            'palette-grey-600': any;
            'palette-grey-700': any;
            'palette-grey-800': any;
            'palette-grey-900': any;
            'palette-indigo-50': any;
            'palette-indigo-100': any;
            'palette-indigo-200': any;
            'palette-indigo-300': any;
            'palette-indigo-400': any;
            'palette-indigo-500': any;
            'palette-indigo-600': any;
            'palette-indigo-700': any;
            'palette-indigo-800': any;
            'palette-indigo-900': any;
            'palette-orange-50': any;
            'palette-orange-100': any;
            'palette-orange-200': any;
            'palette-orange-300': any;
            'palette-orange-400': any;
            'palette-orange-500': any;
            'palette-orange-600': any;
            'palette-orange-700': any;
            'palette-orange-800': any;
            'palette-orange-900': any;
            'palette-pink-50': any;
            'palette-pink-100': any;
            'palette-pink-200': any;
            'palette-pink-300': any;
            'palette-pink-400': any;
            'palette-pink-500': any;
            'palette-pink-600': any;
            'palette-pink-700': any;
            'palette-pink-800': any;
            'palette-pink-900': any;
            'palette-purple-50': any;
            'palette-purple-100': any;
            'palette-purple-200': any;
            'palette-purple-300': any;
            'palette-purple-400': any;
            'palette-purple-500': any;
            'palette-purple-600': any;
            'palette-purple-700': any;
            'palette-purple-800': any;
            'palette-purple-900': any;
            'palette-red-50': any;
            'palette-red-100': any;
            'palette-red-200': any;
            'palette-red-300': any;
            'palette-red-400': any;
            'palette-red-500': any;
            'palette-red-600': any;
            'palette-red-700': any;
            'palette-red-800': any;
            'palette-red-900': any;
            'palette-yellow-50': any;
            'palette-yellow-100': any;
            'palette-yellow-200': any;
            'palette-yellow-300': any;
            'palette-yellow-400': any;
            'palette-yellow-500': any;
            'palette-yellow-600': any;
            'palette-yellow-700': any;
            'palette-yellow-800': any;
            'palette-yellow-900': any;
            'data-viz-danger-fill': any;
            'data-viz-danger-hover': any;
            'data-viz-danger-line': any;
            'data-viz-neutral-fill': any;
            'data-viz-neutral-hover': any;
            'data-viz-primary-fill': any;
            'data-viz-primary-fill-alt': any;
            'data-viz-primary-hover': any;
            'data-viz-primary-line': any;
            'data-viz-secondary-fill': any;
            'data-viz-secondary-fill-alt': any;
            'data-viz-secondary-hover': any;
            'data-viz-secondary-line': any;
            'data-viz-tertiary-fill': any;
            'data-viz-tertiary-fill-alt': any;
            'data-viz-tertiary-hover': any;
            'data-viz-tertiary-line': any;
            'data-viz-warning-fill': any;
            'data-viz-warning-hover': any;
            'data-viz-warning-line': any;
            'brand-default': any;
            'brand-active': any;
            'brand-hover': any;
            'brand-gradient': any;
            'background-danger': any;
            'background-primary': any;
            'background-secondary': any;
            'background-side-nav': any;
            'background-success': any;
            'background-surface': any;
            'background-tertiary': any;
            'background-top-nav': any;
            'background-warning': any;
            'border-danger': any;
            'border-disabled': any;
            'border-primary': any;
            'border-success': any;
            'border-warning': any;
            'primary-default': any;
            'primary-active': any;
            'primary-hover': any;
            'text-contrast': any;
            'text-danger': any;
            'text-disabled': any;
            'text-primary': any;
            'text-secondary': any;
            'text-success': any;
            'text-tertiary': any;
            'text-warning': any;
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
        zIndices: {
            dropdown: string;
            modal: string;
            overlay: string;
            popover: string;
            sticky: string;
            tooltip: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
            };
        };
        ml: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        mr: (value: {
            readonly [$$PropertyValue]: "marginRight";
        }) => {
            marginRight: {
                readonly [$$PropertyValue]: "marginRight";
            };
        };
        mt: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        mx: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
            marginRight: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        my: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginTop";
            };
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        p: (value: {
            readonly [$$PropertyValue]: "padding";
        }) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: {
            readonly [$$PropertyValue]: "paddingBottom";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingBottom";
            };
        };
        pl: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        pr: (value: {
            readonly [$$PropertyValue]: "paddingRight";
        }) => {
            paddingRight: {
                readonly [$$PropertyValue]: "paddingRight";
            };
        };
        pt: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        px: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        py: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingTop";
            };
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        d: (value: {
            readonly [$$PropertyValue]: "display";
        }) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        h: (value: {
            readonly [$$PropertyValue]: "height";
        }) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: {
            readonly [$$PropertyValue]: "maxHeight";
        }) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        maxW: (value: {
            readonly [$$PropertyValue]: "maxWidth";
        }) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minH: (value: {
            readonly [$$PropertyValue]: "minHeight";
        }) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        minW: (value: {
            readonly [$$PropertyValue]: "minWidth";
        }) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        size: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            height: {
                readonly [$$PropertyValue]: "width";
            };
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
            };
        };
    };
}, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        lg: `(min-width: ${string})`;
        md: `(min-width: ${string}})`;
        sm: `(min-width: ${string}})`;
        xl: `(min-width: ${string}})`;
    }, {
        borderWidths: {
            large: string;
            medium: string;
            small: string;
        };
        colors: {
            'palette-black': any;
            'palette-white': any;
            'palette-blue-50': any;
            'palette-blue-100': any;
            'palette-blue-200': any;
            'palette-blue-300': any;
            'palette-blue-400': any;
            'palette-blue-500': any;
            'palette-blue-600': any;
            'palette-blue-700': any;
            'palette-blue-800': any;
            'palette-blue-900': any;
            'palette-brown-50': any;
            'palette-brown-100': any;
            'palette-brown-200': any;
            'palette-brown-300': any;
            'palette-brown-400': any;
            'palette-brown-500': any;
            'palette-brown-600': any;
            'palette-brown-700': any;
            'palette-brown-800': any;
            'palette-brown-900': any;
            'palette-green-50': any;
            'palette-green-100': any;
            'palette-green-200': any;
            'palette-green-300': any;
            'palette-green-400': any;
            'palette-green-500': any;
            'palette-green-600': any;
            'palette-green-700': any;
            'palette-green-800': any;
            'palette-green-900': any;
            'palette-grey-50': any;
            'palette-grey-100': any;
            'palette-grey-200': any;
            'palette-grey-300': any;
            'palette-grey-400': any;
            'palette-grey-500': any;
            'palette-grey-600': any;
            'palette-grey-700': any;
            'palette-grey-800': any;
            'palette-grey-900': any;
            'palette-indigo-50': any;
            'palette-indigo-100': any;
            'palette-indigo-200': any;
            'palette-indigo-300': any;
            'palette-indigo-400': any;
            'palette-indigo-500': any;
            'palette-indigo-600': any;
            'palette-indigo-700': any;
            'palette-indigo-800': any;
            'palette-indigo-900': any;
            'palette-orange-50': any;
            'palette-orange-100': any;
            'palette-orange-200': any;
            'palette-orange-300': any;
            'palette-orange-400': any;
            'palette-orange-500': any;
            'palette-orange-600': any;
            'palette-orange-700': any;
            'palette-orange-800': any;
            'palette-orange-900': any;
            'palette-pink-50': any;
            'palette-pink-100': any;
            'palette-pink-200': any;
            'palette-pink-300': any;
            'palette-pink-400': any;
            'palette-pink-500': any;
            'palette-pink-600': any;
            'palette-pink-700': any;
            'palette-pink-800': any;
            'palette-pink-900': any;
            'palette-purple-50': any;
            'palette-purple-100': any;
            'palette-purple-200': any;
            'palette-purple-300': any;
            'palette-purple-400': any;
            'palette-purple-500': any;
            'palette-purple-600': any;
            'palette-purple-700': any;
            'palette-purple-800': any;
            'palette-purple-900': any;
            'palette-red-50': any;
            'palette-red-100': any;
            'palette-red-200': any;
            'palette-red-300': any;
            'palette-red-400': any;
            'palette-red-500': any;
            'palette-red-600': any;
            'palette-red-700': any;
            'palette-red-800': any;
            'palette-red-900': any;
            'palette-yellow-50': any;
            'palette-yellow-100': any;
            'palette-yellow-200': any;
            'palette-yellow-300': any;
            'palette-yellow-400': any;
            'palette-yellow-500': any;
            'palette-yellow-600': any;
            'palette-yellow-700': any;
            'palette-yellow-800': any;
            'palette-yellow-900': any;
            'data-viz-danger-fill': any;
            'data-viz-danger-hover': any;
            'data-viz-danger-line': any;
            'data-viz-neutral-fill': any;
            'data-viz-neutral-hover': any;
            'data-viz-primary-fill': any;
            'data-viz-primary-fill-alt': any;
            'data-viz-primary-hover': any;
            'data-viz-primary-line': any;
            'data-viz-secondary-fill': any;
            'data-viz-secondary-fill-alt': any;
            'data-viz-secondary-hover': any;
            'data-viz-secondary-line': any;
            'data-viz-tertiary-fill': any;
            'data-viz-tertiary-fill-alt': any;
            'data-viz-tertiary-hover': any;
            'data-viz-tertiary-line': any;
            'data-viz-warning-fill': any;
            'data-viz-warning-hover': any;
            'data-viz-warning-line': any;
            'brand-default': any;
            'brand-active': any;
            'brand-hover': any;
            'brand-gradient': any;
            'background-danger': any;
            'background-primary': any;
            'background-secondary': any;
            'background-side-nav': any;
            'background-success': any;
            'background-surface': any;
            'background-tertiary': any;
            'background-top-nav': any;
            'background-warning': any;
            'border-danger': any;
            'border-disabled': any;
            'border-primary': any;
            'border-success': any;
            'border-warning': any;
            'primary-default': any;
            'primary-active': any;
            'primary-hover': any;
            'text-contrast': any;
            'text-danger': any;
            'text-disabled': any;
            'text-primary': any;
            'text-secondary': any;
            'text-success': any;
            'text-tertiary': any;
            'text-warning': any;
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
        zIndices: {
            dropdown: string;
            modal: string;
            overlay: string;
            popover: string;
            sticky: string;
            tooltip: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
            };
        };
        ml: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        mr: (value: {
            readonly [$$PropertyValue]: "marginRight";
        }) => {
            marginRight: {
                readonly [$$PropertyValue]: "marginRight";
            };
        };
        mt: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        mx: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
            marginRight: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        my: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginTop";
            };
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        p: (value: {
            readonly [$$PropertyValue]: "padding";
        }) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: {
            readonly [$$PropertyValue]: "paddingBottom";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingBottom";
            };
        };
        pl: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        pr: (value: {
            readonly [$$PropertyValue]: "paddingRight";
        }) => {
            paddingRight: {
                readonly [$$PropertyValue]: "paddingRight";
            };
        };
        pt: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        px: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        py: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingTop";
            };
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        d: (value: {
            readonly [$$PropertyValue]: "display";
        }) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        h: (value: {
            readonly [$$PropertyValue]: "height";
        }) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: {
            readonly [$$PropertyValue]: "maxHeight";
        }) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        maxW: (value: {
            readonly [$$PropertyValue]: "maxWidth";
        }) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minH: (value: {
            readonly [$$PropertyValue]: "minHeight";
        }) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        minW: (value: {
            readonly [$$PropertyValue]: "minWidth";
        }) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        size: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            height: {
                readonly [$$PropertyValue]: "width";
            };
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
            };
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, {
    borderWidths: {
        large: string;
        medium: string;
        small: string;
    };
    colors: {
        'palette-black': any;
        'palette-white': any;
        'palette-blue-50': any;
        'palette-blue-100': any;
        'palette-blue-200': any;
        'palette-blue-300': any;
        'palette-blue-400': any;
        'palette-blue-500': any;
        'palette-blue-600': any;
        'palette-blue-700': any;
        'palette-blue-800': any;
        'palette-blue-900': any;
        'palette-brown-50': any;
        'palette-brown-100': any;
        'palette-brown-200': any;
        'palette-brown-300': any;
        'palette-brown-400': any;
        'palette-brown-500': any;
        'palette-brown-600': any;
        'palette-brown-700': any;
        'palette-brown-800': any;
        'palette-brown-900': any;
        'palette-green-50': any;
        'palette-green-100': any;
        'palette-green-200': any;
        'palette-green-300': any;
        'palette-green-400': any;
        'palette-green-500': any;
        'palette-green-600': any;
        'palette-green-700': any;
        'palette-green-800': any;
        'palette-green-900': any;
        'palette-grey-50': any;
        'palette-grey-100': any;
        'palette-grey-200': any;
        'palette-grey-300': any;
        'palette-grey-400': any;
        'palette-grey-500': any;
        'palette-grey-600': any;
        'palette-grey-700': any;
        'palette-grey-800': any;
        'palette-grey-900': any;
        'palette-indigo-50': any;
        'palette-indigo-100': any;
        'palette-indigo-200': any;
        'palette-indigo-300': any;
        'palette-indigo-400': any;
        'palette-indigo-500': any;
        'palette-indigo-600': any;
        'palette-indigo-700': any;
        'palette-indigo-800': any;
        'palette-indigo-900': any;
        'palette-orange-50': any;
        'palette-orange-100': any;
        'palette-orange-200': any;
        'palette-orange-300': any;
        'palette-orange-400': any;
        'palette-orange-500': any;
        'palette-orange-600': any;
        'palette-orange-700': any;
        'palette-orange-800': any;
        'palette-orange-900': any;
        'palette-pink-50': any;
        'palette-pink-100': any;
        'palette-pink-200': any;
        'palette-pink-300': any;
        'palette-pink-400': any;
        'palette-pink-500': any;
        'palette-pink-600': any;
        'palette-pink-700': any;
        'palette-pink-800': any;
        'palette-pink-900': any;
        'palette-purple-50': any;
        'palette-purple-100': any;
        'palette-purple-200': any;
        'palette-purple-300': any;
        'palette-purple-400': any;
        'palette-purple-500': any;
        'palette-purple-600': any;
        'palette-purple-700': any;
        'palette-purple-800': any;
        'palette-purple-900': any;
        'palette-red-50': any;
        'palette-red-100': any;
        'palette-red-200': any;
        'palette-red-300': any;
        'palette-red-400': any;
        'palette-red-500': any;
        'palette-red-600': any;
        'palette-red-700': any;
        'palette-red-800': any;
        'palette-red-900': any;
        'palette-yellow-50': any;
        'palette-yellow-100': any;
        'palette-yellow-200': any;
        'palette-yellow-300': any;
        'palette-yellow-400': any;
        'palette-yellow-500': any;
        'palette-yellow-600': any;
        'palette-yellow-700': any;
        'palette-yellow-800': any;
        'palette-yellow-900': any;
        'data-viz-danger-fill': any;
        'data-viz-danger-hover': any;
        'data-viz-danger-line': any;
        'data-viz-neutral-fill': any;
        'data-viz-neutral-hover': any;
        'data-viz-primary-fill': any;
        'data-viz-primary-fill-alt': any;
        'data-viz-primary-hover': any;
        'data-viz-primary-line': any;
        'data-viz-secondary-fill': any;
        'data-viz-secondary-fill-alt': any;
        'data-viz-secondary-hover': any;
        'data-viz-secondary-line': any;
        'data-viz-tertiary-fill': any;
        'data-viz-tertiary-fill-alt': any;
        'data-viz-tertiary-hover': any;
        'data-viz-tertiary-line': any;
        'data-viz-warning-fill': any;
        'data-viz-warning-hover': any;
        'data-viz-warning-line': any;
        'brand-default': any;
        'brand-active': any;
        'brand-hover': any;
        'brand-gradient': any;
        'background-danger': any;
        'background-primary': any;
        'background-secondary': any;
        'background-side-nav': any;
        'background-success': any;
        'background-surface': any;
        'background-tertiary': any;
        'background-top-nav': any;
        'background-warning': any;
        'border-danger': any;
        'border-disabled': any;
        'border-primary': any;
        'border-success': any;
        'border-warning': any;
        'primary-default': any;
        'primary-active': any;
        'primary-hover': any;
        'text-contrast': any;
        'text-danger': any;
        'text-disabled': any;
        'text-primary': any;
        'text-secondary': any;
        'text-success': any;
        'text-tertiary': any;
        'text-warning': any;
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
    zIndices: {
        dropdown: string;
        modal: string;
        overlay: string;
        popover: string;
        sticky: string;
        tooltip: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "marginRight";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
        marginRight: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "paddingBottom";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingBottom";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "paddingRight";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "paddingRight";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingTop";
        };
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        height: {
            readonly [$$PropertyValue]: "width";
        };
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
        };
    };
}>; })[]) => () => string, getCssText: () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        lg: `(min-width: ${string})`;
        md: `(min-width: ${string}})`;
        sm: `(min-width: ${string}})`;
        xl: `(min-width: ${string}})`;
    }, {
        borderWidths: {
            large: string;
            medium: string;
            small: string;
        };
        colors: {
            'palette-black': any;
            'palette-white': any;
            'palette-blue-50': any;
            'palette-blue-100': any;
            'palette-blue-200': any;
            'palette-blue-300': any;
            'palette-blue-400': any;
            'palette-blue-500': any;
            'palette-blue-600': any;
            'palette-blue-700': any;
            'palette-blue-800': any;
            'palette-blue-900': any;
            'palette-brown-50': any;
            'palette-brown-100': any;
            'palette-brown-200': any;
            'palette-brown-300': any;
            'palette-brown-400': any;
            'palette-brown-500': any;
            'palette-brown-600': any;
            'palette-brown-700': any;
            'palette-brown-800': any;
            'palette-brown-900': any;
            'palette-green-50': any;
            'palette-green-100': any;
            'palette-green-200': any;
            'palette-green-300': any;
            'palette-green-400': any;
            'palette-green-500': any;
            'palette-green-600': any;
            'palette-green-700': any;
            'palette-green-800': any;
            'palette-green-900': any;
            'palette-grey-50': any;
            'palette-grey-100': any;
            'palette-grey-200': any;
            'palette-grey-300': any;
            'palette-grey-400': any;
            'palette-grey-500': any;
            'palette-grey-600': any;
            'palette-grey-700': any;
            'palette-grey-800': any;
            'palette-grey-900': any;
            'palette-indigo-50': any;
            'palette-indigo-100': any;
            'palette-indigo-200': any;
            'palette-indigo-300': any;
            'palette-indigo-400': any;
            'palette-indigo-500': any;
            'palette-indigo-600': any;
            'palette-indigo-700': any;
            'palette-indigo-800': any;
            'palette-indigo-900': any;
            'palette-orange-50': any;
            'palette-orange-100': any;
            'palette-orange-200': any;
            'palette-orange-300': any;
            'palette-orange-400': any;
            'palette-orange-500': any;
            'palette-orange-600': any;
            'palette-orange-700': any;
            'palette-orange-800': any;
            'palette-orange-900': any;
            'palette-pink-50': any;
            'palette-pink-100': any;
            'palette-pink-200': any;
            'palette-pink-300': any;
            'palette-pink-400': any;
            'palette-pink-500': any;
            'palette-pink-600': any;
            'palette-pink-700': any;
            'palette-pink-800': any;
            'palette-pink-900': any;
            'palette-purple-50': any;
            'palette-purple-100': any;
            'palette-purple-200': any;
            'palette-purple-300': any;
            'palette-purple-400': any;
            'palette-purple-500': any;
            'palette-purple-600': any;
            'palette-purple-700': any;
            'palette-purple-800': any;
            'palette-purple-900': any;
            'palette-red-50': any;
            'palette-red-100': any;
            'palette-red-200': any;
            'palette-red-300': any;
            'palette-red-400': any;
            'palette-red-500': any;
            'palette-red-600': any;
            'palette-red-700': any;
            'palette-red-800': any;
            'palette-red-900': any;
            'palette-yellow-50': any;
            'palette-yellow-100': any;
            'palette-yellow-200': any;
            'palette-yellow-300': any;
            'palette-yellow-400': any;
            'palette-yellow-500': any;
            'palette-yellow-600': any;
            'palette-yellow-700': any;
            'palette-yellow-800': any;
            'palette-yellow-900': any;
            'data-viz-danger-fill': any;
            'data-viz-danger-hover': any;
            'data-viz-danger-line': any;
            'data-viz-neutral-fill': any;
            'data-viz-neutral-hover': any;
            'data-viz-primary-fill': any;
            'data-viz-primary-fill-alt': any;
            'data-viz-primary-hover': any;
            'data-viz-primary-line': any;
            'data-viz-secondary-fill': any;
            'data-viz-secondary-fill-alt': any;
            'data-viz-secondary-hover': any;
            'data-viz-secondary-line': any;
            'data-viz-tertiary-fill': any;
            'data-viz-tertiary-fill-alt': any;
            'data-viz-tertiary-hover': any;
            'data-viz-tertiary-line': any;
            'data-viz-warning-fill': any;
            'data-viz-warning-hover': any;
            'data-viz-warning-line': any;
            'brand-default': any;
            'brand-active': any;
            'brand-hover': any;
            'brand-gradient': any;
            'background-danger': any;
            'background-primary': any;
            'background-secondary': any;
            'background-side-nav': any;
            'background-success': any;
            'background-surface': any;
            'background-tertiary': any;
            'background-top-nav': any;
            'background-warning': any;
            'border-danger': any;
            'border-disabled': any;
            'border-primary': any;
            'border-success': any;
            'border-warning': any;
            'primary-default': any;
            'primary-active': any;
            'primary-hover': any;
            'text-contrast': any;
            'text-danger': any;
            'text-disabled': any;
            'text-primary': any;
            'text-secondary': any;
            'text-success': any;
            'text-tertiary': any;
            'text-warning': any;
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
        zIndices: {
            dropdown: string;
            modal: string;
            overlay: string;
            popover: string;
            sticky: string;
            tooltip: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
            };
        };
        ml: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        mr: (value: {
            readonly [$$PropertyValue]: "marginRight";
        }) => {
            marginRight: {
                readonly [$$PropertyValue]: "marginRight";
            };
        };
        mt: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        mx: (value: {
            readonly [$$PropertyValue]: "marginLeft";
        }) => {
            marginLeft: {
                readonly [$$PropertyValue]: "marginLeft";
            };
            marginRight: {
                readonly [$$PropertyValue]: "marginLeft";
            };
        };
        my: (value: {
            readonly [$$PropertyValue]: "marginTop";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginTop";
            };
            marginTop: {
                readonly [$$PropertyValue]: "marginTop";
            };
        };
        p: (value: {
            readonly [$$PropertyValue]: "padding";
        }) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: {
            readonly [$$PropertyValue]: "paddingBottom";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingBottom";
            };
        };
        pl: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        pr: (value: {
            readonly [$$PropertyValue]: "paddingRight";
        }) => {
            paddingRight: {
                readonly [$$PropertyValue]: "paddingRight";
            };
        };
        pt: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        px: (value: {
            readonly [$$PropertyValue]: "paddingLeft";
        }) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "paddingLeft";
            };
        };
        py: (value: {
            readonly [$$PropertyValue]: "paddingTop";
        }) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "paddingTop";
            };
            paddingTop: {
                readonly [$$PropertyValue]: "paddingTop";
            };
        };
        d: (value: {
            readonly [$$PropertyValue]: "display";
        }) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        h: (value: {
            readonly [$$PropertyValue]: "height";
        }) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: {
            readonly [$$PropertyValue]: "maxHeight";
        }) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        maxW: (value: {
            readonly [$$PropertyValue]: "maxWidth";
        }) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minH: (value: {
            readonly [$$PropertyValue]: "minHeight";
        }) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        minW: (value: {
            readonly [$$PropertyValue]: "minWidth";
        }) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        size: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            height: {
                readonly [$$PropertyValue]: "width";
            };
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
            };
        };
    }>;
}) => {
    (): string;
    name: string;
}, theme: string & {
    className: string;
    selector: string;
} & {
    borderWidths: {
        large: import("@stitches/react/types/theme").Token<"large", string, "borderWidths", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "borderWidths", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "borderWidths", "manifest">;
    };
    colors: {
        'palette-black': import("@stitches/react/types/theme").Token<"palette-black", string, "colors", "manifest">;
        'palette-white': import("@stitches/react/types/theme").Token<"palette-white", string, "colors", "manifest">;
        'palette-blue-50': import("@stitches/react/types/theme").Token<"palette-blue-50", string, "colors", "manifest">;
        'palette-blue-100': import("@stitches/react/types/theme").Token<"palette-blue-100", string, "colors", "manifest">;
        'palette-blue-200': import("@stitches/react/types/theme").Token<"palette-blue-200", string, "colors", "manifest">;
        'palette-blue-300': import("@stitches/react/types/theme").Token<"palette-blue-300", string, "colors", "manifest">;
        'palette-blue-400': import("@stitches/react/types/theme").Token<"palette-blue-400", string, "colors", "manifest">;
        'palette-blue-500': import("@stitches/react/types/theme").Token<"palette-blue-500", string, "colors", "manifest">;
        'palette-blue-600': import("@stitches/react/types/theme").Token<"palette-blue-600", string, "colors", "manifest">;
        'palette-blue-700': import("@stitches/react/types/theme").Token<"palette-blue-700", string, "colors", "manifest">;
        'palette-blue-800': import("@stitches/react/types/theme").Token<"palette-blue-800", string, "colors", "manifest">;
        'palette-blue-900': import("@stitches/react/types/theme").Token<"palette-blue-900", string, "colors", "manifest">;
        'palette-brown-50': import("@stitches/react/types/theme").Token<"palette-brown-50", string, "colors", "manifest">;
        'palette-brown-100': import("@stitches/react/types/theme").Token<"palette-brown-100", string, "colors", "manifest">;
        'palette-brown-200': import("@stitches/react/types/theme").Token<"palette-brown-200", string, "colors", "manifest">;
        'palette-brown-300': import("@stitches/react/types/theme").Token<"palette-brown-300", string, "colors", "manifest">;
        'palette-brown-400': import("@stitches/react/types/theme").Token<"palette-brown-400", string, "colors", "manifest">;
        'palette-brown-500': import("@stitches/react/types/theme").Token<"palette-brown-500", string, "colors", "manifest">;
        'palette-brown-600': import("@stitches/react/types/theme").Token<"palette-brown-600", string, "colors", "manifest">;
        'palette-brown-700': import("@stitches/react/types/theme").Token<"palette-brown-700", string, "colors", "manifest">;
        'palette-brown-800': import("@stitches/react/types/theme").Token<"palette-brown-800", string, "colors", "manifest">;
        'palette-brown-900': import("@stitches/react/types/theme").Token<"palette-brown-900", string, "colors", "manifest">;
        'palette-green-50': import("@stitches/react/types/theme").Token<"palette-green-50", string, "colors", "manifest">;
        'palette-green-100': import("@stitches/react/types/theme").Token<"palette-green-100", string, "colors", "manifest">;
        'palette-green-200': import("@stitches/react/types/theme").Token<"palette-green-200", string, "colors", "manifest">;
        'palette-green-300': import("@stitches/react/types/theme").Token<"palette-green-300", string, "colors", "manifest">;
        'palette-green-400': import("@stitches/react/types/theme").Token<"palette-green-400", string, "colors", "manifest">;
        'palette-green-500': import("@stitches/react/types/theme").Token<"palette-green-500", string, "colors", "manifest">;
        'palette-green-600': import("@stitches/react/types/theme").Token<"palette-green-600", string, "colors", "manifest">;
        'palette-green-700': import("@stitches/react/types/theme").Token<"palette-green-700", string, "colors", "manifest">;
        'palette-green-800': import("@stitches/react/types/theme").Token<"palette-green-800", string, "colors", "manifest">;
        'palette-green-900': import("@stitches/react/types/theme").Token<"palette-green-900", string, "colors", "manifest">;
        'palette-grey-50': import("@stitches/react/types/theme").Token<"palette-grey-50", string, "colors", "manifest">;
        'palette-grey-100': import("@stitches/react/types/theme").Token<"palette-grey-100", string, "colors", "manifest">;
        'palette-grey-200': import("@stitches/react/types/theme").Token<"palette-grey-200", string, "colors", "manifest">;
        'palette-grey-300': import("@stitches/react/types/theme").Token<"palette-grey-300", string, "colors", "manifest">;
        'palette-grey-400': import("@stitches/react/types/theme").Token<"palette-grey-400", string, "colors", "manifest">;
        'palette-grey-500': import("@stitches/react/types/theme").Token<"palette-grey-500", string, "colors", "manifest">;
        'palette-grey-600': import("@stitches/react/types/theme").Token<"palette-grey-600", string, "colors", "manifest">;
        'palette-grey-700': import("@stitches/react/types/theme").Token<"palette-grey-700", string, "colors", "manifest">;
        'palette-grey-800': import("@stitches/react/types/theme").Token<"palette-grey-800", string, "colors", "manifest">;
        'palette-grey-900': import("@stitches/react/types/theme").Token<"palette-grey-900", string, "colors", "manifest">;
        'palette-indigo-50': import("@stitches/react/types/theme").Token<"palette-indigo-50", string, "colors", "manifest">;
        'palette-indigo-100': import("@stitches/react/types/theme").Token<"palette-indigo-100", string, "colors", "manifest">;
        'palette-indigo-200': import("@stitches/react/types/theme").Token<"palette-indigo-200", string, "colors", "manifest">;
        'palette-indigo-300': import("@stitches/react/types/theme").Token<"palette-indigo-300", string, "colors", "manifest">;
        'palette-indigo-400': import("@stitches/react/types/theme").Token<"palette-indigo-400", string, "colors", "manifest">;
        'palette-indigo-500': import("@stitches/react/types/theme").Token<"palette-indigo-500", string, "colors", "manifest">;
        'palette-indigo-600': import("@stitches/react/types/theme").Token<"palette-indigo-600", string, "colors", "manifest">;
        'palette-indigo-700': import("@stitches/react/types/theme").Token<"palette-indigo-700", string, "colors", "manifest">;
        'palette-indigo-800': import("@stitches/react/types/theme").Token<"palette-indigo-800", string, "colors", "manifest">;
        'palette-indigo-900': import("@stitches/react/types/theme").Token<"palette-indigo-900", string, "colors", "manifest">;
        'palette-orange-50': import("@stitches/react/types/theme").Token<"palette-orange-50", string, "colors", "manifest">;
        'palette-orange-100': import("@stitches/react/types/theme").Token<"palette-orange-100", string, "colors", "manifest">;
        'palette-orange-200': import("@stitches/react/types/theme").Token<"palette-orange-200", string, "colors", "manifest">;
        'palette-orange-300': import("@stitches/react/types/theme").Token<"palette-orange-300", string, "colors", "manifest">;
        'palette-orange-400': import("@stitches/react/types/theme").Token<"palette-orange-400", string, "colors", "manifest">;
        'palette-orange-500': import("@stitches/react/types/theme").Token<"palette-orange-500", string, "colors", "manifest">;
        'palette-orange-600': import("@stitches/react/types/theme").Token<"palette-orange-600", string, "colors", "manifest">;
        'palette-orange-700': import("@stitches/react/types/theme").Token<"palette-orange-700", string, "colors", "manifest">;
        'palette-orange-800': import("@stitches/react/types/theme").Token<"palette-orange-800", string, "colors", "manifest">;
        'palette-orange-900': import("@stitches/react/types/theme").Token<"palette-orange-900", string, "colors", "manifest">;
        'palette-pink-50': import("@stitches/react/types/theme").Token<"palette-pink-50", string, "colors", "manifest">;
        'palette-pink-100': import("@stitches/react/types/theme").Token<"palette-pink-100", string, "colors", "manifest">;
        'palette-pink-200': import("@stitches/react/types/theme").Token<"palette-pink-200", string, "colors", "manifest">;
        'palette-pink-300': import("@stitches/react/types/theme").Token<"palette-pink-300", string, "colors", "manifest">;
        'palette-pink-400': import("@stitches/react/types/theme").Token<"palette-pink-400", string, "colors", "manifest">;
        'palette-pink-500': import("@stitches/react/types/theme").Token<"palette-pink-500", string, "colors", "manifest">;
        'palette-pink-600': import("@stitches/react/types/theme").Token<"palette-pink-600", string, "colors", "manifest">;
        'palette-pink-700': import("@stitches/react/types/theme").Token<"palette-pink-700", string, "colors", "manifest">;
        'palette-pink-800': import("@stitches/react/types/theme").Token<"palette-pink-800", string, "colors", "manifest">;
        'palette-pink-900': import("@stitches/react/types/theme").Token<"palette-pink-900", string, "colors", "manifest">;
        'palette-purple-50': import("@stitches/react/types/theme").Token<"palette-purple-50", string, "colors", "manifest">;
        'palette-purple-100': import("@stitches/react/types/theme").Token<"palette-purple-100", string, "colors", "manifest">;
        'palette-purple-200': import("@stitches/react/types/theme").Token<"palette-purple-200", string, "colors", "manifest">;
        'palette-purple-300': import("@stitches/react/types/theme").Token<"palette-purple-300", string, "colors", "manifest">;
        'palette-purple-400': import("@stitches/react/types/theme").Token<"palette-purple-400", string, "colors", "manifest">;
        'palette-purple-500': import("@stitches/react/types/theme").Token<"palette-purple-500", string, "colors", "manifest">;
        'palette-purple-600': import("@stitches/react/types/theme").Token<"palette-purple-600", string, "colors", "manifest">;
        'palette-purple-700': import("@stitches/react/types/theme").Token<"palette-purple-700", string, "colors", "manifest">;
        'palette-purple-800': import("@stitches/react/types/theme").Token<"palette-purple-800", string, "colors", "manifest">;
        'palette-purple-900': import("@stitches/react/types/theme").Token<"palette-purple-900", string, "colors", "manifest">;
        'palette-red-50': import("@stitches/react/types/theme").Token<"palette-red-50", string, "colors", "manifest">;
        'palette-red-100': import("@stitches/react/types/theme").Token<"palette-red-100", string, "colors", "manifest">;
        'palette-red-200': import("@stitches/react/types/theme").Token<"palette-red-200", string, "colors", "manifest">;
        'palette-red-300': import("@stitches/react/types/theme").Token<"palette-red-300", string, "colors", "manifest">;
        'palette-red-400': import("@stitches/react/types/theme").Token<"palette-red-400", string, "colors", "manifest">;
        'palette-red-500': import("@stitches/react/types/theme").Token<"palette-red-500", string, "colors", "manifest">;
        'palette-red-600': import("@stitches/react/types/theme").Token<"palette-red-600", string, "colors", "manifest">;
        'palette-red-700': import("@stitches/react/types/theme").Token<"palette-red-700", string, "colors", "manifest">;
        'palette-red-800': import("@stitches/react/types/theme").Token<"palette-red-800", string, "colors", "manifest">;
        'palette-red-900': import("@stitches/react/types/theme").Token<"palette-red-900", string, "colors", "manifest">;
        'palette-yellow-50': import("@stitches/react/types/theme").Token<"palette-yellow-50", string, "colors", "manifest">;
        'palette-yellow-100': import("@stitches/react/types/theme").Token<"palette-yellow-100", string, "colors", "manifest">;
        'palette-yellow-200': import("@stitches/react/types/theme").Token<"palette-yellow-200", string, "colors", "manifest">;
        'palette-yellow-300': import("@stitches/react/types/theme").Token<"palette-yellow-300", string, "colors", "manifest">;
        'palette-yellow-400': import("@stitches/react/types/theme").Token<"palette-yellow-400", string, "colors", "manifest">;
        'palette-yellow-500': import("@stitches/react/types/theme").Token<"palette-yellow-500", string, "colors", "manifest">;
        'palette-yellow-600': import("@stitches/react/types/theme").Token<"palette-yellow-600", string, "colors", "manifest">;
        'palette-yellow-700': import("@stitches/react/types/theme").Token<"palette-yellow-700", string, "colors", "manifest">;
        'palette-yellow-800': import("@stitches/react/types/theme").Token<"palette-yellow-800", string, "colors", "manifest">;
        'palette-yellow-900': import("@stitches/react/types/theme").Token<"palette-yellow-900", string, "colors", "manifest">;
        'data-viz-danger-fill': import("@stitches/react/types/theme").Token<"data-viz-danger-fill", string, "colors", "manifest">;
        'data-viz-danger-hover': import("@stitches/react/types/theme").Token<"data-viz-danger-hover", string, "colors", "manifest">;
        'data-viz-danger-line': import("@stitches/react/types/theme").Token<"data-viz-danger-line", string, "colors", "manifest">;
        'data-viz-neutral-fill': import("@stitches/react/types/theme").Token<"data-viz-neutral-fill", string, "colors", "manifest">;
        'data-viz-neutral-hover': import("@stitches/react/types/theme").Token<"data-viz-neutral-hover", string, "colors", "manifest">;
        'data-viz-primary-fill': import("@stitches/react/types/theme").Token<"data-viz-primary-fill", string, "colors", "manifest">;
        'data-viz-primary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-primary-fill-alt", string, "colors", "manifest">;
        'data-viz-primary-hover': import("@stitches/react/types/theme").Token<"data-viz-primary-hover", string, "colors", "manifest">;
        'data-viz-primary-line': import("@stitches/react/types/theme").Token<"data-viz-primary-line", string, "colors", "manifest">;
        'data-viz-secondary-fill': import("@stitches/react/types/theme").Token<"data-viz-secondary-fill", string, "colors", "manifest">;
        'data-viz-secondary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-secondary-fill-alt", string, "colors", "manifest">;
        'data-viz-secondary-hover': import("@stitches/react/types/theme").Token<"data-viz-secondary-hover", string, "colors", "manifest">;
        'data-viz-secondary-line': import("@stitches/react/types/theme").Token<"data-viz-secondary-line", string, "colors", "manifest">;
        'data-viz-tertiary-fill': import("@stitches/react/types/theme").Token<"data-viz-tertiary-fill", string, "colors", "manifest">;
        'data-viz-tertiary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-tertiary-fill-alt", string, "colors", "manifest">;
        'data-viz-tertiary-hover': import("@stitches/react/types/theme").Token<"data-viz-tertiary-hover", string, "colors", "manifest">;
        'data-viz-tertiary-line': import("@stitches/react/types/theme").Token<"data-viz-tertiary-line", string, "colors", "manifest">;
        'data-viz-warning-fill': import("@stitches/react/types/theme").Token<"data-viz-warning-fill", string, "colors", "manifest">;
        'data-viz-warning-hover': import("@stitches/react/types/theme").Token<"data-viz-warning-hover", string, "colors", "manifest">;
        'data-viz-warning-line': import("@stitches/react/types/theme").Token<"data-viz-warning-line", string, "colors", "manifest">;
        'brand-default': import("@stitches/react/types/theme").Token<"brand-default", string, "colors", "manifest">;
        'brand-active': import("@stitches/react/types/theme").Token<"brand-active", string, "colors", "manifest">;
        'brand-hover': import("@stitches/react/types/theme").Token<"brand-hover", string, "colors", "manifest">;
        'brand-gradient': import("@stitches/react/types/theme").Token<"brand-gradient", string, "colors", "manifest">;
        'background-danger': import("@stitches/react/types/theme").Token<"background-danger", string, "colors", "manifest">;
        'background-primary': import("@stitches/react/types/theme").Token<"background-primary", string, "colors", "manifest">;
        'background-secondary': import("@stitches/react/types/theme").Token<"background-secondary", string, "colors", "manifest">;
        'background-side-nav': import("@stitches/react/types/theme").Token<"background-side-nav", string, "colors", "manifest">;
        'background-success': import("@stitches/react/types/theme").Token<"background-success", string, "colors", "manifest">;
        'background-surface': import("@stitches/react/types/theme").Token<"background-surface", string, "colors", "manifest">;
        'background-tertiary': import("@stitches/react/types/theme").Token<"background-tertiary", string, "colors", "manifest">;
        'background-top-nav': import("@stitches/react/types/theme").Token<"background-top-nav", string, "colors", "manifest">;
        'background-warning': import("@stitches/react/types/theme").Token<"background-warning", string, "colors", "manifest">;
        'border-danger': import("@stitches/react/types/theme").Token<"border-danger", string, "colors", "manifest">;
        'border-disabled': import("@stitches/react/types/theme").Token<"border-disabled", string, "colors", "manifest">;
        'border-primary': import("@stitches/react/types/theme").Token<"border-primary", string, "colors", "manifest">;
        'border-success': import("@stitches/react/types/theme").Token<"border-success", string, "colors", "manifest">;
        'border-warning': import("@stitches/react/types/theme").Token<"border-warning", string, "colors", "manifest">;
        'primary-default': import("@stitches/react/types/theme").Token<"primary-default", string, "colors", "manifest">;
        'primary-active': import("@stitches/react/types/theme").Token<"primary-active", string, "colors", "manifest">;
        'primary-hover': import("@stitches/react/types/theme").Token<"primary-hover", string, "colors", "manifest">;
        'text-contrast': import("@stitches/react/types/theme").Token<"text-contrast", string, "colors", "manifest">;
        'text-danger': import("@stitches/react/types/theme").Token<"text-danger", string, "colors", "manifest">;
        'text-disabled': import("@stitches/react/types/theme").Token<"text-disabled", string, "colors", "manifest">;
        'text-primary': import("@stitches/react/types/theme").Token<"text-primary", string, "colors", "manifest">;
        'text-secondary': import("@stitches/react/types/theme").Token<"text-secondary", string, "colors", "manifest">;
        'text-success': import("@stitches/react/types/theme").Token<"text-success", string, "colors", "manifest">;
        'text-tertiary': import("@stitches/react/types/theme").Token<"text-tertiary", string, "colors", "manifest">;
        'text-warning': import("@stitches/react/types/theme").Token<"text-warning", string, "colors", "manifest">;
    };
    fonts: {
        mono: import("@stitches/react/types/theme").Token<"mono", string, "fonts", "manifest">;
        text: import("@stitches/react/types/theme").Token<"text", string, "fonts", "manifest">;
    };
    fontSizes: {
        large: import("@stitches/react/types/theme").Token<"large", string, "fontSizes", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontSizes", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "fontSizes", "manifest">;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "fontSizes", "manifest">;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "fontSizes", "manifest">;
        'xx-large': import("@stitches/react/types/theme").Token<"xx-large", string, "fontSizes", "manifest">;
    };
    fontWeights: {
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "manifest">;
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "manifest">;
        semibold: import("@stitches/react/types/theme").Token<"semibold", string, "fontWeights", "manifest">;
    };
    letterSpacings: {
        large: import("@stitches/react/types/theme").Token<"large", string, "letterSpacings", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "letterSpacings", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "letterSpacings", "manifest">;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "letterSpacings", "manifest">;
    };
    lineHeights: {
        large: import("@stitches/react/types/theme").Token<"large", string, "lineHeights", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "lineHeights", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "lineHeights", "manifest">;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "lineHeights", "manifest">;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "lineHeights", "manifest">;
        'xx-large': import("@stitches/react/types/theme").Token<"xx-large", string, "lineHeights", "manifest">;
    };
    radii: {
        full: import("@stitches/react/types/theme").Token<"full", string, "radii", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "radii", "manifest">;
    };
    shadows: {
        large: import("@stitches/react/types/theme").Token<"large", string, "shadows", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "shadows", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "shadows", "manifest">;
    };
    sizes: {
        large: import("@stitches/react/types/theme").Token<"large", string, "sizes", "manifest">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "sizes", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "sizes", "manifest">;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "sizes", "manifest">;
    };
    space: {
        medium: import("@stitches/react/types/theme").Token<"medium", string, "space", "manifest">;
        small: import("@stitches/react/types/theme").Token<"small", string, "space", "manifest">;
        large: import("@stitches/react/types/theme").Token<"large", string, "space", "manifest">;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "space", "manifest">;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "space", "manifest">;
    };
    zIndices: {
        dropdown: import("@stitches/react/types/theme").Token<"dropdown", string, "zIndices", "manifest">;
        modal: import("@stitches/react/types/theme").Token<"modal", string, "zIndices", "manifest">;
        overlay: import("@stitches/react/types/theme").Token<"overlay", string, "zIndices", "manifest">;
        popover: import("@stitches/react/types/theme").Token<"popover", string, "zIndices", "manifest">;
        sticky: import("@stitches/react/types/theme").Token<"sticky", string, "zIndices", "manifest">;
        tooltip: import("@stitches/react/types/theme").Token<"tooltip", string, "zIndices", "manifest">;
    };
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, {
    borderWidths: {
        large: string;
        medium: string;
        small: string;
    };
    colors: {
        'palette-black': any;
        'palette-white': any;
        'palette-blue-50': any;
        'palette-blue-100': any;
        'palette-blue-200': any;
        'palette-blue-300': any;
        'palette-blue-400': any;
        'palette-blue-500': any;
        'palette-blue-600': any;
        'palette-blue-700': any;
        'palette-blue-800': any;
        'palette-blue-900': any;
        'palette-brown-50': any;
        'palette-brown-100': any;
        'palette-brown-200': any;
        'palette-brown-300': any;
        'palette-brown-400': any;
        'palette-brown-500': any;
        'palette-brown-600': any;
        'palette-brown-700': any;
        'palette-brown-800': any;
        'palette-brown-900': any;
        'palette-green-50': any;
        'palette-green-100': any;
        'palette-green-200': any;
        'palette-green-300': any;
        'palette-green-400': any;
        'palette-green-500': any;
        'palette-green-600': any;
        'palette-green-700': any;
        'palette-green-800': any;
        'palette-green-900': any;
        'palette-grey-50': any;
        'palette-grey-100': any;
        'palette-grey-200': any;
        'palette-grey-300': any;
        'palette-grey-400': any;
        'palette-grey-500': any;
        'palette-grey-600': any;
        'palette-grey-700': any;
        'palette-grey-800': any;
        'palette-grey-900': any;
        'palette-indigo-50': any;
        'palette-indigo-100': any;
        'palette-indigo-200': any;
        'palette-indigo-300': any;
        'palette-indigo-400': any;
        'palette-indigo-500': any;
        'palette-indigo-600': any;
        'palette-indigo-700': any;
        'palette-indigo-800': any;
        'palette-indigo-900': any;
        'palette-orange-50': any;
        'palette-orange-100': any;
        'palette-orange-200': any;
        'palette-orange-300': any;
        'palette-orange-400': any;
        'palette-orange-500': any;
        'palette-orange-600': any;
        'palette-orange-700': any;
        'palette-orange-800': any;
        'palette-orange-900': any;
        'palette-pink-50': any;
        'palette-pink-100': any;
        'palette-pink-200': any;
        'palette-pink-300': any;
        'palette-pink-400': any;
        'palette-pink-500': any;
        'palette-pink-600': any;
        'palette-pink-700': any;
        'palette-pink-800': any;
        'palette-pink-900': any;
        'palette-purple-50': any;
        'palette-purple-100': any;
        'palette-purple-200': any;
        'palette-purple-300': any;
        'palette-purple-400': any;
        'palette-purple-500': any;
        'palette-purple-600': any;
        'palette-purple-700': any;
        'palette-purple-800': any;
        'palette-purple-900': any;
        'palette-red-50': any;
        'palette-red-100': any;
        'palette-red-200': any;
        'palette-red-300': any;
        'palette-red-400': any;
        'palette-red-500': any;
        'palette-red-600': any;
        'palette-red-700': any;
        'palette-red-800': any;
        'palette-red-900': any;
        'palette-yellow-50': any;
        'palette-yellow-100': any;
        'palette-yellow-200': any;
        'palette-yellow-300': any;
        'palette-yellow-400': any;
        'palette-yellow-500': any;
        'palette-yellow-600': any;
        'palette-yellow-700': any;
        'palette-yellow-800': any;
        'palette-yellow-900': any;
        'data-viz-danger-fill': any;
        'data-viz-danger-hover': any;
        'data-viz-danger-line': any;
        'data-viz-neutral-fill': any;
        'data-viz-neutral-hover': any;
        'data-viz-primary-fill': any;
        'data-viz-primary-fill-alt': any;
        'data-viz-primary-hover': any;
        'data-viz-primary-line': any;
        'data-viz-secondary-fill': any;
        'data-viz-secondary-fill-alt': any;
        'data-viz-secondary-hover': any;
        'data-viz-secondary-line': any;
        'data-viz-tertiary-fill': any;
        'data-viz-tertiary-fill-alt': any;
        'data-viz-tertiary-hover': any;
        'data-viz-tertiary-line': any;
        'data-viz-warning-fill': any;
        'data-viz-warning-hover': any;
        'data-viz-warning-line': any;
        'brand-default': any;
        'brand-active': any;
        'brand-hover': any;
        'brand-gradient': any;
        'background-danger': any;
        'background-primary': any;
        'background-secondary': any;
        'background-side-nav': any;
        'background-success': any;
        'background-surface': any;
        'background-tertiary': any;
        'background-top-nav': any;
        'background-warning': any;
        'border-danger': any;
        'border-disabled': any;
        'border-primary': any;
        'border-success': any;
        'border-warning': any;
        'primary-default': any;
        'primary-active': any;
        'primary-hover': any;
        'text-contrast': any;
        'text-danger': any;
        'text-disabled': any;
        'text-primary': any;
        'text-secondary': any;
        'text-success': any;
        'text-tertiary': any;
        'text-warning': any;
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
    zIndices: {
        dropdown: string;
        modal: string;
        overlay: string;
        popover: string;
        sticky: string;
        tooltip: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "marginRight";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "marginRight";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "marginLeft";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "marginLeft";
        };
        marginRight: {
            readonly [$$PropertyValue]: "marginLeft";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "marginTop";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginTop";
        };
        marginTop: {
            readonly [$$PropertyValue]: "marginTop";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "paddingBottom";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingBottom";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "paddingRight";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "paddingRight";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "paddingLeft";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "paddingLeft";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "paddingTop";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "paddingTop";
        };
        paddingTop: {
            readonly [$$PropertyValue]: "paddingTop";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        height: {
            readonly [$$PropertyValue]: "width";
        };
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
        };
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    lg: `(min-width: ${string})`;
    md: `(min-width: ${string}})`;
    sm: `(min-width: ${string}})`;
    xl: `(min-width: ${string}})`;
}, CSS_1>;
//# sourceMappingURL=styles.d.ts.map