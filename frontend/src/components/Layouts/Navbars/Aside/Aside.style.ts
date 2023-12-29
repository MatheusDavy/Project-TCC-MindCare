import Link from 'next/link';
import { styled, css } from 'styled-components';

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    /* opacity: 0.3; */
    height: 100%;
    float: right;
    background-color: #21222d;
    background-image: linear-gradient(196deg, #616482 0%, #21222d 20%, #21222d 100%);
`;
export const AsideContainer = styled.div`
    max-width: 1280px;
    width: 75%;
    padding: 5vh 0px;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
`;

// Profile
export const ProfileWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    aspect-ratio: 1.05;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
`;
export const ProfileName = styled.p`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: 26px;
        color: ${theme.colors.defaultText2};
    `}
`;

// Mood Calendar
export const MoodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;
export const MoodTitle = styled.div`
    ${({ theme }) => css`
        font-weight: 500;
        text-align: center;
        font-size: 16px;
        color: ${theme.colors.defaultText2};
    `}
`;
export const MoodContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
export const MoodButton = styled.button`
    width: auto;
    height: auto;
    padding: 0;
    font-size: 30px;
    border-radius: 50%;
    filter: grayscale(1);

    &:hover,
    &.active {
        filter: grayscale(0);
        transform: translateY(-2px);
    }
`;

// Links
export const LinksWrapper = styled(MoodWrapper)`
    justify-content: end;
    flex-grow: 2;
    gap: 20px;
`;

export const LinkCard = styled(Link)`
    ${({ theme }) => css`
        font-weight: 400;
        text-align: start;
        font-size: 14px;
        color: ${theme.colors.defaultText2};

        display: grid;
        grid-template-columns: auto 1fr;
        gap: 15px;
        align-items: center;
    `}
`;
