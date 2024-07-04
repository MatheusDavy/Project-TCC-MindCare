/* eslint-disable react-hooks/rules-of-hooks */
import * as S from './Videos.style';
import { useLogic } from './Videos.logic';
import { SliderVideos } from 'src/components/Materials/Sliders/SliderVideos';

export function Videos() {
    const { data, methods } = useLogic();

    return (
        <S.Wrapper>
            <Filters
                categories={data.categories}
                loading={data.loadingCategories}
                setCategories={categories => methods.setSelect(categories)}
                select={data.select}
            />
            <Video videos={data.filteredContent} loading={data.loadingContent} />
        </S.Wrapper>
    );
}

const Filters = ({ categories, loading, setCategories, select }) => {
    if (loading) return <>Loading</>;

    if (!categories.length) return <>Nenhum vídeo foi encontrado :(</>;

    return (
        <S.FiltersWrapper>
            {categories.map(cat => (
                <S.FiltersButton
                    key={cat}
                    $selected={select === cat}
                    onClick={() => setCategories(cat)}
                >
                    {cat}
                </S.FiltersButton>
            ))}
        </S.FiltersWrapper>
    );
};

const Video = ({ videos, loading }) => {
    if (loading || !videos) return <>Loading...</>;

    return (
        <SliderVideos data={videos} pathDescription={'/dashboard/aprender'} />
    );
};
