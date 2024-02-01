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

type Props = {
    view: 'register' | 'login';
    changeToRegister: () => void;
};

export function FormsLogin({ view, changeToRegister }: Props) {
    const t = useTranslations('Login');

    return (
        <div className={`${view === 'login' ? 'opacity-1 translate-x-0 z-1' : 'opacity-0 translate-x-[100%] z-0'} rounded-xl absolute w-[50%] left-0 top-0 h-full z-10 flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24  transition-all duration-1000`}>
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

                <Forms />

                <OAuthLogin />
            </div>
        </div>
    );
}

const Forms = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { data, methods } = useLogic({});
    const t = useTranslations('Login');
    console.log(data.errors);

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

                        <S.FormInput
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
                        <S.FormInput
                            {...methods.register('password')}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            $error={data.errors.password ? true : false}
                        />
                        <S.FormShowPassword
                            onClick={() => {
                                setShowPassword(prev => !prev);
                            }}
                        >
                            {showPassword ? <IconEye /> : <IconEyeOff />}
                        </S.FormShowPassword>
                    </S.FormInputWrapper>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                        Log in
                    </button>
                </div>
            </S.FormWrapper>
        </S.Form>
    );
};
