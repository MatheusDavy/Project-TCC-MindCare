import { useLogic } from './Forms.logic';
import * as S from './Forms.style';
import { useEffect, useState } from 'react';
import { SelectProfilePhoto } from '../ModaUpdateProfile/Modal.comp';
import { Profile } from '../Profile/Profile';
import { TwInput } from 'src/styles/configs/inputs/tw-input';
import {
    IconUser,
    IconNumber18Small,
    IconLocation,
    IconBuilding,
    IconFlag,
    IconId
} from '@tabler/icons-react';
import { User } from 'src/types/users/usert.types';

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
                        edit={data.edit}
                        image={profileUpdate}
                        loading={data.loading}
                        setEdit={methods.setEdit}
                        openCrop={() => {
                            setProfileSelectModal(true);
                        }}
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
    return (
        <S.Form
            $as={data.edit ? 'form' : 'div'}
            id="forms-update-user-data"
            onSubmit={methods.handleSubmit(methods.update)}
        >
            <h6 className="text-2x1 font-bold">USER INFORMATION</h6>
            <S.FormCategoryWrapper>
                <div>
                    <S.FormLabel>Name</S.FormLabel>
                    <S.FormInputWrapper>
                        <S.FormInputSVG>
                            <IconUser  width={25} height={25}/>
                        </S.FormInputSVG>

                        <TwInput
                            {...methods.register('name')}
                            type="text"
                            disabled={data.edit ? false : true}
                            placeholder="Enter email to get started"
                            $error={data.errors.name ? true : false}
                        />
                    </S.FormInputWrapper>
                </div>
                <div>
                    <S.FormLabel>Email</S.FormLabel>
                    <S.FormInputWrapper>
                        <S.FormInputSVG>
                            <svg
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
                            </svg>
                        </S.FormInputSVG>

                        <TwInput
                            {...methods.register('email')}
                            type="email"
                            disabled={data.edit ? false : true}
                            placeholder="Enter email to get started"
                            $error={data.errors.email ? true : false}
                        />
                    </S.FormInputWrapper>
                </div>
                {Boolean(data.userDatas.utilsInfo.age || data.edit) && (
                    <div>
                        <S.FormLabel>Age</S.FormLabel>
                        <S.FormInputWrapper>
                            <S.FormInputSVG>
                                <IconNumber18Small width={25} height={30} />
                            </S.FormInputSVG>

                            <TwInput
                                {...methods.register('utilsInfo.age')}
                                type="number"
                                disabled={data.edit ? false : true}
                                placeholder="Enter your age"
                                $error={
                                    data.errors.utilsInfo?.age ? true : false
                                }
                            />
                        </S.FormInputWrapper>
                    </div>
                )}
                {Boolean(data.userDatas.utilsInfo.document || data.edit) && (
                    <div>
                        <S.FormLabel>Document</S.FormLabel>
                        <S.FormInputWrapper>
                            <S.FormInputSVG>
                                <IconId width={20} height={20}/>
                            </S.FormInputSVG>

                            <TwInput
                                {...methods.register('utilsInfo.document')}
                                type="number"
                                disabled={data.edit ? false : true}
                                placeholder="Enter your age"
                                $error={
                                    data.errors.utilsInfo?.document
                                        ? true
                                        : false
                                }
                            />
                        </S.FormInputWrapper>
                    </div>
                )}
            </S.FormCategoryWrapper>
            <hr />
            {Boolean(
                data.userDatas.utilsInfo.cep ||
                    data.userDatas.utilsInfo.city ||
                    data.userDatas.utilsInfo.state ||
                    data.edit
            ) && <h6 className="text-2x1 font-bold">ADRESS INFORMATION</h6>}
            <S.FormCategoryWrapper>
                {Boolean(data.userDatas.utilsInfo.cep || data.edit) && (
                    <div>
                        <S.FormLabel>CEP</S.FormLabel>
                        <S.FormInputWrapper>
                            <S.FormInputSVG>
                                <IconLocation width={20} height={20} />
                            </S.FormInputSVG>

                            <TwInput
                                {...methods.register('utilsInfo.cep')}
                                type="number"
                                disabled={data.edit ? false : true}
                                placeholder="Enter your postal code"
                                onChange={(e) => {
                                    methods.getUserAddressInfo(e.target.value);
                                }}
                                $error={
                                    data.errors.utilsInfo?.cep ? true : false
                                }
                            />
                        </S.FormInputWrapper>
                    </div>
                )}
                {Boolean(data.userDatas.utilsInfo.city || data.edit) && (
                    <div>
                        <S.FormLabel>City</S.FormLabel>
                        <S.FormInputWrapper>
                            <S.FormInputSVG>
                                <IconBuilding width={20} height={20} />
                            </S.FormInputSVG>

                            <TwInput
                                {...methods.register('utilsInfo.city')}
                                type="text"
                                disabled={data.edit ? false : true}
                                placeholder="Enter your city"
                                $error={
                                    data.errors.utilsInfo?.city ? true : false
                                }
                            />
                        </S.FormInputWrapper>
                    </div>
                )}
                {Boolean(data.userDatas.utilsInfo.state || data.edit) && (
                    <div>
                        <S.FormLabel>State</S.FormLabel>
                        <S.FormInputWrapper>
                            <S.FormInputSVG>
                                <IconFlag width={20} height={20} />
                            </S.FormInputSVG>

                            <TwInput
                                {...methods.register('utilsInfo.state')}
                                type="text"
                                disabled={data.edit ? false : true}
                                placeholder="Enter your state"
                                $error={
                                    data.errors.utilsInfo?.state ? true : false
                                }
                            />
                        </S.FormInputWrapper>
                    </div>
                )}
            </S.FormCategoryWrapper>
        </S.Form>
    );
};
