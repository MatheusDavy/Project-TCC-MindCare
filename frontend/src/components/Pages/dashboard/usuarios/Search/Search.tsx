import useDebounce from 'src/utils/use-debounce';
import { useLogic } from './Search.logic';
import * as S from './Search.style';
import { Loading } from 'react-simple-chatbot';
import UserCard from '../UserCard/User';

export function Search() {
    const { data, methods } = useLogic();

    const inputValueDebouced = useDebounce((value) => methods.setInput(value), 1000);

    return (
        <S.Wrapper>
            <input
                type="text"
                id="first_name"
                className="max-w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block w-full p-2.5 outline-none"
                placeholder="John"
                onChange={e => {
                    inputValueDebouced(e.target.value);
                }}
            />

            {data.loadingUsers ? (
                <Loading />
            ) : (
                <>
                    {(!data.users && data.input && !data.loadingUsers) && (
                        <h3>Usuários não encontrados</h3>
                    )}
                    <div className='grid grid-cols-5 gap-2 w-full'>
                        {data.users && data.users.map(data => (
                            <UserCard
                                key={data.nickname}
                                nickname={data.nickname}
                                photo={data.utilsInfo.avatar}
                                name={data.name}
                                status={data.friendData.status}
                                refetch={methods.refetch}
                            />
                        ))}
                    </div>
                </>
            )}
        </S.Wrapper>
    );
}
