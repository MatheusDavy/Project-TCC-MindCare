// Next
import { useState } from 'react';

// Styles
import * as S from './Forms.style';

// Material
import { FormHelperText, InputAdornment, IconButton } from '@mui/material';

// Forms
import { Controller } from 'react-hook-form';
import { useLogic } from './Forms.logic';
import { InputText } from '../../../../../styles/configs/ui/inputs/TextField';

// Icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Link from 'next/link';

// OAuth
import { OAuthLogin } from '../../../../Materials/Auth/OAuth/OAuth.comp';


export function FormsComp() {
    const { data, methods } = useLogic({});
    const [showPassword, setShowPassword] = useState(true);

    return (
        <S.Group>
            <S.Title>Login</S.Title>
            <S.Subtitle>Comece a cuidar da sua saúde mental :)</S.Subtitle>
            <S.Forms onSubmit={methods.handleSubmit(methods.onSubmit)}>
                <OAuthLogin />
                <S.Separator>
                    <span className="mb-6 bg-gray-100 border border-gray-300">OU</span>
                </S.Separator>
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
                        <FormHelperText sx={{ marginLeft: '10px', color: 'error.main' }}>
                            {data.errors.email.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.FormWrapper>
                    <Controller
                        name="password"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <S.InputLabel>Senha</S.InputLabel>
                                    <S.ForgotPassword href="/auth/forget-password/">
                                        <b>Esqueci a senha</b>
                                    </S.ForgotPassword>
                                </div>
                                <InputText
                                    type={showPassword ? 'password' : 'text'}
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    autoComplete={''}
                                    error={Boolean(data.errors.password)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <IconEyeOff /> : <IconEye />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </>
                        )}
                    />
                    {data.errors.password && (
                        <FormHelperText sx={{ color: 'error.main', marginLeft: '10px' }}>
                            {data.errors.password.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.ButtonSubmit type="submit" className="simple_hover">
          Logar
                </S.ButtonSubmit>
            </S.Forms>
            <S.HaveAccount>
        Não possui uma conta? <Link href={'/auth/register/'}>Cadastrar-se</Link>
            </S.HaveAccount>
        </S.Group>
    );
}
