import type { SidebarItem } from '../types';

export const sidebar: SidebarItem[] = [
	{
		collapsible: true,
		slug: '/docs/getting-started',
		title: 'Getting Started',
		items: [
			{ title: 'Contributing', slug: '/docs/getting-started/contributing' },
			{ title: 'Designers', slug: '/docs/getting-started/designers' },
			{ title: 'Developers', slug: '/docs/getting-started/developers' },
		],
	},
	{
		collapsible: true,
		slug: '/docs/tokens',
		title: 'Tokens',
		items: [
			{ title: 'Colors', slug: '/docs/tokens/colors' },
			{ title: 'Radius', slug: '/docs/tokens/radius' },
			{ title: 'Shadows', slug: '/docs/tokens/shadows' },
			{ title: 'Spacing', slug: '/docs/tokens/spacing' },
			{ title: 'Typography', slug: '/docs/tokens/typography' },
		],
	},
	{
		collapsible: true,
		slug: '/docs/components',
		title: 'Components',
		items: [
			{ title: 'Avatar', slug: '/docs/components/avatar' },
			{ title: 'Box', slug: '/docs/components/box' },
			{ title: 'Button', slug: '/docs/components/button' },
			{ title: 'Button Group', slug: '/docs/components/button-group' },
			{ title: 'Card', slug: '/docs/components/card' },
			{ title: 'Checkbox', slug: '/docs/components/checkbox' },
			{ title: 'Combobox', slug: '/docs/components/combobox' },
			{ title: 'Container', slug: '/docs/components/container' },
			{ title: 'Date Picker', slug: '/docs/components/date-picker' },
			{ title: 'Date Range Picker', slug: '/docs/components/date-range-picker' },
			{ title: 'Dropdown', slug: '/docs/components/dropdown' },
			{ title: 'Flex', slug: '/docs/components/flex' },
			{ title: 'Form Control', slug: '/docs/components/form-control' },
			{ title: 'Grid', slug: '/docs/components/grid' },
			{ title: 'Icon', slug: '/docs/components/icon' },
			{ title: 'Icon Button', slug: '/docs/components/icon-button' },
			{ title: 'Link', slug: '/docs/components/link' },
			{ title: 'List Box', slug: '/docs/components/list-box' },
			{ title: 'Pagination', slug: '/docs/components/pagination' },
			{ title: 'Pill', slug: '/docs/components/pill' },
			{ title: 'Popover', slug: '/docs/components/popover' },
			{ title: 'Radio', slug: '/docs/components/radio' },
			{ title: 'Select', slug: '/docs/components/select' },
			{ title: 'Separator', slug: '/docs/components/separator' },
			{ title: 'Stack', slug: '/docs/components/stack' },
			{ title: 'Switch', slug: '/docs/components/switch' },
			{ title: 'Table', slug: '/docs/components/table' },
			{ title: 'Tag', slug: '/docs/components/tag' },
			{ title: 'Text Area', slug: '/docs/components/text-area' },
			{ title: 'Text Field', slug: '/docs/components/text-field' },
			{ title: 'Tooltip', slug: '/docs/components/tooltip' },
			{ title: 'Visually Hidden', slug: '/docs/components/visually-hidden' },
		],
	},
];

export default sidebar;
