import { InputTextSettings } from 'src/styles/configs/ui/inputs/TextField';
import { useLogic } from './Forms.logic';
import * as S from './Forms.style';
import { IconEdit, IconX, IconCheck } from '@tabler/icons-react';
import { Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';

export function FormsComp() {
    const { data, methods } = useLogic();

    return (
        <S.Group>
            <S.ButtonWrapper>
                {!data.loading && (
                    <S.ButtonEdit
                        $cancelButton={data.edit}
                        onClick={() => {
                            console.log('click[');
                            methods.setEdit(prev => !prev);
                        }}
                    >
                        {!data.edit ? (
                            <>
                                Editar
                                <IconEdit width={20} height={20} />
                            </>
                        ) : (
                            <>
                                Cancelar
                                <IconX width={20} height={20} />
                            </>
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

            {data.edit && <FormsEdit data={data} methods={methods} />}
            {!data.edit && <DatasView />}
        </S.Group>
    );
}

const FormsEdit = ({ data, methods }) => {
    const tYup = useTranslations('Yup');
    const tForms = useTranslations('Forms');

    return (
        <S.Forms
            onSubmit={methods.handleSubmit(methods.onSubmit)}
            id="forms-update-user-data"
        >
            <S.FormWrapper>
                <Controller
                    name="name"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>{tForms('label-name')}</S.InputLabel>
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
                    name="age"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>{tForms('label-age')}</S.InputLabel>
                            <InputTextSettings
                                autoFocus
                                type="number"
                                value={value}
                                onBlur={onBlur}
                                placeholder="18"
                                onChange={onChange}
                                error={Boolean(data.errors.age)}
                            />
                        </>
                    )}
                />
                {data.errors.age && (
                    <S.TextError
                        sx={{ marginLeft: '10px', color: 'error.main' }}
                    >
                        {tYup(`${data.errors.age.message}`)}
                    </S.TextError>
                )}
            </S.FormWrapper>

            <S.FormWrapper>
                <Controller
                    name="document"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>
                                {tForms('label-document')}
                            </S.InputLabel>

                            <InputTextSettings
                                autoFocus
                                value={value}
                                onBlur={onBlur}
                                placeholder="9999999999"
                                onChange={onChange}
                                error={Boolean(data.errors.document)}
                            />
                        </>
                    )}
                />
                {data.errors.document && (
                    <S.TextError
                        sx={{ marginLeft: '10px', color: 'error.main' }}
                    >
                        {tYup(`${data.errors.name.document}`)}
                    </S.TextError>
                )}
            </S.FormWrapper>

            <S.FormWrapper>
                <Controller
                    name="cep"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>{tForms('label-postal-code')}</S.InputLabel>
                            <InputTextSettings
                                autoFocus
                                type='number'
                                value={value}
                                onBlur={onBlur}
                                placeholder="00000000"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    methods.getUserAddressInfo(value);
                                    onChange(value);
                                }}
                                error={Boolean(data.errors.cep)}
                            />
                        </>
                    )}
                />
                {data.errors.cep && (
                    <S.TextError
                        sx={{ marginLeft: '10px', color: 'error.main' }}
                    >
                        {tYup(`${data.errors.cep.message}`)}
                    </S.TextError>
                )}
            </S.FormWrapper>

            <S.FormWrapper>
                <Controller
                    name="city"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>{tForms('label-city')}</S.InputLabel>
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
                {data.errors.city && (
                    <S.TextError
                        sx={{ marginLeft: '10px', color: 'error.main' }}
                    >
                        {tYup(`${data.errors.city.message}`)}
                    </S.TextError>
                )}
            </S.FormWrapper>

            <S.FormWrapper>
                <Controller
                    name="state"
                    control={data.control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <S.InputLabel>{tForms('label-name')}</S.InputLabel>
                            <InputTextSettings
                                autoFocus
                                value={value}
                                onBlur={onBlur}
                                placeholder="State"
                                onChange={(e) => {
                                    onChange(e);
                                }}
                                error={Boolean(data.errors.city)}
                            />
                        </>
                    )}
                />
                {data.errors.city && (
                    <S.TextError
                        sx={{ marginLeft: '10px', color: 'error.main' }}
                    >
                        {tYup(`${data.errors.name.city}`)}
                    </S.TextError>
                )}
            </S.FormWrapper>
        </S.Forms>
    );
};

const DatasView = () => {
    return (
        <S.DataViewWrapper as={'div'}>
            <S.DataViewGroup>
                <S.DataViewLabel>Nome</S.DataViewLabel>
                <S.DataViewResponse>Matheus Davy</S.DataViewResponse>
            </S.DataViewGroup>

            <S.DataViewGroup>
                <S.DataViewLabel>Email</S.DataViewLabel>
                <S.DataViewResponse>
                    testetesteteste@gmail.com
                </S.DataViewResponse>
            </S.DataViewGroup>
        </S.DataViewWrapper>
    );
};
