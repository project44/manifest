import { mergeProps } from '../src';

describe('@project44-manifest/react-utils - mergeProps', () => {
	it('should merge props', () => {
		const role = 'test';
		const id = 'test_id';

		const props = mergeProps<
			{ id?: string | undefined; role?: string; tabIndex: number | undefined }[]
		>({ role, tabIndex: -1 }, { id, tabIndex: undefined });

		expect(props.id).toBe(id);
		expect(props.role).toBe(role);
		expect(props.tabIndex).toBe(-1);
	});

	it('should merge classNames', () => {
		const props = mergeProps({ className: 'test' }, { className: 'test-2' });

		expect(props.className).toBe('test test-2');
	});

	it('should merge styles', () => {
		const props = mergeProps({ style: { backgroundColor: 'grey' } }, { style: { color: 'white' } });

		expect(props.style).toEqual({ backgroundColor: 'grey', color: 'white' });
	});

	it('should merge callbacks', () => {
		const callbackSpy = jest.fn();
		const message1 = 'click1';
		const message2 = 'click2';

		const props = mergeProps(
			{
				onClick: () => callbackSpy(message1),
			},
			{
				onClick: () => callbackSpy(message2),
			},
		);

		props.onClick();

		expect(callbackSpy).toHaveBeenNthCalledWith(1, message1);
		expect(callbackSpy).toHaveBeenNthCalledWith(2, message2);
		expect(callbackSpy).toHaveBeenCalledTimes(2);
	});
});
