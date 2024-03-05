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
                return userRepository
                    .findManyUsers(input)
                    .then(({ data }) => data)
                    .catch(() => []);
            }
        }
    );

    console.log(users);

    useEffect(() => {
        refetch();
    }, [input]);

    return {
        data: {
            users,
            loadingUsers,
            input,
        },
        methods: {
            setInput,
        },
    };
};
