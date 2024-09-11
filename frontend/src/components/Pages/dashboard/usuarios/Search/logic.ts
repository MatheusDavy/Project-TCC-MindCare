import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRepository } from 'src/repository';

export const useLogic = () => {
    const [input, setInput] = useState<string>('');
    const { userRepository } = useRepository();

    const { data: users, isLoading: loadingUsers, refetch } = useQuery(
        'user-search',
        async () => {
            if (input) {
                const { data } = await userRepository.findManyUsers(input);
                if (data.length > 0) return data;

                return undefined;
            }
        }
    );

    useEffect(() => {
        refetch();
    }, [input]); // Altere para debouncedInput aqui

    return {
        data: {
            users: users,
            loadingUsers,
            input,
        },
        methods: {
            setInput,
            refetch
        },
    };
};
