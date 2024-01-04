import { useEffect, useState } from 'react';

// Material
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// Styles
import * as S from './Alert.style';

// Icons
import { IconQuestionMark, IconCheck } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

export type DialogAlertProps = {
    type: 'error' | 'success';
    message: string;
    open: boolean;
    onClose?: () => void;
};

const DialogAlert = ({ type, message, open, onClose }: DialogAlertProps) => {
    const [openDialog, setOpenDialog] = useState<boolean>(open || false);
    const tError = useTranslations('ErrorMessages');
    const tSuccess = useTranslations('SuccessMessages');

    const handleClose = () => {
        setOpenDialog(false);
        onClose && onClose();
    };

    useEffect(() => {
        setOpenDialog(open);
    }, [open]);

    return (
        <S.ContainerDialog open={openDialog} onClose={handleClose}>
            <DialogContent>
                <S.Icon $type={type}>
                    {type === 'error' && <IconQuestionMark />}
                    {type === 'success' && <IconCheck />}
                </S.Icon>

                <S.Title $type={type}>
                    {type === 'error' && <>{tError('error')}</>}
                    {type === 'success' && <>{tSuccess('success')}</>}
                </S.Title>

                <S.Message>
                    {type === 'error' && <i>{tError(message)}</i>}
                    {type === 'success' && <i>{tSuccess(message)}</i>}
                </S.Message>
            </DialogContent>
            <DialogActions style={{ padding: 0 }}>
                <S.CloseButton $type={type} onClick={handleClose}>
                    OK
                </S.CloseButton>
            </DialogActions>
        </S.ContainerDialog>
    );
};

export default DialogAlert;
