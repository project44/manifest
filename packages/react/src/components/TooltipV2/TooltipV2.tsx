import { Tooltip, TooltipProps } from '@mui/material';

export function TooltipV2(props: TooltipProps) {
  const { children, arrow, ...other } = props;

  const tooltipProps = {
    arrow: arrow === undefined ? true : arrow,
    ...other,
  };

  return (
    <Tooltip
      {...tooltipProps}
      PopperProps={{
        sx: {
          maxWidth: '192px',
        },
      }}
    >
      <div
        style={{
          display: 'inline-flex',
        }}
      >
        {children}
      </div>
    </Tooltip>
  );
}
