import { styled } from 'styled-components';

/* -------- Select Profile Photo ---------*/
export const SelectProfileWrapper = styled.div`
    position: fixed;
    width: auto;
    max-width: 700px;
    height: fit-content;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 100;
    display: flex;
    flex-direction: column;
`;
export const SelectProfileOverlayer = styled.div`
    position: fixed;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    inset: 0;
`;
