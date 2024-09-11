/* eslint-disable no-unused-vars */

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as S from './style';
import { useLogic } from './logic';
import { useDialogActionsContext } from 'src/context/Dialog/Dialog.context';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { IconCheck, IconX } from '@tabler/icons-react';

function createData(
    avatar: string,
    name: string,
    nickname: string,
) {
    return { avatar, name, nickname };
}

export function FriendRequestTables() {
    const { data, methods } = useLogic();
    const { setData } = useDialogActionsContext();

    if (data.loadingFriendRequests) {
        return <LoadingAnimationIcon bgColor='white' mainColor='gray' />;
    }

    const rows = data.friendRequests.map((datas) => {
        return createData(datas.utilsInfo.avatar, datas.name, datas.nickname);
    });

    return (
        <div className='w-full flex flex-col gap-5'>
            <h1 className='text-3xl font-bold my-5'>
                Veja quem quer ser seu amigo :)
            </h1>

            {!!data.friendRequests.length ? (
                <div className='grid grid-cols-6 gap-2'>
                    {rows.map((row: any) => (
                        <div key={row.name} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-auto p-4">
                            <div
                                className="relative aspect-square overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img
                                    src={row.avatar}
                                    alt={`avatar-${row.nickname}`}
                                />
                            </div>
                            <div className="lg:mt-5 mt-2">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {row.name}
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {row.nickname}
                                </p>
                            </div>
                            <div className="lg:mt-5 mt-2 flex align-center justify-end gap-3">
                                <S.ButtonAction $type='cancel' onClick={() => {
                                    setData({
                                        message: 'Se você recusar a solicitação de amizade recebida, você não poderá enviar/receber solicitações deste usuário durante 10 dias',
                                        open: true,
                                        action: () => { methods.handleCancelFriend(row.nickname); },
                                        type: 'yes-or-no'
                                    });
                                }}>
                                    Cancelar
                                </S.ButtonAction>
                                <S.ButtonAction
                                    $type='submit'
                                    onClick={() => { methods.handleAcceptFriendRequest(row.nickname); }}
                                >
                                    Aceitar
                                </S.ButtonAction>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>Você não tem solicitações de amizades para aceitar</h2>
            )}
        </div>
    );
};
