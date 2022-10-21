export type PointerType = 'keyboard' | 'mouse' | 'pen' | 'touch' | 'virtual';

/**
 * Press event from react-aria
 *
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-types/shared/src/events.d.ts
 */
export interface PressEvent {
	/** The type of press event being fired. */
	type: 'press' | 'pressend' | 'pressstart' | 'pressup';
	/** The pointer type that triggered the press event. */
	pointerType: PointerType;
	/** The target element of the press event. */
	target: Element;
	/** Whether the shift keyboard modifier was held during the press event. */
	shiftKey: boolean;
	/** Whether the ctrl keyboard modifier was held during the press event. */
	ctrlKey: boolean;
	/** Whether the meta keyboard modifier was held during the press event. */
	metaKey: boolean;
	/** Whether the alt keyboard modifier was held during the press event. */
	altKey: boolean;
}
