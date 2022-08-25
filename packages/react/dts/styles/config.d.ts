import { CSS as StitchesCSS } from '@stitches/react';
export declare type CSS = StitchesCSS<typeof config>;
export declare type Theme = typeof theme;
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
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
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
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
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
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
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
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
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, import("@stitches/react/types/css-util").CSS<{
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
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
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
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
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
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
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
}>>, config: {
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
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
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
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
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
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
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
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
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
        lg: string;
        md: string;
        sm: string;
        xl: string;
    }, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
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
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
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
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
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
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
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
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
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
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
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
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
}>; })[]) => () => string, getCssText: () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        lg: string;
        md: string;
        sm: string;
        xl: string;
    }, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        bgColor: (value: {
            readonly [$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [$$PropertyValue]: "backgroundColor";
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
        m: (value: {
            readonly [$$PropertyValue]: "margin";
        }) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
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
        mb: (value: {
            readonly [$$PropertyValue]: "marginBottom";
        }) => {
            marginBottom: {
                readonly [$$PropertyValue]: "marginBottom";
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
        typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
        w: (value: {
            readonly [$$PropertyValue]: "width";
        }) => {
            width: {
                readonly [$$PropertyValue]: "width";
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
        large: import("@stitches/react/types/theme").Token<"large", string, "borderWidths", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "borderWidths", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "borderWidths", string>;
    };
    colors: {
        'background-danger': import("@stitches/react/types/theme").Token<"background-danger", string, "colors", string>;
        'background-primary': import("@stitches/react/types/theme").Token<"background-primary", string, "colors", string>;
        'background-secondary': import("@stitches/react/types/theme").Token<"background-secondary", string, "colors", string>;
        'background-side-nav': import("@stitches/react/types/theme").Token<"background-side-nav", string, "colors", string>;
        'background-success': import("@stitches/react/types/theme").Token<"background-success", string, "colors", string>;
        'background-surface': import("@stitches/react/types/theme").Token<"background-surface", string, "colors", string>;
        'background-tertiary': import("@stitches/react/types/theme").Token<"background-tertiary", string, "colors", string>;
        'background-top-nav': import("@stitches/react/types/theme").Token<"background-top-nav", string, "colors", string>;
        'background-warning': import("@stitches/react/types/theme").Token<"background-warning", string, "colors", string>;
        'border-danger': import("@stitches/react/types/theme").Token<"border-danger", string, "colors", string>;
        'border-disabled': import("@stitches/react/types/theme").Token<"border-disabled", string, "colors", string>;
        'border-primary': import("@stitches/react/types/theme").Token<"border-primary", string, "colors", string>;
        'border-success': import("@stitches/react/types/theme").Token<"border-success", string, "colors", string>;
        'border-warning': import("@stitches/react/types/theme").Token<"border-warning", string, "colors", string>;
        'brand-default': import("@stitches/react/types/theme").Token<"brand-default", string, "colors", string>;
        'brand-active': import("@stitches/react/types/theme").Token<"brand-active", string, "colors", string>;
        'brand-hover': import("@stitches/react/types/theme").Token<"brand-hover", string, "colors", string>;
        'brand-gradient': import("@stitches/react/types/theme").Token<"brand-gradient", string, "colors", string>;
        'palette-black': import("@stitches/react/types/theme").Token<"palette-black", string, "colors", string>;
        'palette-white': import("@stitches/react/types/theme").Token<"palette-white", string, "colors", string>;
        'palette-blue-50': import("@stitches/react/types/theme").Token<"palette-blue-50", string, "colors", string>;
        'palette-blue-100': import("@stitches/react/types/theme").Token<"palette-blue-100", string, "colors", string>;
        'palette-blue-200': import("@stitches/react/types/theme").Token<"palette-blue-200", string, "colors", string>;
        'palette-blue-300': import("@stitches/react/types/theme").Token<"palette-blue-300", string, "colors", string>;
        'palette-blue-400': import("@stitches/react/types/theme").Token<"palette-blue-400", string, "colors", string>;
        'palette-blue-500': import("@stitches/react/types/theme").Token<"palette-blue-500", string, "colors", string>;
        'palette-blue-600': import("@stitches/react/types/theme").Token<"palette-blue-600", string, "colors", string>;
        'palette-blue-700': import("@stitches/react/types/theme").Token<"palette-blue-700", string, "colors", string>;
        'palette-blue-800': import("@stitches/react/types/theme").Token<"palette-blue-800", string, "colors", string>;
        'palette-blue-900': import("@stitches/react/types/theme").Token<"palette-blue-900", string, "colors", string>;
        'palette-brown-50': import("@stitches/react/types/theme").Token<"palette-brown-50", string, "colors", string>;
        'palette-brown-100': import("@stitches/react/types/theme").Token<"palette-brown-100", string, "colors", string>;
        'palette-brown-200': import("@stitches/react/types/theme").Token<"palette-brown-200", string, "colors", string>;
        'palette-brown-300': import("@stitches/react/types/theme").Token<"palette-brown-300", string, "colors", string>;
        'palette-brown-400': import("@stitches/react/types/theme").Token<"palette-brown-400", string, "colors", string>;
        'palette-brown-500': import("@stitches/react/types/theme").Token<"palette-brown-500", string, "colors", string>;
        'palette-brown-600': import("@stitches/react/types/theme").Token<"palette-brown-600", string, "colors", string>;
        'palette-brown-700': import("@stitches/react/types/theme").Token<"palette-brown-700", string, "colors", string>;
        'palette-brown-800': import("@stitches/react/types/theme").Token<"palette-brown-800", string, "colors", string>;
        'palette-brown-900': import("@stitches/react/types/theme").Token<"palette-brown-900", string, "colors", string>;
        'palette-green-50': import("@stitches/react/types/theme").Token<"palette-green-50", string, "colors", string>;
        'palette-green-100': import("@stitches/react/types/theme").Token<"palette-green-100", string, "colors", string>;
        'palette-green-200': import("@stitches/react/types/theme").Token<"palette-green-200", string, "colors", string>;
        'palette-green-300': import("@stitches/react/types/theme").Token<"palette-green-300", string, "colors", string>;
        'palette-green-400': import("@stitches/react/types/theme").Token<"palette-green-400", string, "colors", string>;
        'palette-green-500': import("@stitches/react/types/theme").Token<"palette-green-500", string, "colors", string>;
        'palette-green-600': import("@stitches/react/types/theme").Token<"palette-green-600", string, "colors", string>;
        'palette-green-700': import("@stitches/react/types/theme").Token<"palette-green-700", string, "colors", string>;
        'palette-green-800': import("@stitches/react/types/theme").Token<"palette-green-800", string, "colors", string>;
        'palette-green-900': import("@stitches/react/types/theme").Token<"palette-green-900", string, "colors", string>;
        'palette-grey-50': import("@stitches/react/types/theme").Token<"palette-grey-50", string, "colors", string>;
        'palette-grey-100': import("@stitches/react/types/theme").Token<"palette-grey-100", string, "colors", string>;
        'palette-grey-200': import("@stitches/react/types/theme").Token<"palette-grey-200", string, "colors", string>;
        'palette-grey-300': import("@stitches/react/types/theme").Token<"palette-grey-300", string, "colors", string>;
        'palette-grey-400': import("@stitches/react/types/theme").Token<"palette-grey-400", string, "colors", string>;
        'palette-grey-500': import("@stitches/react/types/theme").Token<"palette-grey-500", string, "colors", string>;
        'palette-grey-600': import("@stitches/react/types/theme").Token<"palette-grey-600", string, "colors", string>;
        'palette-grey-700': import("@stitches/react/types/theme").Token<"palette-grey-700", string, "colors", string>;
        'palette-grey-800': import("@stitches/react/types/theme").Token<"palette-grey-800", string, "colors", string>;
        'palette-grey-900': import("@stitches/react/types/theme").Token<"palette-grey-900", string, "colors", string>;
        'palette-indigo-50': import("@stitches/react/types/theme").Token<"palette-indigo-50", string, "colors", string>;
        'palette-indigo-100': import("@stitches/react/types/theme").Token<"palette-indigo-100", string, "colors", string>;
        'palette-indigo-200': import("@stitches/react/types/theme").Token<"palette-indigo-200", string, "colors", string>;
        'palette-indigo-300': import("@stitches/react/types/theme").Token<"palette-indigo-300", string, "colors", string>;
        'palette-indigo-400': import("@stitches/react/types/theme").Token<"palette-indigo-400", string, "colors", string>;
        'palette-indigo-500': import("@stitches/react/types/theme").Token<"palette-indigo-500", string, "colors", string>;
        'palette-indigo-600': import("@stitches/react/types/theme").Token<"palette-indigo-600", string, "colors", string>;
        'palette-indigo-700': import("@stitches/react/types/theme").Token<"palette-indigo-700", string, "colors", string>;
        'palette-indigo-800': import("@stitches/react/types/theme").Token<"palette-indigo-800", string, "colors", string>;
        'palette-indigo-900': import("@stitches/react/types/theme").Token<"palette-indigo-900", string, "colors", string>;
        'palette-orange-50': import("@stitches/react/types/theme").Token<"palette-orange-50", string, "colors", string>;
        'palette-orange-100': import("@stitches/react/types/theme").Token<"palette-orange-100", string, "colors", string>;
        'palette-orange-200': import("@stitches/react/types/theme").Token<"palette-orange-200", string, "colors", string>;
        'palette-orange-300': import("@stitches/react/types/theme").Token<"palette-orange-300", string, "colors", string>;
        'palette-orange-400': import("@stitches/react/types/theme").Token<"palette-orange-400", string, "colors", string>;
        'palette-orange-500': import("@stitches/react/types/theme").Token<"palette-orange-500", string, "colors", string>;
        'palette-orange-600': import("@stitches/react/types/theme").Token<"palette-orange-600", string, "colors", string>;
        'palette-orange-700': import("@stitches/react/types/theme").Token<"palette-orange-700", string, "colors", string>;
        'palette-orange-800': import("@stitches/react/types/theme").Token<"palette-orange-800", string, "colors", string>;
        'palette-orange-900': import("@stitches/react/types/theme").Token<"palette-orange-900", string, "colors", string>;
        'palette-pink-50': import("@stitches/react/types/theme").Token<"palette-pink-50", string, "colors", string>;
        'palette-pink-100': import("@stitches/react/types/theme").Token<"palette-pink-100", string, "colors", string>;
        'palette-pink-200': import("@stitches/react/types/theme").Token<"palette-pink-200", string, "colors", string>;
        'palette-pink-300': import("@stitches/react/types/theme").Token<"palette-pink-300", string, "colors", string>;
        'palette-pink-400': import("@stitches/react/types/theme").Token<"palette-pink-400", string, "colors", string>;
        'palette-pink-500': import("@stitches/react/types/theme").Token<"palette-pink-500", string, "colors", string>;
        'palette-pink-600': import("@stitches/react/types/theme").Token<"palette-pink-600", string, "colors", string>;
        'palette-pink-700': import("@stitches/react/types/theme").Token<"palette-pink-700", string, "colors", string>;
        'palette-pink-800': import("@stitches/react/types/theme").Token<"palette-pink-800", string, "colors", string>;
        'palette-pink-900': import("@stitches/react/types/theme").Token<"palette-pink-900", string, "colors", string>;
        'palette-purple-50': import("@stitches/react/types/theme").Token<"palette-purple-50", string, "colors", string>;
        'palette-purple-100': import("@stitches/react/types/theme").Token<"palette-purple-100", string, "colors", string>;
        'palette-purple-200': import("@stitches/react/types/theme").Token<"palette-purple-200", string, "colors", string>;
        'palette-purple-300': import("@stitches/react/types/theme").Token<"palette-purple-300", string, "colors", string>;
        'palette-purple-400': import("@stitches/react/types/theme").Token<"palette-purple-400", string, "colors", string>;
        'palette-purple-500': import("@stitches/react/types/theme").Token<"palette-purple-500", string, "colors", string>;
        'palette-purple-600': import("@stitches/react/types/theme").Token<"palette-purple-600", string, "colors", string>;
        'palette-purple-700': import("@stitches/react/types/theme").Token<"palette-purple-700", string, "colors", string>;
        'palette-purple-800': import("@stitches/react/types/theme").Token<"palette-purple-800", string, "colors", string>;
        'palette-purple-900': import("@stitches/react/types/theme").Token<"palette-purple-900", string, "colors", string>;
        'palette-red-50': import("@stitches/react/types/theme").Token<"palette-red-50", string, "colors", string>;
        'palette-red-100': import("@stitches/react/types/theme").Token<"palette-red-100", string, "colors", string>;
        'palette-red-200': import("@stitches/react/types/theme").Token<"palette-red-200", string, "colors", string>;
        'palette-red-300': import("@stitches/react/types/theme").Token<"palette-red-300", string, "colors", string>;
        'palette-red-400': import("@stitches/react/types/theme").Token<"palette-red-400", string, "colors", string>;
        'palette-red-500': import("@stitches/react/types/theme").Token<"palette-red-500", string, "colors", string>;
        'palette-red-600': import("@stitches/react/types/theme").Token<"palette-red-600", string, "colors", string>;
        'palette-red-700': import("@stitches/react/types/theme").Token<"palette-red-700", string, "colors", string>;
        'palette-red-800': import("@stitches/react/types/theme").Token<"palette-red-800", string, "colors", string>;
        'palette-red-900': import("@stitches/react/types/theme").Token<"palette-red-900", string, "colors", string>;
        'palette-yellow-50': import("@stitches/react/types/theme").Token<"palette-yellow-50", string, "colors", string>;
        'palette-yellow-100': import("@stitches/react/types/theme").Token<"palette-yellow-100", string, "colors", string>;
        'palette-yellow-200': import("@stitches/react/types/theme").Token<"palette-yellow-200", string, "colors", string>;
        'palette-yellow-300': import("@stitches/react/types/theme").Token<"palette-yellow-300", string, "colors", string>;
        'palette-yellow-400': import("@stitches/react/types/theme").Token<"palette-yellow-400", string, "colors", string>;
        'palette-yellow-500': import("@stitches/react/types/theme").Token<"palette-yellow-500", string, "colors", string>;
        'palette-yellow-600': import("@stitches/react/types/theme").Token<"palette-yellow-600", string, "colors", string>;
        'palette-yellow-700': import("@stitches/react/types/theme").Token<"palette-yellow-700", string, "colors", string>;
        'palette-yellow-800': import("@stitches/react/types/theme").Token<"palette-yellow-800", string, "colors", string>;
        'palette-yellow-900': import("@stitches/react/types/theme").Token<"palette-yellow-900", string, "colors", string>;
        'primary-default': import("@stitches/react/types/theme").Token<"primary-default", string, "colors", string>;
        'primary-active': import("@stitches/react/types/theme").Token<"primary-active", string, "colors", string>;
        'primary-hover': import("@stitches/react/types/theme").Token<"primary-hover", string, "colors", string>;
        'text-contrast': import("@stitches/react/types/theme").Token<"text-contrast", string, "colors", string>;
        'text-danger': import("@stitches/react/types/theme").Token<"text-danger", string, "colors", string>;
        'text-disabled': import("@stitches/react/types/theme").Token<"text-disabled", string, "colors", string>;
        'text-primary': import("@stitches/react/types/theme").Token<"text-primary", string, "colors", string>;
        'text-secondary': import("@stitches/react/types/theme").Token<"text-secondary", string, "colors", string>;
        'text-success': import("@stitches/react/types/theme").Token<"text-success", string, "colors", string>;
        'text-tertiary': import("@stitches/react/types/theme").Token<"text-tertiary", string, "colors", string>;
        'text-warning': import("@stitches/react/types/theme").Token<"text-warning", string, "colors", string>;
        'data-viz-danger-fill': import("@stitches/react/types/theme").Token<"data-viz-danger-fill", string, "colors", string>;
        'data-viz-danger-hover': import("@stitches/react/types/theme").Token<"data-viz-danger-hover", string, "colors", string>;
        'data-viz-danger-line': import("@stitches/react/types/theme").Token<"data-viz-danger-line", string, "colors", string>;
        'data-viz-neutral-fill': import("@stitches/react/types/theme").Token<"data-viz-neutral-fill", string, "colors", string>;
        'data-viz-neutral-hover': import("@stitches/react/types/theme").Token<"data-viz-neutral-hover", string, "colors", string>;
        'data-viz-primary-fill': import("@stitches/react/types/theme").Token<"data-viz-primary-fill", string, "colors", string>;
        'data-viz-primary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-primary-fill-alt", string, "colors", string>;
        'data-viz-primary-hover': import("@stitches/react/types/theme").Token<"data-viz-primary-hover", string, "colors", string>;
        'data-viz-primary-line': import("@stitches/react/types/theme").Token<"data-viz-primary-line", string, "colors", string>;
        'data-viz-secondary-fill': import("@stitches/react/types/theme").Token<"data-viz-secondary-fill", string, "colors", string>;
        'data-viz-secondary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-secondary-fill-alt", string, "colors", string>;
        'data-viz-secondary-hover': import("@stitches/react/types/theme").Token<"data-viz-secondary-hover", string, "colors", string>;
        'data-viz-secondary-line': import("@stitches/react/types/theme").Token<"data-viz-secondary-line", string, "colors", string>;
        'data-viz-tertiary-fill': import("@stitches/react/types/theme").Token<"data-viz-tertiary-fill", string, "colors", string>;
        'data-viz-tertiary-fill-alt': import("@stitches/react/types/theme").Token<"data-viz-tertiary-fill-alt", string, "colors", string>;
        'data-viz-tertiary-hover': import("@stitches/react/types/theme").Token<"data-viz-tertiary-hover", string, "colors", string>;
        'data-viz-tertiary-line': import("@stitches/react/types/theme").Token<"data-viz-tertiary-line", string, "colors", string>;
        'data-viz-warning-fill': import("@stitches/react/types/theme").Token<"data-viz-warning-fill", string, "colors", string>;
        'data-viz-warning-hover': import("@stitches/react/types/theme").Token<"data-viz-warning-hover", string, "colors", string>;
        'data-viz-warning-line': import("@stitches/react/types/theme").Token<"data-viz-warning-line", string, "colors", string>;
    };
    fonts: {
        mono: import("@stitches/react/types/theme").Token<"mono", string, "fonts", string>;
        text: import("@stitches/react/types/theme").Token<"text", string, "fonts", string>;
    };
    fontSizes: {
        large: import("@stitches/react/types/theme").Token<"large", string, "fontSizes", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontSizes", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "fontSizes", string>;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "fontSizes", string>;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "fontSizes", string>;
        'xx-large': import("@stitches/react/types/theme").Token<"xx-large", string, "fontSizes", string>;
    };
    fontWeights: {
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", string>;
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", string>;
        semibold: import("@stitches/react/types/theme").Token<"semibold", string, "fontWeights", string>;
    };
    letterSpacings: {
        large: import("@stitches/react/types/theme").Token<"large", string, "letterSpacings", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "letterSpacings", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "letterSpacings", string>;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "letterSpacings", string>;
    };
    lineHeights: {
        large: import("@stitches/react/types/theme").Token<"large", string, "lineHeights", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "lineHeights", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "lineHeights", string>;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "lineHeights", string>;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "lineHeights", string>;
        'xx-large': import("@stitches/react/types/theme").Token<"xx-large", string, "lineHeights", string>;
    };
    radii: {
        full: import("@stitches/react/types/theme").Token<"full", string, "radii", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "radii", string>;
    };
    shadows: {
        large: import("@stitches/react/types/theme").Token<"large", string, "shadows", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "shadows", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "shadows", string>;
    };
    sizes: {
        large: import("@stitches/react/types/theme").Token<"large", string, "sizes", string>;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "sizes", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "sizes", string>;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "sizes", string>;
    };
    space: {
        medium: import("@stitches/react/types/theme").Token<"medium", string, "space", string>;
        small: import("@stitches/react/types/theme").Token<"small", string, "space", string>;
        large: import("@stitches/react/types/theme").Token<"large", string, "space", string>;
        'x-large': import("@stitches/react/types/theme").Token<"x-large", string, "space", string>;
        'x-small': import("@stitches/react/types/theme").Token<"x-small", string, "space", string>;
    };
    transitions: {
        all: import("@stitches/react/types/theme").Token<"all", string, "transitions", string>;
        color: import("@stitches/react/types/theme").Token<"color", string, "transitions", string>;
        default: import("@stitches/react/types/theme").Token<"default", string, "transitions", string>;
        opacity: import("@stitches/react/types/theme").Token<"opacity", string, "transitions", string>;
        shadow: import("@stitches/react/types/theme").Token<"shadow", string, "transitions", string>;
        transform: import("@stitches/react/types/theme").Token<"transform", string, "transitions", string>;
    };
    zIndices: {
        dropdown: import("@stitches/react/types/theme").Token<"dropdown", string, "zIndices", string>;
        modal: import("@stitches/react/types/theme").Token<"modal", string, "zIndices", string>;
        overlay: import("@stitches/react/types/theme").Token<"overlay", string, "zIndices", string>;
        popover: import("@stitches/react/types/theme").Token<"popover", string, "zIndices", string>;
        sticky: import("@stitches/react/types/theme").Token<"sticky", string, "zIndices", string>;
        tooltip: import("@stitches/react/types/theme").Token<"tooltip", string, "zIndices", string>;
    };
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {
    bgColor: (value: {
        readonly [$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [$$PropertyValue]: "backgroundColor";
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
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
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
    mb: (value: {
        readonly [$$PropertyValue]: "marginBottom";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "marginBottom";
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
    typography: (variant: "$display" | "$heading" | "$title" | "$subtitle" | "$body" | "$body-bold" | "$subtext" | "$subtext-bold" | "$caption" | "$caption-bold") => import("@stitches/react/types/css-util").CSSProperties;
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
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
    lg: string;
    md: string;
    sm: string;
    xl: string;
}, CSS_1>;
//# sourceMappingURL=config.d.ts.map