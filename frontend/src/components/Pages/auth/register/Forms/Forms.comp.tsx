// Next
import { useState } from 'react';

// Styles
import * as S from './Forms.style';

// Material
import { FormHelperText, InputAdornment, IconButton } from '@mui/material';

// Forms
import { Controller } from 'react-hook-form';
import { useLogig } from './Forms.logic';
import { InputText } from '../../../../../styles/configs/ui/inputs/TextField';

// Icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Link from 'next/link';
import { OAuthLogin } from '../../../../Materials/Auth/OAuth/OAuth.comp';

// Translate
import { useTranslations } from 'next-intl';

export function FormsComp() {
    const { data, methods } = useLogig();
    const [showPassword, setShowPassword] = useState(true);
    const t = useTranslations('Register');

    return (
        <S.Group>
            <S.Title>{t('title')}</S.Title>
            <S.Subtitle>{t('description')}</S.Subtitle>
            <S.Forms onSubmit={methods.handleSubmit(methods.onSubmit)}>
                <OAuthLogin />
                <S.Separator>
                    <span>{t('or')}</span>
                </S.Separator>
                <S.FormWrapper>
                    <Controller
                        name="name"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>{t('label-name')}</S.InputLabel>
                                <InputText
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="João Batista"
                                    onChange={onChange}
                                    error={Boolean(data.errors.name)}
                                />
                            </>
                        )}
                    />
                    {data.errors.name && (
                        <FormHelperText
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {data.errors.name.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
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
                <S.FormWrapper>
                    <Controller
                        name="password"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {t('label-password')}
                                </S.InputLabel>
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
                                                    onMouseDown={e =>
                                                        e.preventDefault()
                                                    }
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <IconEyeOff />
                                                    ) : (
                                                        <IconEye />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </>
                        )}
                    />
                    {data.errors.password && (
                        <FormHelperText
                            sx={{ color: 'error.main', marginLeft: '10px' }}
                        >
                            {data.errors.password.message}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.ButtonSubmit type="submit" className="simple_hover">
                    {t('button')}
                </S.ButtonSubmit>
            </S.Forms>
            <S.HaveAccount>
                {t('link-have-account')}{' '}
                <Link href={'/auth/login/'}>{t('link-login')}</Link>
            </S.HaveAccount>
        </S.Group>
    );
}
