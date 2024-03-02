import tw from 'tailwind-styled-components';

export const Wrapper = tw.section`
    flex flex-col gap-10 items-start
    py-5 px-10
    rounded-3xl
    bg-white
    shadown-sm
`;

// Filters
export const FiltersWrapper = tw.div`
    flex item-center gap-3
`;
type FiltersButtonProps = {
    $selected: boolean
}
export const FiltersButton = tw.button<FiltersButtonProps>`
    w-fit h-fit
    py-2 px-5
    rounded-[1000px]

    ${({ $selected }) => $selected ? 'text-white bg-[#0063f2]' : 'text-gray-900 bg-gray-500/20'}
    hover:text-white
    hover:bg-[#0063f2]

    transition-all duration-500
`;
