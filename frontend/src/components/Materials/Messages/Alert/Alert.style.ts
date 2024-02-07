import tw from 'tailwind-styled-components';

type NotificationProps = {
  $open: boolean
};

export const Notification = tw.div<NotificationProps>`
  fixed
  top-[30px]
  right-[30px]
  ${({ $open }) => $open ? 'translate-x-0' : 'translate-x-[130%]'}
  p-5
  rounded-sm
  shadow-xl

  lg:w-fit
  max-w-[90vw]
  bg-white
  rounded-md

  transition-all
  duration-600
`;
export const Wrapper = tw.div`
  flex
  space-x-4
  pr-10
`;
