import { MenuItem, Select } from '@mui/material';
import { styled, css } from 'styled-components';

export const SelectWrapper = styled(Select)`
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 2px 20px -1px rgba(0, 0, 0, 0.1) !important;
    border: 0 !important;

    .MuiSelect-select,
    fieldset {
        border: 0 !important;
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
