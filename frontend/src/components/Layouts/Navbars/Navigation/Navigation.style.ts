import Link from 'next/link';
import { css, styled } from 'styled-components';

export const Navigation = styled.div`
    ${({ theme }) => css`
        float: left;
        width: auto;
        padding: 10px;
        height: 100%;
        border-right: 1px solid ${theme.colors.background};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;
    `};
`;
export const Logo = styled(Link)`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;
export const LinksWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0;
    padding: 0;
`;
export const Links = styled(Link)`
    ${({ theme }) => css`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        text-decoration: none;
        color: ${theme.colors.textFour};
        transition: 0s;

        &.active {
            background-color: ${theme.colors.background};
            color: ${theme.colors.textTwo};
        }
    `}
`;
