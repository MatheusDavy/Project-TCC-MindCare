// Next
import { useQuery } from 'react-query';

import * as S from './Recomende.style';

// Utils
import axios from 'axios';
import { SliderVideos } from 'src/components/Materials/Sliders/SliderVideos';

export function Recomended() {
    const { data, status, isLoading } = useQuery('recomended-learn-movie', () => {
        return axios.get('/datas/learn.json').then(({ data }) => {
            data.sort(() => Math.random() - 0.5);
            return data.slice(0, 10);
        });
    });

    return (
        <S.Wrapper>
            <h2 className="text-[30px] font-medium text-start text-gray-900">
                Recomendados para você
            </h2>
            {status == 'success' && !isLoading && (
                <SliderVideos data={data} pathDescription={'/dashboard/learn'} />
            )}
        </S.Wrapper>
    );
}

