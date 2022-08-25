const _excluded = ["as", "alt", "className", "css", "fallback", "size", "src"],
      _excluded2 = ["as", "className", "css"],
      _excluded3 = ["children", "className", "css", "isDisabled", "isAttached", "size", "variant"],
      _excluded4 = ["as", "autoFocus", "children", "className", "css", "isDisabled", "endIcon", "onClick", "onPress", "size", "startIcon", "variant"],
      _excluded5 = ["className", "css", "size", "variant"],
      _excluded6 = ["className", "css", "icon"],
      _excluded7 = ["className", "css", "variant"],
      _excluded8 = ["className", "css", "orientation"],
      _excluded9 = ["as", "className", "css"],
      _excluded10 = ["className", "css", "state"],
      _excluded11 = ["as", "className", "css", "showCalendar", "showRanges", "ranges"],
      _excluded12 = ["className", "css"],
      _excluded13 = ["className", "css"],
      _excluded14 = ["className", "css"],
      _excluded15 = ["className", "css"],
      _excluded16 = ["autoFocus", "children", "className", "css", "isDisabled", "isIndeterminate"],
      _excluded17 = ["children", "className", "css", "helperText", "helperTextProps", "isRequired", "label", "labelProps", "orientation", "validationState"],
      _excluded18 = ["children", "className", "css"],
      _excluded19 = ["align", "children", "closeOnSelect", "direction", "placement", "trigger", "type"],
      _excluded20 = ["className", "css"],
      _excluded21 = ["align", "className", "css", "justify", "orientation", "wrap"],
      _excluded22 = ["children", "className", "css"],
      _excluded23 = ["boundaries", "className", "css", "defaultPage", "onChange", "page", "rowsPerPage", "siblings", "showPageNumbers", "totalRowCount"],
      _excluded24 = ["className", "colorScheme", "css", "icon", "isCollapsible", "label"],
      _excluded25 = ["children", "disableCSSBaseline"],
      _excluded26 = ["className", "children", "css", "orientation"],
      _excluded27 = ["autoFocus", "children", "css", "className", "isDisabled"],
      _excluded28 = ["autoFocus", "children", "className", "css", "isDisabled"],
      _excluded29 = ["className", "css", "showHover", "onMouseEnter", "onMouseLeave"],
      _excluded30 = ["className"],
      _excluded31 = ["align", "className", "css", "children", "onMouseEnter"],
      _excluded32 = ["align", "children", "className", "css", "isActive", "isSortable", "sortDirection"],
      _excluded33 = ["className"],
      _excluded34 = ["className"],
      _excluded35 = ["className", "onMouseEnter", "onMouseLeave"],
      _excluded36 = ["children", "className", "css", "isRemovable", "onRemove"],
      _excluded37 = ["className", "helperTextProps", "inputProps", "inputRef", "labelProps", "onChange"],
      _excluded38 = ["className", "helperTextProps", "inputProps", "inputRef", "labelProps", "size"],
      _excluded39 = ["children", "className", "css", "isDisabled", "placement", "title"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Bundled with Packemon: https://packemon.dev
// Platform: browser, Support: stable, Format: esm
import * as React from 'react';
import { useRef, useState, useMemo, useEffect } from 'react';
import { createComponent } from '@project44-manifest/system';
import { lightTheme, pxToRem } from '@project44-manifest/theme';
export { pxToRem } from '@project44-manifest/theme';
import { createStitches } from '@stitches/react';
import cx from 'clsx';
export { default as cx } from 'clsx';
import { mergeRefs, mergeProps, useResizeObserver, useLayoutEffect, chain, filterDOMProps } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useFocusRing, FocusScope, useFocusable, FocusableProvider } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { isSameMonth, getDayOfWeek, isSameDay, isToday, getWeeksInMonth, endOfMonth as endOfMonth$1, createCalendar, CalendarDate } from '@internationalized/date';
import { useLocale, useDateFormatter, useFilter } from '@react-aria/i18n';
import { useCalendarCell, useCalendarGrid, useCalendar, useRangeCalendar } from '@react-aria/calendar';
import { useSeparator } from '@react-aria/separator';
import { useCalendarState, useRangeCalendarState } from '@react-stately/calendar';
import { useCollection, Item, Section } from '@react-stately/collections';
export { Item as ComboboxItem, Section as ComboboxSection, Item as SelectItem, Section as SelectSection } from '@react-stately/collections';
import { useOption, useListBoxSection, useListBox } from '@react-aria/listbox';
import { useControlledState } from '@react-stately/utils';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { useOverlay, useModal, DismissButton, useOverlayPosition, OverlayContainer, OverlayProvider } from '@react-aria/overlays';
import { Transition } from 'react-transition-group';
import { useDialog } from '@react-aria/dialog';
import { useComboBox } from '@react-aria/combobox';
import { useComboBoxState } from '@react-stately/combobox';
import { useDatePicker, useDateRangePicker } from '@react-aria/datepicker';
import { useDatePickerState, useDateRangePickerState } from '@react-stately/datepicker';
import { Slot } from '@radix-ui/react-slot';
import { useMenuTrigger, useMenuItem, useMenuSection, useMenu } from '@react-aria/menu';
import { useMenuTriggerState } from '@react-stately/menu';
import { useTooltipTrigger, useTooltip } from '@react-aria/tooltip';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import * as ReactDom from 'react-dom';
import { SSRProvider } from '@react-aria/ssr';
import { useRadioGroup, useRadio } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { useSelect, HiddenSelect } from '@react-aria/select';
import { useSelectState } from '@react-stately/select';
import { useSwitch } from '@react-aria/switch';
import { useField } from '@react-aria/label';
export { VisuallyHidden } from '@react-aria/visually-hidden';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const color = {
  bgColor: value => ({
    backgroundColor: value
  })
};
const layout = {
  d: value => ({
    display: value
  }),
  h: value => ({
    height: value
  }),
  maxH: value => ({
    maxHeight: value
  }),
  maxW: value => ({
    maxWidth: value
  }),
  minH: value => ({
    minHeight: value
  }),
  minW: value => ({
    minWidth: value
  }),
  size: value => ({
    height: value,
    width: value
  }),
  w: value => ({
    width: value
  })
};
const space = {
  m: value => ({
    margin: value
  }),
  mb: value => ({
    marginBottom: value
  }),
  ml: value => ({
    marginLeft: value
  }),
  mr: value => ({
    marginRight: value
  }),
  mt: value => ({
    marginTop: value
  }),
  mx: value => ({
    marginLeft: value,
    marginRight: value
  }),
  my: value => ({
    marginBottom: value,
    marginTop: value
  }),
  p: value => ({
    padding: value
  }),
  pb: value => ({
    paddingBottom: value
  }),
  pl: value => ({
    paddingLeft: value
  }),
  pr: value => ({
    paddingRight: value
  }),
  pt: value => ({
    paddingTop: value
  }),
  px: value => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: value => ({
    paddingBottom: value,
    paddingTop: value
  })
};
const variants = {
  $display: {
    fontFamily: '$text',
    fontSize: '$xx-large',
    fontWeight: '$bold',
    letterSpacing: '$x-small',
    lineHeight: '$xx-large'
  },
  $heading: {
    fontFamily: '$text',
    fontSize: '$x-large',
    fontWeight: '$semibold',
    letterSpacing: '$small',
    lineHeight: '$x-large'
  },
  $title: {
    fontFamily: '$text',
    fontSize: '$large',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$large'
  },
  $subtitle: {
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$bold',
    letterSpacing: '$medium',
    lineHeight: '$medium'
  },
  $body: {
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$medium'
  },
  '$body-bold': {
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$medium'
  },
  $subtext: {
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$small'
  },
  '$subtext-bold': {
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$small'
  },
  $caption: {
    fontFamily: '$text',
    fontSize: '$x-small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$x-small'
  },
  '$caption-bold': {
    fontFamily: '$text',
    fontSize: '$x-small',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$x-small'
  }
};
const typography = {
  typography: variant => variants[variant]
};

const _createStitches = createStitches({
  prefix: 'manifest',
  media: {
    lg: `(min-width: ${lightTheme.sizes.large})`,
    md: `(min-width: ${lightTheme.sizes.medium}})`,
    sm: `(min-width: ${lightTheme.sizes.small}})`,
    xl: `(min-width: ${lightTheme.sizes['x-large']}})`
  },
  theme: lightTheme,
  utils: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, color), layout), space), typography)
}),
      styled = _createStitches.styled,
      config = _createStitches.config,
      globalCss = _createStitches.globalCss,
      getCssText = _createStitches.getCssText,
      keyframes = _createStitches.keyframes,
      theme = _createStitches.theme,
      css = _createStitches.css;

const focus = css({
  variants: {
    isFocusVisible: {
      true: {
        outline: '$colors$palette-indigo-200 solid 2px'
      },
      false: {
        outline: 'none'
      }
    }
  }
});
const focusWithin = css({
  '&:focus-within': {
    borderColor: '$primary',
    boxShadow: '0 0 0 3px $colors$palette-indigo-200',
    transition: '$shadow'
  }
});
const useStyles$K = css({
  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  overflow: 'hidden',
  verticalAlign: 'middle',
  '.manifest-avatar__fallback': {
    alignItems: 'center',
    color: '$text-secondary',
    display: 'flex',
    fontFamily: '$text',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  '.manifest-avatar__image': {
    borderRadius: 'inherit',
    boxSizing: 'border-box',
    height: '100%',
    objectFit: 'cover',
    verticalAlign: 'middle',
    width: '100%'
  },
  variants: {
    size: {
      medium: {
        size: pxToRem(40),
        '.manifest-avatar__fallback': {
          fontSize: '$small',
          lineHeight: '$medium'
        }
      },
      small: {
        size: pxToRem(28),
        '.manifest-avatar__fallback': {
          fontSize: '$x-small',
          lineHeight: pxToRem(14)
        }
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
const Avatar = createComponent((props, forwardedRef) => {
  const _props$as = props.as,
        Comp = _props$as === void 0 ? 'span' : _props$as,
        alt = props.alt,
        classNameProp = props.className,
        css = props.css,
        fallback = props.fallback,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        _props$src = props.src,
        src = _props$src === void 0 ? '' : _props$src,
        other = _objectWithoutProperties(props, _excluded);

  const _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        mounted = _React$useState2[0],
        setMounted = _React$useState2[1];

  const _React$useState3 = React.useState('pending'),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        status = _React$useState4[0],
        setStatus = _React$useState4[1];

  const handleError = React.useCallback(() => setStatus('error'), []);
  const handleLoad = React.useCallback(() => setStatus('loaded'), []);

  const _useStyles$K = useStyles$K({
    css,
    size
  }),
        className = _useStyles$K.className;

  const classes = cx(className, classNameProp, {
    'manifest-avatar': true,
    [`manifest-avatar--${size}`]: size,
    [`manifest-avatar--${status}`]: status
  }); // Reset status to pending if src changes.

  React.useEffect(() => {
    setStatus('pending');
  }, [src]); // Ensure that the image is only loaded on the client (ssr).

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return /*#__PURE__*/React.createElement(Comp, _extends({}, other, {
    className: classes,
    ref: forwardedRef
  }), src && mounted && status !== 'error' && /*#__PURE__*/React.createElement("img", {
    alt: alt,
    className: "manifest-avatar__image",
    onError: handleError,
    onLoad: handleLoad,
    src: src
  }), (!src || status === 'error') && /*#__PURE__*/React.createElement("span", {
    className: "manifest-avatar__fallback"
  }, fallback));
});
const useStyles$J = css({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
});
const Box = createComponent((props, forwardedRef) => {
  const _props$as2 = props.as,
        Comp = _props$as2 === void 0 ? 'div' : _props$as2,
        classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded2);

  const _useStyles$J = useStyles$J({
    css
  }),
        className = _useStyles$J.className;

  return /*#__PURE__*/React.createElement(Comp, _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-box'),
    ref: forwardedRef
  }));
});
const ButtonGroupContext = /*#__PURE__*/React.createContext({});

const useButtonGroup = () => React.useContext(ButtonGroupContext);

const useStyles$I = css({
  boxSizing: 'border-box',
  display: 'inline-flex',
  variants: {
    isAttached: {
      true: {
        '> *:first-of-type:not(:last-of-type)': {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0
        },
        '> *:not(:first-of-type):not(:last-of-type)': {
          borderRadius: 0
        },
        '> *:not(:first-of-type):last-of-type': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0
        }
      },
      false: {
        '& > *:not(style) ~ *:not(style)': {
          marginLeft: '$small'
        }
      }
    }
  },
  defaultVariants: {
    isAttached: false
  }
});
const ButtonGroup = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        isAttached = props.isAttached,
        size = props.size,
        variant = props.variant,
        other = _objectWithoutProperties(props, _excluded3);

  const _useStyles$I = useStyles$I({
    css,
    isAttached
  }),
        className = _useStyles$I.className;

  const classes = cx(className, classNameProp, {
    ['manifest-button-group']: true,
    [`manifest-button-group--attached`]: isAttached
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: classes,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(ButtonGroupContext.Provider, {
    value: {
      isDisabled,
      size,
      variant
    }
  }, children));
});

if (process.env.NODE_ENV !== "production") {
  ButtonGroup.displayName = 'ManifestButtonGroup';
}

const useStyles$H = css({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$small',
  boxShadow: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: '$text',
  fontSize: '$small',
  fontWeight: '$semibold',
  justifyContent: 'center',
  letterSpacing: '$medium',
  lineHeight: '$small',
  position: 'relative',
  px: pxToRem(12),
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '.manifest-button__icon': {
    alignSelf: 'center',
    display: 'inline-flex',
    flexShrink: 0
  },
  '.manifest-button__icon--end': {
    marginLeft: '$small'
  },
  '.manifest-button__icon--start': {
    marginRight: '$small'
  },
  variants: {
    hasEndIcon: {
      true: {
        paddingRight: '$small'
      }
    },
    hasStartIcon: {
      true: {
        paddingLeft: '$small'
      }
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57
      }
    },
    isFocusVisible: {
      true: {}
    },
    isHovered: {
      true: {}
    },
    isPressed: {
      true: {}
    },
    variant: {
      danger: {
        backgroundColor: '$palette-red-500',
        color: '$palette-white'
      },
      brand: {
        background: '$brand-gradient',
        color: '$palette-white'
      },
      primary: {
        backgroundColor: '$primary-default',
        color: '$palette-white'
      },
      secondary: {
        backgroundColor: '$palette-white'
      },
      tertiary: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    },
    size: {
      medium: {
        height: pxToRem(40),
        py: '$small',
        [`.manifest-button__icon > .material-icons`]: {
          fontSize: '$x-large'
        }
      },
      small: {
        height: pxToRem(32),
        py: pxToRem(6),
        [`.manifest-button__icon > .material-icons`]: {
          fontSize: pxToRem(18)
        }
      }
    }
  },
  compoundVariants: [{
    isHovered: true,
    variant: 'primary',
    css: {
      backgroundColor: '$primary-hover'
    }
  }, {
    isHovered: true,
    variant: 'secondary',
    css: {
      backgroundColor: '$palette-grey-100'
    }
  }, {
    isHovered: true,
    variant: 'tertiary',
    css: {
      backgroundColor: '$palette-grey-100'
    }
  }, {
    isHovered: true,
    variant: 'brand',
    css: {
      background: '$brand-hover'
    }
  }, {
    isHovered: true,
    variant: 'danger',
    css: {
      background: 'linear-gradient(0deg, rgba(9, 21, 33, 0.15), rgba(9, 21, 33, 0.15)), $colors$palette-red-500'
    }
  }, {
    isPressed: true,
    variant: 'primary',
    css: {
      backgroundColor: '$primary-active',
      boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)'
    }
  }, {
    isPressed: true,
    variant: 'secondary',
    css: {
      backgroundColor: '$palette-grey-300',
      boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)'
    }
  }, {
    isPressed: true,
    variant: 'tertiary',
    css: {
      backgroundColor: '$palette-grey-300'
    }
  }, {
    isPressed: true,
    variant: 'brand',
    css: {
      background: '$brand-active'
    }
  }, {
    isPressed: true,
    variant: 'danger',
    css: {
      background: 'linear-gradient(0deg, rgba(9, 21, 33, 0.3), rgba(9, 21, 33, 0.3)), $colors$palette-red-500',
      boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)'
    }
  }],
  defaultVariants: {
    size: 'medium',
    variant: 'primary'
  }
}, focus);
const Button = createComponent((props, forwardedRef) => {
  var _group$size, _group$variant;

  const group = useButtonGroup();

  const _props$as3 = props.as,
        Comp = _props$as3 === void 0 ? 'button' : _props$as3,
        autoFocus = props.autoFocus,
        children = props.children,
        classNameProp = props.className,
        css = props.css,
        _props$isDisabled = props.isDisabled,
        isDisabled = _props$isDisabled === void 0 ? group === null || group === void 0 ? void 0 : group.isDisabled : _props$isDisabled,
        endIcon = props.endIcon,
        onClick = props.onClick,
        onPress = props.onPress,
        _props$size2 = props.size,
        size = _props$size2 === void 0 ? (_group$size = group === null || group === void 0 ? void 0 : group.size) !== null && _group$size !== void 0 ? _group$size : 'medium' : _props$size2,
        startIcon = props.startIcon,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? (_group$variant = group === null || group === void 0 ? void 0 : group.variant) !== null && _group$variant !== void 0 ? _group$variant : 'primary' : _props$variant,
        other = _objectWithoutProperties(props, _excluded4);

  const buttonRef = React.useRef(null);
  const handleClick = React.useCallback(event => {
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
  }, [onClick]);
  const handlePress = React.useCallback(event => {
    onPress === null || onPress === void 0 ? void 0 : onPress(event);
  }, [onPress]);

  const _useButton = useButton(_objectSpread(_objectSpread({}, other), {}, {
    elementType: 'button',
    isDisabled,
    onClick: handleClick,
    onPress: handlePress
  }), buttonRef),
        buttonProps = _useButton.buttonProps,
        isPressed = _useButton.isPressed;

  const _useFocusRing = useFocusRing({
    autoFocus
  }),
        isFocusVisible = _useFocusRing.isFocusVisible,
        focusProps = _useFocusRing.focusProps;

  const _useHover = useHover({
    isDisabled
  }),
        hoverProps = _useHover.hoverProps,
        isHovered = _useHover.isHovered;

  const _useStyles$H = useStyles$H({
    css,
    hasEndIcon: !!endIcon,
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocusVisible,
    isHovered,
    isPressed,
    size,
    variant
  }),
        className = _useStyles$H.className;

  const classnames = cx(className, classNameProp, {
    'manifest-button': true,
    'manifest-button--disabled': isDisabled,
    [`manifest-button--${size}`]: size,
    [`manifest-button--${variant}`]: variant
  });
  return /*#__PURE__*/React.createElement(Comp, _extends({}, mergeProps(buttonProps, focusProps, hoverProps), {
    className: classnames,
    ref: mergeRefs(buttonRef, forwardedRef)
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-button__icon', 'manifest-button__icon--start')
  }, startIcon), children, endIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-button__icon', 'manifest-button__icon--end')
  }, endIcon));
});
const useStyles$G = css({
  justifyContent: 'center',
  variants: {
    size: {
      medium: {
        padding: '$small'
      },
      small: {
        padding: '$x-small'
      }
    }
  }
});
const IconButton = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        _props$size3 = props.size,
        size = _props$size3 === void 0 ? 'medium' : _props$size3,
        _props$variant2 = props.variant,
        variant = _props$variant2 === void 0 ? 'primary' : _props$variant2,
        other = _objectWithoutProperties(props, _excluded5);

  const _useStyles$G = useStyles$G({
    css,
    size
  }),
        className = _useStyles$G.className;

  return /*#__PURE__*/React.createElement(Button, _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-icon-button'),
    ref: forwardedRef,
    size: size,
    variant: variant
  }));
});

if (process.env.NODE_ENV !== "production") {
  IconButton.displayName = 'ManifestIconButton';
}

const useStyles$F = css({
  alignSelf: 'center',
  userSelect: 'none'
});
const Icon = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        icon = props.icon,
        other = _objectWithoutProperties(props, _excluded6);

  const _useStyles$F = useStyles$F({
    css
  }),
        className = _useStyles$F.className;

  return /*#__PURE__*/React.createElement("span", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-icon', 'material-icons'),
    ref: forwardedRef
  }), icon);
});

if (process.env.NODE_ENV !== "production") {
  Icon.displayName = 'ManifestIcon';
}

const useStyles$E = css({
  margin: '0',
  variants: {
    paragraph: {
      true: {
        marginBottom: '$medium'
      }
    },
    variant: {
      display: {
        typography: '$display'
      },
      heading: {
        typography: '$heading'
      },
      title: {
        typography: '$title'
      },
      subtitle: {
        typography: '$subtitle'
      },
      body: {
        typography: '$body'
      },
      bodyBold: {
        typography: '$body-bold'
      },
      subtext: {
        typography: '$subtext'
      },
      subtextBold: {
        typography: '$subtext-bold'
      },
      caption: {
        typography: '$caption'
      },
      captionBold: {
        typography: '$caption-bold'
      }
    }
  },
  defaultVariants: {
    variant: 'body'
  }
});
const Typography = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        _props$variant3 = props.variant,
        variant = _props$variant3 === void 0 ? 'body' : _props$variant3,
        other = _objectWithoutProperties(props, _excluded7);

  const _useStyles$E = useStyles$E({
    css,
    variant
  }),
        className = _useStyles$E.className;

  const classes = cx(className, classNameProp, {
    'manifest-typography': true,
    [`manifest-typography--${variant}`]: variant
  });
  return /*#__PURE__*/React.createElement("span", _extends({}, other, {
    className: classes,
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  Typography.displayName = 'ManifestTypography';
}

const useStyles$D = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: '$small $medium',
  flexDirection: 'row'
});

function CalendarHeader(props) {
  const nextButtonProps = props.nextButtonProps,
        prevButtonProps = props.prevButtonProps,
        state = props.state;

  const _useLocale = useLocale(),
        direction = _useLocale.direction;

  const currentMonth = state.visibleRange.start;
  const dateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era: currentMonth.calendar.identifier === 'gregory' && currentMonth.era === 'BC' ? 'short' : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone
  });

  const _useStyles$D = useStyles$D(),
        className = _useStyles$D.className;

  return /*#__PURE__*/React.createElement("div", {
    className: cx(className, 'manifest-calendar-header')
  }, /*#__PURE__*/React.createElement(IconButton, _extends({}, prevButtonProps, {
    className: "manifest-calendar-header__previous-button",
    size: "small",
    variant: "tertiary"
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: direction === 'rtl' ? 'arrow_right' : 'arrow_left'
  })), /*#__PURE__*/React.createElement(Typography, {
    className: "manifest-calendar-header__text",
    variant: "subtext"
  }, dateFormatter.format(state.visibleRange.start.toDate(state.timeZone))), /*#__PURE__*/React.createElement(IconButton, _extends({}, nextButtonProps, {
    className: "manifest-calendar-header__next-button",
    size: "small",
    variant: "tertiary"
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: direction === 'rtl' ? 'arrow_left' : 'arrow_right'
  })));
}

const useStyles$C = css({
  height: pxToRem(32),
  textAlign: 'center',
  padding: '$x-small 0',
  position: 'relative',
  width: pxToRem(44),
  '.manifest-calendar-cell__button': {
    background: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'block',
    height: pxToRem(24),
    margin: 0,
    outline: 'none',
    padding: 0,
    position: 'relative',
    width: '100%'
  },
  '.manifest-calendar-cell__text': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    borderRadius: '$full',
    color: '$text-primary',
    display: 'flex',
    justifyContent: 'center',
    left: pxToRem(10),
    outline: 'none',
    position: 'absolute',
    top: 0,
    typography: '$caption',
    size: pxToRem(24),
    whiteSpace: 'nowrap'
  },
  variants: {
    isDisabled: {
      true: {
        '.manifest-calendar-cell__button': {
          cursor: 'default',
          pointerEvents: 'none'
        },
        '.manifest-calendar-cell__text': {
          color: '$text-disabled'
        }
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-calendar-cell__text': {
          boxShadow: '0 0 0 2px $colors$palette-indigo-200'
        }
      },
      false: {
        '.manifest-calendar-cell__text': {
          boxShadow: 'none'
        }
      }
    },
    isRangeEnd: {
      true: {}
    },
    isRangeSelection: {
      true: {}
    },
    isRangeStart: {
      true: {}
    },
    isSelected: {
      true: {}
    },
    isSelectionEnd: {
      true: {}
    },
    isSelectionStart: {
      true: {}
    },
    isToday: {
      true: {
        '.manifest-calendar-cell__button': {
          '&::after': {
            content: '""',
            backgroundColor: '$primary-default',
            height: 1,
            left: pxToRem(17),
            position: 'absolute',
            top: pxToRem(20),
            width: 11
          }
        },
        '.manifest-calendar-cell__text': {
          fontWeight: '$semibold'
        }
      }
    },
    isUnavailable: {
      true: {
        '.manifest-calendar-cell__text': {
          color: '$text-disabled'
        }
      }
    }
  },
  compoundVariants: [{
    isSelected: true,
    isRangeSelection: false,
    css: {
      '.manifest-calendar-cell__button': {
        '&::after': {
          display: 'none'
        }
      },
      '.manifest-calendar-cell__text': {
        backgroundColor: '$primary-default',
        borderColor: '$palette-indigo-100',
        color: '$palette-white'
      }
    }
  }, {
    isSelected: true,
    isRangeSelection: true,
    isSelectionStart: true,
    css: {
      '.manifest-calendar-cell__button': {
        background: 'linear-gradient(to left, $colors$palette-indigo-50 50%, transparent 50%)',
        '&::after': {
          display: 'none'
        }
      },
      '.manifest-calendar-cell__text': {
        backgroundColor: '$primary-default',
        borderColor: '$palette-indigo-100',
        color: '$text-contrast'
      }
    }
  }, {
    isSelected: true,
    isRangeSelection: true,
    isSelectionEnd: true,
    css: {
      '.manifest-calendar-cell__button': {
        background: 'linear-gradient(to right, $colors$palette-indigo-50 50%, transparent 50%)',
        '&::after': {
          display: 'none'
        }
      },
      '.manifest-calendar-cell__text': {
        backgroundColor: '$primary-default',
        borderColor: '$palette-indigo-100',
        color: '$palette-white'
      }
    }
  }, {
    isSelected: true,
    isRangeSelection: true,
    isSelectionEnd: true,
    isSelectionStart: true,
    css: {
      '.manifest-calendar-cell__button': {
        background: 'transparent',
        '&::after': {
          display: 'none'
        }
      },
      '.manifest-calendar-cell__text': {
        backgroundColor: '$primary-default',
        borderColor: '$palette-indigo-100',
        color: '$palette-white'
      }
    }
  }, {
    isSelected: true,
    isRangeSelection: true,
    isSelectionEnd: false,
    isSelectionStart: false,
    css: {
      '.manifest-calendar-cell__button': {
        background: '$palette-indigo-50'
      }
    }
  }, {
    isDisabled: true,
    isRangeSelection: true,
    css: {
      '.manifest-calendar-cell__text': {
        color: '$text-disabled'
      }
    }
  }]
});
/**
 * @private
 */

function CalendarCell(props) {
  const currentMonth = props.currentMonth,
        date = props.date,
        state = props.state;
  const ref = React.useRef(null);

  const _useCalendarCell = useCalendarCell(_objectSpread(_objectSpread({}, props), {}, {
    isDisabled: !isSameMonth(date, currentMonth)
  }), state, ref),
        cellProps = _useCalendarCell.cellProps,
        buttonProps = _useCalendarCell.buttonProps,
        isPressed = _useCalendarCell.isPressed,
        isSelected = _useCalendarCell.isSelected,
        isDisabled = _useCalendarCell.isDisabled,
        isInvalid = _useCalendarCell.isInvalid,
        formattedDate = _useCalendarCell.formattedDate;

  const _useLocale2 = useLocale(),
        locale = _useLocale2.locale;

  const dayOfWeek = getDayOfWeek(date, locale);
  const highlightedRange = 'highlightedRange' in state && state.highlightedRange;
  const isUnavailable = state.isCellUnavailable(date) && !isDisabled;
  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const isLastSelectedBeforeDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(date.add({
    days: 1
  }));
  const isFirstSelectedAfterDisabled = !isDisabled && !isInvalid && state.isCellUnavailable(date.subtract({
    days: 1
  }));
  const isSelectionStart = isSelected && highlightedRange && isSameDay(date, highlightedRange.start);
  const isSelectionEnd = isSelected && highlightedRange && isSameDay(date, highlightedRange.end);
  const isRangeStart = isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || date.day === 1);
  const isRangeEnd = isSelected && (isLastSelectedBeforeDisabled || dayOfWeek === 6 || date.day === currentMonth.calendar.getDaysInMonth(currentMonth));

  const _useFocusRing2 = useFocusRing(),
        focusProps = _useFocusRing2.focusProps,
        isFocusVisible = _useFocusRing2.isFocusVisible;

  const _useHover2 = useHover({
    isDisabled
  }),
        hoverProps = _useHover2.hoverProps,
        isHovered = _useHover2.isHovered;

  const _useStyles$C = useStyles$C({
    isDisabled,
    isHovered,
    isFocusVisible,
    isOutsideMonth,
    isPressed,
    isRangeEnd,
    isRangeStart,
    isRangeSelection: isSelected && 'highlightedRange' in state,
    isSelected,
    isSelectionEnd,
    isSelectionStart,
    isToday: isToday(date, state.timeZone),
    isUnavailable
  }),
        className = _useStyles$C.className;

  return /*#__PURE__*/React.createElement("td", _extends({}, cellProps, {
    className: cx(className, 'manifest-calendar-cell')
  }), /*#__PURE__*/React.createElement("span", _extends({}, mergeProps(buttonProps, hoverProps, focusProps), {
    className: "manifest-calendar-cell__button",
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    className: "manifest-calendar-cell__text"
  }, /*#__PURE__*/React.createElement("span", null, formattedDate))));
}

const useStyles$B = css({
  padding: '$small',
  '.manifest-calendar-table__table': {
    borderCollapse: 'collapse',
    maxWidth: `calc(${pxToRem(44)} * 7)`,
    margin: 0
  },
  '.manifest-calendar-table__head, .manifest-calendar-table__body': {
    border: 0
  },
  '.manifest-calendar-table__row': {
    height: '100%'
  },
  '.manifest-calendar-table__column': {
    height: pxToRem(32),
    padding: 0,
    textAlign: 'center',
    typography: '$caption',
    verticalAlign: 'middle'
  }
});
/**
 * @private
 */

function CalendarTable(props) {
  const state = props.state;

  const _useLocale3 = useLocale(),
        locale = _useLocale3.locale;

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const startDate = state.visibleRange.start.add({});
  const endDate = endOfMonth$1(startDate);

  const _useCalendarGrid = useCalendarGrid({
    endDate,
    startDate
  }, state),
        gridProps = _useCalendarGrid.gridProps,
        headerProps = _useCalendarGrid.headerProps,
        weekDays = _useCalendarGrid.weekDays;

  const _useStyles$B = useStyles$B(),
        className = _useStyles$B.className;

  return /*#__PURE__*/React.createElement("div", {
    className: cx(className, 'manifest-calendar-table')
  }, /*#__PURE__*/React.createElement("table", _extends({}, gridProps, {
    className: "manifest-calendar-table__table"
  }), /*#__PURE__*/React.createElement("thead", _extends({
    className: "manifest-calendar-table__head"
  }, headerProps), /*#__PURE__*/React.createElement("tr", {
    className: "manifest-calendar-table__row"
  }, weekDays.map((weekday, index) => /*#__PURE__*/React.createElement("th", {
    className: "manifest-calendar-table__column",
    scope: "col",
    key: index
  }, /*#__PURE__*/React.createElement(Typography, {
    "aria-hidden": "true",
    variant: "caption"
  }, weekday))))), /*#__PURE__*/React.createElement("tbody", {
    className: "manifest-calendar-table__body"
  }, [...new Array(weeksInMonth).keys()].map(weekIndex => /*#__PURE__*/React.createElement("tr", {
    className: "manifest-calendar-table__row",
    key: weekIndex
  }, state.getDatesInWeek(weekIndex, startDate).map((date, i) => date ? /*#__PURE__*/React.createElement(CalendarCell, {
    currentMonth: startDate,
    date: date,
    key: i,
    state: state
  }) : /*#__PURE__*/React.createElement("td", {
    key: i
  })))))));
}

const useStyles$A = css({
  alignSelf: 'stretch',
  backgroundColor: '$border-primary',
  border: 'none',
  borderWidth: '1px',
  margin: 0,
  overflow: 'visible',
  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: 'auto'
      },
      vertical: {
        height: 'auto',
        width: '1px'
      }
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});
const Separator = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
        other = _objectWithoutProperties(props, _excluded8);

  const Comp = orientation === 'vertical' ? 'div' : 'hr';

  const _useSeparator = useSeparator(_objectSpread(_objectSpread({}, props), {}, {
    elementType: Comp
  })),
        separatorProps = _useSeparator.separatorProps;

  const _useStyles$A = useStyles$A({
    css,
    orientation
  }),
        className = _useStyles$A.className;

  const classes = cx(className, classNameProp, {
    'manifest-separator': true,
    [`manifest-separator--${orientation}`]: orientation
  });
  return /*#__PURE__*/React.createElement(Comp, _extends({}, mergeProps(separatorProps, other), {
    className: classes // @ts-expect-error: https://github.com/Microsoft/TypeScript/issues/28892
    ,
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  Separator.displayName = 'ManifestSeparator';
}

const useStyles$z = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column'
});
const Calendar = createComponent((props, forwardedRef) => {
  const _props$as4 = props.as,
        Comp = _props$as4 === void 0 ? 'div' : _props$as4,
        classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded9);

  const _useLocale4 = useLocale(),
        locale = _useLocale4.locale;

  const state = useCalendarState(_objectSpread(_objectSpread({}, other), {}, {
    locale,
    visibleDuration: {
      months: 1
    },
    createCalendar
  }));

  const _useCalendar = useCalendar(other, state),
        calendarProps = _useCalendar.calendarProps,
        nextButtonProps = _useCalendar.nextButtonProps,
        prevButtonProps = _useCalendar.prevButtonProps;

  const _useStyles$z = useStyles$z({
    css
  }),
        className = _useStyles$z.className;

  return /*#__PURE__*/React.createElement(Comp, _extends({}, calendarProps, {
    className: cx(className, classNameProp, 'manifest-calendar'),
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(CalendarHeader, {
    nextButtonProps: nextButtonProps,
    prevButtonProps: prevButtonProps,
    state: state
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(CalendarTable, {
    state: state
  }));
});
const useStyles$y = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  minHeight: 289
});
const defaultDateRanges = {
  today: {
    label: 'Today',
    key: 'today'
  },
  yesterday: {
    label: 'Yesterday',
    key: 'yesterday'
  },
  thisWeek: {
    label: 'This Week',
    key: 'thisWeek'
  },
  lastWeek: {
    label: 'Last Week',
    key: 'lastWeek'
  },
  thisMonth: {
    label: 'This Month',
    key: 'thisMonth'
  },
  lastMonth: {
    label: 'Last Month',
    key: 'lastMonth'
  }
};

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */


function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */


function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}
/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */


function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

var defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}
/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */


function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */


function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */


var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}
/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */


function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */


function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */


function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000;

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000;

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function _defineProperty$w(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Setter {
  constructor() {
    _defineProperty$w(this, "priority", void 0);

    _defineProperty$w(this, "subPriority", 0);
  }

  validate(_utcDate, _options) {
    return true;
  }

}

class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;

    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(utcDate, options) {
    return this.validateValue(utcDate, this.value, options);
  }

  set(utcDate, flags, options) {
    return this.setValue(utcDate, flags, this.value, options);
  }

}

function _defineProperty$v(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Parser {
  constructor() {
    _defineProperty$v(this, "incompatibleTokens", void 0);

    _defineProperty$v(this, "priority", void 0);

    _defineProperty$v(this, "subPriority", void 0);
  }

  run(dateString, token, match, options) {
    var result = this.parse(dateString, token, match, options);

    if (!result) {
      return null;
    }

    return {
      setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
      rest: result.rest
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }

}

function _defineProperty$u(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class EraParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$u(this, "priority", 140);

    _defineProperty$u(this, "incompatibleTokens", ['R', 'u', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return match.era(dateString, {
          width: 'abbreviated'
        }) || match.era(dateString, {
          width: 'narrow'
        });
      // A, B

      case 'GGGGG':
        return match.era(dateString, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return match.era(dateString, {
          width: 'wide'
        }) || match.era(dateString, {
          width: 'abbreviated'
        }) || match.era(dateString, {
          width: 'narrow'
        });
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setUTCFullYear(value, 0, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}

function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function _defineProperty$t(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |


class YearParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$t(this, "priority", 130);

    _defineProperty$t(this, "incompatibleTokens", ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    var valueCallback = function (year) {
      return {
        year: year,
        isTwoDigitYear: token === 'yy'
      };
    };

    switch (token) {
      case 'y':
        return mapValue(parseNDigits(4, dateString), valueCallback);

      case 'yo':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'year'
        }), valueCallback);

      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    var currentYear = date.getUTCFullYear();

    if (value.isTwoDigitYear) {
      var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
      date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }

    var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setUTCFullYear(year, 0, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$s(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Local week-numbering year


class LocalWeekYearParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$s(this, "priority", 130);

    _defineProperty$s(this, "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
  }

  parse(dateString, token, match) {
    var valueCallback = function (year) {
      return {
        year: year,
        isTwoDigitYear: token === 'YY'
      };
    };

    switch (token) {
      case 'Y':
        return mapValue(parseNDigits(4, dateString), valueCallback);

      case 'Yo':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'year'
        }), valueCallback);

      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    var currentYear = getUTCWeekYear(date, options);

    if (value.isTwoDigitYear) {
      var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
      date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }

    var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
    date.setUTCHours(0, 0, 0, 0);
    return startOfUTCWeek(date, options);
  }

}

function _defineProperty$r(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ISOWeekYearParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$r(this, "priority", 130);

    _defineProperty$r(this, "incompatibleTokens", ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token) {
    if (token === 'R') {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set(_date, _flags, value) {
    var firstWeekOfYear = new Date(0);
    firstWeekOfYear.setUTCFullYear(value, 0, 4);
    firstWeekOfYear.setUTCHours(0, 0, 0, 0);
    return startOfUTCISOWeek(firstWeekOfYear);
  }

}

function _defineProperty$q(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ExtendedYearParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$q(this, "priority", 130);

    _defineProperty$q(this, "incompatibleTokens", ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token) {
    if (token === 'u') {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setUTCFullYear(value, 0, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$p(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class QuarterParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$p(this, "priority", 120);

    _defineProperty$p(this, "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
      case 'QQ':
        // 01, 02, 03, 04
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return match.ordinalNumber(dateString, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return match.quarter(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.quarter(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return match.quarter(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return match.quarter(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.quarter(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.quarter(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setUTCMonth((value - 1) * 3, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$o(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class StandAloneQuarterParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$o(this, "priority", 120);

    _defineProperty$o(this, "incompatibleTokens", ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
      case 'qq':
        // 01, 02, 03, 04
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return match.ordinalNumber(dateString, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return match.quarter(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.quarter(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return match.quarter(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return match.quarter(dateString, {
          width: 'wide',
          context: 'standalone'
        }) || match.quarter(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.quarter(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setUTCMonth((value - 1) * 3, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$n(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class MonthParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$n(this, "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    _defineProperty$n(this, "priority", 110);
  }

  parse(dateString, token, match) {
    var valueCallback = function (value) {
      return value - 1;
    };

    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12

      case 'MM':
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'month'
        }), valueCallback);
      // Jan, Feb, ..., Dec

      case 'MMM':
        return match.month(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.month(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return match.month(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return match.month(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.month(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.month(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setUTCMonth(value, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$m(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class StandAloneMonthParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$m(this, "priority", 110);

    _defineProperty$m(this, "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    var valueCallback = function (value) {
      return value - 1;
    };

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12

      case 'LL':
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'month'
        }), valueCallback);
      // Jan, Feb, ..., Dec

      case 'LLL':
        return match.month(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.month(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return match.month(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return match.month(dateString, {
          width: 'wide',
          context: 'standalone'
        }) || match.month(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.month(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setUTCMonth(value, 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _defineProperty$l(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class LocalWeekParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$l(this, "priority", 100);

    _defineProperty$l(this, "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'w':
        return parseNumericPattern(numericPatterns.week, dateString);

      case 'wo':
        return match.ordinalNumber(dateString, {
          unit: 'week'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return startOfUTCWeek(setUTCWeek(date, value, options), options);
  }

}

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _defineProperty$k(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ISOWeekParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$k(this, "priority", 100);

    _defineProperty$k(this, "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'I':
        return parseNumericPattern(numericPatterns.week, dateString);

      case 'Io':
        return match.ordinalNumber(dateString, {
          unit: 'week'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return startOfUTCISOWeek(setUTCISOWeek(date, value));
  }

}

function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Day of the month

class DateParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$j(this, "priority", 90);

    _defineProperty$j(this, "subPriority", 1);

    _defineProperty$j(this, "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'd':
        return parseNumericPattern(numericPatterns.date, dateString);

      case 'do':
        return match.ordinalNumber(dateString, {
          unit: 'date'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(date, value) {
    var year = date.getUTCFullYear();
    var isLeapYear = isLeapYearIndex(year);
    var month = date.getUTCMonth();

    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setUTCDate(value);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$i(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class DayOfYearParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$i(this, "priority", 90);

    _defineProperty$i(this, "subpriority", 1);

    _defineProperty$i(this, "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'D':
      case 'DD':
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);

      case 'Do':
        return match.ordinalNumber(dateString, {
          unit: 'date'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(date, value) {
    var year = date.getUTCFullYear();
    var isLeapYear = isLeapYearIndex(year);

    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setUTCMonth(0, value);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(2, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class DayParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$h(this, "priority", 90);

    _defineProperty$h(this, "incompatibleTokens", ['D', 'i', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return match.day(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setUTCDay(date, value, options);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class LocalDayParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$g(this, "priority", 90);

    _defineProperty$g(this, "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);
  }

  parse(dateString, token, match, options) {
    var valueCallback = function (value) {
      var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };

    switch (token) {
      // 3
      case 'e':
      case 'ee':
        // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd

      case 'eo':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'day'
        }), valueCallback);
      // Tue

      case 'eee':
        return match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return match.day(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setUTCDay(date, value, options);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class StandAloneLocalDayParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$f(this, "priority", 90);

    _defineProperty$f(this, "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);
  }

  parse(dateString, token, match, options) {
    var valueCallback = function (value) {
      var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };

    switch (token) {
      // 3
      case 'c':
      case 'cc':
        // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd

      case 'co':
        return mapValue(match.ordinalNumber(dateString, {
          unit: 'day'
        }), valueCallback);
      // Tue

      case 'ccc':
        return match.day(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'short',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return match.day(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return match.day(dateString, {
          width: 'short',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return match.day(dateString, {
          width: 'wide',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'abbreviated',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'short',
          context: 'standalone'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'standalone'
        });
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setUTCDay(date, value, options);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ISODayParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$e(this, "priority", 90);

    _defineProperty$e(this, "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);
  }

  parse(dateString, token, match) {
    var valueCallback = function (value) {
      if (value === 0) {
        return 7;
      }

      return value;
    };

    switch (token) {
      // 2
      case 'i':
      case 'ii':
        // 02
        return parseNDigits(token.length, dateString);
      // 2nd

      case 'io':
        return match.ordinalNumber(dateString, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return mapValue(match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        }), valueCallback);
      // T

      case 'iiiii':
        return mapValue(match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        }), valueCallback);
      // Tu

      case 'iiiiii':
        return mapValue(match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        }), valueCallback);
      // Tuesday

      case 'iiii':
      default:
        return mapValue(match.day(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'short',
          context: 'formatting'
        }) || match.day(dateString, {
          width: 'narrow',
          context: 'formatting'
        }), valueCallback);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = setUTCISODay(date, value);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

}

function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class AMPMParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$d(this, "priority", 80);

    _defineProperty$d(this, "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaaa':
        return match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return match.dayPeriod(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  set(date, _flags, value) {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

}

function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class AMPMMidnightParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$c(this, "priority", 80);

    _defineProperty$c(this, "incompatibleTokens", ['a', 'B', 'H', 'k', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbbb':
        return match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return match.dayPeriod(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  set(date, _flags, value) {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

}

function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class DayPeriodParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$b(this, "priority", 80);

    _defineProperty$b(this, "incompatibleTokens", ['a', 'b', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBBB':
        return match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return match.dayPeriod(dateString, {
          width: 'wide',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'abbreviated',
          context: 'formatting'
        }) || match.dayPeriod(dateString, {
          width: 'narrow',
          context: 'formatting'
        });
    }
  }

  set(date, _flags, value) {
    date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

}

function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Hour1to12Parser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$a(this, "priority", 70);

    _defineProperty$a(this, "incompatibleTokens", ['H', 'K', 'k', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'h':
        return parseNumericPattern(numericPatterns.hour12h, dateString);

      case 'ho':
        return match.ordinalNumber(dateString, {
          unit: 'hour'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    var isPM = date.getUTCHours() >= 12;

    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setUTCHours(0, 0, 0, 0);
    } else {
      date.setUTCHours(value, 0, 0, 0);
    }

    return date;
  }

}

function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Hour0to23Parser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$9(this, "priority", 70);

    _defineProperty$9(this, "incompatibleTokens", ['a', 'b', 'h', 'K', 'k', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'H':
        return parseNumericPattern(numericPatterns.hour23h, dateString);

      case 'Ho':
        return match.ordinalNumber(dateString, {
          unit: 'hour'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setUTCHours(value, 0, 0, 0);
    return date;
  }

}

function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Hour0To11Parser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$8(this, "priority", 70);

    _defineProperty$8(this, "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'K':
        return parseNumericPattern(numericPatterns.hour11h, dateString);

      case 'Ko':
        return match.ordinalNumber(dateString, {
          unit: 'hour'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    var isPM = date.getUTCHours() >= 12;

    if (isPM && value < 12) {
      date.setUTCHours(value + 12, 0, 0, 0);
    } else {
      date.setUTCHours(value, 0, 0, 0);
    }

    return date;
  }

}

function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Hour1To24Parser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$7(this, "priority", 70);

    _defineProperty$7(this, "incompatibleTokens", ['a', 'b', 'h', 'H', 'K', 't', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'k':
        return parseNumericPattern(numericPatterns.hour24h, dateString);

      case 'ko':
        return match.ordinalNumber(dateString, {
          unit: 'hour'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    var hours = value <= 24 ? value % 24 : value;
    date.setUTCHours(hours, 0, 0, 0);
    return date;
  }

}

function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class MinuteParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$6(this, "priority", 60);

    _defineProperty$6(this, "incompatibleTokens", ['t', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 'm':
        return parseNumericPattern(numericPatterns.minute, dateString);

      case 'mo':
        return match.ordinalNumber(dateString, {
          unit: 'minute'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setUTCMinutes(value, 0, 0);
    return date;
  }

}

function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class SecondParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$5(this, "priority", 50);

    _defineProperty$5(this, "incompatibleTokens", ['t', 'T']);
  }

  parse(dateString, token, match) {
    switch (token) {
      case 's':
        return parseNumericPattern(numericPatterns.second, dateString);

      case 'so':
        return match.ordinalNumber(dateString, {
          unit: 'second'
        });

      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setUTCSeconds(value, 0);
    return date;
  }

}

function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class FractionOfSecondParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$4(this, "priority", 30);

    _defineProperty$4(this, "incompatibleTokens", ['t', 'T']);
  }

  parse(dateString, token) {
    var valueCallback = function (value) {
      return Math.floor(value * Math.pow(10, -token.length + 3));
    };

    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setUTCMilliseconds(value);
    return date;
  }

}

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ISOTimezoneWithZParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$3(this, "priority", 10);

    _defineProperty$3(this, "incompatibleTokens", ['t', 'T', 'x']);
  }

  parse(dateString, token) {
    switch (token) {
      case 'X':
        return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

      case 'XX':
        return parseTimezonePattern(timezonePatterns.basic, dateString);

      case 'XXXX':
        return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

      case 'XXXXX':
        return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

      case 'XXX':
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) {
      return date;
    }

    return new Date(date.getTime() - value);
  }

}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ISOTimezoneParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$2(this, "priority", 10);

    _defineProperty$2(this, "incompatibleTokens", ['t', 'T', 'X']);
  }

  parse(dateString, token) {
    switch (token) {
      case 'x':
        return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

      case 'xx':
        return parseTimezonePattern(timezonePatterns.basic, dateString);

      case 'xxxx':
        return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

      case 'xxxxx':
        return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

      case 'xxx':
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) {
      return date;
    }

    return new Date(date.getTime() - value);
  }

}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class TimestampSecondsParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty$1(this, "priority", 40);

    _defineProperty$1(this, "incompatibleTokens", '*');
  }

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(_date, _flags, value) {
    return [new Date(value * 1000), {
      timestampIsSet: true
    }];
  }

}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class TimestampMillisecondsParser extends Parser {
  constructor() {
    super(...arguments);

    _defineProperty(this, "priority", 20);

    _defineProperty(this, "incompatibleTokens", '*');
  }

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(_date, _flags, value) {
    return [new Date(value), {
      timestampIsSet: true
    }];
  }

}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


({
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
});
const defaultDate = new Date();
const defineds = {
  startOfWeek: startOfWeek(defaultDate),
  endOfWeek: endOfWeek(defaultDate),
  startOfLastWeek: startOfWeek(addDays(defaultDate, -7)),
  endOfLastWeek: endOfWeek(addDays(defaultDate, -7)),
  startOfToday: startOfDay(defaultDate),
  endOfToday: endOfDay(defaultDate),
  startOfYesterday: startOfDay(addDays(defaultDate, -1)),
  endOfYesterday: endOfDay(addDays(defaultDate, -1)),
  startOfMonth: startOfMonth(defaultDate),
  endOfMonth: endOfMonth(defaultDate),
  startOfLastMonth: startOfMonth(addMonths(defaultDate, -1)),
  endOfLastMonth: endOfMonth(addMonths(defaultDate, -1))
};

const createCalendarDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return new CalendarDate(year, month, day);
};

const getDefaultRanges = () => {
  const today = defaultDateRanges.today,
        yesterday = defaultDateRanges.yesterday,
        thisWeek = defaultDateRanges.thisWeek,
        lastWeek = defaultDateRanges.lastWeek,
        thisMonth = defaultDateRanges.thisMonth,
        lastMonth = defaultDateRanges.lastMonth;
  return [{
    key: today.key,
    label: today.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfToday),
      end: createCalendarDate(defineds.startOfToday)
    }
  }, {
    key: yesterday.key,
    label: yesterday.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfYesterday),
      end: createCalendarDate(defineds.endOfYesterday)
    }
  }, {
    key: thisWeek.key,
    label: thisWeek.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfWeek),
      end: createCalendarDate(defineds.endOfWeek)
    }
  }, {
    key: lastWeek.key,
    label: lastWeek.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfLastWeek),
      end: createCalendarDate(defineds.endOfLastWeek)
    }
  }, {
    key: thisMonth.key,
    label: thisMonth.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfMonth),
      end: createCalendarDate(defineds.endOfMonth)
    }
  }, {
    key: lastMonth.key,
    label: lastMonth.label,
    rangeAnchor: {
      start: createCalendarDate(defineds.startOfLastMonth),
      end: createCalendarDate(defineds.endOfLastMonth)
    }
  }];
};

const useStyles$x = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: 0,
  padding: '$small $medium',
  flexDirection: 'column'
});
const ListBoxContext = /*#__PURE__*/React.createContext(null);

const useListBoxContext = () => React.useContext(ListBoxContext);

const useStyles$w = css({
  $$backgroundColor: 'transparent',
  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'flex',
  outline: 'none',
  px: '$small',
  py: pxToRem(6),
  position: 'relative',
  '.manifest-listbox-item__icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,
    '& > .manifest-icon': {
      fontSize: pxToRem(16)
    }
  },
  '.manifest-listbox-item__icon--end': {
    color: '$primary-default',
    marginLeft: '$small'
  },
  '.manifest-listbox-item__icon--start': {
    marginRight: '$small'
  },
  '.manifest-listbox-item__text': {
    display: 'block',
    flex: '1 1 0%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57
      }
    },
    isFocused: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isHovered: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isPressed: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isSelected: {
      true: {}
    }
  }
});

const ListBoxItem$1 = props => {
  const classNameProp = props.className,
        css = props.css,
        isVirtualized = props.isVirtualized,
        item = props.item,
        startIconProp = props.startIcon;
  const rendered = item.rendered,
        key = item.key;
  const itemRef = React.useRef(null);

  const _useListBoxContext = useListBoxContext(),
        state = _useListBoxContext.state;

  const _useOption = useOption({
    'aria-label': item['aria-label'],
    key,
    isVirtualized
  }, state, itemRef),
        optionProps = _useOption.optionProps,
        labelProps = _useOption.labelProps,
        isFocused = _useOption.isFocused,
        isDisabled = _useOption.isDisabled,
        isPressed = _useOption.isPressed,
        isSelected = _useOption.isSelected;

  const _useHover3 = useHover({
    isDisabled
  }),
        hoverProps = _useHover3.hoverProps,
        isHovered = _useHover3.isHovered;

  const startIcon = React.useMemo(() => startIconProp !== null && startIconProp !== void 0 ? startIconProp : item.props.startIcon, [startIconProp, item.props.startIcon]);

  const _useStyles$w = useStyles$w({
    css,
    isDisabled,
    isFocused,
    isHovered,
    isPressed,
    isSelected
  }),
        className = _useStyles$w.className;

  const classes = cx(className, classNameProp, {
    'manifest-listbox-item': true,
    'manifest-listbox-item--disabled': isDisabled,
    'manifest-listbox-item--selected': isSelected
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, mergeProps(optionProps, hoverProps), {
    className: classes,
    ref: itemRef
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-listbox-item__icon', 'manifest-listbox-item__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement(Typography, _extends({}, labelProps, {
    className: "manifest-listbox-item__text",
    variant: "subtext"
  }), rendered), isSelected && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-listbox-item__icon', 'manifest-listbox-item__icon--end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "check"
  })));
};

if (process.env.NODE_ENV !== "production") {
  ListBoxItem$1.displayName = 'ManifestListBoxItem';
}

const useStyles$v = css({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
  '.manifest-listbox-section__group': {
    margin: 0,
    padding: 0
  },
  '.manifest-listbox-section__label': {
    color: '$text-tertiary',
    px: '$x-small'
  }
});

const ListBoxSection$1 = props => {
  const classNameProp = props.className,
        css = props.css,
        item = props.item;

  const _useListBoxContext2 = useListBoxContext(),
        state = _useListBoxContext2.state;

  const _useListBoxSection = useListBoxSection({
    'aria-label': item['aria-label'],
    heading: item.rendered
  }),
        itemProps = _useListBoxSection.itemProps,
        headingProps = _useListBoxSection.headingProps,
        groupProps = _useListBoxSection.groupProps;

  const showSeparator = item.key !== state.collection.getFirstKey();

  const _useStyles$v = useStyles$v({
    css
  }),
        className = _useStyles$v.className;

  return /*#__PURE__*/React.createElement(React.Fragment, null, showSeparator && /*#__PURE__*/React.createElement(Separator, {
    className: "manifest-listbox-separator"
  }), /*#__PURE__*/React.createElement("div", _extends({}, itemProps, {
    className: cx(className, classNameProp, 'manifest-listbox-section')
  }), item.rendered && /*#__PURE__*/React.createElement(Typography, _extends({}, headingProps, {
    className: "manifest-listbox-section__label",
    variant: "caption"
  }), item.rendered), /*#__PURE__*/React.createElement("div", _extends({}, groupProps, {
    className: "manifest-listbox-section__group"
  }), [...item.childNodes].map(node => /*#__PURE__*/React.createElement(ListBoxItem$1, {
    key: node.key,
    item: node
  })))));
};

if (process.env.NODE_ENV !== "production") {
  ListBoxSection$1.displayName = 'ManifestListBoxSection';
}

const useStyles$u = css({
  boxSizing: 'border-box',
  margin: 0,
  outline: 'none',
  padding: '$small',
  position: 'relative',
  '.manifest-listbox-separator': {
    alignSelf: 'stretch',
    backgroundColor: '$border-primary',
    border: 'none',
    borderWidth: '$small',
    height: '1px',
    mx: '-$small',
    my: '$small',
    overflow: 'visible',
    width: 'auto'
  }
});
const ListBoxBase = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        state = props.state,
        other = _objectWithoutProperties(props, _excluded10);

  const listboxRef = React.useRef(null);

  const _useListBox = useListBox(other, state, listboxRef),
        listBoxProps = _useListBox.listBoxProps;

  const _useStyles$u = useStyles$u({
    css
  }),
        className = _useStyles$u.className;

  return /*#__PURE__*/React.createElement(ListBoxContext.Provider, {
    value: {
      state
    }
  }, /*#__PURE__*/React.createElement("div", _extends({}, listBoxProps, {
    className: cx(className, classNameProp, 'manifest-listbox'),
    ref: mergeRefs(listboxRef, forwardedRef)
  }), [...state.collection].map(item => {
    if (item.type === 'section') {
      return /*#__PURE__*/React.createElement(ListBoxSection$1, {
        key: item.key,
        item: item
      });
    }

    return /*#__PURE__*/React.createElement(ListBoxItem$1, {
      key: item.key,
      item: item
    });
  })));
});

if (process.env.NODE_ENV !== "production") {
  ListBoxBase.displayName = 'ManifestListBoxBase';
}

function $parcel$export$3(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $7af3f5b51489e0b5$exports = {};
$parcel$export$3($7af3f5b51489e0b5$exports, "useMultipleSelectionState", () => $7af3f5b51489e0b5$export$253fe78d46329472);

class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);

    if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }

}

function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
  if (setA.size !== setB.size) return false;

  for (let item of setA) {
    if (!setB.has(item)) return false;
  }

  return true;
}

function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
  let _props$selectionMode = props.selectionMode,
      selectionMode = _props$selectionMode === void 0 ? 'none' : _props$selectionMode,
      disallowEmptySelection = props.disallowEmptySelection,
      allowDuplicateSelectionEvents = props.allowDuplicateSelectionEvents,
      _props$selectionBehav = props.selectionBehavior,
      selectionBehaviorProp = _props$selectionBehav === void 0 ? 'toggle' : _props$selectionBehav,
      _props$disabledBehavi = props.disabledBehavior,
      disabledBehavior = _props$disabledBehavi === void 0 ? 'all' : _props$disabledBehavi; // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
  // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).

  let isFocusedRef = useRef(false);

  let _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      setFocused = _useState2[1];

  let focusedKeyRef = useRef(null);
  let childFocusStrategyRef = useRef(null);

  let _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      setFocusedKey = _useState4[1];

  let selectedKeysProp = useMemo(() => $7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [props.selectedKeys]);
  let defaultSelectedKeys = useMemo(() => $7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new $e40ea825a81a3709$export$52baac22726c72bf()), [props.defaultSelectedKeys]);

  let _useControlledState = useControlledState(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange),
      _useControlledState2 = _slicedToArray(_useControlledState, 2),
      selectedKeys = _useControlledState2[0],
      setSelectedKeys = _useControlledState2[1];

  let disabledKeysProp = useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);

  let _useState5 = useState(selectionBehaviorProp),
      _useState6 = _slicedToArray(_useState5, 2),
      selectionBehavior = _useState6[0],
      setSelectionBehavior = _useState6[1]; // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
  // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.


  if (selectionBehaviorProp === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace'); // If the selectionBehavior prop changes, update the state as well.

  let lastSelectionBehavior = useRef(selectionBehaviorProp);
  useEffect(() => {
    if (selectionBehaviorProp !== lastSelectionBehavior.current) {
      setSelectionBehavior(selectionBehaviorProp);
      lastSelectionBehavior.current = selectionBehaviorProp;
    }
  }, [selectionBehaviorProp]);
  return {
    selectionMode: selectionMode,
    disallowEmptySelection: disallowEmptySelection,
    selectionBehavior: selectionBehavior,
    setSelectionBehavior: setSelectionBehavior,

    get isFocused() {
      return isFocusedRef.current;
    },

    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },

    get focusedKey() {
      return focusedKeyRef.current;
    },

    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },

    setFocusedKey(k, childFocusStrategy = 'first') {
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },

    selectedKeys: selectedKeys,

    setSelectedKeys(keys) {
      if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
    },

    disabledKeys: disabledKeysProp,
    disabledBehavior: disabledBehavior
  };
}

function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
  if (!selection) return defaultValue;
  return selection === 'all' ? 'all' : new $e40ea825a81a3709$export$52baac22726c72bf(selection);
}

var $d496c0a20b6e58ec$exports = {};
$parcel$export$3($d496c0a20b6e58ec$exports, "SelectionManager", () => $d496c0a20b6e58ec$export$6c8a5aaad13c9852);

class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */


  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */


  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */


  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /**
  * Whether the collection is currently focused.
  */


  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */


  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /**
  * The current focused key in the collection.
  */


  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */


  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */


  setFocusedKey(key, childFocusStrategy) {
    this.state.setFocusedKey(key, childFocusStrategy);
  }
  /**
  * The currently selected keys in the collection.
  */


  get selectedKeys() {
    return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */


  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */


  isSelected(key) {
    if (this.state.selectionMode === 'none') return false;
    key = this.getKey(key);
    return this.state.selectedKeys === 'all' ? this.canSelectItem(key) : this.state.selectedKeys.has(key);
  }
  /**
  * Whether the selection is empty.
  */


  get isEmpty() {
    return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */


  get isSelectAll() {
    if (this.isEmpty) return false;
    if (this.state.selectedKeys === 'all') return true;
    if (this._isSelectAll != null) return this._isSelectAll;
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every(k => selectedKeys.has(k));
    return this._isSelectAll;
  }

  get firstSelectedKey() {
    let first = null;

    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || (item === null || item === void 0 ? void 0 : item.index) < first.index) first = item;
    }

    return first === null || first === void 0 ? void 0 : first.key;
  }

  get lastSelectedKey() {
    let last = null;

    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || (item === null || item === void 0 ? void 0 : item.index) > last.index) last = item;
    }

    return last === null || last === void 0 ? void 0 : last.key;
  }

  get disabledKeys() {
    return this.state.disabledKeys;
  }

  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */


  extendSelection(toKey) {
    if (this.selectionMode === 'none') return;

    if (this.selectionMode === 'single') {
      this.replaceSelection(toKey);
      return;
    }

    toKey = this.getKey(toKey);
    let selection; // Only select the one key if coming from a select all.

    if (this.state.selectedKeys === 'all') selection = new $e40ea825a81a3709$export$52baac22726c72bf([toKey], toKey, toKey);else {
      let selectedKeys = this.state.selectedKeys;
      let anchorKey = selectedKeys.anchorKey || toKey;
      selection = new $e40ea825a81a3709$export$52baac22726c72bf(selectedKeys, anchorKey, toKey);

      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey)) selection.delete(key);

      for (let key1 of this.getKeyRange(toKey, anchorKey)) if (this.canSelectItem(key1)) selection.add(key1);
    }
    this.state.setSelectedKeys(selection);
  }

  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);

    if (fromItem && toItem) {
      if (fromItem.index <= toItem.index) return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }

    return [];
  }

  getKeyRangeInternal(from, to) {
    let keys = [];
    let key = from;

    while (key) {
      let item = this.collection.getItem(key);
      if (item && item.type === 'item' || item.type === 'cell' && this.allowsCellSelection) keys.push(key);
      if (key === to) return keys;
      key = this.collection.getKeyAfter(key);
    }

    return [];
  }

  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item) // ¯\_(ツ)_/¯
      return key; // If cell selection is allowed, just return the key.

    if (item.type === 'cell' && this.allowsCellSelection) return key; // Find a parent item to select

    while (item.type !== 'item' && item.parentKey != null) item = this.collection.getItem(item.parentKey);

    if (!item || item.type !== 'item') return null;
    return item.key;
  }
  /**
  * Toggles whether the given key is selected.
  */


  toggleSelection(key) {
    if (this.selectionMode === 'none') return;

    if (this.selectionMode === 'single' && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }

    key = this.getKey(key);
    if (key == null) return;
    let keys = new $e40ea825a81a3709$export$52baac22726c72bf(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(key)) keys.delete(key);else if (this.canSelectItem(key)) {
      keys.add(key);
      keys.anchorKey = key;
      keys.currentKey = key;
    }
    if (this.disallowEmptySelection && keys.size === 0) return;
    this.state.setSelectedKeys(keys);
  }
  /**
  * Replaces the selection with only the given key.
  */


  replaceSelection(key) {
    if (this.selectionMode === 'none') return;
    key = this.getKey(key);
    if (key == null) return;
    let selection = this.canSelectItem(key) ? new $e40ea825a81a3709$export$52baac22726c72bf([key], key, key) : new $e40ea825a81a3709$export$52baac22726c72bf();
    this.state.setSelectedKeys(selection);
  }
  /**
  * Replaces the selection with the given keys.
  */


  setSelectedKeys(keys) {
    if (this.selectionMode === 'none') return;
    let selection = new $e40ea825a81a3709$export$52baac22726c72bf();

    for (let key of keys) {
      key = this.getKey(key);

      if (key != null) {
        selection.add(key);
        if (this.selectionMode === 'single') break;
      }
    }

    this.state.setSelectedKeys(selection);
  }

  getSelectAllKeys() {
    let keys = [];

    let addKeys = key => {
      while (key) {
        if (this.canSelectItem(key)) {
          let item = this.collection.getItem(key);
          if (item.type === 'item') keys.push(key); // Add child keys. If cell selection is allowed, then include item children too.

          if (item.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) addKeys([...item.childNodes][0].key);
        }

        key = this.collection.getKeyAfter(key);
      }
    };

    addKeys(this.collection.getFirstKey());
    return keys;
  }
  /**
  * Selects all items in the collection.
  */


  selectAll() {
    if (this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
  }
  /**
  * Removes all keys from the selection.
  */


  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf());
  }
  /**
  * Toggles between select all and an empty selection.
  */


  toggleSelectAll() {
    if (this.isSelectAll) this.clearSelection();else this.selectAll();
  }

  select(key, e) {
    if (this.selectionMode === 'none') return;

    if (this.selectionMode === 'single') {
      if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);else this.replaceSelection(key);
    } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
      this.toggleSelection(key);else this.replaceSelection(key);
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */


  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys) return true; // Check if the set of keys match.

    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size) return false;

    for (let key of selection) {
      if (!selectedKeys.has(key)) return false;
    }

    for (let key2 of selectedKeys) {
      if (!selection.has(key2)) return false;
    }

    return true;
  }

  canSelectItem(key) {
    if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
    let item = this.collection.getItem(key);
    if (!item || item.type === 'cell' && !this.allowsCellSelection) return false;
    return true;
  }

  isDisabled(key) {
    return this.state.disabledKeys.has(key) && this.state.disabledBehavior === 'all';
  }

  constructor(collection, state, options) {
    this.collection = collection;
    this.state = state;
    var ref;
    this.allowsCellSelection = (ref = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && ref !== void 0 ? ref : false;
    this._isSelectAll = null;
  }

}

function $parcel$export$2(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $e72dd72e1c76a225$exports = {};
$parcel$export$2($e72dd72e1c76a225$exports, "useListState", () => $e72dd72e1c76a225$export$2f645645f7bca764);
var $a02d57049d202695$exports = {};
$parcel$export$2($a02d57049d202695$exports, "ListCollection", () => $a02d57049d202695$export$d085fb9e920b5ca7);
var tmp$1 = Symbol.iterator;

class $a02d57049d202695$export$d085fb9e920b5ca7 {
  *[tmp$1]() {
    yield* this.iterable;
  }

  get size() {
    return this.keyMap.size;
  }

  getKeys() {
    return this.keyMap.keys();
  }

  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }

  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }

  getFirstKey() {
    return this.firstKey;
  }

  getLastKey() {
    return this.lastKey;
  }

  getItem(key) {
    return this.keyMap.get(key);
  }

  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }

  constructor(nodes) {
    this.keyMap = new Map();
    this.iterable = nodes;

    let visit = node => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && node.type === 'section') for (let child of node.childNodes) visit(child);
    };

    for (let node2 of nodes) visit(node2);

    let last;
    let index = 0;

    for (let _ref4 of this.keyMap) {
      var _ref5 = _slicedToArray(_ref4, 2);

      let key = _ref5[0];
      let node1 = _ref5[1];

      if (last) {
        last.nextKey = key;
        node1.prevKey = last.key;
      } else {
        this.firstKey = key;
        node1.prevKey = undefined;
      }

      if (node1.type === 'item') node1.index = index++;
      last = node1; // Set nextKey as undefined since this might be the last node
      // If it isn't the last node, last.nextKey will properly set at start of new loop

      last.nextKey = undefined;
    }

    this.lastKey = last === null || last === void 0 ? void 0 : last.key;
  }

}

function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
  let filter = props.filter;
  let selectionState = $7af3f5b51489e0b5$export$253fe78d46329472(props);
  let disabledKeys = useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);

  let factory = nodes => filter ? new $a02d57049d202695$export$d085fb9e920b5ca7(filter(nodes)) : new $a02d57049d202695$export$d085fb9e920b5ca7(nodes);

  let context = useMemo(() => ({
    suppressTextValueWarning: props.suppressTextValueWarning
  }), [props.suppressTextValueWarning]);
  let collection = useCollection(props, factory, context, [filter]); // Reset focused key if that item is deleted from the collection.

  useEffect(() => {
    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
  }, [collection, selectionState.focusedKey]);
  return {
    collection: collection,
    disabledKeys: disabledKeys,
    selectionManager: new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(collection, selectionState)
  };
}

var $a0d645289fe9b86b$exports = {};
$parcel$export$2($a0d645289fe9b86b$exports, "useSingleSelectListState", () => $a0d645289fe9b86b$export$e7f05e985daf4b5f);

function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
  var _defaultSelectedKey;

  let _useControlledState3 = useControlledState(props.selectedKey, (_defaultSelectedKey = props.defaultSelectedKey) !== null && _defaultSelectedKey !== void 0 ? _defaultSelectedKey : null, props.onSelectionChange),
      _useControlledState4 = _slicedToArray(_useControlledState3, 2),
      selectedKey = _useControlledState4[0],
      setSelectedKey = _useControlledState4[1];

  let selectedKeys = useMemo(() => selectedKey != null ? [selectedKey] : [], [selectedKey]);

  let _$e72dd72e1c76a225$ex = $e72dd72e1c76a225$export$2f645645f7bca764(_objectSpread(_objectSpread({}, props), {}, {
    selectionMode: 'single',
    disallowEmptySelection: true,
    allowDuplicateSelectionEvents: true,
    selectedKeys: selectedKeys,
    onSelectionChange: keys => {
      let key = keys.values().next().value; // Always fire onSelectionChange, even if the key is the same
      // as the current key (useControlledState does not).

      if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
      setSelectedKey(key);
    }
  })),
      collection = _$e72dd72e1c76a225$ex.collection,
      disabledKeys = _$e72dd72e1c76a225$ex.disabledKeys,
      selectionManager = _$e72dd72e1c76a225$ex.selectionManager;

  let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
  return {
    collection: collection,
    disabledKeys: disabledKeys,
    selectionManager: selectionManager,
    selectedKey: selectedKey,
    setSelectedKey: setSelectedKey,
    selectedItem: selectedItem
  };
}

const ListBox = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const state = $e72dd72e1c76a225$export$2f645645f7bca764(props);
  return /*#__PURE__*/React.createElement(ListBoxBase, _extends({}, props, {
    state: state,
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  ListBox.displayName = 'ManifestListBox';
}

const ListBoxItem = Item;
const ListBoxSection = Section;

function CalendarSidebar(props) {
  const state = props.state,
        ranges = props.ranges;

  const _useStyles$x = useStyles$x(),
        className = _useStyles$x.className;

  const findRangeByKey = eventTarget => {
    return ranges.find(item => item.key === eventTarget.id);
  };

  const previewChange = ev => {
    const selectedRange = findRangeByKey(ev.target);

    if (selectedRange) {
      const rangeAnchor = selectedRange.rangeAnchor;
      state.setFocusedDate(rangeAnchor.start);
      state.setAnchorDate(rangeAnchor.end);
    }
  };

  const handleRangeChange = ev => {
    const selectedRange = findRangeByKey(ev.target);

    if (selectedRange) {
      const rangeAnchor = selectedRange.rangeAnchor;
      state.setValue({
        start: rangeAnchor.start,
        end: rangeAnchor.end
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: cx(className, 'manifest-calendar-sidebar')
  }, /*#__PURE__*/React.createElement(ListBox, {
    "aria-label": 'listbox'
  }, ranges.map(item => {
    return /*#__PURE__*/React.createElement(ListBoxItem, {
      "aria-label": item.label,
      key: item.key
    }, /*#__PURE__*/React.createElement("div", {
      role: "option",
      "aria-selected": false,
      "aria-disabled": "false",
      "aria-label": item.key,
      "aria-hidden": "true",
      id: item.key,
      onMouseEnter: previewChange,
      onClick: handleRangeChange,
      className: "manifest-calendar-header__text"
    }, item.label));
  })));
}

const CalendarRange = createComponent((props, forwardedRef) => {
  const _props$as5 = props.as,
        Comp = _props$as5 === void 0 ? 'div' : _props$as5,
        classNameProp = props.className,
        css = props.css,
        showCalendar = props.showCalendar,
        showRanges = props.showRanges,
        ranges = props.ranges,
        other = _objectWithoutProperties(props, _excluded11);

  const calendarRef = React.useRef(null);

  const _useLocale5 = useLocale(),
        locale = _useLocale5.locale;

  const state = useRangeCalendarState(_objectSpread(_objectSpread({}, other), {}, {
    locale,
    visibleDuration: {
      months: 1
    },
    createCalendar
  }));

  const _useRangeCalendar = useRangeCalendar(other, state, calendarRef),
        calendarProps = _useRangeCalendar.calendarProps,
        nextButtonProps = _useRangeCalendar.nextButtonProps,
        prevButtonProps = _useRangeCalendar.prevButtonProps;

  const _useStyles$y = useStyles$y({
    css
  }),
        className = _useStyles$y.className;

  const definedRanges = showRanges && ranges ? ranges : getDefaultRanges();
  return /*#__PURE__*/React.createElement(Comp, _extends({}, calendarProps, {
    className: cx(className, classNameProp, 'manifest-range-calendar'),
    ref: mergeRefs(calendarRef, forwardedRef)
  }), showRanges && /*#__PURE__*/React.createElement(CalendarSidebar, {
    state: state,
    ranges: definedRanges
  }), showCalendar && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Separator, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement("div", {
    className: cx('manifest-datepicker__calendar')
  }, /*#__PURE__*/React.createElement(CalendarHeader, {
    nextButtonProps: nextButtonProps,
    prevButtonProps: prevButtonProps,
    state: state
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(CalendarTable, {
    state: state
  }))));
});
const useStyles$t = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  overflow: 'hidden'
});
const Card = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded12);

  const _useStyles$t = useStyles$t({
    css
  }),
        className = _useStyles$t.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-card'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  Card.displayName = 'ManifestCard';
}

const useStyles$s = css({
  alignItems: 'inherit',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: 'auto',
  justifyContent: 'inherit',
  position: 'relative',
  padding: '$large',
  typography: '$body',
  width: '100%'
});
const CardBody = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded13);

  const _useStyles$s = useStyles$s({
    css
  }),
        className = _useStyles$s.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-card-body'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  CardBody.displayName = 'ManifestCardBody';
}

const useStyles$r = css({
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  paddingBottom: '$large',
  px: '$large',
  width: '100%'
});
const CardFooter = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded14);

  const _useStyles$r = useStyles$r({
    css
  }),
        className = _useStyles$r.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-card-footer'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  CardFooter.displayName = 'ManifestCardFooter';
}

const useStyles$q = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingTop: '$large',
  px: '$large',
  typography: '$title'
});
const CardHeader = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded15);

  const _useStyles$q = useStyles$q({
    css
  }),
        className = _useStyles$q.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-card-header'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  CardHeader.displayName = 'ManifestCardHeader';
}

const useStyles$p = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',
  '.manifest-checkbox__control': {
    backgroundColor: '$$backgroundColor',
    border: '2px solid $$borderColor',
    borderRadius: '$small',
    color: '$palette-white',
    cursor: 'pointer',
    size: pxToRem(18)
  },
  '.manifest-checkbox__indicator': {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '100%',
    '> .manifest-checkbox__icon': {
      fontSize: pxToRem(18)
    }
  },
  '.manifest-checkbox__input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  '.manifest-checkbox__text': {
    marginLeft: '$small'
  },
  variants: {
    isChecked: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default'
      }
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.58,
        pointerEvents: 'none'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-checkbox__control': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    },
    isIndeterminate: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default'
      }
    }
  },
  compoundVariants: [{
    isChecked: true,
    isHovered: true,
    css: {
      $$borderColor: '$colors$primary-default'
    }
  }, {
    isIndeterminate: true,
    isHovered: true,
    css: {
      $$borderColor: '$colors$primary-default'
    }
  }]
});
const Checkbox = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        children = props.children,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        isIndeterminate = props.isIndeterminate,
        other = _objectWithoutProperties(props, _excluded16);

  const inputRef = React.useRef(null);
  const state = useToggleState(props);
  const isChecked = state.isSelected;

  const _useCheckbox = useCheckbox(props, state, inputRef),
        inputProps = _useCheckbox.inputProps;

  const _useFocusRing3 = useFocusRing({
    autoFocus
  }),
        isFocusVisible = _useFocusRing3.isFocusVisible,
        focusProps = _useFocusRing3.focusProps;

  const _useHover4 = useHover({
    isDisabled
  }),
        isHovered = _useHover4.isHovered,
        hoverProps = _useHover4.hoverProps;

  const _useStyles$p = useStyles$p({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
    isIndeterminate
  }),
        className = _useStyles$p.className;

  const classes = cx(className, classNameProp, {
    'manifest-checkbox': true,
    'manifest-checkbox--checked': isChecked,
    'manifest-checkbox--disabled': isDisabled,
    'manifest-checkbox--indeterminate': isIndeterminate
  });
  return /*#__PURE__*/React.createElement("label", _extends({}, mergeProps(hoverProps, other), {
    className: classes,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement("input", _extends({}, mergeProps(inputProps, focusProps), {
    className: "manifest-checkbox__input",
    ref: inputRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "manifest-checkbox__control"
  }, /*#__PURE__*/React.createElement("span", {
    className: "manifest-checkbox__indicator"
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "manifest-checkbox__icon",
    icon: isIndeterminate ? 'remove' : 'check'
  }))), children && /*#__PURE__*/React.createElement(Typography, {
    className: "manifest-checkbox__text",
    variant: "subtext"
  }, children));
});

if (process.env.NODE_ENV !== "production") {
  Checkbox.displayName = 'ManifestCheckbox';
}

const useStyles$o = css({
  $$helperTextColor: '$colors$text-tertiary',
  border: 0,
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '100%',
  '.manifest-form-control__helper-text': {
    color: '$$helperTextColor',
    marginTop: '$x-small'
  },
  '.manifest-form-control__label': {
    color: '$text-secondary',
    padding: 0,
    marginBottom: '$x-small',
    position: 'relative',
    typography: '$subtext'
  },
  '.manifest-form-control__required-indicator': {
    color: '$text-danger',
    marginLeft: '$x-small'
  },
  variants: {
    isInvalid: {
      true: {
        $$helperTextColor: '$colors$text-danger'
      }
    },
    orientation: {
      horizontal: {
        flexDirection: 'row'
      },
      vertical: {
        flexDirection: 'column'
      }
    }
  },
  defaultVariants: {
    orientation: 'horizonal'
  }
});
const FormControl = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        helperText = props.helperText,
        _props$helperTextProp = props.helperTextProps,
        helperTextProps = _props$helperTextProp === void 0 ? {} : _props$helperTextProp,
        isRequired = props.isRequired,
        label = props.label,
        _props$labelProps = props.labelProps,
        labelProps = _props$labelProps === void 0 ? {} : _props$labelProps,
        _props$orientation2 = props.orientation,
        orientation = _props$orientation2 === void 0 ? 'vertical' : _props$orientation2,
        validationState = props.validationState,
        other = _objectWithoutProperties(props, _excluded17);

  const isInvalid = validationState === 'invalid';

  const _useStyles$o = useStyles$o({
    css,
    isInvalid,
    orientation
  }),
        className = _useStyles$o.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-form-control'),
    ref: forwardedRef
  }), label && /*#__PURE__*/React.createElement("label", _extends({}, labelProps, {
    className: "manifest-form-control__label"
  }), label, isRequired && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    className: "manifest-form-control__required-indicator"
  }, "*")), children, helperText && /*#__PURE__*/React.createElement(Typography, _extends({}, helperTextProps, {
    className: "manifest-form-control__helper-text",
    variant: "caption"
  }), helperText));
});

if (process.env.NODE_ENV !== "production") {
  FormControl.displayName = 'ManifestFormControl';
}

FormControl.toString = () => '.manifest-form-control';

const PopoverContext = /*#__PURE__*/React.createContext(null);

const usePopoverContext = () => React.useContext(PopoverContext);

const useStyles$n = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxSizing: 'border-box',
  boxShadow: '$medium',
  display: 'inline-flex',
  flexDirection: 'column',
  outline: 0,
  overflowY: 'auto',
  overflowX: 'hidden'
});
const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const PopoverContent = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded18);

  const _usePopoverContext = usePopoverContext(),
        isDismissable = _usePopoverContext.isDismissable,
        isKeyboardDismissDisabled = _usePopoverContext.isKeyboardDismissDisabled,
        isNonModal = _usePopoverContext.isNonModal,
        isOpen = _usePopoverContext.isOpen,
        onClose = _usePopoverContext.onClose,
        onEntered = _usePopoverContext.onEntered,
        onExited = _usePopoverContext.onExited,
        overlayRef = _usePopoverContext.overlayRef,
        contextProps = _usePopoverContext.overlayProps,
        positionProps = _usePopoverContext.positionProps,
        shouldCloseOnBlur = _usePopoverContext.shouldCloseOnBlur,
        shouldCloseOnInteractOutside = _usePopoverContext.shouldCloseOnInteractOutside;

  const _useDialog = useDialog({
    role: 'dialog'
  }, overlayRef),
        dialogProps = _useDialog.dialogProps;

  const _useOverlay = useOverlay({
    isOpen,
    isDismissable: isDismissable && isOpen,
    isKeyboardDismissDisabled,
    onClose,
    shouldCloseOnBlur,
    shouldCloseOnInteractOutside
  }, overlayRef),
        overlayProps = _useOverlay.overlayProps;

  const _useModal = useModal({
    isDisabled: isNonModal
  }),
        modalProps = _useModal.modalProps;

  const completeProps = _objectSpread({}, mergeProps(overlayProps, modalProps, dialogProps, other));

  const _useStyles$n = useStyles$n({
    css
  }),
        className = _useStyles$n.className;

  const classes = cx(className, classNameProp, {
    'manifest-popover': true,
    'manifest-popover--open': isOpen
  });
  return /*#__PURE__*/React.createElement(FocusScope, {
    restoreFocus: true
  }, /*#__PURE__*/React.createElement(Transition, {
    in: isOpen,
    appear: true,
    onExited: onExited,
    onEntered: onEntered,
    timeout: 100
  }, state => /*#__PURE__*/React.createElement("div", _extends({}, completeProps, contextProps, {
    className: classes,
    ref: mergeRefs(overlayRef, forwardedRef),
    style: _objectSpread(_objectSpread({
      opacity: 0,
      visibility: state === 'exited' && !isOpen ? 'hidden' : undefined
    }, styles[state]), positionProps.style)
  }), /*#__PURE__*/React.createElement(DismissButton, {
    onDismiss: onClose
  }), children, /*#__PURE__*/React.createElement(DismissButton, {
    onDismiss: onClose
  }))));
});

if (process.env.NODE_ENV !== "production") {
  PopoverContent.displayName = 'ManifestPopover';
}

const Popover = props => {
  const children = props.children,
        className = props.className,
        css = props.css,
        _props$isDismissable = props.isDismissable,
        isDismissable = _props$isDismissable === void 0 ? true : _props$isDismissable,
        _props$isKeyboardDism = props.isKeyboardDismissDisabled,
        isKeyboardDismissDisabled = _props$isKeyboardDism === void 0 ? false : _props$isKeyboardDism,
        isNonModal = props.isNonModal,
        isOpen = props.isOpen,
        _props$offset = props.offset,
        offset = _props$offset === void 0 ? 4 : _props$offset,
        onClose = props.onClose,
        onEntered = props.onEntered,
        onExited = props.onExited,
        overlayProps = props.overlayProps,
        overlayRef = props.overlayRef,
        _props$placement = props.placement,
        placement = _props$placement === void 0 ? 'bottom' : _props$placement,
        scrollRef = props.scrollRef,
        _props$shouldFlip = props.shouldFlip,
        shouldFlip = _props$shouldFlip === void 0 ? true : _props$shouldFlip,
        _props$shouldCloseOnB = props.shouldCloseOnBlur,
        shouldCloseOnBlur = _props$shouldCloseOnB === void 0 ? false : _props$shouldCloseOnB,
        shouldCloseOnInteractOutside = props.shouldCloseOnInteractOutside,
        triggerRef = props.triggerRef;

  const _React$useState5 = React.useState(isOpen),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        exited = _React$useState6[0],
        setExited = _React$useState6[1];

  const _useOverlayPosition = useOverlayPosition({
    offset,
    isOpen,
    overlayRef,
    placement,
    scrollRef,
    shouldFlip,
    targetRef: triggerRef
  }),
        positionProps = _useOverlayPosition.overlayProps;

  const handleClose = React.useCallback(() => {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose]);
  const handleEntered = React.useCallback(() => {
    setExited(false);
    onEntered === null || onEntered === void 0 ? void 0 : onEntered();
  }, [onEntered]);
  const handleExited = React.useCallback(() => {
    setExited(true);
    onExited === null || onExited === void 0 ? void 0 : onExited();
  }, [onExited]);
  const mounted = !!isOpen || !exited;
  return /*#__PURE__*/React.createElement(PopoverContext.Provider, {
    value: {
      isDismissable,
      isKeyboardDismissDisabled,
      isNonModal,
      isOpen,
      onClose: handleClose,
      onEntered: handleEntered,
      onExited: handleExited,
      overlayProps,
      overlayRef,
      placement,
      positionProps,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside
    }
  }, mounted && /*#__PURE__*/React.createElement(OverlayContainer, null, /*#__PURE__*/React.createElement(PopoverContent, {
    className: className,
    css: css
  }, children)));
};

if (process.env.NODE_ENV !== "production") {
  Popover.displayName = 'ManifestPopover';
}

const useStyles$m = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',
  display: 'flex',
  minWidth: pxToRem(48),
  position: 'relative',
  width: '100%',
  '.manifest-combobox--icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    position: 'absolute',
    top: 0,
    zIndex: 2
  },
  '.manifest-combobox--icon__end': {
    right: 0
  },
  '.manifest-combobox--icon__start': {
    left: 0
  },
  '.manifest-combobox--input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'text',
    margin: 0,
    outline: 0,
    p: '0 $small',
    paddingRight: pxToRem(40),
    resize: 'none',
    transition: '$color',
    typography: '$subtext',
    width: '100%',
    '&::placeholder': {
      color: '$text-tertiary'
    }
  },
  variants: {
    hasStartIcon: {
      true: {
        '.manifest-combobox--input': {
          paddingLeft: pxToRem(40)
        }
      }
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',
        '.manifest-combobox--input': {
          cursor: 'not-allowed'
        }
      }
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-default'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-combobox--input': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    },
    isInvalid: {
      true: {
        $$borderColor: '$colors$border-danger',
        $$iconColor: '$colors$text-danger',
        $$textColor: '$colors$text-danger'
      }
    },
    isPlaceholder: {
      true: {
        $$textColor: '$colors$text-tertiary'
      }
    },
    size: {
      medium: {
        '.manifest-combobox--icon': {
          fontSize: '$x-large',
          size: pxToRem(40),
          '> .material-icons': {
            fontSize: '$x-large'
          }
        },
        '.manifest-combobox--input': {
          height: pxToRem(40)
        }
      },
      small: {
        '.manifest-combobox--icon': {
          fontSize: pxToRem(18),
          size: pxToRem(34),
          '> .material-icons': {
            fontSize: pxToRem(18)
          }
        },
        '.manifest-combobox--input': {
          height: pxToRem(34)
        }
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
const Combobox = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        helperText = props.helperText,
        _props$helperTextProp2 = props.helperTextProps,
        helperTextPropsProp = _props$helperTextProp2 === void 0 ? {} : _props$helperTextProp2,
        label = props.label,
        _props$labelProps2 = props.labelProps,
        labelPropsProp = _props$labelProps2 === void 0 ? {} : _props$labelProps2,
        validationState = props.validationState,
        _props$size4 = props.size,
        size = _props$size4 === void 0 ? 'medium' : _props$size4,
        startIcon = props.startIcon;
  const isInvalid = validationState === 'invalid';

  const _React$useState7 = React.useState(0),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        popoverWidth = _React$useState8[0],
        setPopoverWidth = _React$useState8[1];

  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const _useFilter = useFilter({
    sensitivity: 'base'
  }),
        contains = _useFilter.contains;

  const state = useComboBoxState(_objectSpread(_objectSpread({}, props), {}, {
    defaultFilter: contains,
    allowsEmptyCollection: true,
    menuTrigger: 'focus'
  }));

  const _useComboBox = useComboBox(_objectSpread(_objectSpread({}, props), {}, {
    inputRef,
    listBoxRef,
    menuTrigger: 'focus',
    popoverRef
  }), state),
        inputProps = _useComboBox.inputProps,
        listBoxProps = _useComboBox.listBoxProps,
        labelProps = _useComboBox.labelProps,
        descriptionProps = _useComboBox.descriptionProps,
        errorMessageProps = _useComboBox.errorMessageProps;

  const _useHover5 = useHover({
    isDisabled
  }),
        hoverProps = _useHover5.hoverProps,
        isHovered = _useHover5.isHovered;

  const _useFocusRing4 = useFocusRing({
    autoFocus,
    isTextInput: true,
    within: true
  }),
        isFocusVisible = _useFocusRing4.isFocusVisible,
        isFocused = _useFocusRing4.isFocused,
        focusProps = _useFocusRing4.focusProps;

  const _useStyles$m = useStyles$m({
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    size,
    css
  }),
        className = _useStyles$m.className;

  const classes = cx(className, classNameProp, {
    'manifest-combobox': true,
    'manifest-combobox--disabled': isDisabled,
    'manifest-combobox--invalid': isInvalid,
    [`manifest-combobox--${size}`]: size
  });
  const handlResize = React.useCallback(() => {
    if (inputRef.current) {
      setPopoverWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef, setPopoverWidth]);
  useResizeObserver({
    ref: inputRef,
    onResize: handlResize
  });
  useLayoutEffect(handlResize, [state.selectedKey, handlResize]);
  return /*#__PURE__*/React.createElement(FormControl, {
    helperText: helperText,
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp),
    label: label,
    labelProps: mergeProps(labelProps, labelPropsProp),
    validationState: validationState
  }, /*#__PURE__*/React.createElement("div", _extends({}, mergeProps(hoverProps, focusProps), {
    className: classes,
    ref: forwardedRef
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-combobox--icon', 'manifest-combobox--icon__start')
  }, startIcon), /*#__PURE__*/React.createElement("input", _extends({}, inputProps, {
    className: "manifest-combobox--input",
    ref: inputRef
  })), /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-combobox--icon', 'manifest-combobox--icon__end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "expand_more"
  })), /*#__PURE__*/React.createElement(Popover, {
    className: "manifest-combobox--popover",
    css: {
      minWidth: popoverWidth,
      width: popoverWidth
    },
    isOpen: state.isOpen,
    onClose: state.close,
    overlayRef: popoverRef,
    placement: "bottom",
    scrollRef: listBoxRef,
    triggerRef: inputRef
  }, /*#__PURE__*/React.createElement(ListBoxBase, _extends({}, listBoxProps, {
    className: "manifest-combobox--list-box",
    disallowEmptySelection: true,
    ref: listBoxRef,
    state: state
  })))));
});

if (process.env.NODE_ENV !== "production") {
  Combobox.displayName = 'ManifestCombobox';
}

const useStyles$l = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent'
  },
  'html, body': {
    backgroundColor: '$background-primary',
    color: '$text-primary'
  },
  html: {
    fontSize: '$medium'
  },
  body: {
    margin: 0,
    minHeight: '100%',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    padding: 0,
    position: 'relative',
    textRendering: 'optimizeLegibility',
    typography: '$body',
    WebkitFontSmoothing: 'antialiased'
  },
  'b, strong': {
    fontWeight: '$bold'
  }
});
const CssBaseline = /*#__PURE__*/React.memo(props => {
  const children = props.children;
  useStyles$l();
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
});
const useStyles$k = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-tertiary',
  display: 'flex',
  minWidth: pxToRem(48),
  position: 'relative',
  width: '100%',
  '.manifest-datepicker__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 2
  },
  '.manifest-datepicker__icon--end': {
    right: 0
  },
  '.manifest-datepicker__icon--start': {
    left: 0
  },
  '.manifest-datepicker__input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'default',
    margin: 0,
    outline: 0,
    padding: '0 $small',
    paddingRight: pxToRem(40),
    textAlign: 'start',
    width: '100%'
  },
  '.manifest-datepicker__text': {
    color: '$text-tertiary'
  },
  variants: {
    hasStartIcon: {
      true: {
        '.manifest-datepicker__input': {
          paddingLeft: pxToRem(40)
        }
      }
    },
    isActive: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary'
      }
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',
        '.manifest-datepicker__input': {
          cursor: 'not-allowed'
        }
      }
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-datepicker__input': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    },
    isInvalid: {
      true: {
        $$borderColor: '$colors$border-danger',
        $$iconColor: '$colors$text-danger',
        $$textColor: '$colors$text-danger'
      }
    },
    isPlaceholder: {
      true: {
        $$textColor: '$colors$text-tertiary'
      }
    },
    size: {
      medium: {
        '.manifest-datepicker__icon': {
          fontSize: '$x-large',
          size: pxToRem(40),
          '> .material-icons': {
            fontSize: '$x-large'
          }
        },
        '.manifest-datepicker__input': {
          height: pxToRem(40)
        }
      },
      small: {
        '.manifest-datepicker__icon': {
          fontSize: pxToRem(18),
          size: pxToRem(34),
          '> .material-icons': {
            fontSize: pxToRem(18)
          }
        },
        '.manifest-datepicker__input': {
          height: pxToRem(34)
        }
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
const DatePicker = createComponent((props, forwardedRef) => {
  const _props$as6 = props.as,
        Comp = _props$as6 === void 0 ? 'div' : _props$as6,
        autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        helperText = props.helperText,
        _props$helperTextProp3 = props.helperTextProps,
        helperTextProps = _props$helperTextProp3 === void 0 ? {} : _props$helperTextProp3,
        isDisabled = props.isDisabled,
        isReadOnly = props.isReadOnly,
        isRequired = props.isRequired,
        label = props.label,
        _props$labelProps3 = props.labelProps,
        labelPropsProp = _props$labelProps3 === void 0 ? {} : _props$labelProps3,
        placeholder = props.placeholder,
        size = props.size,
        startIcon = props.startIcon,
        validationState = props.validationState;
  const state = useDatePickerState(props);
  console.log(state);
  const triggerRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const _useDatePicker = useDatePicker(props, state, triggerRef),
        groupProps = _useDatePicker.groupProps,
        labelProps = _useDatePicker.labelProps,
        triggerProps = _useDatePicker.buttonProps,
        dialogProps = _useDatePicker.dialogProps,
        calendarProps = _useDatePicker.calendarProps,
        descriptionProps = _useDatePicker.descriptionProps,
        errorMessageProps = _useDatePicker.errorMessageProps;

  const isInvalid = validationState === 'invalid';

  const _useButton2 = useButton(_objectSpread(_objectSpread({}, triggerProps), {}, {
    isDisabled
  }), triggerRef),
        buttonProps = _useButton2.buttonProps,
        isPressed = _useButton2.isPressed;

  const _useFocusRing5 = useFocusRing({
    autoFocus
  }),
        isFocused = _useFocusRing5.isFocused,
        isFocusVisible = _useFocusRing5.isFocusVisible,
        focusProps = _useFocusRing5.focusProps;

  const _useHover6 = useHover({
    isDisabled
  }),
        hoverProps = _useHover6.hoverProps,
        isHovered = _useHover6.isHovered;

  const _useStyles$k = useStyles$k({
    hasStartIcon: !!startIcon,
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.value,
    isPressed,
    isReadOnly,
    size,
    css
  }),
        className = _useStyles$k.className;

  const classes = cx(className, classNameProp, {
    'manifest-datepicker': true,
    'manifest-datepicker--disabled': isDisabled,
    'manifest-datepicker--invalid': isInvalid,
    [`manifest-datepicker--${size}`]: size
  });
  const displayValue = state.value ? `${state.value.month} / ${state.value.day} / ${state.value.year}` : placeholder;
  return /*#__PURE__*/React.createElement(FormControl, {
    helperText: helperText,
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextProps),
    isRequired: isRequired,
    label: label,
    labelProps: mergeProps(labelProps, labelPropsProp),
    validationState: validationState
  }, /*#__PURE__*/React.createElement(Comp, _extends({}, groupProps, {
    className: classes,
    ref: forwardedRef
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement("button", _extends({}, mergeProps(buttonProps, focusProps, hoverProps), {
    className: "manifest-datepicker__input",
    ref: triggerRef
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtext"
  }, displayValue)), /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "calendar_month"
  })), /*#__PURE__*/React.createElement(Popover, {
    className: "manifest-datepicker__popover",
    isOpen: state.isOpen,
    onClose: () => state.setOpen(false),
    overlayProps: dialogProps,
    overlayRef: popoverRef,
    placement: "bottom start",
    triggerRef: triggerRef
  }, /*#__PURE__*/React.createElement(Calendar, _extends({
    className: "manifest-datepicker__calendar"
  }, calendarProps)))));
});
const DateRangePicker = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        helperText = props.helperText,
        _props$helperTextProp4 = props.helperTextProps,
        helperTextProps = _props$helperTextProp4 === void 0 ? {} : _props$helperTextProp4,
        isDisabled = props.isDisabled,
        isReadOnly = props.isReadOnly,
        isRequired = props.isRequired,
        ranges = props.ranges,
        _props$showCalendar = props.showCalendar,
        showCalendar = _props$showCalendar === void 0 ? true : _props$showCalendar,
        _props$showRanges = props.showRanges,
        showRanges = _props$showRanges === void 0 ? false : _props$showRanges,
        label = props.label,
        _props$labelProps4 = props.labelProps,
        labelPropsProp = _props$labelProps4 === void 0 ? {} : _props$labelProps4,
        placeholder = props.placeholder,
        size = props.size,
        startIcon = props.startIcon,
        validationState = props.validationState;
  const state = useDateRangePickerState(props);
  const triggerRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const _useDateRangePicker = useDateRangePicker(props, state, triggerRef),
        groupProps = _useDateRangePicker.groupProps,
        labelProps = _useDateRangePicker.labelProps,
        triggerProps = _useDateRangePicker.buttonProps,
        dialogProps = _useDateRangePicker.dialogProps,
        calendarProps = _useDateRangePicker.calendarProps,
        descriptionProps = _useDateRangePicker.descriptionProps,
        errorMessageProps = _useDateRangePicker.errorMessageProps;

  const isInvalid = validationState === 'invalid';

  const _useButton3 = useButton(_objectSpread(_objectSpread({}, triggerProps), {}, {
    isDisabled
  }), triggerRef),
        buttonProps = _useButton3.buttonProps,
        isPressed = _useButton3.isPressed;

  const _useFocusRing6 = useFocusRing({
    autoFocus
  }),
        isFocused = _useFocusRing6.isFocused,
        isFocusVisible = _useFocusRing6.isFocusVisible,
        focusProps = _useFocusRing6.focusProps;

  const _useHover7 = useHover({
    isDisabled
  }),
        hoverProps = _useHover7.hoverProps,
        isHovered = _useHover7.isHovered;

  const _useStyles$k2 = useStyles$k({
    hasStartIcon: !!startIcon,
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.value,
    isPressed,
    isReadOnly,
    size,
    css
  }),
        className = _useStyles$k2.className;

  const classes = cx(className, classNameProp, {
    'manifest-datepicker': true,
    'manifest-datepicker--disabled': isDisabled,
    'manifest-datepicker--invalid': isInvalid,
    [`manifest-datepicker--${size}`]: size
  });

  const getDisplayValue = () => {
    const _state$value = state.value,
          start = _state$value.start,
          end = _state$value.end;
    const fromDate = start ? `${start.month} / ${start.day} / ${start.year}` : undefined;
    const toDate = end ? `${end.month} / ${end.day} / ${end.year}` : undefined;
    return fromDate && toDate ? `${fromDate} - ${toDate}` : placeholder;
  };

  return /*#__PURE__*/React.createElement(FormControl, {
    helperText: helperText,
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextProps),
    isRequired: isRequired,
    label: label,
    labelProps: mergeProps(labelProps, labelPropsProp),
    validationState: validationState
  }, /*#__PURE__*/React.createElement("div", _extends({}, groupProps, {
    className: classes,
    ref: forwardedRef
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement("button", _extends({}, mergeProps(buttonProps, focusProps, hoverProps), {
    className: "manifest-datepicker__input",
    ref: triggerRef
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtext"
  }, getDisplayValue())), /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "calendar_month"
  })), /*#__PURE__*/React.createElement(Popover, {
    className: "manifest-datepicker__popover",
    isOpen: state.isOpen,
    onClose: () => state.setOpen(false),
    overlayProps: dialogProps,
    overlayRef: popoverRef,
    placement: "bottom start",
    triggerRef: triggerRef
  }, /*#__PURE__*/React.createElement(CalendarRange, _extends({
    className: "manifest-datepicker__calendar"
  }, calendarProps, {
    showCalendar: showCalendar,
    showRanges: showRanges,
    ranges: ranges
  })))));
});

if (process.env.NODE_ENV !== "production") {
  DateRangePicker.displayName = 'ManifestDateRangePicker';
}

DateRangePicker.toString = () => '.manifest-datepicker';

const DropdownContext = /*#__PURE__*/React.createContext(null);

const useDropdownContext = () => React.useContext(DropdownContext);

const Dropdown = props => {
  const alignProp = props.align,
        children = props.children,
        _props$closeOnSelect = props.closeOnSelect,
        closeOnSelect = _props$closeOnSelect === void 0 ? true : _props$closeOnSelect,
        directionProp = props.direction,
        _props$placement2 = props.placement,
        placementProp = _props$placement2 === void 0 ? 'bottom start' : _props$placement2,
        _props$trigger = props.trigger,
        trigger = _props$trigger === void 0 ? 'press' : _props$trigger,
        _props$type = props.type,
        type = _props$type === void 0 ? 'menu' : _props$type,
        other = _objectWithoutProperties(props, _excluded19);

  const triggerRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const overlayRef = React.useRef(null);

  const _React$Children$toArr = React.Children.toArray(children),
        _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
        menuTrigger = _React$Children$toArr2[0],
        menu = _React$Children$toArr2[1];

  const state = useMenuTriggerState(props);

  const _useMenuTrigger = useMenuTrigger({
    trigger
  }, state, triggerRef),
        menuTriggerProps = _useMenuTrigger.menuTriggerProps,
        menuProps = _useMenuTrigger.menuProps;

  const placement = React.useMemo(() => {
    if (alignProp || directionProp) {
      console.warn('align and direction are deprecated, please use placement');
    }

    if (placementProp) {
      return placementProp;
    }

    const align = alignProp !== null && alignProp !== void 0 ? alignProp : 'start';
    const direction = directionProp !== null && directionProp !== void 0 ? directionProp : 'bottom';
    let initialPlacement;

    switch (direction) {
      case 'left':
      case 'right':
      case 'start':
      case 'end':
        initialPlacement = `${direction} ${align === 'end' ? 'bottom' : 'top'}`;
        break;

      case 'bottom':
      case 'top':
      default:
        initialPlacement = `${direction} ${align}`;
    }

    return initialPlacement;
  }, [alignProp, directionProp, placementProp]);
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: {
      closeOnSelect,
      menuProps: mergeProps(menuProps, {
        autoFocus: state.focusStrategy || true
      }),
      menuRef,
      onClose: state.close
    }
  }, /*#__PURE__*/React.createElement(Slot, _extends({}, menuTriggerProps, {
    ref: triggerRef
  }), menuTrigger), /*#__PURE__*/React.createElement(Popover, _extends({}, other, {
    isOpen: state.isOpen,
    onClose: state.close,
    placement: placement,
    overlayRef: overlayRef,
    triggerRef: triggerRef,
    type: type
  }), menu));
};

if (process.env.NODE_ENV !== "production") {
  Dropdown.displayName = 'ManifestDropdown';
}

const DropdownItem$1 = Item;
const DropdownSection$1 = Section;
const useStyles$j = css({
  $$backgroundColor: 'transparent',
  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'default',
  display: 'flex',
  height: pxToRem(32),
  outline: 'none',
  padding: '$x-small $small',
  position: 'relative',
  '&.manifest-dropdown-item--selectable': {
    paddingRight: '$x-large'
  },
  '&.manifest-dropdown-item--selected': {
    '.manifest-dropdown-item__icon--end': {
      display: 'inline-flex'
    }
  },
  '.manifest-dropdown-item__icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,
    '& > .manifest-icon': {
      fontSize: pxToRem(16)
    }
  },
  '.manifest-dropdown-item__icon--end': {
    display: 'none',
    color: '$primary-default',
    right: pxToRem(8),
    position: 'absolute',
    top: pxToRem(8)
  },
  '.manifest-dropdown-item__icon--start': {
    marginRight: '$small'
  },
  '.manifest-dropdown-item__text': {
    display: 'block',
    flex: '1 1 0%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57
      }
    },
    isFocused: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isHovered: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isPressed: {
      true: {
        $$backgroundColor: '$colors$background-secondary'
      }
    },
    isSelected: {
      true: {}
    }
  }
});

const DropdownItem = props => {
  const autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        isVirtualized = props.isVirtualized,
        item = props.item,
        onAction = props.onAction,
        startIconProp = props.startIcon,
        state = props.state;
  const rendered = item.rendered,
        key = item.key;
  const itemRef = React.useRef(null);
  const isFocused = state.selectionManager.focusedKey === item.key;
  const isDisabled = state.disabledKeys.has(key);
  const isSelected = state.selectionManager.isSelected(key);

  const _useDropdownContext = useDropdownContext(),
        onClose = _useDropdownContext.onClose,
        closeOnSelect = _useDropdownContext.closeOnSelect;

  const _useMenuItem = useMenuItem({
    'aria-label': item['aria-label'],
    closeOnSelect,
    key,
    isDisabled,
    isSelected,
    isVirtualized,
    onAction,
    onClose
  }, state, itemRef),
        menuItemProps = _useMenuItem.menuItemProps,
        labelProps = _useMenuItem.labelProps;

  const _useFocusRing7 = useFocusRing({
    autoFocus
  }),
        focusProps = _useFocusRing7.focusProps;

  const _useHover8 = useHover({
    isDisabled
  }),
        hoverProps = _useHover8.hoverProps,
        isHovered = _useHover8.isHovered;

  const _usePress = usePress({
    isDisabled,
    ref: itemRef
  }),
        pressProps = _usePress.pressProps,
        isPressed = _usePress.isPressed;

  const startIcon = React.useMemo(() => startIconProp !== null && startIconProp !== void 0 ? startIconProp : item.props.startIcon, [startIconProp, item.props.startIcon]);

  const _useStyles$j = useStyles$j({
    css,
    isDisabled,
    isFocused,
    isHovered,
    isPressed,
    isSelected
  }),
        className = _useStyles$j.className;

  const classes = cx(className, classNameProp, {
    'manifest-dropdown-item': true,
    'manifest-dropdown-item--disabled': isDisabled,
    'manifest-dropdown-item--selected': isSelected,
    'manifest-dropdown-item--selectable': state.selectionManager.selectionMode !== 'none'
  });
  return /*#__PURE__*/React.createElement("li", _extends({}, mergeProps(menuItemProps, pressProps, focusProps, hoverProps), {
    className: classes,
    ref: itemRef
  }), startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement(Typography, _extends({}, labelProps, {
    className: "manifest-dropdown-item__text",
    variant: "subtext"
  }), rendered), /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "check"
  })));
};

if (process.env.NODE_ENV !== "production") {
  DropdownItem.displayName = 'ManifestDropdownItem';
}

const useStyles$i = css({
  '.manifest-dropdown-section__group': {
    boxSizing: 'border-box',
    display: 'block',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'auto',
    userSelect: 'none'
  },
  '.manifest-dropdown-section__label': {
    color: '$text-tertiary',
    px: '$x-small'
  }
});

const DropdownSection = props => {
  const classNameProp = props.className,
        css = props.css,
        item = props.item,
        onAction = props.onAction,
        state = props.state;

  const _useMenuSection = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label']
  }),
        itemProps = _useMenuSection.itemProps,
        headingProps = _useMenuSection.headingProps,
        groupProps = _useMenuSection.groupProps;

  const _useSeparator2 = useSeparator({
    elementType: 'li'
  }),
        separatorProps = _useSeparator2.separatorProps;

  const showSeparator = item.key !== state.collection.getFirstKey();

  const _useStyles$i = useStyles$i({
    css
  }),
        className = _useStyles$i.className;

  return /*#__PURE__*/React.createElement(React.Fragment, null, showSeparator && /*#__PURE__*/React.createElement("li", _extends({}, separatorProps, {
    className: "manifest-dropdown-separator"
  })), /*#__PURE__*/React.createElement("li", _extends({}, itemProps, {
    className: cx(className, classNameProp, 'manifest-dropdown-section')
  }), item.rendered && /*#__PURE__*/React.createElement(Typography, _extends({}, headingProps, {
    className: "manifest-dropdown-section__label",
    variant: "caption"
  }), item.rendered), /*#__PURE__*/React.createElement("ul", _extends({}, groupProps, {
    className: "manifest-dropdown-section__group"
  }), [...item.childNodes].map(node => {
    let item = /*#__PURE__*/React.createElement(DropdownItem, {
      key: node.key,
      item: node,
      state: state,
      onAction: onAction
    });

    if (node.wrapper) {
      item = node.wrapper(item);
    }

    return item;
  }))));
};

const useStyles$h = css({
  boxSizing: 'border-box',
  display: 'inline-block',
  listStyleType: 'none',
  margin: 0,
  padding: '$small',
  outline: 0,
  overflow: 'auto',
  userSelect: 'none',
  '.manifest-dropdown-separator': {
    alignSelf: 'stretch',
    backgroundColor: '$border-primary',
    border: 'none',
    borderWidth: '$small',
    height: '1px',
    mx: '-$small',
    my: '$small',
    overflow: 'visible',
    width: 'auto'
  }
});

function $parcel$export$1(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $875d6693e12af071$exports = {};
$parcel$export$1($875d6693e12af071$exports, "useTreeState", () => $875d6693e12af071$export$728d6ba534403756);
var tmp = Symbol.iterator;

class $05ca4cd7c4a5a999$export$863faf230ee2118a {
  *[tmp]() {
    yield* this.iterable;
  }

  get size() {
    return this.keyMap.size;
  }

  getKeys() {
    return this.keyMap.keys();
  }

  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }

  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }

  getFirstKey() {
    return this.firstKey;
  }

  getLastKey() {
    return this.lastKey;
  }

  getItem(key) {
    return this.keyMap.get(key);
  }

  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }

  constructor(nodes, {
    expandedKeys: expandedKeys
  } = {}) {
    this.keyMap = new Map();
    this.iterable = nodes;
    expandedKeys = expandedKeys || new Set();

    let visit = node => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes) visit(child);
    };

    for (let node2 of nodes) visit(node2);

    let last;
    let index = 0;

    for (let _ref6 of this.keyMap) {
      var _ref7 = _slicedToArray(_ref6, 2);

      let key = _ref7[0];
      let node1 = _ref7[1];

      if (last) {
        last.nextKey = key;
        node1.prevKey = last.key;
      } else {
        this.firstKey = key;
        node1.prevKey = undefined;
      }

      if (node1.type === 'item') node1.index = index++;
      last = node1; // Set nextKey as undefined since this might be the last node
      // If it isn't the last node, last.nextKey will properly set at start of new loop

      last.nextKey = undefined;
    }

    this.lastKey = last === null || last === void 0 ? void 0 : last.key;
  }

}

function $875d6693e12af071$export$728d6ba534403756(props) {
  let _useControlledState5 = useControlledState(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange),
      _useControlledState6 = _slicedToArray(_useControlledState5, 2),
      expandedKeys = _useControlledState6[0],
      setExpandedKeys = _useControlledState6[1];

  let selectionState = $7af3f5b51489e0b5$export$253fe78d46329472(props);
  let disabledKeys = useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);
  let tree = useCollection(props, nodes => new $05ca4cd7c4a5a999$export$863faf230ee2118a(nodes, {
    expandedKeys: expandedKeys
  }), null, [expandedKeys]); // Reset focused key if that item is deleted from the collection.

  useEffect(() => {
    if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
  }, [tree, selectionState.focusedKey]);

  let onToggle = key => {
    setExpandedKeys($875d6693e12af071$var$toggleKey(expandedKeys, key));
  };

  return {
    collection: tree,
    expandedKeys: expandedKeys,
    disabledKeys: disabledKeys,
    toggleKey: onToggle,
    selectionManager: new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(tree, selectionState)
  };
}

function $875d6693e12af071$var$toggleKey(set, key) {
  let res = new Set(set);
  if (res.has(key)) res.delete(key);else res.add(key);
  return res;
}

const DropdownMenu = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded20);

  const _useDropdownContext2 = useDropdownContext(),
        menuRef = _useDropdownContext2.menuRef,
        contextProps = _useDropdownContext2.menuProps;

  const completeProps = _objectSpread({}, mergeProps(contextProps, other));

  const state = $875d6693e12af071$export$728d6ba534403756(completeProps);

  const _useMenu = useMenu(completeProps, state, menuRef),
        menuProps = _useMenu.menuProps;

  const _useStyles$h = useStyles$h({
    css
  }),
        className = _useStyles$h.className;

  return /*#__PURE__*/React.createElement("ul", _extends({}, menuProps, {
    className: cx(className, classNameProp, 'manifest-dropdown'),
    ref: mergeRefs(menuRef, forwardedRef)
  }), [...state.collection].map(item => {
    if (item.type === 'section') {
      return /*#__PURE__*/React.createElement(DropdownSection, {
        key: item.key,
        item: item,
        state: state,
        onAction: completeProps.onAction
      });
    }

    let menuItem = /*#__PURE__*/React.createElement(DropdownItem, {
      key: item.key,
      item: item,
      state: state,
      onAction: completeProps.onAction
    });

    if (item.wrapper) {
      menuItem = item.wrapper(menuItem);
    }

    return menuItem;
  }));
});

if (process.env.NODE_ENV !== "production") {
  DropdownMenu.displayName = 'ManifestDropdownMenu';
}

const useStyles$g = css({
  display: 'flex',
  variants: {
    align: {
      baseline: {
        alignItems: 'baseline'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      start: {
        alignItems: 'flex-start'
      }
    },
    orientation: {
      horizontal: {
        flexDirection: 'row'
      },
      vertical: {
        flexDirection: 'column'
      }
    },
    justify: {
      around: {
        justifyContent: 'space-around'
      },
      between: {
        justifyContent: 'space-between'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      start: {
        justifyContent: 'flex-start'
      }
    },
    wrap: {
      false: {},
      true: {
        flexWrap: 'wrap'
      }
    }
  }
});
const Flex = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const align = props.align,
        classNameProp = props.className,
        css = props.css,
        justify = props.justify,
        orientation = props.orientation,
        wrap = props.wrap,
        other = _objectWithoutProperties(props, _excluded21);

  const _useStyles$g = useStyles$g({
    align,
    css,
    justify,
    orientation,
    wrap
  }),
        className = _useStyles$g.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-flex'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  Flex.displayName = 'ManifestFlex';
}

const useStyles$f = css({
  alignItems: 'baseline',
  color: '$text-primary',
  display: 'inline-flex',
  fontFamily: '$text',
  fontSize: '$medium',
  fontWeight: '$semibold',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  textDecoration: 'underline',
  width: 'fitContent'
});
const Link = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        other = _objectWithoutProperties(props, _excluded22);

  const _useStyles$f = useStyles$f({
    css
  }),
        className = _useStyles$f.className;

  return /*#__PURE__*/React.createElement("a", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-link'),
    ref: forwardedRef
  }), children);
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = 'Link';
}

const useStyles$e = css({
  $$backgroundColor: '$colors$palette-grey-50',
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$$backgroundColor',
  border: '1px solid $colors$palette-grey-200',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-secondary',
  cursor: 'pointer',
  display: 'inline-flex',
  margin: 0,
  outline: 0,
  position: 'relative',
  px: pxToRem(12),
  py: pxToRem(6),
  transition: '$color',
  textDecoration: 'none',
  userSelect: 'none',
  width: 'auto',
  '.manifest-icon': {
    fontSize: pxToRem(18)
  },
  '.manifest-pagination-item__icon--end': {
    marginLeft: '$x-small'
  },
  '.manifest-pagination-item__icon--start': {
    marginRight: '$x-small'
  },
  variants: {
    isActive: {
      true: {
        $$backgroundColor: '$colors$palette-grey-200'
      }
    },
    isDisabled: {
      true: {
        opacity: 0.37,
        pointerEvents: 'none'
      }
    },
    isHovered: {
      true: {
        $$backgroundColor: '$colors$palette-grey-100'
      }
    },
    isPressed: {
      true: {}
    }
  },
  compoundVariants: [{
    isActive: true,
    isHovered: true,
    css: {
      $$backgroundColor: '$colors$palette-grey-200'
    }
  }]
}, focus);
const PaginationItem = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        children = props.children,
        classNameProp = props.className,
        isActive = props.isActive,
        isDisabled = props.isDisabled;
  const itemRef = React.useRef(null);

  const _useButton4 = useButton(_objectSpread(_objectSpread({}, props), {}, {
    elementType: 'button',
    isDisabled
  }), itemRef),
        buttonProps = _useButton4.buttonProps,
        isPressed = _useButton4.isPressed;

  const _useFocusRing8 = useFocusRing({
    autoFocus
  }),
        isFocusVisible = _useFocusRing8.isFocusVisible,
        focusProps = _useFocusRing8.focusProps;

  const _useHover9 = useHover({
    isDisabled
  }),
        hoverProps = _useHover9.hoverProps,
        isHovered = _useHover9.isHovered;

  const _useStyles$e = useStyles$e({
    isActive,
    isDisabled,
    isFocusVisible,
    isHovered,
    isPressed
  }),
        className = _useStyles$e.className;

  const classes = cx(className, classNameProp, {
    'manifest-pagination-item': true,
    'manifest-pagination-item--disabled': true,
    'manifest-pagination-item--selected': isActive
  });
  return /*#__PURE__*/React.createElement("button", _extends({}, mergeProps(buttonProps, focusProps, hoverProps), {
    className: classes,
    ref: mergeRefs(itemRef, forwardedRef)
  }), children);
});
const useStyles$d = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '$x-small',
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '$small',
  '.manifest-pagination__ellipsis': {
    backgroundColor: '$palette-grey-50',
    border: '1px solid $colors$palette-grey-200',
    borderRadius: '$small',
    boxSizing: 'border-box',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    px: pxToRem(12),
    py: pxToRem(6)
  }
});

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({
    length
  }, (_, i) => start + i);
};

const Pagination = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const _props$boundaries = props.boundaries,
        boundaries = _props$boundaries === void 0 ? 1 : _props$boundaries,
        classNameProp = props.className,
        css = props.css,
        _props$defaultPage = props.defaultPage,
        defaultPage = _props$defaultPage === void 0 ? 1 : _props$defaultPage,
        _props$onChange = props.onChange,
        onChange = _props$onChange === void 0 ? () => {// noop
  } : _props$onChange,
        _props$page = props.page,
        page = _props$page === void 0 ? 1 : _props$page,
        _props$rowsPerPage = props.rowsPerPage,
        rowsPerPage = _props$rowsPerPage === void 0 ? 10 : _props$rowsPerPage,
        _props$siblings = props.siblings,
        siblings = _props$siblings === void 0 ? 1 : _props$siblings,
        _props$showPageNumber = props.showPageNumbers,
        showPageNumbers = _props$showPageNumber === void 0 ? true : _props$showPageNumber,
        _props$totalRowCount = props.totalRowCount,
        totalRowCount = _props$totalRowCount === void 0 ? 1 : _props$totalRowCount,
        other = _objectWithoutProperties(props, _excluded23);

  const _useControlledState7 = useControlledState(page, defaultPage, onChange),
        _useControlledState8 = _slicedToArray(_useControlledState7, 2),
        activePage = _useControlledState8[0],
        setActivePage = _useControlledState8[1];

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);
  const pages = React.useMemo(() => {
    const startRange = range(1, Math.min(boundaries, pageCount));
    const endRange = range(Math.max(pageCount - boundaries + 1, boundaries + 1), pageCount);
    const startIndex = Math.max(Math.min(Number(activePage) - siblings, pageCount - boundaries - siblings * 2 - 1), boundaries + 2);
    const endIndex = Math.min(Math.max(Number(activePage) + siblings, boundaries + siblings * 2 + 2), endRange.length > 0 ? endRange[0] - 2 : pageCount - 1); // Show siblings or dots

    let siblingsEndRange = pageCount - boundaries > boundaries ? [pageCount - boundaries] : [];
    let siblingsStartRange = boundaries + 1 < pageCount - boundaries ? [boundaries + 1] : [];

    if (endIndex < pageCount - boundaries - 1) {
      siblingsEndRange = ['dots'];
    }

    if (startIndex > boundaries + 2) {
      siblingsStartRange = ['dots'];
    }

    return [...startRange, ...siblingsStartRange, ...range(startIndex, endIndex), ...siblingsEndRange, ...endRange];
  }, [activePage, boundaries, pageCount, siblings]);

  const next = () => setActivePage(Number(activePage) + 1);

  const previous = () => setActivePage(Number(activePage) - 1);

  const setPage = pageNumber => setActivePage(pageNumber);

  const _useStyles$d = useStyles$d({
    css
  }),
        className = _useStyles$d.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-pagination'),
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(PaginationItem, {
    "aria-label": "go to previous page",
    isDisabled: activePage === 1,
    onPress: previous
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "manifest-pagination-item__icon--start",
    icon: "keyboard_arrow_left"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "subtextBold"
  }, "Previous")), showPageNumbers && pages.map((item, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: `${item}_${index}`
  }, item === 'dots' && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "manifest-pagination__ellipsis"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtextBold"
  }, "...")), item !== 'dots' && /*#__PURE__*/React.createElement(PaginationItem, {
    "aria-current": item === activePage ? 'true' : undefined,
    "aria-label": `${item === activePage ? '' : 'go to '}page ${String(item)}`,
    isActive: item === activePage,
    onPress: () => setPage(item)
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtextBold"
  }, item.toString())))), /*#__PURE__*/React.createElement(PaginationItem, {
    "aria-label": "go to next page",
    isDisabled: activePage === pageCount,
    onPress: next
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "subtextBold"
  }, "Next"), /*#__PURE__*/React.createElement(Icon, {
    className: "manifest-pagination-item__icon--end",
    icon: "keyboard_arrow_right"
  })));
});

if (process.env.NODE_ENV !== "production") {
  Pagination.displayName = 'Pagination';
}

const useStyles$c = css({
  $$backgroundColor: 'tranparent',
  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'inline-flex',
  padding: '2px',
  position: 'relative',
  '.manifest-pill__icon': {
    alignItems: 'center',
    borderRadius: '$full',
    color: '$palette-white',
    display: 'flex',
    fontSize: '$medium',
    justifyContent: 'center',
    size: 20,
    '> .manifest-icon': {
      fontSize: '$medium'
    }
  },
  '.manifest-pill__text': {
    backgroundColor: '$$backgroundColor',
    borderRadius: '$full',
    paddingLeft: '$x-small',
    paddingRight: pxToRem(6),
    width: 'max-content'
  },
  variants: {
    colorScheme: {
      indigo: {
        $$backgroundColor: '$colors$palette-indigo-50',
        '.manifest-pill__text': {
          color: '$palette-indigo-700'
        },
        '.manifest-pill__icon': {
          backgroundColor: '$palette-indigo-700'
        }
      },
      red: {
        $$backgroundColor: '$colors$palette-red-50',
        '.manifest-pill__text': {
          color: '$palette-red-600'
        },
        '.manifest-pill__icon': {
          backgroundColor: '$palette-red-600'
        }
      }
    },
    isCollapsible: {
      true: {
        '.manifest-pill__text': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          left: 24,
          position: 'absolute',
          paddingLeft: pxToRem(2),
          py: pxToRem(3)
        }
      }
    },
    isOpen: {
      true: {}
    }
  },
  compoundVariants: [{
    isCollapsible: true,
    isOpen: true,
    css: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    }
  }],
  defaultVariants: {
    colorScheme: 'indigo'
  }
});
const Pill = /*#__PURE__*/React.forwardRef((props, forwaredRef) => {
  const classNameProp = props.className,
        _props$colorScheme = props.colorScheme,
        colorScheme = _props$colorScheme === void 0 ? 'indigo' : _props$colorScheme,
        css = props.css,
        icon = props.icon,
        _props$isCollapsible = props.isCollapsible,
        isCollapsible = _props$isCollapsible === void 0 ? false : _props$isCollapsible,
        label = props.label,
        other = _objectWithoutProperties(props, _excluded24);

  const overlayRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const state = useTooltipTriggerState({
    isDisabled: !isCollapsible,
    delay: 0
  });

  const _useTooltipTrigger = useTooltipTrigger({
    isDisabled: !isCollapsible
  }, state, triggerRef),
        triggerProps = _useTooltipTrigger.triggerProps,
        contentProps = _useTooltipTrigger.tooltipProps;

  const _useOverlayPosition2 = useOverlayPosition({
    isOpen: state.isOpen,
    offset: 4,
    overlayRef,
    placement: 'end',
    targetRef: triggerRef
  }),
        positionProps = _useOverlayPosition2.overlayProps;

  const _useTooltip = useTooltip({
    isOpen: state.isOpen
  }, state),
        tooltipProps = _useTooltip.tooltipProps;

  const isOpen = isCollapsible ? state.isOpen : true;

  const _useStyles$c = useStyles$c({
    colorScheme,
    css,
    isCollapsible,
    isOpen
  }),
        className = _useStyles$c.className;

  const classes = cx(className, classNameProp, {
    'manifest-pill': true,
    'manifest-pill--open': isOpen,
    'manifest-pill--collapsible': isCollapsible
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: classes,
    ref: forwaredRef
  }), icon && /*#__PURE__*/React.createElement("span", _extends({}, triggerProps, {
    className: "manifest-pill__icon",
    ref: triggerRef
  }), icon), isOpen && /*#__PURE__*/React.createElement(Typography, _extends({}, mergeProps(contentProps, tooltipProps, isCollapsible ? positionProps : {}), {
    className: "manifest-pill__text",
    variant: "captionBold"
  }), label));
});

if (process.env.NODE_ENV !== "production") {
  Pill.displayName = 'Pill';
}

const Portal = props => {
  const children = props.children,
        containerRef = props.containerRef;

  const _React$useState9 = React.useState(null),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        container = _React$useState10[0],
        setContainer = _React$useState10[1];

  useLayoutEffect(() => {
    setContainer(containerRef ? containerRef.current : document.body);
  }, [containerRef]);
  return container ? /*#__PURE__*/ReactDom.createPortal(children, container) : container;
};

if (process.env.NODE_ENV !== "production") {
  Portal.displayName = 'ManifestPortal';
}

function Provider(props) {
  const children = props.children,
        _props$disableCSSBase = props.disableCSSBaseline,
        disableCSSBaseline = _props$disableCSSBase === void 0 ? false : _props$disableCSSBase,
        other = _objectWithoutProperties(props, _excluded25);

  return /*#__PURE__*/React.createElement(SSRProvider, null, /*#__PURE__*/React.createElement(OverlayProvider, other, !disableCSSBaseline && /*#__PURE__*/React.createElement(CssBaseline, null), children));
}

const RadioGroupContext = /*#__PURE__*/React.createContext(null);

const useRadioGroupContext = () => React.useContext(RadioGroupContext);

const useStyles$b = css({
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$small',
  margin: 0,
  padding: 0,
  variants: {
    orientation: {
      horizontal: {
        flexFlow: 'row wrap'
      },
      vertical: {
        flexFlow: 'column wrap'
      }
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
});
const RadioGroup = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        children = props.children,
        css = props.css,
        _props$orientation3 = props.orientation,
        orientation = _props$orientation3 === void 0 ? 'vertical' : _props$orientation3,
        other = _objectWithoutProperties(props, _excluded26);

  const state = useRadioGroupState(props);

  const _useRadioGroup = useRadioGroup(props, state),
        radioGroupProps = _useRadioGroup.radioGroupProps;

  const _useStyles$b = useStyles$b({
    css,
    orientation
  }),
        className = _useStyles$b.className;

  const classes = cx(className, classNameProp, {
    'manifest-radio-group': true,
    [`manifest-radio-group--${orientation}`]: orientation
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, mergeProps(radioGroupProps, other), {
    className: classes,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(RadioGroupContext.Provider, {
    value: {
      state
    }
  }, children));
});

if (process.env.NODE_ENV !== "production") {
  RadioGroup.displayName = 'ManifestRadioGroup';
}

const useStyles$a = css({
  $$backgroundColor: '$colors$palette-white',
  $$borderColor: '$colors$palette-grey-500',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',
  '.manifest-radio__control': {
    alignItems: 'center',
    backgroundColor: '$$backgroundColor',
    border: '3px solid $$borderColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    display: 'inline-flex',
    justifyContent: 'center',
    size: pxToRem(18)
  },
  '.manifest-radio__indicator': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    '&::after': {
      backgroundColor: '$palette-white',
      borderRadius: '$full',
      content: '""',
      display: 'block',
      size: pxToRem(10)
    }
  },
  '.manifest-radio__input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  '.manifest-radio__text': {
    marginLeft: '$small'
  },
  variants: {
    isChecked: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: 'transparent'
      }
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.58,
        pointerEvents: 'none'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-radio__control': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    }
  },
  compoundVariants: [{
    isChecked: true,
    isHovered: true,
    css: {
      $$borderColor: '$colors$primary-default'
    }
  }]
});
const Radio = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        children = props.children,
        css = props.css,
        classNameProp = props.className,
        isDisabled = props.isDisabled,
        other = _objectWithoutProperties(props, _excluded27);

  const inputRef = React.useRef(null);

  const _useRadioGroupContext = useRadioGroupContext(),
        state = _useRadioGroupContext.state;

  const _useRadio = useRadio(props, state, inputRef),
        inputProps = _useRadio.inputProps;

  const _useFocusRing9 = useFocusRing({
    autoFocus
  }),
        isFocusVisible = _useFocusRing9.isFocusVisible,
        focusProps = _useFocusRing9.focusProps;

  const _useHover10 = useHover({
    isDisabled
  }),
        isHovered = _useHover10.isHovered,
        hoverProps = _useHover10.hoverProps;

  const _useStyles$a = useStyles$a({
    css,
    isChecked: inputProps.checked,
    isDisabled,
    isFocusVisible,
    isHovered
  }),
        className = _useStyles$a.className;

  const classes = cx(className, classNameProp, {
    'manifest-radio': true,
    'manifest-radio--checked': inputProps.checked,
    'manifest-radio--disabled': isDisabled
  });
  return /*#__PURE__*/React.createElement("label", _extends({}, mergeProps(hoverProps, other), {
    className: classes,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement("input", _extends({}, mergeProps(inputProps, focusProps), {
    className: "manifest-radio__input",
    ref: inputRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "manifest-radio__control"
  }, /*#__PURE__*/React.createElement("span", {
    className: "manifest-radio__indicator"
  })), children && /*#__PURE__*/React.createElement(Typography, {
    className: "manifest-radio__text",
    variant: "subtext"
  }, children));
});

if (process.env.NODE_ENV !== "production") {
  Radio.displayName = 'ManifestRadio';
}

const useStyles$9 = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',
  display: 'flex',
  minWidth: pxToRem(48),
  position: 'relative',
  width: '100%',
  '.manifest-select__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 2
  },
  '.manifest-select__icon--end': {
    right: 0
  },
  '.manifest-select__icon--start': {
    left: 0
  },
  '.manifest-select__input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'default',
    margin: 0,
    outline: 0,
    padding: '0 $small',
    paddingRight: pxToRem(40),
    textAlign: 'start',
    width: '100%'
  },
  '.manifest-select__text': {
    color: '$text-tertiary'
  },
  variants: {
    hasStartIcon: {
      true: {
        '.manifest-select__input': {
          paddingLeft: pxToRem(40)
        }
      }
    },
    isActive: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary'
      }
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',
        '.manifest-select__input': {
          cursor: 'not-allowed'
        }
      }
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-select__input': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    },
    isInvalid: {
      true: {
        $$borderColor: '$colors$border-danger',
        $$iconColor: '$colors$text-danger',
        $$textColor: '$colors$text-danger'
      }
    },
    isPlaceholder: {
      true: {
        $$textColor: '$colors$text-tertiary'
      }
    },
    isPressed: {
      true: {
        $$borderColor: '$colors$primary-active'
      }
    },
    size: {
      medium: {
        '.manifest-select__icon': {
          fontSize: '$x-large',
          size: pxToRem(40),
          '> .material-icons': {
            fontSize: '$x-large'
          }
        },
        '.manifest-select__input': {
          height: pxToRem(40)
        }
      },
      small: {
        '.manifest-select__icon': {
          fontSize: pxToRem(18),
          size: pxToRem(34),
          '> .material-icons': {
            fontSize: pxToRem(18)
          }
        },
        '.manifest-select__input': {
          height: pxToRem(34)
        }
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
const Select = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoComplete = props.autoComplete,
        autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        isRequired = props.isRequired,
        helperText = props.helperText,
        _props$helperTextProp5 = props.helperTextProps,
        helperTextProps = _props$helperTextProp5 === void 0 ? {} : _props$helperTextProp5,
        label = props.label,
        _props$labelProps5 = props.labelProps,
        labelPropsProp = _props$labelProps5 === void 0 ? {} : _props$labelProps5,
        name = props.name,
        placeholder = props.placeholder,
        validationState = props.validationState,
        _props$size5 = props.size,
        size = _props$size5 === void 0 ? 'medium' : _props$size5,
        startIcon = props.startIcon;
  const triggerRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const _React$useState11 = React.useState(0),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        popoverWidth = _React$useState12[0],
        setPopoverWidth = _React$useState12[1];

  const state = useSelectState(props);

  const _useSelect = useSelect(props, state, triggerRef),
        labelProps = _useSelect.labelProps,
        triggerProps = _useSelect.triggerProps,
        valueProps = _useSelect.valueProps,
        menuProps = _useSelect.menuProps,
        descriptionProps = _useSelect.descriptionProps,
        errorMessageProps = _useSelect.errorMessageProps;

  const isInvalid = validationState === 'invalid';

  const _useButton5 = useButton(triggerProps, triggerRef),
        buttonProps = _useButton5.buttonProps,
        isPressed = _useButton5.isPressed;

  const _useFocusRing10 = useFocusRing({
    autoFocus
  }),
        isFocusVisible = _useFocusRing10.isFocusVisible,
        isFocused = _useFocusRing10.isFocused,
        focusProps = _useFocusRing10.focusProps;

  const _useHover11 = useHover({
    isDisabled
  }),
        hoverProps = _useHover11.hoverProps,
        isHovered = _useHover11.isHovered;

  const _useStyles$ = useStyles$9({
    hasStartIcon: !!startIcon,
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    isPressed,
    size,
    css
  }),
        className = _useStyles$.className;

  const classes = cx(className, classNameProp, {
    'manifest-select': true,
    'manifest-select--disabled': isDisabled,
    'manifest-select--invalid': isInvalid,
    [`manifest-select--${size}`]: size
  });
  const handlResize = React.useCallback(() => {
    if (triggerRef.current) {
      setPopoverWidth(triggerRef.current.offsetWidth);
    }
  }, [triggerRef, setPopoverWidth]);
  useResizeObserver({
    ref: triggerRef,
    onResize: handlResize
  });
  useLayoutEffect(handlResize, [state.selectedKey, handlResize]);
  return /*#__PURE__*/React.createElement(FormControl, {
    helperText: helperText,
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextProps),
    isRequired: isRequired,
    label: label,
    labelProps: mergeProps(labelProps, labelPropsProp),
    validationState: validationState
  }, /*#__PURE__*/React.createElement("div", {
    className: classes,
    ref: forwardedRef
  }, startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-select__icon', 'manifest-select__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement(HiddenSelect, {
    autoComplete: autoComplete,
    isDisabled: isDisabled,
    state: state,
    triggerRef: triggerRef,
    label: label,
    name: name
  }), /*#__PURE__*/React.createElement("button", _extends({}, mergeProps(buttonProps, focusProps, hoverProps), {
    className: "manifest-select__input",
    ref: triggerRef
  }), /*#__PURE__*/React.createElement(Typography, _extends({}, valueProps, {
    variant: "subtext"
  }), state.selectedItem ? state.selectedItem.rendered : placeholder)), /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-select__icon', 'manifest-select__icon--end')
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "expand_more"
  })), /*#__PURE__*/React.createElement(Popover, {
    className: "manifest-select__popover",
    css: {
      minWidth: popoverWidth,
      width: popoverWidth
    },
    isOpen: state.isOpen,
    onClose: state.close,
    overlayRef: popoverRef,
    scrollRef: listBoxRef,
    triggerRef: triggerRef
  }, /*#__PURE__*/React.createElement(ListBoxBase, _extends({}, menuProps, {
    className: "manifest-select__list-box",
    disallowEmptySelection: true,
    ref: listBoxRef,
    state: state
  })))));
});

if (process.env.NODE_ENV !== "production") {
  Select.displayName = 'ManifestSelect';
}

const useStyles$8 = css({
  $$switchBackgroundColor: '$colors$palette-grey-500',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',
  '.manifest-switch__control': {
    alignItems: 'center',
    backgroundColor: '$$switchBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    cursor: 'pointer',
    display: 'inline-flex',
    height: pxToRem(24),
    margin: 0,
    padding: 0,
    position: 'relative',
    width: pxToRem(44)
  },
  '.manifest-switch__indicator': {
    backgroundColor: '$palette-white',
    borderRadius: '$full',
    display: 'block',
    size: pxToRem(18),
    transform: 'translateX(3px)',
    transition: '$transform',
    willChange: 'transform'
  },
  '.manifest-switch__input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  '.manifest-switch__text': {
    marginLeft: '$small'
  },
  variants: {
    isChecked: {
      true: {
        $$switchBackgroundColor: '$colors$primary-default',
        '.manifest-switch__indicator': {
          transform: 'translateX(23px)'
        }
      }
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.58,
        pointerEvents: 'none'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-switch__control': {
          outline: '$colors$palette-indigo-200 solid 3px'
        }
      },
      false: {
        outline: 'none'
      }
    },
    isHovered: {
      true: {
        $$switchBackgroundColor: '$colors$palette-grey-600'
      }
    }
  }
});
const Switch = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const autoFocus = props.autoFocus,
        children = props.children,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        other = _objectWithoutProperties(props, _excluded28);

  const inputRef = React.useRef(null);
  const state = useToggleState(props);
  const isChecked = state.isSelected;

  const _useSwitch = useSwitch(_objectSpread(_objectSpread({}, other), {}, {
    autoFocus,
    children,
    isDisabled
  }), state, inputRef),
        inputProps = _useSwitch.inputProps;

  const _useHover12 = useHover({
    isDisabled
  }),
        hoverProps = _useHover12.hoverProps,
        isHovered = _useHover12.isHovered;

  const _useFocusRing11 = useFocusRing({
    autoFocus
  }),
        focusProps = _useFocusRing11.focusProps,
        isFocusVisible = _useFocusRing11.isFocusVisible;

  const _useStyles$2 = useStyles$8({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered
  }),
        className = _useStyles$2.className;

  const classes = cx(className, classNameProp, {
    'manifest-switch': true,
    'manifest-switch--checked': isChecked,
    'manifest-switch--disabled': isDisabled
  });
  return /*#__PURE__*/React.createElement("label", _extends({}, mergeProps(hoverProps, other), {
    className: classes,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement("input", _extends({}, mergeProps(inputProps, focusProps), {
    className: "manifest-switch__input",
    ref: inputRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "manifest-switch__control"
  }, /*#__PURE__*/React.createElement("span", {
    className: "manifest-switch__indicator"
  })), children && /*#__PURE__*/React.createElement(Typography, {
    className: "manifest-switch__text",
    variant: "subtext"
  }, children));
});

if (process.env.NODE_ENV !== "production") {
  Switch.displayName = 'ManifestSwitch';
}

const TableContext = /*#__PURE__*/React.createContext({});

const useTableContext = () => React.useContext(TableContext);

const useStyles$7 = css({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%'
});
const Table = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        css = props.css,
        _props$showHover = props.showHover,
        showHover = _props$showHover === void 0 ? false : _props$showHover,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        other = _objectWithoutProperties(props, _excluded29);

  const _useStyles$3 = useStyles$7({
    css
  }),
        className = _useStyles$3.className;

  return /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: {
      onMouseEnter,
      onMouseLeave,
      showHover
    }
  }, /*#__PURE__*/React.createElement("table", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-table'),
    ref: forwardedRef
  })));
});

if (process.env.NODE_ENV !== "production") {
  Table.displayName = 'ManifestTable';
}

const TableBody = /*#__PURE__*/React.forwardRef((_ref8, forwardedRef) => {
  let className = _ref8.className,
      other = _objectWithoutProperties(_ref8, _excluded30);

  return /*#__PURE__*/React.createElement("tbody", _extends({}, other, {
    className: cx(className, 'manifest-table-body'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TableBody.displayName = 'ManifestTableBody';
}

const useStyles$6 = css({
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-primary',
  overflow: 'hidden',
  padding: '$medium $large',
  textOverflow: 'ellipsis',
  typography: '$subtext',
  verticalAlign: 'inherit',
  whiteSpace: 'nowrap',
  variants: {
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      },
      justify: {
        textAlign: 'justify'
      }
    }
  },
  defaultVariants: {
    align: 'left'
  }
});
const TableCell = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const _props$align = props.align,
        align = _props$align === void 0 ? 'left' : _props$align,
        classNameProp = props.className,
        css = props.css,
        children = props.children,
        onMouseEnter = props.onMouseEnter,
        other = _objectWithoutProperties(props, _excluded31);

  const title = typeof children === 'string' ? children : '';
  const cellRef = React.useRef(null);

  const _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        isOverflown = _React$useState14[0],
        setIsOverflown = _React$useState14[1];

  const _useStyles$4 = useStyles$6({
    align,
    css
  }),
        className = _useStyles$4.className;

  const classes = cx(className, classNameProp, {
    'manifest-table-cell': true,
    [`manifest-table-cell--${align}`]: align
  });
  const handleMouseEnter = React.useCallback(() => {
    const cell = cellRef === null || cellRef === void 0 ? void 0 : cellRef.current;

    if (cell) {
      setIsOverflown(cell.scrollWidth > cell.offsetWidth);
    }
  }, [cellRef]);
  return /*#__PURE__*/React.createElement("td", _extends({}, other, {
    className: classes,
    onMouseEnter: chain(handleMouseEnter, onMouseEnter),
    ref: mergeRefs(cellRef, forwardedRef),
    title: isOverflown ? title : undefined
  }), children);
});

if (process.env.NODE_ENV !== "production") {
  TableCell.displayName = 'ManifestTableCell';
}

const useStyles$5 = css({
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-secondary',
  cursor: 'default',
  height: pxToRem(56),
  position: 'relative',
  px: '$large',
  typography: '$subtext-bold',
  userSelect: 'none',
  '.manifest-table-column--icon': {
    bottom: 'calc(50% - 12px)',
    margin: '0 $x-small',
    position: 'absolute',
    transition: '$transform'
  },
  '.manifest-table-column--icon__ascending': {
    transform: 'rotate(180deg)'
  },
  variants: {
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      },
      justify: {
        textAlign: 'justify'
      }
    },
    isActive: {
      true: {
        color: '$primary'
      }
    },
    isHovered: {
      true: {
        backgroundColor: '$colors$palette-grey-50'
      }
    },
    isSortable: {
      true: {
        cursor: 'pointer'
      }
    }
  },
  defaultVariants: {
    align: 'left'
  }
});
const TableColumn = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const align = props.align,
        children = props.children,
        classNameProp = props.className,
        css = props.css,
        isActive = props.isActive,
        isSortable = props.isSortable,
        _props$sortDirection = props.sortDirection,
        sortDirection = _props$sortDirection === void 0 ? 'asc' : _props$sortDirection,
        other = _objectWithoutProperties(props, _excluded32);

  const _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        isHovered = _React$useState16[0],
        setIsHovered = _React$useState16[1];

  const _useStyles$5 = useStyles$5({
    align,
    css,
    isActive,
    isHovered,
    isSortable
  }),
        className = _useStyles$5.className;

  const classes = cx(className, classNameProp, {
    'manifest-table-column': true,
    [`manifest-table-column--${align}`]: align
  });
  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  const handleMouseEnter = React.useCallback(() => {
    if (!isSortable) return;
    setIsHovered(true);
  }, [isSortable]);
  const handleMouseLeave = React.useCallback(() => {
    if (!isSortable) return;
    setIsHovered(false);
  }, [isSortable]);
  return /*#__PURE__*/React.createElement("th", _extends({}, other, {
    "aria-sort": isSortable ? ariaSort : undefined,
    className: classes,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: forwardedRef
  }), children, isSortable && isActive && /*#__PURE__*/React.createElement(Icon, {
    className: cx('manifest-table-column--icon', {
      'manifest-table-column--icon__ascending': sortDirection === 'asc'
    }),
    icon: "expand_more"
  }));
});

if (process.env.NODE_ENV !== "production") {
  TableColumn.displayName = 'ManifestTableColumn';
}

const TableFooter = /*#__PURE__*/React.forwardRef((_ref9, forwardedRef) => {
  let className = _ref9.className,
      other = _objectWithoutProperties(_ref9, _excluded33);

  return /*#__PURE__*/React.createElement("tfoot", _extends({}, other, {
    className: cx(className, 'manifest-table-footer'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TableFooter.displayName = 'ManifestTableFooter';
}

const TableHeader = /*#__PURE__*/React.forwardRef((_ref10, forwardedRef) => {
  let className = _ref10.className,
      other = _objectWithoutProperties(_ref10, _excluded34);

  return /*#__PURE__*/React.createElement("thead", _extends({}, other, {
    className: cx(className, 'manifest-table-header'),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TableHeader.displayName = 'ManifestTableHeader';
}

const useStyles$4 = css({
  overflow: 'visible',
  variants: {
    isHovered: {
      true: {
        '.manifest-table-cell': {
          backgroundColor: '$palette-grey-50'
        }
      }
    }
  }
});
const TableRow = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        onMouseEnterProp = props.onMouseEnter,
        onMouseLeaveProp = props.onMouseLeave,
        other = _objectWithoutProperties(props, _excluded35);

  const _useTableContext = useTableContext(),
        onMouseEnter = _useTableContext.onMouseEnter,
        onMouseLeave = _useTableContext.onMouseLeave,
        showHover = _useTableContext.showHover;

  const _React$useState17 = React.useState(false),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        isHovered = _React$useState18[0],
        setIsHovered = _React$useState18[1];

  const _useStyles$6 = useStyles$4({
    isHovered
  }),
        className = _useStyles$6.className;

  const handleMouseEnter = React.useCallback(() => {
    if (!showHover) return;
    setIsHovered(true);
  }, [setIsHovered, showHover]);
  return /*#__PURE__*/React.createElement("tr", _extends({}, other, {
    className: cx(className, classNameProp, 'manifestui-table-row'),
    onMouseEnter: chain(handleMouseEnter, onMouseEnter, onMouseEnterProp),
    onMouseLeave: chain(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TableRow.displayName = 'ManifestTableRow';
}

const useStyles$3 = css({
  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: '1px solid $colors$palette-grey-200',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'inline-flex',
  height: pxToRem(24),
  justifyContent: 'center',
  outline: 0,
  px: '$small',
  py: pxToRem(3),
  textDecoration: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  '.manifest-tag__button': {
    padding: 0,
    margin: 0,
    marginLeft: '$x-small',
    size: pxToRem(16)
  },
  '.manifest-tag__icon': {
    fontSize: '$medium',
    size: pxToRem(16)
  },
  '.manifest-tag__text': {
    color: 'inherit',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  variants: {
    isRemovable: {
      true: {
        paddingRight: pxToRem(6)
      }
    }
  }
});
const Tag = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        isRemovable = props.isRemovable,
        onRemove = props.onRemove,
        other = _objectWithoutProperties(props, _excluded36);

  const _useStyles$7 = useStyles$3({
    css,
    isRemovable
  }),
        className = _useStyles$7.className;

  return /*#__PURE__*/React.createElement("div", _extends({}, other, {
    className: cx(className, classNameProp, 'manifest-tag'),
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Typography, {
    className: "manifest-tag__text",
    variant: "caption"
  }, children), isRemovable && /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "remove",
    className: "manifest-tag__button",
    onClick: onRemove,
    size: "small",
    variant: "tertiary"
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "manifest-tag__icon",
    icon: "clear"
  })));
});

if (process.env.NODE_ENV !== "production") {
  Tag.displayName = 'ManifestTag';
}

const useStyles$2 = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',
  '.manifest-textfield-base__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    fontSize: '$x-large',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    '> .material-icons': {
      fontSize: '$x-large'
    }
  },
  '.manifest-textfield-base__icon--end': {
    right: 0
  },
  '.manifest-textfield-base__icon--start': {
    left: 0
  },
  '.manifest-textfield-base__input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'text',
    margin: 0,
    outline: 0,
    padding: '$small',
    resize: 'none',
    transition: '$color',
    typography: '$subtext',
    width: '100%',
    '&::placeholder': {
      color: '$text-tertiary'
    }
  },
  variants: {
    hasEndIcon: {
      true: {
        '.manifest-textfield-base__input': {
          paddingRight: pxToRem(40)
        }
      }
    },
    hasStartIcon: {
      true: {
        '.manifest-textfield-base__input': {
          paddingLeft: pxToRem(40)
        }
      }
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',
        cursor: 'not-allowed'
      }
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-default'
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-textfield-base__input': {
          boxShadow: '0 0 0 3px $colors$palette-indigo-200'
        }
      },
      false: {
        boxShadow: 'none'
      }
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600'
      }
    },
    isInvalid: {
      true: {
        $$borderColor: '$colors$border-danger',
        $$iconColor: '$colors$text-danger',
        $$textColor: '$colors$text-danger'
      }
    }
  }
});
const TextFieldBase = createComponent((props, forwardedRef) => {
  const as = props.as,
        autoFocus = props.autoFocus,
        classNameProp = props.className,
        css = props.css,
        endIcon = props.endIcon,
        helperText = props.helperText,
        helperTextProps = props.helperTextProps,
        _props$inputProps = props.inputProps,
        inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
        inputRef = props.inputRef,
        isDisabled = props.isDisabled,
        isRequired = props.isRequired,
        label = props.label,
        labelProps = props.labelProps,
        _props$multiline = props.multiline,
        multiline = _props$multiline === void 0 ? false : _props$multiline,
        startIcon = props.startIcon,
        validationState = props.validationState;
  const Comp = as ? as : multiline ? 'textarea' : 'input';
  const isInvalid = validationState === 'invalid';
  const fieldRef = React.useRef(null);

  const _useFocusRing12 = useFocusRing({
    autoFocus,
    isTextInput: true
  }),
        focusProps = _useFocusRing12.focusProps,
        isFocused = _useFocusRing12.isFocused,
        isFocusVisible = _useFocusRing12.isFocusVisible;

  const _useHover13 = useHover({
    isDisabled
  }),
        isHovered = _useHover13.isHovered,
        hoverProps = _useHover13.hoverProps;

  const _useStyles$8 = useStyles$2({
    hasEndIcon: !!endIcon,
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    css
  }),
        className = _useStyles$8.className;

  const classes = cx(className, classNameProp, {
    'manifest-textfield-base': true,
    'manifest-textfield-base--disabled': isDisabled,
    'manifest-textfield-base--invalid': isInvalid
  });
  return /*#__PURE__*/React.createElement(FormControl, {
    helperText: helperText,
    helperTextProps: helperTextProps,
    isRequired: isRequired,
    label: label,
    labelProps: labelProps,
    validationState: validationState
  }, /*#__PURE__*/React.createElement("div", {
    className: classes,
    ref: forwardedRef
  }, startIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-textfield-base__icon', 'manifest-textfield-base__icon--start')
  }, startIcon), /*#__PURE__*/React.createElement(Comp, _extends({}, mergeProps(inputProps, focusProps, hoverProps), {
    className: "manifest-textfield-base__input",
    ref: mergeRefs(fieldRef, inputRef),
    rows: multiline ? 1 : undefined
  })), endIcon && /*#__PURE__*/React.createElement("span", {
    className: cx('manifest-textfield-base__icon', 'manifest-textfield-base__icon--end')
  }, endIcon)));
});

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true
  });
}

var $2d73ec29415bd339$exports = {};
$parcel$export($2d73ec29415bd339$exports, "useTextField", () => $2d73ec29415bd339$export$712718f7aec83d5);

function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
  let _props$inputElementTy = props.inputElementType,
      inputElementType = _props$inputElementTy === void 0 ? 'input' : _props$inputElementTy,
      _props$isDisabled2 = props.isDisabled,
      isDisabled = _props$isDisabled2 === void 0 ? false : _props$isDisabled2,
      _props$isRequired = props.isRequired,
      isRequired = _props$isRequired === void 0 ? false : _props$isRequired,
      _props$isReadOnly = props.isReadOnly,
      isReadOnly = _props$isReadOnly === void 0 ? false : _props$isReadOnly,
      validationState = props.validationState,
      _props$type2 = props.type,
      type = _props$type2 === void 0 ? 'text' : _props$type2,
      _props$onChange2 = props.onChange,
      onChange = _props$onChange2 === void 0 ? () => {} : _props$onChange2;

  let _useFocusable = useFocusable(props, ref),
      focusableProps = _useFocusable.focusableProps;

  let _useField = useField(props),
      labelProps = _useField.labelProps,
      fieldProps = _useField.fieldProps,
      descriptionProps = _useField.descriptionProps,
      errorMessageProps = _useField.errorMessageProps;

  let domProps = filterDOMProps(props, {
    labelable: true
  });
  const inputOnlyProps = {
    type: type,
    pattern: props.pattern
  };
  return {
    labelProps: labelProps,
    inputProps: mergeProps(domProps, inputElementType === 'input' && inputOnlyProps, _objectSpread(_objectSpread({
      disabled: isDisabled,
      readOnly: isReadOnly,
      'aria-required': isRequired || undefined,
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-activedescendant': props['aria-activedescendant'],
      'aria-autocomplete': props['aria-autocomplete'],
      'aria-haspopup': props['aria-haspopup'],
      value: props.value,
      defaultValue: props.value ? undefined : props.defaultValue,
      onChange: e => onChange(e.target.value),
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      minLength: props.minLength,
      name: props.name,
      placeholder: props.placeholder,
      inputMode: props.inputMode,
      // Clipboard events
      onCopy: props.onCopy,
      onCut: props.onCut,
      onPaste: props.onPaste,
      // Composition events
      onCompositionEnd: props.onCompositionEnd,
      onCompositionStart: props.onCompositionStart,
      onCompositionUpdate: props.onCompositionUpdate,
      // Selection events
      onSelect: props.onSelect,
      // Input events
      onBeforeInput: props.onBeforeInput,
      onInput: props.onInput
    }, focusableProps), fieldProps)),
    descriptionProps: descriptionProps,
    errorMessageProps: errorMessageProps
  };
}

var $d841c8010a73d545$exports = {};
$parcel$export($d841c8010a73d545$exports, "useFormattedTextField", () => $d841c8010a73d545$export$4f384c9210e583c3);

function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
  return typeof window !== 'undefined' && window.InputEvent && // @ts-ignore
  typeof InputEvent.prototype.getTargetRanges === 'function';
}

function $d841c8010a73d545$export$4f384c9210e583c3(props, state1, inputRef) {
  let stateRef = useRef(state1);
  stateRef.current = state1; // All browsers implement the 'beforeinput' event natively except Firefox
  // (currently behind a flag as of Firefox 84). React's polyfill does not
  // run in all cases that the native event fires, e.g. when deleting text.
  // Use the native event if available so that we can prevent invalid deletions.
  // We do not attempt to polyfill this in Firefox since it would be very complicated,
  // the benefit of doing so is fairly minor, and it's going to be natively supported soon.

  useEffect(() => {
    if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
    let input = inputRef.current;

    let onBeforeInput = e => {
      let state = stateRef.current; // Compute the next value of the input if the event is allowed to proceed.
      // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.

      let nextValue;

      switch (e.inputType) {
        case 'historyUndo':
        case 'historyRedo':
          // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
          // because presumably the input would have already been validated previously.
          return;

        case 'deleteContent':
        case 'deleteByCut':
        case 'deleteByDrag':
          nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
          break;

        case 'deleteContentForward':
          // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
          // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
          // or code points may be deleted. However, in our currently supported locales, there are no such cases.
          // If we support additional locales in the future, this may need to change.
          nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
          break;

        case 'deleteContentBackward':
          nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
          break;

        case 'deleteSoftLineBackward':
        case 'deleteHardLineBackward':
          nextValue = input.value.slice(input.selectionStart);
          break;

        default:
          if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
          break;
      } // If we did not compute a value, or the new value is invalid, prevent the event
      // so that the browser does not update the input text, move the selection, or add to
      // the undo/redo stack.


      if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    };

    input.addEventListener('beforeinput', onBeforeInput, false);
    return () => {
      input.removeEventListener('beforeinput', onBeforeInput, false);
    };
  }, [inputRef, stateRef]);
  let onBeforeInput1 = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? e => {
    let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
    if (!state1.validate(nextValue)) e.preventDefault();
  } : null;

  let _$2d73ec29415bd339$ex = $2d73ec29415bd339$export$712718f7aec83d5(props, inputRef),
      labelProps = _$2d73ec29415bd339$ex.labelProps,
      textFieldProps = _$2d73ec29415bd339$ex.inputProps,
      descriptionProps = _$2d73ec29415bd339$ex.descriptionProps,
      errorMessageProps = _$2d73ec29415bd339$ex.errorMessageProps;

  let compositionStartState = useRef(null);
  return {
    inputProps: mergeProps(textFieldProps, {
      onBeforeInput: onBeforeInput1,

      onCompositionStart() {
        // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
        // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
        // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
        // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
        // nor would we want to cancel them because the input from the user is incomplete at that point.
        // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
        // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
        // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
        // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
        // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
        // are implemented, there is no other way to prevent composed input.
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
        let _inputRef$current = inputRef.current,
            value = _inputRef$current.value,
            selectionStart = _inputRef$current.selectionStart,
            selectionEnd = _inputRef$current.selectionEnd;
        compositionStartState.current = {
          value: value,
          selectionStart: selectionStart,
          selectionEnd: selectionEnd
        };
      },

      onCompositionEnd() {
        if (!state1.validate(inputRef.current.value)) {
          // Restore the input value in the DOM immediately so we can synchronously update the selection position.
          // But also update the value in React state as well so it is correct for future updates.
          let _compositionStartStat = compositionStartState.current,
              value = _compositionStartStat.value,
              selectionStart = _compositionStartStat.selectionStart,
              selectionEnd = _compositionStartStat.selectionEnd;
          inputRef.current.value = value;
          inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          state1.setInputValue(value);
        }
      }

    }),
    labelProps: labelProps,
    descriptionProps: descriptionProps,
    errorMessageProps: errorMessageProps
  };
}

const TextArea = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const className = props.className,
        _props$helperTextProp6 = props.helperTextProps,
        helperTextProps = _props$helperTextProp6 === void 0 ? {} : _props$helperTextProp6,
        _props$inputProps2 = props.inputProps,
        inputPropsProp = _props$inputProps2 === void 0 ? {} : _props$inputProps2,
        inputRef = props.inputRef,
        _props$labelProps6 = props.labelProps,
        labelPropsProp = _props$labelProps6 === void 0 ? {} : _props$labelProps6,
        onChange = props.onChange,
        other = _objectWithoutProperties(props, _excluded37);

  const areaRef = React.useRef(null);

  const _useControlledState9 = useControlledState(props.value, props.defaultValue, () => {//noop
  }),
        _useControlledState10 = _slicedToArray(_useControlledState9, 2),
        inputValue = _useControlledState10[0],
        setInputValue = _useControlledState10[1];

  const handleHeightChange = React.useCallback(() => {
    const input = areaRef.current;
    const prevAlignment = input.style.alignSelf;
    input.style.alignSelf = 'start';
    input.style.height = 'auto';
    input.style.height = `${input.scrollHeight}px`;
    input.style.alignSelf = prevAlignment;
  }, [areaRef]);

  const _$2d73ec29415bd339$ex2 = $2d73ec29415bd339$export$712718f7aec83d5(_objectSpread(_objectSpread({}, props), {}, {
    inputElementType: 'textarea',
    onChange: chain(onChange, setInputValue)
  }), areaRef),
        inputProps = _$2d73ec29415bd339$ex2.inputProps,
        descriptionProps = _$2d73ec29415bd339$ex2.descriptionProps,
        errorMessageProps = _$2d73ec29415bd339$ex2.errorMessageProps,
        labelProps = _$2d73ec29415bd339$ex2.labelProps;

  useLayoutEffect(() => {
    if (areaRef.current) {
      handleHeightChange();
    }
  }, [handleHeightChange, inputValue, areaRef]);
  return /*#__PURE__*/React.createElement(TextFieldBase, _extends({}, other, {
    className: cx(className, 'manifest-textarea'),
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextProps),
    inputProps: mergeProps(inputProps, inputPropsProp),
    inputRef: mergeRefs(areaRef, inputRef),
    labelProps: mergeProps(labelProps, labelPropsProp),
    multiline: true,
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TextArea.displayName = 'ManifestTextArea';
}

const useStyles$1 = css({
  variants: {
    size: {
      medium: {
        '.manifest-textfield-base__icon': {
          fontSize: '$x-large',
          '> .material-icons': {
            fontSize: '$x-large'
          }
        },
        '.manifest-textfield-base__input': {
          py: pxToRem(9)
        }
      },
      small: {
        '.manifest-textfield-base__icon': {
          fontSize: pxToRem(18),
          '> .material-icons': {
            fontSize: pxToRem(18)
          }
        },
        '.manifest-textfield-base__input': {
          py: pxToRem(6)
        }
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
});
const TextField = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const classNameProp = props.className,
        _props$helperTextProp7 = props.helperTextProps,
        helperTextProps = _props$helperTextProp7 === void 0 ? {} : _props$helperTextProp7,
        _props$inputProps3 = props.inputProps,
        inputPropsProp = _props$inputProps3 === void 0 ? {} : _props$inputProps3,
        inputRef = props.inputRef,
        _props$labelProps7 = props.labelProps,
        labelPropsProp = _props$labelProps7 === void 0 ? {} : _props$labelProps7,
        _props$size6 = props.size,
        size = _props$size6 === void 0 ? 'medium' : _props$size6,
        other = _objectWithoutProperties(props, _excluded38);

  const fieldRef = React.useRef(null);

  const _$2d73ec29415bd339$ex3 = $2d73ec29415bd339$export$712718f7aec83d5(props, fieldRef),
        inputProps = _$2d73ec29415bd339$ex3.inputProps,
        descriptionProps = _$2d73ec29415bd339$ex3.descriptionProps,
        errorMessageProps = _$2d73ec29415bd339$ex3.errorMessageProps,
        labelProps = _$2d73ec29415bd339$ex3.labelProps;

  const _useStyles$9 = useStyles$1({
    size
  }),
        className = _useStyles$9.className;

  const classes = cx(className, classNameProp, {
    'manifest-textfield': true,
    [`manifest-textfield--${size}`]: size
  });
  return /*#__PURE__*/React.createElement(TextFieldBase, _extends({}, other, {
    className: classes,
    helperTextProps: mergeProps(descriptionProps, errorMessageProps, helperTextProps),
    inputProps: mergeProps(inputProps, inputPropsProp),
    inputRef: mergeRefs(fieldRef, inputRef),
    labelProps: mergeProps(labelProps, labelPropsProp),
    ref: forwardedRef
  }));
});

if (process.env.NODE_ENV !== "production") {
  TextField.displayName = 'ManifestTextField';
}

const useStyles = css({
  backgroundColor: '$palette-grey-700',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$palette-white',
  overflow: 'hidden',
  padding: '$x-small $small',
  position: 'relative'
});
const Tooltip = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const children = props.children,
        classNameProp = props.className,
        css = props.css,
        isDisabled = props.isDisabled,
        _props$placement3 = props.placement,
        placement = _props$placement3 === void 0 ? 'top' : _props$placement3,
        title = props.title,
        other = _objectWithoutProperties(props, _excluded39);

  const _React$Children$toArr3 = React.Children.toArray(children),
        _React$Children$toArr4 = _slicedToArray(_React$Children$toArr3, 1),
        trigger = _React$Children$toArr4[0];

  const overlayRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const state = useTooltipTriggerState(_objectSpread(_objectSpread({}, props), {}, {
    delay: 1000
  }));

  const _useTooltipTrigger2 = useTooltipTrigger({
    isDisabled
  }, state, triggerRef),
        triggerProps = _useTooltipTrigger2.triggerProps,
        contentProps = _useTooltipTrigger2.tooltipProps;

  const _useOverlayPosition3 = useOverlayPosition({
    isOpen: state.isOpen,
    offset: 4,
    overlayRef,
    placement,
    targetRef: triggerRef
  }),
        positionProps = _useOverlayPosition3.overlayProps;

  const _useTooltip2 = useTooltip({
    isOpen: state.isOpen
  }, state),
        tooltipProps = _useTooltip2.tooltipProps;

  const _useStyles = useStyles({
    css
  }),
        className = _useStyles.className;

  return /*#__PURE__*/React.createElement(FocusableProvider, _extends({}, triggerProps, {
    ref: triggerRef
  }), trigger, state.isOpen && /*#__PURE__*/React.createElement(OverlayContainer, null, /*#__PURE__*/React.createElement("div", _extends({}, mergeProps(tooltipProps, positionProps, contentProps, other), {
    className: cx(className, classNameProp, 'manifest-tooltip'),
    ref: mergeRefs(overlayRef, forwardedRef)
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, title))));
});

if (process.env.NODE_ENV !== "production") {
  Tooltip.displayName = 'ManifestTooltip';
}

export { Avatar, Box, Button, ButtonGroup, ButtonGroupContext, Calendar, CalendarRange, Card, CardBody, CardFooter, CardHeader, Checkbox, Combobox, CssBaseline, DatePicker, DateRangePicker, Dropdown, DropdownContext, DropdownItem$1 as DropdownItem, DropdownMenu, DropdownSection$1 as DropdownSection, Flex, FormControl, Icon, IconButton, Link, ListBox, ListBoxItem, ListBoxSection, Pagination, Pill, Popover, PopoverContext, Portal, Provider, Radio, RadioGroup, RadioGroupContext, Select, Separator, Switch, Table, TableBody, TableCell, TableColumn, TableContext, TableFooter, TableHeader, TableRow, Tag, TextArea, TextField, Tooltip, Typography, config, css, focus, focusWithin, getCssText, globalCss, keyframes, styled, theme, useButtonGroup, useDropdownContext, usePopoverContext, useRadioGroupContext, useTableContext };
//# sourceMappingURL=index.js.map
