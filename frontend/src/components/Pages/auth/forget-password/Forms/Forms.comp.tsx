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
import { useTranslations } from 'next-intl';

export function FormsComp() {
    const { data, methods } = useLogic({});
    const t = useTranslations('ForgotPassword');
    const tYup = useTranslations('Yup');

    return (
        <S.Group>
            <S.Title>{t('title')}</S.Title>
            <S.Subtitle>{t('description')}</S.Subtitle>
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
                            {tYup(`${data.errors.email.message}`)}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.ButtonSubmit loading={data.loading} type="submit" className="simple_hover">
                    {t('button')}
                </S.ButtonSubmit>
            </S.Forms>
            <S.BackToLogin>
                <Link href={'/auth/login/'}>{t('back')}</Link>
            </S.BackToLogin>
        </S.Group>
    );
}
