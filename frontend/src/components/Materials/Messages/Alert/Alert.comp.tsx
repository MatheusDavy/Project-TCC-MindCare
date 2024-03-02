import { useEffect, useState } from 'react';

// Styles
import * as S from './Alert.style';

// Icons
import { IconCircleX, IconCheck, IconX } from '@tabler/icons-react';

export type DialogAlertProps = {
    type: 'error' | 'success' | undefined;
    message: string;
    open: boolean;
    onClose?: () => void;
};

const DialogAlert = ({ type, message, open, onClose }: DialogAlertProps) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleClose = () => {
        setOpenDialog(false);
        onClose && onClose();
    };

    useEffect(() => {
        setTimeout(() => {
            setOpenDialog(open);
        }, 100);
    }, [open]);

    return (
        <>
            {type !== undefined && (
                <S.Notification
                    $open={openDialog}
                    style={{ zIndex: 10000 }}
                >
                    <S.Wrapper>
                        {type === 'error' && (
                            <IconCircleX className="text-red-500" />
                        )}
                        {type === 'success' && (
                            <IconCheck className="text-green-400" />
                        )}

                        <div className="flex flex-col space-y-2 overflow-hidden">
                            <p className="text-sm font-bold min-w-[max-content]">
                                {type === 'error' && <>Erro</>}
                                {type === 'success' && <>Sucesso</>}
                            </p>
                            <p className="text-sm text-gray-500 min-w-[max-content]">
                                {type === 'error' && <i>{message}</i>}
                                {type === 'success' && (<i>{message}</i>)}
                            </p>
                        </div>

                        <button
                            className="absolute right-4 top-4 p-1 h-fit w-fit"
                            onClick={handleClose}
                        >
                            <IconX size={'20px'} className="text-gray-500" />
                        </button>
                    </S.Wrapper>
                </S.Notification>
            )}
        </>
    );
};

export default DialogAlert;
