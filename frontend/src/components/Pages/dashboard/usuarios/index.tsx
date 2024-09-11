import { Search } from './Search';
import { ButtonCustom } from 'src/components/Materials/Buttons/ButtonCustom';

export function Structure() {
    return (
        <div className="flex flex-col w-full gap-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold my-5'>
                    Faça amizade com pessoas que tenham <br />
                    o mesmo objetivo que você
                </h1>

                <div className='flex items-center gap-2'>
                    <a href="/dashboard/usuarios/amizades">
                        <ButtonCustom
                            theme='BLUE'
                        >
                            Ver amigos
                        </ButtonCustom>
                    </a>
                    <a href="/dashboard/usuarios/pedidos-amizade">
                        <ButtonCustom
                            theme='GRAY'
                        >
                            Ver solicitações recebidas
                        </ButtonCustom>
                    </a>
                </div>
            </div>
            <Search />
        </div>
    );
}
