export type MergeableRef<T> = React.Ref<T> | undefined;

export function mergeRefs<T>(...refs: MergeableRef<T>[]) {
  return (value: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
