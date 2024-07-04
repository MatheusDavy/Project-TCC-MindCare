import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const useLogic = () => {
    const [select, setSelect] = useState<string | null>(null);
    const [filteredContent, setFilteredContent] = useState([]);
    const [loadingContent, setLoadingContent] = useState(true);
    const { data: categories, isLoading: loadingCategories } = useQuery(
        'categoriesLearn',
        async () => {
            const category: any = [];
            await axios.get('/datas/learn.json').then(({ data }) => {
                data.map((data: any) => {
                    if (!category.includes(data.category)) {
                        category.push(data.category);
                    }
                });
            });
            setSelect(category[0]);
            return category;
        }
    );

    const getVideosFiltered = async () => {
        setLoadingContent(true);
        await axios
            .get('/datas/learn.json')
            .then(({ data }) => {
                const filtered = data.filter(
                    learn => learn.category == select
                );
                setFilteredContent(filtered);
            })
            .catch(() => setFilteredContent([]));
        setLoadingContent(false);
    };

    useEffect(() => {
        getVideosFiltered();
    }, [select]);

    useEffect(() => {
        if (categories) setSelect(categories[0]);
    }, [categories]);

    return {
        data: {
            select,
            filteredContent,
            loadingContent,
            categories,
            loadingCategories,
        },
        methods: {
            setSelect,
        },
    };
};
