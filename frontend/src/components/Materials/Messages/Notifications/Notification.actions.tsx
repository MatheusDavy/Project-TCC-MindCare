import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export function NotificationActions({ children }: Props) {
    return <div className="flex item-center gap-1 ms-3 mt-2">{children}</div>;
}
