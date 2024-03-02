import useDebounce from 'src/utils/use-debounce';
import { useLogic } from './Search.logic';
import * as S from './Search.style';
import { ProfileCard } from 'src/components/Materials/Profiles/user-card/profile.comp';

export function Search() {
    const { data, methods } = useLogic();
    const inputValueDebouced = useDebounce((value) => methods.setInput(value), 500);

    return (
        <S.Wrapper>
            <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block w-full p-2.5 outline-none"
                placeholder="John"
                onChange={e => {
                    inputValueDebouced(e.target.value);
                }}
            />
            {data.loadingUsers && (<>Loading...</>)}
            {data.users && data.users.length > 0 && (
                <div className='flex flex-col gap-3'>
                    {data.users.map(user => (
                        <ProfileCard
                            key={user.nickname}
                            name={user.name}
                            nickname={user.nickname}
                            avatar={user.utilsInfo.avatar}
                        />
                    ))}
                </div>
            )}
        </S.Wrapper>
    );
}
