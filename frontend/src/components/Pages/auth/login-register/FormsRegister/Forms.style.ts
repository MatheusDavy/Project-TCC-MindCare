import Link from 'next/link';
import tw from 'tailwind-styled-components';

type WrapperProps = {
  $view: 'login' | 'register';
  $hidden: boolean
}
export const Wrapper = tw.div<WrapperProps>`
    ${({ $view }) => $view == 'register' ? 'opacity-1 translate-x-0 z-10' : 'opacity-0 translate-x-[-100%] z-0'}
    ${({ $hidden }) => $hidden && 'hidden'}
    rounded-xl
    absolute
    sm:w-[50%] w-full
    right-0
    top-0
    min-h-full
    
    flex items-center justify-center
    
    px-4 sm:px-6 lg:px-8
    py-20 sm:py-16 lg:py-24 
    
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
  inset-y-100
  right-0
  flex
  items-center
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
