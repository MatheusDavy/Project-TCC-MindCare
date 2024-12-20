import { useState } from 'react';
// Styles
import * as S from './Forms.style';

import { useLogic } from './Forms.logic';

// Icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';

// Components
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { TwInput } from 'src/styles/configs/inputs/tw-input';


export function FormsComp() {

    return (
        <>
            <S.Title>Restaurar Senha</S.Title>
            <S.Subtitle>Crie uma nova senha para a sua conta</S.Subtitle>
            <Forms />
        </>
    );
}

const Forms = () => {
    const { data, methods } = useLogic({});

    return (
        <S.Form onSubmit={methods.handleSubmit(methods.onSubmit)}>
            <S.FormWrapper>
                <InputPassword
                    register={methods.register}
                    error={data.errors.password}
                    errorMessage={data.errors.password?.message}
                    label={'Senha'}
                    placeholder={'*********'}
                    name={'password'}
                />

                <InputPassword
                    register={methods.register}
                    error={data.errors.passwordConfirmation}
                    errorMessage={data.errors.passwordConfirmation?.message}
                    label={'Confirmar senha'}
                    placeholder={'*********'}
                    name={'passwordConfirmation'}
                />

                <div className="mt-10">
                    <S.SubmitButton type="submit" disabled={data.loading}>
                        {data.loading ? (
                            <LoadingAnimationIcon
                                mainColor={'white'}
                                bgColor={'gray'}
                            />
                        ) : (
                            <>Alterar Senha</>
                        )}
                    </S.SubmitButton>
                </div>
            </S.FormWrapper>
        </S.Form>
    );
};

const InputPassword = ({ register, label, error, errorMessage, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <S.FormLabel>{label}</S.FormLabel>
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
                    {...register(name)}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    $error={error}
                />

                <S.FormShowPassword
                    type="button"
                    onClick={() => {
                        setShowPassword(prev => !prev);
                    }}
                >
                    {showPassword ? <IconEye /> : <IconEyeOff />}
                </S.FormShowPassword>

                {error && <S.FormInputErro>{errorMessage}</S.FormInputErro>}
            </S.FormInputWrapper>
        </div>
    );
};
