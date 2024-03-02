import tw from 'tailwind-styled-components';

type InputProps = {
    $error: boolean;
};

export const TwInput = tw.input<InputProps>`
  w-full
  py-4
  pl-12
  pr-4

  text-black
  placeholder-gray-500

  transition-all
  duration-200

  border
  ${({ $error }) => ($error ? 'border-red-600 focus:border-red-600' : 'focus:border-blue-600 border-gray-200')}
  rounded-md
  bg-gray-50

  focus:outline-none
  focus:bg-white
  caret-blue-600"
`;
