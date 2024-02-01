import * as S from './Banner.style';

type Props = {
    view: 'register' | 'login';
};

export function Banner({ view }: Props) {
    return (
        <S.ImageWrapper $view={view}>
            <div className="absolute inset-0">
                <img
                    className="object-cover object-top w-full h-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg"
                    alt="background"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </S.ImageWrapper>
    );
}
