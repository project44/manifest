import * as React from 'react';
import { renderHook } from '@project44-manifest/test-utils';
import { makeStyles, ThemeProvider } from '../../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider>{children}</ThemeProvider>
);

describe('@project44-manifest/react-styles - makeStyles', () => {
	it('should support a style object', () => {
		interface Props {
			dense?: boolean;
		}

		const useStyles = makeStyles<Props>({
			root: { padding: '$medium' },
			child: { margin: '$medium' },
		});

		const { result } = renderHook(() => useStyles(), { wrapper });

		expect(result.current.classes.root).toContain('manifest-makeStyles-root');
		expect(result.current.classes.child).toBe('manifest-makeStyles-child');
	});

	it('should support styles as a function', () => {
		const useStyles = makeStyles((theme) => ({
			root: { padding: theme.space.large },
			child: { margin: '4px' },
		}));

		const { result } = renderHook(() => useStyles(), { wrapper });

		expect(result.current.classes.root).toContain('manifest-makeStyles-root');
		expect(result.current.classes.child).toBe('manifest-makeStyles-child');
	});

	it('should support passing props', () => {
		interface Props {
			dense?: boolean;
		}

		const useStyles = makeStyles<Props>((theme, props) => ({
			root: { padding: props.dense ? theme.space.medium : theme.space.large },
			child: { margin: '4px' },
		}));

		const { result } = renderHook(() => useStyles({ dense: true }), { wrapper });

		expect(result.current.classes.root).toContain('manifest-makeStyles-root');
		expect(result.current.classes.child).toBe('manifest-makeStyles-child');
	});

	it('should support human readable classnames', () => {
		const useStyles = makeStyles({
			root: { padding: '4px' },
			child: { margin: '4px' },
		});

		const { result } = renderHook(() => useStyles({}, { name: 'test' }), { wrapper });

		expect(result.current.classes.root).toContain('manifest-test-root');
		expect(result.current.classes.child).toBe('manifest-test-child');
	});

	it('should merge classes', () => {
		const useStyles = makeStyles({
			root: { padding: '4px' },
			child: { margin: '4px' },
		});

		const { result } = renderHook(
			() => useStyles({}, { classes: { root: 'root-test', child: 'child-test' } }),
			{ wrapper },
		);

		expect(result.current.classes.root).toContain('root-test');
		expect(result.current.classes.child).toContain('child-test');
	});

	it('should support css overrides', () => {
		const useStyles = makeStyles({
			root: { padding: '4px' },
			child: { margin: '4px' },
		});

		const { result } = renderHook(() => useStyles({}, { css: { padding: '4px' } }), { wrapper });

		expect(result.current.classes.root).toContain('-css');
	});
});
