import Link from 'next/link';
import tw from 'tailwind-styled-components';

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
type InputProps = {
  $error: boolean
}
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
export const FormInput = tw.input<InputProps>`
  block
  w-full
  py-4
  pl-10
  pr-4

  text-black
  placeholder-gray-500

  transition-all
  duration-200

  border
  ${({ $error }) => $error ? 'border-red-600' : 'border-gray-200'}
  rounded-md
  bg-gray-50

  focus:outline-none
  focus:border-blue-600
  focus:bg-white
  caret-blue-600"
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