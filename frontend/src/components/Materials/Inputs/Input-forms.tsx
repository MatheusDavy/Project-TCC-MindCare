import { ReactElement, InputHTMLAttributes } from 'react';
import tw from 'tailwind-styled-components';

type InputProps = {
    label: string;
    errorMessage?: any
    icon: ReactElement;
    $error?: boolean | any;
    name: string
    methods: any
} & InputHTMLAttributes<HTMLInputElement>;

export function InputForms({ label, methods, errorMessage, name, $error, icon: Icon, ...props }: InputProps) {

    return (
        <div>
            <FormLabel>{label}</FormLabel>
            <FormInputWrapper>
                <FormInputSVG>
                    {Icon}
                </FormInputSVG>

                <Input
                    {...methods.register(name)}
                    {...props}
                    $error={!!$error}
                />
                <FormInputErro>
                    {$error && (
                        <>{errorMessage ? errorMessage : $error.message}</>
                    )}
                </FormInputErro>
            </FormInputWrapper>
        </div>
    );
}

export const Input = tw.input<InputProps>`
    w-full
    py-4
    pl-12
    pr-4

    text-black
    placeholder-gray-500

    transition-all
    duration-200

    border
    ${({ $error }) =>
        $error
            ? 'border-red-600 focus:border-red-600'
            : 'focus:border-blue-600 border-gray-200'}
    rounded-md
    bg-gray-50

    focus:outline-none
    focus:bg-white
    caret-blue-600
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
    translate-y-[100%]
    left-0
    bottom-0
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
