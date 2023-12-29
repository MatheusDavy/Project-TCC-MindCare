import { TextField } from '@mui/material';
import { styled } from 'styled-components';

export const InputText = styled(TextField)`
    background-color: white;
    border-radius: 15px !important;
    overflow: hidden;
    
    fieldset{
        border: 1px solid rgba(102, 102, 102, 0.8) !important;
        border-radius: 15px;
    }
`;
