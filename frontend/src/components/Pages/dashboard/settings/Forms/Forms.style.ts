import { FormHelperText } from '@mui/material';
import { SimpleButtonComp } from 'src/components/Materials/Buttons/SimpleButton/SimpleButton.comp';
import { styled, css } from 'styled-components';

export const Group = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 30px 30px 30px 100px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

/* ------- Forms Edit -------*/
export const Forms = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
`;
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
`;
export const InputLabel = styled.label`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: ${theme.colors.textThree};
    `}
`;
export const TextError = styled(FormHelperText)`
    position: absolute;
    bottom: 0;
    transform: translateY(calc(100% + 5px));
`;
export const Profile = styled.div``;

/* ------- Data View -------*/
export const DataViewWrapper = styled(Forms)``;
export const DataViewGroup = styled(FormWrapper)``;
export const DataViewLabel = styled.span`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: ${theme.colors.textThree};
    `}
`;
export const DataViewResponse = styled.p`
    ${({ theme }) => css`
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
        color: ${theme.colors.textOne};
    `}
`;


/* ------- Buttons -------*/
type ButtonEditProps = {
    $cancelButton: boolean;
};
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    gap: 15px;
`;
export const ButtonEdit = styled(SimpleButtonComp)<ButtonEditProps>`
    ${({ $cancelButton }) => css`
        color: white;
        background-color: ${$cancelButton ? '#ff6767' : 'gray'};
        padding: 10px 20px;

        span {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `}
`;
export const ButtonSubmit = styled(SimpleButtonComp)`
    color: white;
    background-color: #6ce4b4;
    padding: 10px 20px;

    span {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &:disabled {
        transition: 0;
        pointer-events: none;

        &:hover {
            box-shadow: 0 0 0 0;
            transform: translateY(0px);
        }
    }
`;

/* ------- Profile View ---------*/
export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
