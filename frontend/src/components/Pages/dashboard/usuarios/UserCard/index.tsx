import * as S from './style';
import { useLogic } from './logic';
import { useDialogActionsContext } from 'src/context/Dialog/Dialog.context';
import { TooltipUI } from 'src/styles/configs/tooltips/Tooltips';

type Props = {
    photo: string
    nickname: string
    name: string
    status: 'RECUSED' | 'FRIEND' | 'SENT' | 'PENDING' | 'NONE'
    refetch: () => void
}

export default function UserCard({ nickname, name, photo, status, refetch }: Props) {
    const { methods } = useLogic({ nickname, refetch });
    const { setData } = useDialogActionsContext();

    return (
        <S.Card>
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt={nickname} />
            <h5 className="mb-1 text-xl font-medium text-gray-900">{nickname}</h5>
            <span className="text-sm text-gray-500 ">{name}</span>
            <div className="flex mt-4 md:mt-6 gap-2">
                {status === 'NONE' && (
                    <button
                        onClick={methods.handleAddFriend}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Adicionar
                    </button>
                )}
                {status === 'PENDING' && (
                    <TooltipUI
                        title={<p className='text-sm p-2 text-center font'>Este usuário deseja <br /> ser seu amigo</p>}
                        placement='bottom'
                        arrow
                        open={true}
                    >
                        <div className='gap-2 flex'>
                            <button
                                onClick={() => {
                                    setData({
                                        message: 'Se você recusar o pedido de amizade, você não poderá enviar/receber solicitações dessa pessoa durante 10 dias',
                                        open: true,
                                        action: methods.handleCancelFriend,
                                        type: 'yes-or-no'
                                    });
                                }}
                                className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-500/80"
                            >
                                Recusar
                            </button>
                            <button
                                onClick={methods.handleAcceptFriendRequest}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                Aceitar
                            </button>
                        </div>
                    </TooltipUI>
                )}
                {status === 'SENT' && (
                    <button
                        onClick={() => {
                            methods.handleCancelFriendRequest();
                        }}
                        className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-500/80"
                    >
                        Cancelar Solicitação
                    </button>)}
                {status === 'FRIEND' && (
                    <button
                        onClick={() => {
                            setData({
                                message: 'Deseja realmente remover essa pessoa da sua lista de amigos?',
                                open: true,
                                action: methods.handleCancelFriend,
                                type: 'yes-or-no'
                            });
                        }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Remover Amizade
                    </button>)}
            </div>
        </S.Card>
    );
};
