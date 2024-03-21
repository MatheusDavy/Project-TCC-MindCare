import React, { useEffect } from 'react';
import { useRepository } from 'src/repository';
import LoadingUser from '../UserLoading/Loading';
import { Profile } from '../../../../Sections/Profile/Profile';
import { useQuery } from 'react-query';

type Props = {
    nickname: string
}

export default function User({ nickname }: Props) {
    const { userRepository } = useRepository();
    const { data: results, isLoading: loadingUsers, refetch } = useQuery(
        'user-datas',
        async () => {
            try {
                const { data } = await userRepository.findUser(nickname);
                return data;
            } catch (error) {
                return null;
            }
        }
    );

    useEffect(() => {
        refetch();
    }, [nickname]);

    console.log(results);

    if (!results){
        return (
            <div>
                Desculpe, mas ocorreu um erro ao exibir os dados desse usuário
            </div>
        );
    }

    if (loadingUsers) {
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
                    requestFriendStatus={results.status}
                    refetch={refetch}
                />
            </div>
        </div>
    );
};
