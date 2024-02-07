// Next
import { useState } from 'react';

// Styles
import * as S from './Forms.style';

// Forms
import { useLogic } from './Forms.logic';

// Icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';

// OAuth
import { OAuthLogin } from '../../../../Materials/Auth/OAuth/OAuth.comp';

// Translate
import { useTranslations } from 'next-intl';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { TwInput } from 'src/styles/configs/inputs/tw-input';

type Props = {
    view: 'register' | 'login';
    changeToRegister: () => void;
};

export function FormsLogin({ view, changeToRegister }: Props) {
    const t = useTranslations('Login');
    const { data, methods } = useLogic({});

    return (
        <S.Wrapper $view={view}>
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <S.Title>{t('title')}</S.Title>
                <S.Subtitle>
                    {t('link-dont-have-account')}{' '}
                    <S.Links
                        href={'/auth/'}
                        onClick={e => {
                            e.preventDefault();
                            changeToRegister();
                        }}
                    >
                        {t('link-signup')}
                    </S.Links>
                </S.Subtitle>

                <Forms data={data} methods={methods} />

                {!data.loading && <OAuthLogin />}
            </div>
        </S.Wrapper>
    );
}

const Forms = ({ data, methods }) => {
    const [showPassword, setShowPassword] = useState(false);
    const t = useTranslations('Login');

    return (
        <S.Form onSubmit={methods.handleSubmit(methods.onSubmit)} method="POST">
            <S.FormWrapper>
                <div>
                    <S.FormLabel>Email</S.FormLabel>
                    <S.FormInputWrapper>
                        <S.FormInputSVG>
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                        </S.FormInputSVG>

                        <TwInput
                            {...methods.register('email')}
                            type="email"
                            placeholder="Enter email to get started"
                            $error={data.errors.email ? true : false}
                        />
                    </S.FormInputWrapper>
                </div>

                <div>
                    <S.FormLabelWrapper>
                        <S.FormLabel>{t('label-password')}</S.FormLabel>
                        <S.Links href={'/auth/forget-password'}>
                            {t('label-forget-password')}
                        </S.Links>
                    </S.FormLabelWrapper>
                    <S.FormInputWrapper>
                        <S.FormInputSVG>
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                        </S.FormInputSVG>
                        <TwInput
                            {...methods.register('password')}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            $error={data.errors.password ? true : false}
                        />
                        <S.FormShowPassword
                            type='button'
                            onClick={() => {
                                setShowPassword(prev => !prev);
                            }}
                        >
                            {showPassword ? <IconEye /> : <IconEyeOff />}
                        </S.FormShowPassword>
                    </S.FormInputWrapper>
                </div>

                <div className="mt-10">
                    <S.SubmitButton type="submit" disabled={data.loading}>
                        {data.loading ? (
                            <LoadingAnimationIcon
                                mainColor={'white'}
                                bgColor={'gray'}
                            />
                        ) : (
                            'Log in'
                        )}
                    </S.SubmitButton>
                </div>
            </S.FormWrapper>
        </S.Form>
    );
};
