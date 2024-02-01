import styled, { css } from 'styled-components';

export const ProfileName = styled.p`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: 26px;
        color: ${theme.colors.textTwo};
    `}
`;
