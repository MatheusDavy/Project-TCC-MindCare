import Link from 'next/link';
import tw from 'tailwind-styled-components';

type WrapperProps = {
  $view: 'login' | 'register';
}
export const Wrapper = tw.div<WrapperProps>`
${({ $view }) => $view == 'login' ? 'opacity-1 translate-x-0 z-10' : 'opacity-0 translate-x-[100%] z-0'}
    rounded-xl
    absolute
    sm:w-[50%] w-full
    left-0
    top-0
    min-h-full
    
    flex items-center justify-center
    
    px-4 sm:px-6 lg:px-8
    py-10 sm:py-16 lg:py-24 
    
    transition-all duration-1000
    
    bg-white
`;

/* ----------- TITLE ------------- */
export const Title = tw.h2`
  text-3xl
  font-bold
  leading-tight
  text-black
  sm:text-4xl
`;
export const Subtitle = tw.p`
  mt-2
  text-base
  text-gray-600
`;
export const Description = tw.h3`
  text-4xl
  font-bold
  text-white

  text-center
  lg:text-start

  lg:block
  hidden
`;
export const Links = tw(Link)`
  text-sm
  font-medium
  text-blue-600

  transition-all
  duration-200 

  hover:text-blue-700 
  focus:text-blue-700 
  hover:underline
`;

/* ----------- FORMS ------------- */
export const Form = tw.form`
  mt-8
`;
export const FormWrapper = tw.div`
  space-y-5
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
  flex
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
  inset-y-100
  left-2
  flex
  items-center
  pr-3
  z-10
  text-sm
  text-red-400
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
