import { styled, css } from 'styled-components';

export const LoginWrapper = styled.div`
  display: grid;
  gap: 10px;
`;
export const LoginWrapperButton = styled.button`
  width: 100%;
  height: auto;
  border-radius: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 60px;
  padding-inline: 10%;
  border: 1px solid rgba(102, 102, 102, 0.8);

  span {
    ${({ theme }) => css`
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
      text-align: start;
      color: ${theme.colors.textOne};
    `}
  }
`;
