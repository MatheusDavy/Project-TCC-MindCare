import { SimpleButtonComp } from 'src/components/Materials/Buttons/SimpleButton/SimpleButton.comp';
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
    color: ${theme.colors.textOne};
  `}
`;
export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: ${theme.colors.textOne};
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
    color: ${theme.colors.textOne};
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
export const ButtonSubmit = styled(SimpleButtonComp)`
  background-color: #407bff;
  color: white;
  margin: 30px auto 0;
  
  &:disabled {
    transition: 0;
    background-color: gray;
    pointer-events:none;

    &:hover {
      box-shadow: 0 0 0 0;
      transform: translateY(0px);
    }
  }
`;

/* -------- OAuth Login --------*/
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


// Have Already Account
export const BackToLogin = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.textOne};
    text-align: center;
    
    a{
      color: ${theme.colors.blue600};
    }
  `}
`;
