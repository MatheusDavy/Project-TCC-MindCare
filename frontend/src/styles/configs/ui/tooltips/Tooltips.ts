import { Tooltip } from '@mui/material';
import styled from '@emotion/styled';

export const Tooltips = styled(Tooltip)(() => ({
    '& .MuiTooltip-tooltip': {
        backgroundColor: 'white',
        color: 'lightgray',
        padding: '2px 3px',
        fontSize: '14px',
        fontWeight: 500
    },
    '& .MuiTooltip-arrow': {
        color: 'white',
    },
}));
