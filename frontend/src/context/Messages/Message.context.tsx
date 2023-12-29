import { createContext, ReactNode, useState } from 'react';
import DialogAlert from '../../components/Materials/Messages/Alert/Alert.comp';
import { defaultProvider, DialogDataType, initialData } from './Message.types';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};

const DialogAlertContext = createContext(defaultProvider);

const DialogAlertProvider = ({ children }: Props) => {
    const [data, setData] = useState<DialogDataType>(initialData);
    const router = useRouter();

    return (
        <DialogAlertContext.Provider value={{ setData }}>
            {children}
            <DialogAlert
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
