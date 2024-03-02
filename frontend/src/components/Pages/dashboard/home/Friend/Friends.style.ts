import tw from 'tailwind-styled-components';

export const Wrapper = tw.section`
    flex
    flex-wrap
    -mx-3
`;
export const Table = tw.div`
    text-slate-500
    items-center align-top
    w-full
    mb-0
    border-collapse
`;
export const TableTh = tw.th`
    px-6 py-3
    text-slate-400 font-bold text-left uppercase align-middle text-xs whitespace-nowrap
    bg-transparent border-b border-collapse
    shadow-none border-b-solid tracking-none
    opacity-70
`;
