/**
 * A set of global html attributes supported by react.
 */
export const HTML_ATTRIBUTES = new Set([
  // aria attributes
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-details',
  'aria-disabled',
  'aria-dropeffect',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-grabbed',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-modal',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',

  // event attributes
  'onCopy',
  'onCopyCapture',
  'onCut',
  'onCutCapture',
  'onPaste',
  'onPasteCapture',
  'onCompositionEnd',
  'onCompositionEndCapture',
  'onCompositionStart',
  'onCompositionStartCapture',
  'onCompositionUpdate',
  'onCompositionUpdateCapture',
  'onFocus',
  'onFocusCapture',
  'onBlur',
  'onBlurCapture',
  'onChange',
  'onChangeCapture',
  'onBeforeInput',
  'onBeforeInputCapture',
  'onInput',
  'onInputCapture',
  'onReset',
  'onResetCapture',
  'onSubmit',
  'onSubmitCapture',
  'onInvalid',
  'onInvalidCapture',
  'onLoad',
  'onLoadCapture',
  'onError',
  'onErrorCapture',
  'onKeyDown',
  'onKeyDownCapture',
  'onKeyUp',
  'onKeyUpCapture',
  'onAbort',
  'onAbortCapture',
  'onCanPlay',
  'onCanPlayCapture',
  'onCanPlayThrough',
  'onCanPlayThroughCapture',
  'onDurationChange',
  'onDurationChangeCapture',
  'onEmptied',
  'onEmptiedCapture',
  'onEncrypted',
  'onEncryptedCapture',
  'onEnded',
  'onEndedCapture',
  'onLoadedData',
  'onLoadedDataCapture',
  'onLoadedMetadata',
  'onLoadedMetadataCapture',
  'onLoadStart',
  'onLoadStartCapture',
  'onPause',
  'onPauseCapture',
  'onPlay',
  'onPlayCapture',
  'onPlaying',
  'onPlayingCapture',
  'onProgress',
  'onProgressCapture',
  'onRateChange',
  'onRateChangeCapture',
  'onSeeked',
  'onSeekedCapture',
  'onSeeking',
  'onSeekingCapture',
  'onStalled',
  'onStalledCapture',
  'onSuspend',
  'onSuspendCapture',
  'onTimeUpdate',
  'onTimeUpdateCapture',
  'onVolumeChange',
  'onVolumeChangeCapture',
  'onWaiting',
  'onWaitingCapture',
  'onAuxClick',
  'onAuxClickCapture',
  'onClick',
  'onClickCapture',
  'onContextMenu',
  'onContextMenuCapture',
  'onDoubleClick',
  'onDoubleClickCapture',
  'onDrag',
  'onDragCapture',
  'onDragEnd',
  'onDragEndCapture',
  'onDragEnter',
  'onDragEnterCapture',
  'onDragExit',
  'onDragExitCapture',
  'onDragLeave',
  'onDragLeaveCapture',
  'onDragOver',
  'onDragOverCapture',
  'onDragStart',
  'onDragStartCapture',
  'onDrop',
  'onDropCapture',
  'onMouseDown',
  'onMouseDownCapture',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseMoveCapture',
  'onMouseOut',
  'onMouseOutCapture',
  'onMouseOver',
  'onMouseOverCapture',
  'onMouseUp',
  'onMouseUpCapture',
  'onSelect',
  'onSelectCapture',
  'onTouchCancel',
  'onTouchCancelCapture',
  'onTouchEnd',
  'onTouchEndCapture',
  'onTouchMove',
  'onTouchMoveCapture',
  'onTouchStart',
  'onTouchStartCapture',
  'onPointerDown',
  'onPointerDownCapture',
  'onPointerMove',
  'onPointerMoveCapture',
  'onPointerUp',
  'onPointerUpCapture',
  'onPointerCancel',
  'onPointerCancelCapture',
  'onPointerEnter',
  'onPointerEnterCapture',
  'onPointerLeave',
  'onPointerLeaveCapture',
  'onPointerOver',
  'onPointerOverCapture',
  'onPointerOut',
  'onPointerOutCapture',
  'onGotPointerCapture',
  'onGotPointerCaptureCapture',
  'onLostPointerCapture',
  'onLostPointerCaptureCapture',
  'onScroll',
  'onScrollCapture',
  'onWheel',
  'onWheelCapture',
  'onAnimationStart',
  'onAnimationStartCapture',
  'onAnimationEnd',
  'onAnimationEndCapture',
  'onAnimationIteration',
  'onAnimationIterationCapture',
  'onTransitionEnd',
  'onTransitionEndCapture',

  // global attributes
  'accessKey',
  'children',
  'className',
  'contentEditable',
  'contextMenu',
  'dir',
  'draggable',
  'hidden',
  'id',
  'lang',
  'placeholder',
  'ref',
  'role',
  'slot',
  'spellCheck',
  'style',
  'tabIndex',
  'title',
  'translate',
]);

/**
 * A set of html attributes for anchor elements.
 */
export const ANCHOR_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'download',
  'href',
  'hrefLang',
  'media',
  'ping',
  'rel',
  'referrerPolicy',
  'target',
  'type',
]);

/**
 * A set of html attributes for button elements.
 */
export const BUTTON_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'autoFocus',
  'disabled',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'type',
  'value',
]);

/**
 * A set of html attributes for fieldset elements.
 */
export const FIELDSET_HTML_ATTRIBUTES = new Set([...HTML_ATTRIBUTES, 'disabled', 'form', 'name']);

/**
 * A set of html attributes for form elements.
 */
export const FORM_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'acceptCharset',
  'action',
  'autoComplete',
  'encType',
  'method',
  'name',
  'noValidate',
  'target',
]);

/**
 * A set of html attributes for iframe elements.
 */
export const IFRAME_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'allow',
  'allowFullScreen',
  'allowPaymentRequest',
  'allowTransparency',
  'height',
  'loading',
  'name',
  'referrerPolicy',
  'sandbox',
  'seamless',
  'src',
  'srcDoc',
  'width',
]);

/**
 * A set of html attributes for img elements.
 */
export const IMAGE_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'alt',
  'crossOrigin',
  'decoding',
  'height',
  'loading',
  'referrerPolicy',
  'sizes',
  'src',
  'srcSet',
  'useMap',
  'width',
]);

/**
 * A set of html attributes for input elements.
 */
export const INPUT_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'accept',
  'alt',
  'autoComplete',
  'autoFocus',
  'capture',
  'checked',
  'crossOrigin',
  'disabled',
  'enterKeyHint',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'list',
  'max',
  'maxLength',
  'min',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'src',
  'step',
  'size',
  'type',
  'value',
  'width',
]);

/**
 * A set of html attributes for label elements.
 */
export const LABEL_HTML_ATTRIBUTES = new Set([...HTML_ATTRIBUTES, 'form', 'htmlFor']);

/**
 * A set of html attributes for li elements.
 */
export const LI_HTML_ATTRIBUTES = new Set([...HTML_ATTRIBUTES, 'value']);

/**
 * A set of html attributes for ol elements.
 */
export const OL_HTML_ATTRIBUTES = new Set([...HTML_ATTRIBUTES, 'reversed', 'start', 'type']);

/**
 * A set of html attributes for option elements.
 */
export const OPTION_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'disabled',
  'label',
  'selected',
  'value',
]);

/**
 * A set of html attributes for select elements.
 */
export const SELECT_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'autoComplete',
  'autoFocus',
  'disabled',
  'form',
  'multiple',
  'name',
  'required',
  'value',
]);

/**
 * A set of html attributes for table elements.
 */
export const TABLE_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'cellPadding',
  'cellSpacing',
  'summary',
]);

/**
 * A set of html attributes for textarea elements.
 */
export const TEXTAREA_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'autoComplete',
  'autoFocus',
  'cols',
  'disabled',
  'form',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'value',
  'wrap',
]);

/**
 * A set of html attributes for td elements.
 */
export const TD_HTML_ATTRIBUTES = new Set([
  ...HTML_ATTRIBUTES,
  'colSpan',
  'headers',
  'rowSpan',
  'scope',
]);

/**
 * A set of html attributes for th elements.
 */
export const TH_HTML_ATTRIBUTES = new Set([...HTML_ATTRIBUTES, 'rowSpan', 'scope']);

/**
 * A set of html attributes for tr elements.
 */
export const TR_HTML_ATTRIBUTES = HTML_ATTRIBUTES;
