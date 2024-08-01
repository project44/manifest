export const getPositionStyle = (position: string, offset: number): React.CSSProperties => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const styles: React.CSSProperties = {
    position: 'absolute',
    transition: 'all 200ms cubic-bezier(0.4, 0.14, 0.3, 1)',
  } as React.CSSProperties;

  switch (position) {
    case 'top-left':
      return {
        ...styles,
        top: 0,
        left: 0,
        transform: `translateY(${offset}px)`,
      };

    case 'top-center':
      return {
        ...styles,
        top: 0,
        left: '50%',
        transform: `translate(-50%,${offset}px)`,
      };
    case 'top-right':
      return {
        ...styles,
        top: 0,
        right: 0,
        transform: `translateY(${offset}px)`,
      };
    case 'bottom-left':
      return {
        ...styles,
        bottom: 0,
        left: 0,
        transform: `translateY(${-offset}px)`,
      };
    case 'bottom-center':
      return {
        ...styles,
        bottom: 0,
        left: '50%',
        transform: `translate(-50%, ${-offset}px)`,
      };
    case 'bottom-right':
      return {
        ...styles,
        bottom: 0,
        right: 0,
        transform: `translateY(${-offset}px)`,
      };
    default:
      return styles;
  }
};
