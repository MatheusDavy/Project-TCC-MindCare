// Styles
import * as S from './Forms.style';

// Material
import { FormHelperText } from '@mui/material';

// Forms
import { Controller } from 'react-hook-form';
import { useLogic } from './Forms.logic';
import { InputText } from '../../../../../styles/configs/ui/inputs/TextField';

// Icons
import { useTranslations } from 'next-intl';

export function FormsComp() {
    const { data, methods } = useLogic({});
    const t = useTranslations('ResetPassword');
    const tYup = useTranslations('Yup');

    return (
        <S.Group>
            <S.Title>{t('title')}</S.Title>
            <S.Subtitle>
                {t('description')}
            </S.Subtitle>
            <S.Forms onSubmit={methods.handleSubmit(methods.onSubmit)}>
                <S.FormWrapper>
                    <Controller
                        name="password"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>{t('label-password')}</S.InputLabel>
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
                            {tYup(`${data.errors.password.message}`)}
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
                                <S.InputLabel>{t('label-confirmPassword')}</S.InputLabel>
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
                            {tYup(`${data.errors.passwordConfirmation.message}`)}
                        </FormHelperText>
                    )}
                </S.FormWrapper>
                <S.ButtonSubmit type="submit" className="simple_hover">
                    {t('button')}
                </S.ButtonSubmit>
            </S.Forms>
        </S.Group>
    );
}
