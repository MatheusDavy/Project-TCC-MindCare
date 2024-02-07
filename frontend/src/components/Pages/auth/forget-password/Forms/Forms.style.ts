import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Title = tw.h2`
  text-3xl
  font-bold
  leading-tight
  text-black
  sm:text-4xl
`;
export const Subtitle = tw.p`
  max-w-xl
  mx-auto
  mt-4
  text-base
  leading-relaxed
  text-gray-600
`;
/* ------- Forms -------*/
export const Form = tw.form`
  mt-8
  w-full
  max-w-[400px]
  mx-auto
`;
export const FormWrapper = tw.div`
  space-y-10
`;
export const FormLabelWrapper = tw.div`
  flex
  items-center
  justify-between
`;
export const FormLabel = tw.label`
  text-base
  font-medium
  text-gray-900
`;
export const FormInputWrapper = tw.div`
  relative
  mt-2.5
  text-gray-400
  focus-within:text-gray-600
`;
export const FormInputSVG = tw.div`
  absolute
  inset-y-0
  left-0
  flex
  items-center
  pl-3
  pointer-events-none
`;
export const FormInputErro = tw.p`
  absolute
  inset-y-[125%]
  left-[50%]
  translate-x-[-50%]
  flex
  items-center
  pr-3
  z-10
  text-sm
  text-red-500
`;
export const FormShowPassword = tw.button`
  absolute
  inset-y-0
  right-0
  flex
  items-center
  pr-3
  z-10
`;

export const SubmitButton = tw.button`
  inline-flex items-center justify-center w-full
  px-4 py-4
  text-base font-semibold text-white

  transition-all duration-200

  border border-transparent rounded-md

  bg-gradient-to-r from-fuchsia-600 to-blue-600

  focus:outline-none
  hover:opacity-80
  focus:opacity-80

  disabled:opacity-[0.4]
`;

export const Links = tw(Link)`
  text-sm font-medium text-blue-600 text-center

  w-fit

  mx-auto
  mt-5 lg:mt-10

  transition-all
  duration-200 

  hover:text-blue-700 
  focus:text-blue-700 
  hover:underline
`;
