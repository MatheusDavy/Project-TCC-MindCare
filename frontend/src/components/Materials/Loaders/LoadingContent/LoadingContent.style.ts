import { styled } from 'styled-components';
import Image from 'next/image';

export const LoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 100000;
`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid rgb(64, 123, 255);
    animation: prixClipFix 2s linear infinite;
  }
  &::after {
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: rgba(64, 123, 255, 0.2);
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;

export const ImageBrain = styled(Image)`
  object-fit: contain;
`;
