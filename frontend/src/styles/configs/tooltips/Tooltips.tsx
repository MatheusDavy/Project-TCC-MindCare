import { Tooltip, styled, TooltipProps } from '@mui/material/';

export const Tooltips = styled((props: TooltipProps) => (
    <Tooltip classes={{ popper: props.className }} {...props} />
))`
    & .MuiTooltip-tooltip {
        background: white;
        color: black;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    }
    & .MuiTooltip-arrow{
        color: white;
    }
`;
