import { useLogic } from './logic';
import * as S from './style';
import { useEffect, useState } from 'react';
import { SelectProfilePhoto } from '../ModaUpdateProfile';
import { Profile } from '../../../../Sections/Profile/Profile';
import {
    IconUser,
    IconNumber18Small,
    IconLocation,
    IconBuilding,
    IconFlag,
    IconId,
    IconHash,
    IconEdit,
    IconX
} from '@tabler/icons-react';
import { User } from 'src/types/users/usert.types';
import useDebounce from 'src/utils/use-debounce';
import { InputForms } from 'src/components/Materials/Inputs/Input-forms';
import { ButtonCustom } from 'src/components/Materials/Buttons/ButtonCustom';

export function FormsComp() {
    const { data, methods } = useLogic();
    const [profileSelectModal, setProfileSelectModal] = useState(false);
    const [profileUpdate, setProfileUpdate] = useState('');

    useEffect(() => {
        setProfileUpdate(data.userDatas?.utilsInfo?.avatar!);
    }, [data.userDatas]);

    const update = (data: User) => {
        const payload = {...data};
        if (payload.utilsInfo) {
            payload.utilsInfo.avatar = profileUpdate;
        }

        methods.onSubmit(payload);
    };

    return (
        <S.Wrapper>
            {!data.loadingUserDatas && data.userDatas && (
                <>
                    <Profile
                        userName={data.userDatas.name!}
                        nickname={data.userDatas.nickname!}
                        edit={data.edit}
                        image={profileUpdate}
                        openCrop={() => {
                            setProfileSelectModal(true);
                        }}
                        actions={
                            <S.ButtonWrapper>
                                {!data.loading && (
                                    <ButtonCustom
                                        theme={!data.edit ? 'BLUE' : 'RED'}
                                        onClick={() => {
                                            methods.setEdit(prev => !prev);
                                        }}
                                    >
                                        {!data.edit ? 'Editar' : 'Cancelar'}
                                        {!data.edit ? (
                                            <IconEdit width={20} height={20} />
                                        ) : (
                                            <IconX width={20} height={20} />
                                        )}
                                    </ButtonCustom>
                                )}
                                {data.edit && (
                                    <ButtonCustom
                                        form="forms-update-user-data"
                                        theme='BLUE'
                                        type="submit"
                                        disabled={data.loading}
                                        loading={data.loading}
                                    >
                                        Salvar
                                    </ButtonCustom>
                                )}
                            </S.ButtonWrapper>
                        }
                    />

                    <Forms data={data} methods={{...methods, update}} />

                    {profileSelectModal && (
                        <SelectProfilePhoto
                            closeModal={() => setProfileSelectModal(false)}
                            updateProfile={(avatar: string) =>
                                setProfileUpdate(avatar)
                            }
                        />
                    )}
                </>
            )}
        </S.Wrapper>
    );
}

const Forms = ({ data, methods }) => {
    const [validNickname, setValidNickname] = useState<boolean | null>(null);

    const debouncedNickname = useDebounce((nickname => methods.verifyNickname(nickname)), 1000);

    const handleInputChange = async (event) => {
        const { value } = event.target;
        const result: any = await debouncedNickname(value);

        return setValidNickname(result);
    };

    const handleSubmit = (payload) => {
        if (validNickname !== false){
            console.log('call');
            methods.update(payload);
        };
    };

    return (
        <S.Form
            $as={data.edit ? 'form' : 'div'}
            id="forms-update-user-data"
            onSubmit={methods.handleSubmit(handleSubmit)}
        >
            <h6 className="text-2x1 font-bold">USER INFORMATION</h6>
            <S.FormCategoryWrapper>
                <InputForms
                    label='Nome'
                    type="text"
                    disabled={!data.edit}
                    placeholder="Digite seu nome"
                    $error={!!data.errors.name}
                    icon={<IconUser width={25} height={25} />}
                    name='name'
                    methods={methods}
                />
                <InputForms
                    label='Email'
                    type='email'
                    disabled={true}
                    placeholder="contato@gmail.com"
                    icon={<svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>}
                    name='email'
                    methods={methods}
                />
                <InputForms
                    label='Nome de usuário'
                    type='text'
                    disabled={!data.edit}
                    placeholder="Usuario01"
                    $error={data.errors.nickname || validNickname == false}
                    onChange={handleInputChange}
                    icon={<IconHash />}
                    name='nickname'
                    methods={methods}
                    errorMessage={'Nome de usuário indisponível'}
                />
                {Boolean(data.userDatas.utilsInfo.age || data.edit) && (
                    <InputForms
                        label='Age'
                        type="number"
                        disabled={!data.edit}
                        placeholder="Enter your age"
                        $error={data.errors.utilsInfo?.age}
                        icon={<IconNumber18Small width={25} height={30} />}
                        name='utilsInfo.age'
                        methods={methods}
                    />
                )}
                {Boolean(data.userDatas.utilsInfo.document || data.edit) && (
                    <InputForms
                        label='Document'
                        type="number"
                        disabled={!data.edit}
                        placeholder="Enter your document number"
                        $error={data.errors.utilsInfo?.document}
                        icon={<IconId width={20} height={20} />}
                        name='utilsInfo.document'
                        methods={methods}
                    />
                )}
            </S.FormCategoryWrapper>
            <hr />
            {Boolean(
                data.userDatas.utilsInfo.cep ||
                data.userDatas.utilsInfo.city ||
                data.userDatas.utilsInfo.state ||
                data.edit
            ) && (
                <>
                    <InputForms
                        label='CEP'
                        type="number"
                        disabled={!data.edit}
                        placeholder="Enter your postal code"
                        $error={data.errors.utilsInfo?.cep}
                        icon={<IconLocation width={20} height={20} />}
                        name='utilsInfo.cep'
                        methods={methods}
                        onChange={(e) => {
                            methods.getUserAddressInfo(e.target.value);
                        }}
                    />
                    <InputForms
                        label='City'
                        type="text"
                        disabled={!data.edit}
                        placeholder="Enter your city"
                        $error={data.errors.utilsInfo?.city}
                        icon={<IconBuilding width={20} height={20} />}
                        name='utilsInfo.city'
                        methods={methods}
                    />
                    <InputForms
                        label='State'
                        type="text"
                        disabled={!data.edit}
                        placeholder="Enter your state"
                        $error={data.errors.utilsInfo?.state}
                        icon={<IconFlag width={20} height={20} />}
                        name='utilsInfo.state'
                        methods={methods}
                    />
                </>
            )}
        </S.Form>
    );
};
