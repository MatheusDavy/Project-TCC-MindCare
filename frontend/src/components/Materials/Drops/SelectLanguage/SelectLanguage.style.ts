import { MenuItem, Select } from '@mui/material';
import { styled, css } from 'styled-components';

export const SelectWrapper = styled(Select)`
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    border: 1px solid rgb(229, 231, 235);
    z-index: 100;

    .MuiSelect-select,
    fieldset {
        border: 0 !important;
        padding: 10px 30px 10px 10px !important;
        min-height: fit-content;
    }
`;

export const SelectItem = styled(MenuItem)`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: auto 1fr auto;
        width: 100%;
        align-items: center;
        gap: 5px;

        /* Text */
        font-size: 14px;
        color: ${theme.colors.gray500};

        /* Check */
        svg.icon-check {
            color: ${theme.colors.green500};
        }
    `}
`;
