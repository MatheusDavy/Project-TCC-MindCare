import * as S from './styles';

type Props = {
    view: 'register' | 'login';
};

export function Banner({ view }: Props) {
    return (
        <S.ImageWrapper $view={view}>
            <div className="absolute inset-0">
                <img
                    className="object-cover object-top w-full h-full"
                    src="/images/background/bg_auth.png"
                    alt="background"
                />
            </div>
        </S.ImageWrapper>
    );
}
