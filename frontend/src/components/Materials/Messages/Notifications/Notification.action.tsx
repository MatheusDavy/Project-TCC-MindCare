import { ButtonHTMLAttributes, ElementType } from 'react';
import tw from 'tailwind-styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ElementType;
    text?: string;
}

export function NotificationAction({ icon: Icon, text, ...rest }: Props) {
    return (
        <Button {...rest}>
            {Icon && <Icon width={15} height={15} />}
            {text && text}
        </Button>
    );
}

const Button = tw.button`
    inline-flex justify-center
    px-5 py-2
    text-xs font-medium text-center
    text-white
    bg-blue-600
    rounded-[7px]
    hover:opacity-80
`;
