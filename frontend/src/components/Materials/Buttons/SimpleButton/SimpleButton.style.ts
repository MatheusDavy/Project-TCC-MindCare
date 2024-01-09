import { styled, css } from 'styled-components';

// Types / Interfaces
type ButtonProps = {
    $buttonColor?: string;
    $textColor?: string;
    type?: 'submit' | 'button';
    className?: string;
    disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
    ${({ $buttonColor, $textColor }) => css`
        background-color: ${$buttonColor};
        color: ${$textColor};
        border-radius: 300px;
        padding: 15px 50px;
        width: fit-content;
        height: fit-content;
        border: 0;
        cursor: pointer;
        transition: all 0s !important;
        position: relative;
    `}
`;
export const Loader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;

    .loader {
        max-width: 30px;
        max-height: 30px;
        height: 50%;
        aspect-ratio: 1;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
