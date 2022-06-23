import { chainCallbacks } from './chainCallbacks';
import { cx } from '../styles';

export function mergeProps<T extends Record<string, any>[]>(...args: T) {
  return args.reduce((mergedProps, props) => {
    const result = { ...mergedProps };

    for (const propName in props) {
      const mergedValue = result[propName];
      const propValue = props[propName];

      // Merge classNames
      if (
        propName === 'className' &&
        typeof mergedValue === 'string' &&
        typeof propValue === 'string'
      ) {
        result[propName] = cx(mergedValue, propValue);

        // Merge styles
      } else if (propName === 'style') {
        result[propName] = { ...mergedValue, ...propValue };

        // Merge event handlers that start with `on`
      } else if (
        typeof mergedValue === 'function' &&
        typeof propValue === 'function' &&
        /^on[A-Z]/.test(propName)
      ) {
        result[propName] = chainCallbacks(mergedValue, propValue);
      } else {
        result[propName] = propValue ?? mergedValue;
      }
    }

    return result;
  }, {});
}
