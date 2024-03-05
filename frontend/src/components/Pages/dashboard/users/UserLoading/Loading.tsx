import * as S from './Loading.style';

export default function LoadingUser() {
    return (
        <S.Wrapper>
            <div className='w-full h-[300px] bg-blue-500 rounded-2xl'></div>
            <div className='mt-[-80px] px-10 flex w-full'>
                <S.ProfileWrapper>
                    <div className="flex items-center gap-10">
                        <div>
                            <div
                                className="animate-pulse bg-blue-500 h-[100px] w-[100px]  shadow-2xl rounded-xl"
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='w-[150px] h-[20px] rounded-md bg-blue-500 animate-pulse'></div>
                            <div className='w-[150px] h-[20px] rounded-md bg-blue-500 animate-pulse'></div>
                        </div>
                    </div>
                </S.ProfileWrapper>
            </div>
        </S.Wrapper>
    );
};
