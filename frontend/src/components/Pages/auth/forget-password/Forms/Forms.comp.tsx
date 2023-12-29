// Styles
import * as S from './Forms.style';

// Material
import { FormHelperText } from '@mui/material';

// Forms
import { Controller } from 'react-hook-form';
import { useLogic } from './Forms.logic';
import { InputText } from '../../../../../styles/configs/ui/inputs/TextField';

// Icons
import Link from 'next/link';

export function FormsComp() {
    const { data, methods } = useLogic({});

    return (
        <S.Group>
            <S.Title>Recuperar Senha</S.Title>
            <S.Subtitle>
                Informe-nos <b>seu email</b> para enviarmos todas as instruções de <b>recuperação de senha!</b>
            </S.Subtitle>
            <S.Forms onSubmit={methods.handleSubmit(methods.onSubmit)}>
                <S.FormWrapper>
                    <Controller
                        name="email"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>Email</S.InputLabel>
                                <InputText
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="example@gmail.com"
                                    onChange={onChange}
                                    error={Boolean(data.errors.email)}
                                />
                            </>
                        )}
                    />
                    {data.errors.email && (
                        <FormHelperText
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {data.errors.email.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.ButtonSubmit type="submit" className="simple_hover">
                    Enviar
                </S.ButtonSubmit>
            </S.Forms>
            <S.BackToLogin>
                <Link href={'/auth/register/'}>Voltar</Link>
            </S.BackToLogin>
        </S.Group>
    );
}
