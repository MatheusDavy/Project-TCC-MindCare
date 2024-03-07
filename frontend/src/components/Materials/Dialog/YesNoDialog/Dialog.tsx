import { DialogContent } from '@mui/material';
import { DialogUI } from 'src/styles/configs/dialog/Dialog';
import * as S from './Dialog.style';
import {IconAlertTriangle} from '@tabler/icons-react';

type Props = {
    open: boolean;
    message: string;
    close: () => void;
    action: () => void;
};

export function DialogYesNo({ open, close, message, action }: Props) {
    return (
        <DialogUI
            open={open}
            onClose={close}
            fullWidth={true}
            maxWidth={'xs'}
        >
            <DialogContent style={{ borderRadius: '40px'}}>
                <S.Wrapper>
                    <S.Header>
                        <IconAlertTriangle className="text-yellow-300" />
                        <span className='text-md font-bold min-w-[max-content]'>Aviso</span>
                    </S.Header>
                    <S.Description>{message}</S.Description>
                    <S.ButtonWrapper>
                        <S.ButtonConfirmation onClick={action}>
                            Confirmar
                        </S.ButtonConfirmation>
                        <S.ButtonCancel onClick={close}>
                            Cancelar
                        </S.ButtonCancel>
                    </S.ButtonWrapper>
                </S.Wrapper>
            </DialogContent>
        </DialogUI>
    );
}
