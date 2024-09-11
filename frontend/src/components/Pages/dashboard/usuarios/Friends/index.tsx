import { useState } from 'react';
import * as S from './style';
import { useLogic } from './logic';
import { useDialogActionsContext } from 'src/context/Dialog/Dialog.context';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

export function FriendTables() {
    const { data, methods } = useLogic();
    const { setData } = useDialogActionsContext();
    const [input, setInput] = useState<string>('');

    if (data.loadingFriendRequests) {
        return <LoadingAnimationIcon bgColor='white' mainColor='gray' />;
    }

    console.log(data.friends);

    const filteredDatas = data.friends.filter(item => {
        const filter = input.toLocaleLowerCase();
        const name = item.name.toLocaleLowerCase() || '';
        const nickname = item.nickname.toLocaleLowerCase() || '';

        if (name.includes(filter) || nickname.includes(nickname)) {
            return item;
        }
    });

    return (
        <div className='w-full flex flex-col gap-5'>
            <h1 className='text-3xl font-bold my-5'>
                Amigos
            </h1>


            {!!data.friends.length ? (
                <div className='flex flex-col gap-10'>
                    <input
                        type="text"
                        id="first_name"
                        className="max-w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block w-full p-2.5 outline-none"
                        placeholder="John"
                        onChange={e => {
                            setInput(e.target.value);
                        }}
                    />
                    <div className='grid grid-cols-6 gap-2'>
                        {filteredDatas.map(({ name, nickname, utilsInfo }) => (
                            <div key={name} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-auto p-4">
                                <div
                                    className="relative aspect-square overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        src={utilsInfo.avatar}
                                        alt={`avatar-${nickname}`}
                                    />
                                </div>
                                <div className="lg:mt-5 mt-2 mb-3">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {name}
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        {nickname}
                                    </p>
                                </div>
                                <S.ButtonAction $type='cancel' onClick={() => {
                                    setData({
                                        open: true,
                                        message: `Você tem certeza que deseja desfazer a amizade com ${nickname}, você não poderá enviar/receber solicitações deste usuário durante 10 dias`,
                                        action: () => { methods.handleRemoveFriend(nickname); },
                                        type: 'yes-or-no'
                                    });
                                }}>
                                    Remover amizade
                                </S.ButtonAction>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <h2>Você ainda não possui amigos</h2>
            )}
        </div>
    );
};
