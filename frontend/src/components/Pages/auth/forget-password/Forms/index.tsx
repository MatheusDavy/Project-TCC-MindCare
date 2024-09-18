// Styles
import * as S from './style';

// Forms
import { useLogic } from './logic';

// Icons
import { TwInput } from 'src/styles/configs/inputs/tw-input';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

export function FormsComp() {
    return (
        <>
            <div className="max-w-2xl mx-auto text-center">
                <S.Title>Recuperar Senha</S.Title>
                <S.Subtitle>
                    Informe-nos seu email para enviarmos todas <br />
                    as instruções de recuperação de senha!
                </S.Subtitle>
            </div>
            <Forms />

            <S.Links href={'/auth/'}>Voltar</S.Links>
        </>
    );
}

const Forms = () => {
    const { data, methods } = useLogic({});

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
                            placeholder="Insira seu email"
                            $error={data.errors.email ? true : false}
                        />

                        {data.errors.email && (
                            <S.FormInputErro>
                                {data.errors.email.message}
                            </S.FormInputErro>
                        )}
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
                            'Enviar'
                        )}
                    </S.SubmitButton>
                </div>
            </S.FormWrapper>
        </S.Form>
    );
};
