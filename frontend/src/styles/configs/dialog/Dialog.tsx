import { Dialog, styled, DialogProps } from '@mui/material/';

export const DialogUI = styled((props: DialogProps) => (
    <Dialog {...props} />
))`
    & .MuiPaper-root{
        border-radius: 20px;
    }
`;

