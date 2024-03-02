// Next
import React, { useState } from 'react';

// Style
import * as S from './Friends.style';

// Icons
import { IconSearch, IconX, IconBrandHipchat } from '@tabler/icons-react';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

// Utils
import { useLogic } from './Friend.logic';
import Link from 'next/link';

// Componente para cada linha da tabela
export function FriendsTable() {
    const { data } = useLogic();
    const [search, setSearch] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const filteredDatas = data.friends.filter(friend => friend.name.includes(search));

    return (
        <S.Wrapper>
            <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid flex justify-between gap-3 items-center rounded-t-2xl border-b-transparent">
                        {search ? (
                            <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block w-full p-2.5 outline-none"
                                placeholder="John"
                                value={inputSearch}
                                onChange={e => {
                                    setInputSearch(e.target.value);
                                }}
                            />
                        ) : (
                            <h6 className="text-gray-500 font-bold">
                                Your Friends
                            </h6>
                        )}
                        <button
                            className="bg-[#eeeeee] p-3 rounded-[50%]"
                            onClick={() => {
                                setSearch(prev => !prev);
                            }}
                        >
                            {search ? (
                                <IconX
                                    className="text-red-500"
                                    width={15}
                                    height={15}
                                />
                            ) : (
                                <IconSearch
                                    className="text-gray-900"
                                    width={15}
                                    height={15}
                                />
                            )}
                        </button>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2 mt-2">
                        <div className="p-0 overflow-x-auto">
                            <S.Table>
                                <thead className="align-bottom">
                                    <tr>
                                        <S.TableTh className="w-full">
                                            Name
                                        </S.TableTh>
                                        <S.TableTh>Status</S.TableTh>
                                        <S.TableTh>Chat</S.TableTh>
                                    </tr>
                                </thead>
                                {!data.loading ? (
                                    <>
                                        {!search && (
                                            <>
                                                {data.friends.length > 0 ? (
                                                    <UserList
                                                        users={data.friends}
                                                    />
                                                ) : (
                                                    <h1 className="text-center text-gray-900 mt-4 mb-5">
                                                        Seus amigos aparecerão
                                                        aqui :)
                                                    </h1>
                                                )}
                                            </>
                                        )}
                                        {search && (
                                            <>
                                                {filteredDatas.length > 0 ? (
                                                    <UserList
                                                        users={filteredDatas}
                                                    />
                                                ) : (
                                                    <h1 className="text-center text-gray-900 mt-4 mb-5">
                                                        Nenhum usuário
                                                        encontrado :)
                                                    </h1>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <div className='w-full py-7 flex justify-center'>
                                        <LoadingAnimationIcon bgColor={'gray'} mainColor={'#0063f2'}/>
                                    </div>
                                )}
                            </S.Table>
                        </div>
                    </div>
                </div>
            </div>
        </S.Wrapper>
    );
}

// Componente para a célula com conteúdo de usuário
const UserContent = ({ name, nickname, avatar, isOnline }) => {
    return (
        <tr>
            <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                <Link href={`/users/${nickname}`} className="flex px-2 py-1">
                    <div>
                        <img
                            src={avatar}
                            className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                            alt="user1"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal text-gray-500">
                            {name}
                        </h6>
                        <p className="mb-0 text-xs leading-tight text-gray-500 dark:opacity-80 text-slate-400">
                            {nickname}
                        </p>
                    </div>
                </Link>
            </td>
            <td className="p-2 text-sm leading-normal text-center align-middle border-bwhitespace-nowrap">
                <span
                    className={`${
                        isOnline ? 'bg-[#0063f2]' : 'bg-gray-500'
                    } bg-gradient-to-tl py-1 px-3 text-[10px] rounded-[200px] py-1.4 text-white`}
                >
                    {isOnline ? 'online' : 'offline'}
                </span>
            </td>
            <td className="p-2 text-sm leading-normal text-center align-middle border-bwhitespace-nowrap">
                <button>
                    <IconBrandHipchat size={'20px'} className='text-gray-500 hover:text-blue-500' />
                </button>
            </td>
        </tr>
    );
};

const UserList = ({ users }) => {
    return (
        <tbody>
            {users.map((user, index) => (
                <UserContent
                    name={user.name}
                    nickname={user.nickname}
                    avatar={user.avatar}
                    isOnline={user.status}
                    key={index}
                />
            ))}
        </tbody>
    );
};
