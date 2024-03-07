import React, { useEffect, useState } from 'react';
import { useRepository } from 'src/repository';
import LoadingUser from '../UserLoading/Loading';
import { Profile } from '../../../../Sections/Profile/Profile';

type Props = {
    nickname: string
}

export default function User({ nickname }: Props) {
    const [results, setResults] = useState<any | 'not-found'>();
    const { userRepository } = useRepository();

    useEffect(() => {
        setResults('');
        const fetch = () => {
            userRepository.findUser(nickname)
                .then(({ data }) => {
                    setTimeout(() => {
                        setResults(data);
                    }, 3000);
                })
                .catch(() => {
                    setResults('not-found');
                });
        };

        fetch();
    }, [nickname]);

    if (results == 'not-found'){
        return (
            <div>
                Desculpe, mas ocorreu um erro ao exibir os dados desse usuário
            </div>
        );
    }

    if (!results) {
        return <LoadingUser />;
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <div className='w-full h-[300px] bg-blue-500 rounded-2xl'></div>
            <div className='mt-[-80px] px-10'>
                <Profile
                    image={results.utilsInfo?.avatar}
                    nickname={results.nickname}
                    userName={results.name}
                    requestFriendStatus={'friend'}
                />
            </div>
        </div>
    );
};
