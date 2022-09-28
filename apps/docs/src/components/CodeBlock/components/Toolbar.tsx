import * as React from 'react';
import { Icon, IconButton, Stack, Tooltip } from '@project44-manifest/react';
import CopyButton from '../../CopyButton';

interface ToolbarProps {
	code: string;
	isExpanded?: boolean;
	onExpandedChange?(event: React.MouseEvent): void;
}

function Toolbar(props: ToolbarProps) {
	const { code, isExpanded, onExpandedChange } = props;

	return (
		<Stack css={{ justifyContent: 'flex-end', my: '$small' }} gap="small" orientation="horizontal">
			<Tooltip title={isExpanded ? 'Hide Code' : 'Show Code'}>
				<IconButton onClick={onExpandedChange} size="small" variant="tertiary">
					<Icon icon={isExpanded ? 'unfold_less' : 'unfold_more'} />
				</IconButton>
			</Tooltip>
			<CopyButton code={code} />
		</Stack>
	);
}

export default Toolbar;
