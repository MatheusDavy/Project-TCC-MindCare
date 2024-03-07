import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  flex flex-col
  py-3 
  px-4
  gap-10
`;

export const Header = tw.div`
    flex align-center gap-5
`;

export const Description = tw.h3`
  text-xl text-center italic
  text-gray-800 
`;

export const ButtonWrapper = tw.div`
  flex 
  justify-center
  items-center 
  gap-x-2 
  py-3 
  px-4 
`;

export const ModalButton = tw.button`
  transition-all
  duration-[600]
  py-3 
  px-4 
  inline-flex 
  items-center 
  gap-x-2 
  text-md 
  font-medium 
  rounded-lg 
  border 
`;

export const ButtonConfirmation = tw(ModalButton)`
  border
  text-gray-800 
  hover:bg-gray-100 
`;

export const ButtonCancel = tw(ModalButton)`
  border-transparent 
  bg-red-400
  text-white 
  hover:bg-red-500
`;
