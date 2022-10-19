import type { Props } from './types';

const attributes = new Set([
	'accessKey',
	'alt',
	'autoCapitalize',
	'autoCorrect',
	'autoFocus',
	'autoSave',
	'cellPadding',
	'cellSpacing',
	'checked',
	'children',
	'className',
	'cols',
	'colSpan',
	'contentEditable',
	'crossOrigin',
	'dir',
	'disabled',
	'download',
	'draggable',
	'form',
	'formAction',
	'formEncType',
	'formMethod',
	'formNoValidate',
	'formTarget',
	'headers',
	'height',
	'hidden',
	'href',
	'hrefLang',
	'htmlFor',
	'id',
	'itemID',
	'itemProp',
	'itemRef',
	'itemScope',
	'itemType',
	'lang',
	'list',
	'loop',
	'max',
	'maxLength',
	'media',
	'method',
	'min',
	'minLength',
	'multiple',
	'muted',
	'name',
	'noValidate',
	'open',
	'pattern',
	'placeholder',
	'poster',
	'preload',
	'readOnly',
	'rel',
	'required',
	'role',
	'rows',
	'rowSpan',
	'sandbox',
	'scope',
	'selected',
	'size',
	'slot',
	'spellCheck',
	'src',
	'srcDoc',
	'srcSet',
	'start',
	'step',
	'style',
	'tabIndex',
	'target',
	'title',
	'translate',
	'type',
	'useMap',
	'value',
	'width',
	'wrap',
]);

const events = new Set([
	'onAbort',
	'onAbortCapture',
	'onAnimationEnd',
	'onAnimationEndCapture',
	'onAnimationIteration',
	'onAnimationIterationCapture',
	'onAnimationStart',
	'onAnimationStartCapture',
	'onAuxClick',
	'onAuxClickCapture',
	'onBeforeInput',
	'onBeforeInputCapture',
	'onBlur',
	'onBlurCapture',
	'onCanPlay',
	'onCanPlayCapture',
	'onCanPlayThrough',
	'onCanPlayThroughCapture',
	'onChange',
	'onChangeCapture',
	'onClick',
	'onClickCapture',
	'onCompositionEnd',
	'onCompositionEndCapture',
	'onCompositionStart',
	'onCompositionStartCapture',
	'onCompositionUpdate',
	'onCompositionUpdateCapture',
	'onContextMenu',
	'onContextMenuCapture',
	'onCopy',
	'onCopyCapture',
	'onCut',
	'onCutCapture',
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
	'onDurationChange',
	'onDurationChangeCapture',
	'onEmptied',
	'onEmptiedCapture',
	'onEncrypted',
	'onEncryptedCapture',
	'onEnded',
	'onEndedCapture',
	'onError',
	'onErrorCapture',
	'onFocus',
	'onFocusCapture',
	'onGotPointerCapture',
	'onGotPointerCaptureCapture',
	'onInput',
	'onInputCapture',
	'onInvalid',
	'onInvalidCapture',
	'onKeyDown',
	'onKeyDownCapture',
	'onKeyUp',
	'onKeyUpCapture',
	'onLoad',
	'onLoadCapture',
	'onLoadedData',
	'onLoadedDataCapture',
	'onLoadedMetadata',
	'onLoadedMetadataCapture',
	'onLoadStart',
	'onLoadStartCapture',
	'onLostPointerCapture',
	'onLostPointerCaptureCapture',
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
	'onPaste',
	'onPasteCapture',
	'onPause',
	'onPauseCapture',
	'onPlay',
	'onPlayCapture',
	'onPlaying',
	'onPlayingCapture',
	'onPointerCancel',
	'onPointerCancelCapture',
	'onPointerDown',
	'onPointerDownCapture',
	'onPointerEnter',
	'onPointerEnterCapture',
	'onPointerLeave',
	'onPointerLeaveCapture',
	'onPointerMove',
	'onPointerMoveCapture',
	'onPointerOut',
	'onPointerOutCapture',
	'onPointerOver',
	'onPointerOverCapture',
	'onPointerUp',
	'onPointerUpCapture',
	'onProgress',
	'onProgressCapture',
	'onRateChange',
	'onRateChangeCapture',
	'onReset',
	'onResetCapture',
	'onScroll',
	'onScrollCapture',
	'onSeeked',
	'onSeekedCapture',
	'onSeeking',
	'onSeekingCapture',
	'onSelect',
	'onSelectCapture',
	'onStalled',
	'onStalledCapture',
	'onSubmit',
	'onSubmitCapture',
	'onSuspend',
	'onSuspendCapture',
	'onTimeUpdate',
	'onTimeUpdateCapture',
	'onTouchCancel',
	'onTouchCancelCapture',
	'onTouchEnd',
	'onTouchEndCapture',
	'onTouchMove',
	'onTouchMoveCapture',
	'onTouchStart',
	'onTouchStartCapture',
	'onTransitionEnd',
	'onTransitionEndCapture',
	'onVolumeChange',
	'onVolumeChangeCapture',
	'onWaiting',
	'onWaitingCapture',
	'onWheel',
	'onWheelCapture',
]);

const domProps = new Set([...attributes, ...events]);
const ariaRegex = /^(aria-.*)$/;
const dataRegex = /^(data-.*)$/;

export function filterDOMProps<T extends Props>(props: Props, allowedProps?: Set<string>) {
	const result: Props = {};

	for (const prop in props) {
		if (Object.prototype.hasOwnProperty.call(props, prop)) {
			const isAllowed =
				domProps.has(prop) ||
				ariaRegex.test(prop) ||
				dataRegex.test(prop) ||
				allowedProps?.has(prop);

			if (isAllowed) {
				result[prop] = props[prop];
			}
		}
	}

	return result as T;
}
