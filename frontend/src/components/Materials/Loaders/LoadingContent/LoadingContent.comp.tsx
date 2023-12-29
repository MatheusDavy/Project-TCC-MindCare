import * as S from './LoadingContent.style';

export function LoadingContentComp() {
    return (
        <>
            <S.LoaderWrapper>
                <S.ImageBrain
                    className="tree"
                    src={
                        '/images/illustration/mental-health/mental-health-02.svg'
                    }
                    alt="mental health"
                    width={200}
                    height={200}
                />
                <S.Loader></S.Loader>
            </S.LoaderWrapper>
        </>
    );
}
