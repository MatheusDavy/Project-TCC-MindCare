import { InputTextSettings } from 'src/styles/configs/ui/inputs/TextField';
import { useLogic } from './Forms.logic';
import * as S from './Forms.style';
import { IconEdit, IconX, IconCheck, IconPencil } from '@tabler/icons-react';
import { Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { SelectProfilePhoto } from '../ModaUpdateProfile/Modal.comp';
import { AvatarUser } from 'src/components/Materials/Profiles/user-profile/profile.comp';
import { User } from 'src/types/users/usert.types';

export function FormsComp() {
    const { data, methods } = useLogic();
    const [profileSelectModal, setProfileSelectModal] = useState(false);
    const [profileUpdate, setProfileUpdate] = useState('');

    useEffect(() => {
        setProfileUpdate(data.userDatas?.utilsInfo?.avatar!);
    }, [data.userDatas]);

    return (
        <S.Group>
            {!data.loadingUserDatas && data.userDatas && (
                <>
                    <S.ButtonWrapper>
                        {!data.loading && (
                            <S.ButtonEdit
                                $cancelButton={data.edit}
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
                            </S.ButtonEdit>
                        )}
                        {data.edit && (
                            <S.ButtonSubmit
                                loading={data.loading}
                                form="forms-update-user-data"
                                type="submit"
                            >
                                Salvar
                                <IconCheck width={20} height={20} />
                            </S.ButtonSubmit>
                        )}
                    </S.ButtonWrapper>

                    {data.edit && (
                        <FormsEdit
                            data={{ ...data, profileUpdate }}
                            methods={{
                                ...methods,
                                profileSelectModal,
                                setProfileSelectModal,
                            }}
                        />
                    )}
                    {!data.edit && (
                        <DatasView data={{ ...data, profileUpdate }} />
                    )}
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
        </S.Group>
    );
}

const FormsEdit = ({ data, methods }) => {
    const tYup = useTranslations('Yup');
    const tForms = useTranslations('Forms');

    const handleSubmit = (payload: User) => {
        console.log(payload);
        const refactor = {
            ...payload,
            utilsInfo: {
                ...payload?.utilsInfo,
                avatar: data.profileUpdate,
            },
        };

        methods.onSubmit(refactor);
    };

    return (
        <>
            <S.ProfileWrapper>
                <div className="flex flex-col items-center pt-12 relative mb-10">
                    <AvatarUser
                        photo={data.profileUpdate}
                        name={data.userDatas.name}
                        size={150}
                        actions={
                            <button
                                className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-300 hover:bg-gray-400 border border-gray-600"
                                title="Change photo"
                                onClick={() =>
                                    methods.setProfileSelectModal(true)
                                }
                            >
                                <IconPencil />
                            </button>
                        }
                    />
                </div>
            </S.ProfileWrapper>
            <S.Forms
                onSubmit={methods.handleSubmit(handleSubmit)}
                id="forms-update-user-data"
            >
                <S.FormWrapper>
                    <Controller
                        name="name"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-name')}
                                </S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="João Batista"
                                    onChange={onChange}
                                    error={Boolean(data.errors.name)}
                                />
                            </>
                        )}
                    />
                    {data.errors.name && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.name.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="email"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>Email</S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="Example@gmail.com"
                                    onChange={onChange}
                                    error={Boolean(data.errors.email)}
                                />
                            </>
                        )}
                    />
                    {data.errors.email && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.email.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="utilsInfo.age"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-age')}
                                </S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    type="number"
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="18"
                                    onChange={onChange}
                                    error={Boolean(data.errors.utilsInfo?.age)}
                                />
                            </>
                        )}
                    />
                    {data.errors.utilsInfo?.age && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.utilsInfo?.age.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="utilsInfo.document"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-document')}
                                </S.InputLabel>

                                <InputTextSettings
                                    autoFocus
                                    type='number'
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="9999999999"
                                    onChange={onChange}
                                    error={Boolean(
                                        data.errors.utilsInfo?.document
                                    )}
                                />
                            </>
                        )}
                    />
                    {data.errors.utilsInfo?.document && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.utilsInfo?.document.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="utilsInfo.cep"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-postal-code')}
                                </S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    type="number"
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="00000000"
                                    onChange={e => {
                                        const value = e.target.value;
                                        const replaced = value.replace(/[^0-9]/g, '');
                                        methods.getUserAddressInfo(replaced);
                                        onChange(replaced);
                                    }}
                                    error={Boolean(data.errors.utilsInfo?.cep)}
                                />
                            </>
                        )}
                    />
                    {data.errors.utilsInfo?.cep && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.utilsInfo?.cep.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="utilsInfo.city"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-city')}
                                </S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="João Batista"
                                    onChange={onChange}
                                    error={Boolean(data.errors.utilsInfo?.city)}
                                />
                            </>
                        )}
                    />
                    {data.errors.utilsInfo?.city && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.utilsInfo?.city.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>

                <S.FormWrapper>
                    <Controller
                        name="utilsInfo.state"
                        control={data.control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <S.InputLabel>
                                    {tForms('label-state')}
                                </S.InputLabel>
                                <InputTextSettings
                                    autoFocus
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="State"
                                    onChange={e => {
                                        onChange(e);
                                    }}
                                    error={Boolean(
                                        data.errors.utilsInfo?.state
                                    )}
                                />
                            </>
                        )}
                    />
                    {data.errors.utilsInfo?.state && (
                        <S.TextError
                            sx={{ marginLeft: '10px', color: 'error.main' }}
                        >
                            {tYup(`${data.errors.utilsInfo?.state.message}`)}
                        </S.TextError>
                    )}
                </S.FormWrapper>
            </S.Forms>
        </>
    );
};

const DatasView = ({ data }) => {
    return (
        <>
            <S.ProfileWrapper>
                <div className="flex flex-col items-center pt-12 relative mb-10">
                    <AvatarUser
                        photo={data.profileUpdate}
                        name={data.userDatas.name}
                        size={150}
                    />
                </div>
            </S.ProfileWrapper>
            <S.DataViewWrapper as={'div'}>
                <S.DataViewGroup>
                    <S.DataViewLabel>Nome</S.DataViewLabel>
                    <S.DataViewResponse>
                        {data.userDatas?.name}
                    </S.DataViewResponse>
                </S.DataViewGroup>

                <S.DataViewGroup>
                    <S.DataViewLabel>Email</S.DataViewLabel>
                    <S.DataViewResponse>
                        {data.userDatas?.email}
                    </S.DataViewResponse>
                </S.DataViewGroup>

                {data.userDatas?.utilsInfo?.age && (
                    <S.DataViewGroup>
                        <S.DataViewLabel>Age</S.DataViewLabel>
                        <S.DataViewResponse>
                            {data.userDatas?.utilsInfo?.age}
                        </S.DataViewResponse>
                    </S.DataViewGroup>
                )}

                {data.userDatas?.utilsInfo?.document && (
                    <S.DataViewGroup>
                        <S.DataViewLabel>CPF</S.DataViewLabel>
                        <S.DataViewResponse>
                            {data.userDatas?.utilsInfo?.document}
                        </S.DataViewResponse>
                    </S.DataViewGroup>
                )}

                {data.userDatas?.utilsInfo?.cep && (
                    <S.DataViewGroup>
                        <S.DataViewLabel>CEP</S.DataViewLabel>
                        <S.DataViewResponse>
                            {data.userDatas?.utilsInfo?.cep}
                        </S.DataViewResponse>
                    </S.DataViewGroup>
                )}

                {data.userDatas?.utilsInfo?.city && (
                    <S.DataViewGroup>
                        <S.DataViewLabel>CIDADE</S.DataViewLabel>
                        <S.DataViewResponse>
                            {data.userDatas?.utilsInfo?.city}
                        </S.DataViewResponse>
                    </S.DataViewGroup>
                )}

                {data.userDatas?.utilsInfo?.state && (
                    <S.DataViewGroup>
                        <S.DataViewLabel>ESTADO</S.DataViewLabel>
                        <S.DataViewResponse>
                            {data.userDatas?.utilsInfo?.state}
                        </S.DataViewResponse>
                    </S.DataViewGroup>
                )}
            </S.DataViewWrapper>
        </>
    );
};
