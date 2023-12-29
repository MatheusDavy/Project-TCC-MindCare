import { styled, css } from 'styled-components';

export const Group = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
  padding: 50px 50px;
  border-radius: 20px;
  min-height: auto;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 56px;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    color: ${theme.colors.defaultText};
  `}
`;
export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    color: ${theme.colors.defaultText};
  `}
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
export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.blue600};
    margin: 0px 0px 5px 10px;
  `}
`;
export const ButtonSubmit = styled.button`
  background-color: #407bff;
  color: white;
  border-radius: 300px;
  padding: 15px 50px;
  width: fit-content;
  height: fit-content;
  border: 0;
  cursor: pointer;
  margin: 0 auto;
  transition: 0.4s;
  position: relative;
  margin-top: 30px;

  &:disabled {
    transition: 0;
    background-color: gray;

    &:hover {
      box-shadow: 0 0 0 0;
      transform: translateY(0px);
    }
  }
`;

// Or
export const Separator = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
  margin: 30px 0px 5px;

  &::before,
  &::after {
    content: "";
    position: relative;
    width: 100%;
    height: 1px;
    background-color: gray;
  }
`;

// Have Already Account
export const HaveAccount = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.defaultText};
    text-align: center;
    
    a{
      color: ${theme.colors.blue600};
    }
  `}
`;
