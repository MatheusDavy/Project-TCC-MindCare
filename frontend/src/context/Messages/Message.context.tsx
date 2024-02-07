import { createContext, ReactNode, useEffect, useState } from 'react';
import Notifications from '../../components/Materials/Messages/Alert/Alert.comp';
import { defaultProvider, DialogDataType, initialData } from './Message.types';
import { useRouter } from 'next/router';

type Props = {
    children: ReactNode;
};

const DialogAlertContext = createContext(defaultProvider);

const DialogAlertProvider = ({ children }: Props) => {
    const [data, setData] = useState<DialogDataType>(initialData);
    const router = useRouter();

    useEffect(() => {
        if (!data.open) {
            setTimeout(() => {
                setData({ ...data, type: undefined });
            }, 600);
        } else {
            setTimeout(() => {
                setData({ ...data, type: undefined, open: false });
            }, 4000);
        }
    }, [data.open]);

    return (
        <DialogAlertContext.Provider value={{ setData }}>
            {children}
            <Notifications
                {...data}
                onClose={() => {
                    setData({ ...data, open: false });
                    if (data.redirect) {
                        router.push(data.redirect);
                    }
                }}
            />
        </DialogAlertContext.Provider>
    );
};

export { DialogAlertContext, DialogAlertProvider };
