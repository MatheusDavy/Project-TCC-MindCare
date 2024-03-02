import { FriendsTable } from './Friend/Friend';
import { Suggestion } from './Suggestion/Suggestion';
import { Summary } from './Summary/Summary';

export function Structure () {

    return (
        <div className="w-full min-h-full h-auto pt-[3vh] z-10 items-start grid grid-cols-[auto_auto_1fr] gap-5">
            <Summary />
            <Suggestion />
            <FriendsTable />
        </div>
    );
};
