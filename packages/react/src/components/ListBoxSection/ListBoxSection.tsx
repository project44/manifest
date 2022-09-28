import type { Node } from '@react-types/shared';
import type { SectionProps } from '@react-types/shared';
import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { ListBoxContext, useListBoxContext } from '../ListBoxContext';
import { cx } from '../../styles';
import { _ListBoxItem } from '../ListBoxItem';
import { Separator } from '../Separator';
import { Typography } from '../Typography';
import { useListBoxSection } from '@react-aria/listbox';
import { useStyles } from './ListBoxSection.styles';

export type ListBoxSectionElement = 'div';

export interface ListBoxSectionOptions<T extends As = ListBoxSectionElement>
	extends Options<T>,
		StyleProps {
	/**
	 * Item object in the collection.
	 */
	item: Node<object>;
}

export type ListBoxSectionProps<T extends As = ListBoxSectionElement> = SectionProps<object> &
	Omit<Props<ListBoxSectionOptions<T>>, 'item'>;

/** @private */
export const ListBoxSection = createComponent<ListBoxSectionOptions>((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, css, item } = props;

	const { state } = useListBoxContext() as ListBoxContext;

	const { itemProps, headingProps, groupProps } = useListBoxSection({
		'aria-label': item['aria-label'],
		heading: item.rendered,
	});

	const showSeparator = item.key !== state.collection.getFirstKey();

	const { className } = useStyles({ css });

	return (
		<>
			{showSeparator && <Separator className="manifest-listbox-separator" />}
			<Comp
				{...itemProps}
				className={cx(className, classNameProp, 'manifest-listbox-section')}
				ref={forwardedRef}
			>
				{item.rendered && (
					<Typography
						{...headingProps}
						className="manifest-listbox-section__label"
						variant="caption"
					>
						{item.rendered}
					</Typography>
				)}
				<div {...groupProps} className="manifest-listbox-section__group">
					{[...item.childNodes].map((node) => (
						<_ListBoxItem key={node.key} item={node} />
					))}
				</div>
			</Comp>
		</>
	);
});
