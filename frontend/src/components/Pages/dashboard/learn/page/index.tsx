import { Recomended } from './Recomended/Recomended';
import { Videos } from './Videos/Videos';

export function Structure () {
    return (
        <div className="w-full h-full z-10 flex flex-col gap-5">
            <Recomended />
            <Videos />
        </div>
    );
};
