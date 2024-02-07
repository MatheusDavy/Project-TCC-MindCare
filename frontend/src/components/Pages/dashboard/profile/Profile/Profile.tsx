import { Dispatch, SetStateAction } from 'react';
import * as S from './Profile.style';

// Icons
import { IconEdit, IconX, IconCheck } from '@tabler/icons-react';
import { LoadingAnimationIcon } from 'src/components/Materials/Icons/loading-animated';

type Props = {
    userName: string;
    edit: boolean;
    image: string;
    loading: boolean;
    openCrop: () => void;
    setEdit: Dispatch<SetStateAction<boolean>>;
};

export function Profile({
    userName,
    edit,
    image,
    loading,
    openCrop,
    setEdit,
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
                <S.UserName>{userName}</S.UserName>
            </div>
            <S.ButtonWrapper>
                {!loading && (
                    <S.ButtonAction
                        $type={!edit ? 'edit' : 'cancel'}
                        onClick={() => {
                            setEdit(prev => !prev);
                        }}
                    >
                        {!edit ? 'Editar' : 'Cancelar'}
                        {!edit ? (
                            <IconEdit width={20} height={20} />
                        ) : (
                            <IconX width={20} height={20} />
                        )}
                    </S.ButtonAction>
                )}
                {edit && (
                    <S.ButtonAction
                        $type="submit"
                        form="forms-update-user-data"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? <LoadingAnimationIcon bgColor={'text-gray-500'} mainColor={'text-white'} /> : 'Salvar'}
                        <IconCheck width={20} height={20} />
                    </S.ButtonAction>
                )}
            </S.ButtonWrapper>
        </S.ProfileWrapper>
    );
}
