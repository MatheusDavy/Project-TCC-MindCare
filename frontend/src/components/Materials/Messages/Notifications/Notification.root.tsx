import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

type Props = {
    children: ReactNode
}

export function NotificationRoot({ children }: Props) {
    return (
        <NotificationWrapper id="toast-notification" role="alert">
            <div className="flex items-center mb-3">
                <NotificationNew>
                    New notification
                </NotificationNew>
            </div>
            <div className="flex items-center">
                {children}
            </div>
        </NotificationWrapper>
    );
}

const NotificationWrapper = tw.div`
    w-full max-w-xs
    p-4
    text-gray-900
    bg-white
    border-b-2
    border-gray-200
    shadow
`;

const NotificationNew = tw.span`
    mb-1
    text-sm font-semibold
    text-gray-900
`;


