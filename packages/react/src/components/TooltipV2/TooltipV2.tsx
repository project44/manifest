import { Tooltip, TooltipProps } from "@mui/material";


export const TooltipV2 = (props : TooltipProps) => {
    const {
        children,
        ...other
    } = props

    const tooltipProps = {
        arrow: props.arrow === undefined ? true : props.arrow,
        ...other
    }


    return (
        <Tooltip {...tooltipProps} PopperProps={{
            sx : {
                maxWidth: "192px"
            }
        }}>
            <div style={{
                display: "inline-flex",
            }}>
                {children}
            </div>
        </Tooltip>
    )
}