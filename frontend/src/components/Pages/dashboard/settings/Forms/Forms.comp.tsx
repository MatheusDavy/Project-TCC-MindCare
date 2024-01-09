import { useLogic } from './Forms.logic';
import * as S from './Forms.style';
import { IconEdit, IconX, IconCheck } from '@tabler/icons-react';

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
                    <S.ButtonSubmit onClick={methods.onSubmit} loading={data.loading}>
                        Salvar
                        <IconCheck width={20} height={20} />
                    </S.ButtonSubmit>
                )}
            </S.ButtonWrapper>
        </S.Group>
    );
}
