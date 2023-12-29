import { Dialog } from '@mui/material';
import { css, styled } from 'styled-components';
// MATERIAL
interface Props {
  $type: 'error' | 'success';
}

export const ContainerDialog = styled(Dialog)`
  & .MuiPaper-root{
      min-width: 400px !important;
      overflow: hidden;
      border-radius: 10px;
  }
`;

export const Icon = styled.div<Props>`
  ${({ $type }) => css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${$type === 'error' ? '#f3525b' : '#3cb878'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 auto;

    svg {
      width: 40px;
      height: 40px;
    }
  `}
`;

export const Title = styled.p<Props>`
  ${({ $type }) => css`
    font-size: 25px;
    color: ${$type === 'error' ? '#f3525b' : '#3cb878'};
    font-weight: 600;
    text-align: center;
    margin-top: 15px;
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    margin-top: 30px;
    
  `}
`;

export const CloseButton = styled.button<Props>`
  ${({ $type }) => css`
    font-size: 16px;
    background-color: ${$type === 'error' ? '#f3525b' : '#3cb878'};
    font-weight: 600;
    color: white;
    border: 0;
    text-align: center;
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    cursor: pointer;
  `}
`;
