import { ReactNode } from 'react';
import * as S from './Profile.style';

// Icons
import { IconCheck, IconEdit, IconMessage, IconUserCancel, IconUserPlus, IconX } from '@tabler/icons-react';
import { useDialogActionsContext } from 'src/context/Dialog/Dialog.context';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';
import { FriendType } from 'src/types/friend-types';
import { useLogic } from './Profile.logic';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';

type Props = {
    userName: string;
    nickname: string
    edit?: boolean;
    image: string;
    actions?: ReactNode;
    requestFriendStatus?: FriendType;
    openCrop?: () => void;
    refetch?: any
};

export function Profile({
    userName,
    nickname,
    edit,
    image,
    actions,
    requestFriendStatus,
    openCrop,
    refetch,
}: Props) {
    return (
        <S.ProfileWrapper>
            <div className="flex items-center gap-10">
                <S.ProfileImage>
                    <img
                        src={image}
                        alt="User Profile"
                        width={19}
                        height={19}
                        className="w-full aspect-square object-cover h-[100px] w-[100px]  shadow-2xl rounded-xl"
                    />
                    {edit && (
                        <S.ButtonEdit onClick={openCrop}>
                            <IconEdit
                                width={35}
                                height={35}
                                className="text-white"
                            />
                        </S.ButtonEdit>
                    )}
                </S.ProfileImage>
                <div className='flex flex-col gap-2'>
                    <S.UserName>{userName}</S.UserName>
                    <span className='text-gray-900/60'>{nickname}</span>
                </div>
            </div>
            {requestFriendStatus && <FriendRequestActions nickname={nickname} status={requestFriendStatus} refetch={refetch} />}
            {actions}
        </S.ProfileWrapper>
    );
}

type FriendRequestActionsProps = {
    status: FriendType;
    nickname: string;
    refetch: any
}

const FriendRequestActions = ({ status, nickname, refetch }: FriendRequestActionsProps) => {
    const { data, methods } = useLogic({ nickname, refetch });
    const { setData } = useDialogActionsContext();

    if (status == 'RECUSED') return <></>;

    return (
        <>
            {status == 'NONE' && (
                <S.ButtonAction
                    $type='submit'
                    onClick={() => {
                        methods.handleAddFriend();
                    }}
                >
                    {data.loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconUserPlus />}
                </S.ButtonAction>
            )}
            {status == 'FRIEND' && (
                <div className='flex align-center gap-3'>
                    <S.ButtonAction $type='cancel' onClick={() => {
                        setData({
                            message: 'Deseja realmente remover essa pessoa da sua lista de amigos?',
                            open: true,
                            action: methods.handleCancelFriend,
                            type: 'yes-or-no'
                        });
                    }}>
                        {data.loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconUserCancel />}
                    </S.ButtonAction>
                    <S.ButtonChat href={`/chat/${nickname}`}>
                        <IconMessage />
                    </S.ButtonChat>
                </div>
            )}
            {status == 'SENT' && (
                <S.ButtonAction $type='cancel' onClick={() => {
                    setData({
                        message: 'Deseja realmente cancelar a solicitação de amizade?',
                        open: true,
                        action: methods.handleCancelFriendRequest,
                        type: 'yes-or-no'
                    });
                }}>
                    {data.loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconUserCancel />}
                </S.ButtonAction>
            )}
            {status == 'PENDING' && (
                <TooltipUI
                    title={<p className='text-center'>Este usuário deseja <br /> ser seu amigo</p>}
                    placement='top'
                    open={true}
                >
                    <div className='flex align-center gap-3'>
                        <S.ButtonAction $type='cancel' onClick={() => {
                            setData({
                                message: 'Se você recusar o pedido de amizade, você não poderá enviar/receber solicitações dessa pessoa durante 10 dias',
                                open: true,
                                action: methods.handleCancelFriend,
                                type: 'yes-or-no'
                            });
                        }}>
                            {data.loading ? <LoadingAnimationIcon bgColor='white' mainColor='gray' /> : <IconX />}
                        </S.ButtonAction>
                        <S.ButtonAction
                            $type='submit'
                            onClick={methods.handleAcceptFriendRequest}
                        >
                            <IconCheck />
                        </S.ButtonAction>
                    </div>
                </TooltipUI>
            )}
        </>
    );
};


