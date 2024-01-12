import { TextField } from '@mui/material';
import { css, styled } from 'styled-components';

export const InputText = styled(TextField)`
    background-color: white;
    border-radius: 15px !important;
    overflow: hidden;

    fieldset {
        border: 1px solid rgba(102, 102, 102, 0.8) !important;
        border-radius: 15px;
    }
`;

export const InputTextSettings = styled(TextField)`
    ${({ theme }) => css`
        background-color: transparent;
        border-radius: 0px !important;
        border: 0;
        overflow: hidden;
        padding: 0;
        color: ${theme.colors.textOne};

        input{
            padding: 0 !important;
            font-size: 18px;
            font-weight: 600 !important;
            line-height: 1;
            height: fit-content;
            color: ${theme.colors.textOne};
            padding-block: 0px !important;
            padding-inline: 0px !important;
            padding-bottom: 5px !important;
        }

        fieldset {
            border: 0 !important;
            border-bottom: 2px solid ${theme.colors.textOne} !important;
            border-radius: 0px;
        }
    `}
`;
