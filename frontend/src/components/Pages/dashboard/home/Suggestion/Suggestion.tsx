import { useQuery } from 'react-query';
import { useState } from 'react';

import * as S from './Suggestion.style';

import axios from 'axios';

// Icons
import { IconArrowNarrowUp, IconRepeat } from '@tabler/icons-react';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

export function Suggestion() {
    const [prevId, setPrevId] = useState(0);
    const { data, isLoading, refetch } = useQuery('recomendation-movie', async () => {
        const data = await axios
            .get('/datas/learn.json')
            .then(({ data }) => data);
        const prevData = data.filter(item => item.id !== prevId);
        const randomIndex = Math.floor(Math.random() * prevData.length);
        setPrevId(prevData[randomIndex].id);
        return prevData[randomIndex];
    });

    return (
        <S.Wrapper >
            {!isLoading ? (
                <>
                    <S.Background src={data.banner} />
                    <S.Action
                        $as={'button'}
                        className="top-5 left-5 bg-white/30 text-white backdrop-blur-sm"
                        onClick={refetch}
                    >
                        <IconRepeat />
                    </S.Action>
                    {/* Texts */}
                    <S.Description>{data.title}</S.Description>
                    <S.Title>{data.category}</S.Title>
                    {/* Link */}
                    <S.Action
                        href={`/dashboard/videos/${data.id}`}
                        className="bottom-5 right-5 bg-white text-gray-900"
                    >
                        <IconArrowNarrowUp className="rotate-45" />
                    </S.Action>
                </>
            ) : (
                <div className='w-full py-7 flex justify-center'>
                    <LoadingAnimationIcon bgColor={'white'} mainColor={'#0063f2'} />
                </div>
            )}
        </S.Wrapper>
    );
}
