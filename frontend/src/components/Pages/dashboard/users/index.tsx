import { Search } from './Search/Search';
import { User } from './User/User';

export function Structure() {
    return (
        <div className="grid grid-cols-[400px_1fr] w-full">
            <Search />
            <User />
        </div>
    );
}
