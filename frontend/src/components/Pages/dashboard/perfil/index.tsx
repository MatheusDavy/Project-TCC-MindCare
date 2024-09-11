import { FormsComp } from './Forms';

export function Structure() {
    return (
        <div className="w-full h-full pt-[16vh] z-10">
            <div className='absolute w-full inset-0 h-[300px] bg-[#585ce5]'></div>
            <FormsComp />
        </div>
    );
}
