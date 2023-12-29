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
            <S.Title>Restaurar Senha</S.Title>
            <S.Subtitle>
                Crie uma nova senha para a sua conta
            </S.Subtitle>
            <S.Forms onSubmit={methods.handleSubmit(methods.onSubmit)}>
                <S.FormWrapper>
                    <Controller
                        name="password"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>Senha</S.InputLabel>
                                <InputText
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="example@gmail.com"
                                    onChange={onChange}
                                    error={Boolean(data.errors.password)}
                                />
                            </>
                        )}
                    />
                    {data.errors.password && (
                        <FormHelperText
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {data.errors.password.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.FormWrapper>
                    <Controller
                        name="passwordConfirmation"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>Confirmar Senha</S.InputLabel>
                                <InputText
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="example@gmail.com"
                                    onChange={onChange}
                                    error={Boolean(data.errors.passwordConfirmation)}
                                />
                            </>
                        )}
                    />
                    {data.errors.passwordConfirmation && (
                        <FormHelperText
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {data.errors.passwordConfirmation.message}
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
