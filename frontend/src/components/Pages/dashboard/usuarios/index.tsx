import { Search } from './Search/Search';

export function Structure() {
    return (
        <div className="flex flex-col w-full gap-4">
            <h1 className='text-3xl font-bold my-5'>
                Faça amizade com pessoas que tenham <br />
                o mesmo objetivo que você
            </h1>
            <Search />
        </div>
    );
}
