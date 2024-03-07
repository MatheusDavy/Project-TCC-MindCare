import { ReactNode, createContext, useContext, useState } from 'react';
import { DialogDataType, defaultProvider, initialData } from './Dialog.types';
import { DialogYesNo } from 'src/components/Materials/Dialog/YesNoDialog/Dialog';

type Props = {
    children: ReactNode;
};

const DialogActionsContext = createContext(defaultProvider);

const DialogActionsProvider = ({ children }: Props) => {
    const [data, setData] = useState<DialogDataType>(initialData);

    const handleClose = () => {
        setData(prev => ({...prev, open: false}));
    };

    return (
        <DialogActionsContext.Provider
            value={{ setData }}
        >
            {children}
            {data.open && (
                <>
                    {data.type == 'yes-or-no' && (
                        <DialogYesNo
                            open={data.open}
                            close={handleClose}
                            message={data.message}
                            action={() => {
                                handleClose();
                                data.action();
                            }}
                        />
                    )}
                </>
            )}
        </DialogActionsContext.Provider>
    );
};

export { DialogActionsProvider };

export const useDialogActionsContext = () => {
    const { setData } = useContext(DialogActionsContext);

    return { setData };
};

