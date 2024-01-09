import { SimpleButtonComp } from 'src/components/Materials/Buttons/SimpleButton/SimpleButton.comp';
import { styled, css } from 'styled-components';

export const Group = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

/* ------- Forms -------*/
export const Forms = styled.form`
    display: grid;
    gap: 10px;
    width: 70%;
    margin-inline: auto;
`;
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InputLabel = styled.label`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: 400;
        color: ${theme.colors.defaultText};
        margin: 0px 0px 5px 10px;
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
        padding: 15px 25px;

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
    padding: 15px 25px;

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
