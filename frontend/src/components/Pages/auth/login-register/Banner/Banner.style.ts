import tw from 'tailwind-styled-components';

/* ----------- CONTAINER ------------- */
type ImageWrapperProps = {
    $view: 'register' | 'login';
};
export const ImageWrapper = tw.div<ImageWrapperProps>`
  flex
  items-end
  md:justify-center

  pt-40
  lg:pt-60
  pb-10
  lg:pb-24
  sm:pb-16
  px-4
  lg:px-8
  sm:px-6

  bg-gray-50

  fixed
  right-0
  w-[50%]
  ${({ $view }) => $view == 'register' ? 'translate-x-[-100%]' : 'translate-x-0'}
  h-full
  top-0
  z-20

  transition-all
  duration-1000

  sm:block hidden
`;
