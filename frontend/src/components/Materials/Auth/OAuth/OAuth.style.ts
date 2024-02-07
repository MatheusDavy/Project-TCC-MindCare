import tw from 'tailwind-styled-components';

export const LoginWrapper = tw.div`
  mt-3
  space-y-3
`;
export const LoginButton = tw.button`
  relative
  inline-flex
  items-center
  justify-center
  w-full
  px-4
  py-4
  
  text-base
  font-semibold
  text-gray-700
  hover:text-black
  focus:text-black
  focus:outline-none

  transition-all
  duration-200
  bg-white
  hover:bg-gray-100
  focus:bg-gray-100

  border-2
  border-gray-200
  rounded-md
`;
export const LoginIcon = tw.div`
  absolute
  top-[50%] translate-y-[-50%]
  left-5
`;
