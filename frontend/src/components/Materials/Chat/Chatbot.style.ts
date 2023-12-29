import { styled, css } from 'styled-components';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

export const BtnOpenChatbot = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: url(/images/chatbot/chatbot-avatar.jpeg);
  background-size: cover;
  background-position: center;
`;
