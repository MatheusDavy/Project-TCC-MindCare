import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
    w-full h-full
    flex flex-col
    gap-10
`;

/* ----------- FORMS ------------- */
export const Form = tw.form`
  bg-white
  pt-4 pb-10
  pl-4
  pr-8
  rounded-2xl 
  flex flex-col gap-5
  shadow-md
`;
export const FormCategoryWrapper = tw.div`
  grid grid-cols-2 gap-x-10 gap-y-5
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
