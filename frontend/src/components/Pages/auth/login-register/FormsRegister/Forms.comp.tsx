import { useEffect, useState } from 'react';

// Styles
import * as S from './Forms.style';

// Forms
import { useLogic } from './Forms.logic';

// Icons
import { IconUser, IconEye, IconEyeOff } from '@tabler/icons-react';

// OAuth
import { OAuthLogin } from '../../../../Materials/Auth/OAuth/OAuth.comp';

// Translate
import { TwInput } from 'src/styles/configs/inputs/tw-input';

type Props = {
    view: 'register' | 'login';
    changeToLogin: () => void;
};

export function FormsRegister({ view, changeToLogin }: Props) {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 1000);
    }, []);

    return (
        <S.Wrapper $hidden={hidden} $view={view}>
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <S.Title>Olá, será legal ter você com a gente !</S.Title>
                <S.Subtitle>
                    Comece a cuidar da sua saúde mental :){' '}
                    <S.Links
                        href={'/auth/'}
                        onClick={e => {
                            e.preventDefault();
                            changeToLogin();
                        }}
                    >
                        Login
                    </S.Links>
                </S.Subtitle>

                <Forms changeToLogin={changeToLogin} />

                <OAuthLogin />
            </div>
        </S.Wrapper>
    );
}

const Forms = ({ changeToLogin }) => {
    const { data, methods } = useLogic({ changeToLogin });
    const [showPassword, setShowPassword] = useState(false);

    return (
        <S.Form onSubmit={methods.handleSubmit(methods.onSubmit)} method="POST">
            <S.FormWrapper>
                <div>
                    <S.FormLabel>Nome</S.FormLabel>
                    <S.FormInputWrapper>
                        <S.FormInputSVG>
                            <IconUser />
                        </S.FormInputSVG>

                        <TwInput
                            id='register-name'
                            {...methods.register('name')}
                            type="text"
                            placeholder="Henry Cavil"
                            $error={data.errors.name ? true : false}
                        />

                        {data.errors.name && (
                            <S.FormInputErro>
                                {data.errors.name.message}
                            </S.FormInputErro>
                        )}
                    </S.FormInputWrapper>
                </div>

                <div className="mt-5">
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
                            id='register-email'
                            {...methods.register('email')}
                            type="email"
                            placeholder="example@gmail.com"
                            $error={data.errors.email ? true : false}
                        />

                        {data.errors.email && (
                            <S.FormInputErro>
                                {data.errors.email.message}
                            </S.FormInputErro>
                        )}
                    </S.FormInputWrapper>
                </div>

                <div className="mt-5">
                    <S.FormLabelWrapper>
                        <S.FormLabel>Senha</S.FormLabel>
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
                            id='register-password'
                            {...methods.register('password')}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="*********"
                            $error={data.errors.password ? true : false}
                        />
                        <S.FormShowPassword
                            type="button"
                            onClick={() => {
                                setShowPassword(prev => !prev);
                            }}
                        >
                            {showPassword ? <IconEye /> : <IconEyeOff />}
                        </S.FormShowPassword>
                        {data.errors.password && (
                            <S.FormInputErro>
                                {data.errors.password.message}
                            </S.FormInputErro>
                        )}
                    </S.FormInputWrapper>
                </div>

                <div className="mt-7">
                    <button
                        id='register-submit'
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                        Registrar
                    </button>
                </div>
            </S.FormWrapper>
        </S.Form>
    );
};
