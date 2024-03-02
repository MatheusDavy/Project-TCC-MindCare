import Link from 'next/link';
import tw from 'tailwind-styled-components';

export const Navigation = tw.aside`
    fixed inset-y-0 flex flex-col items-center
    w-full
    p-4 antialiased transition-transform duration-200
    bg-[#eeeeee]
    border-0
    w-auto ease-nav-brand z-990 rounded-tr-2xl rounded-br-2xl
    xl:left-0 overflow-y-auto xl:translate-x-0 -translate-x-full
    z-50
    shadow-md
`;

export const Logo = tw(Link)`
    
`;
export const LinksWrapper = tw.div`
    mt-10
    items-center
    block grow basis-full
    w-auto max-h-screen
    h-sidenav
    overflow-auto
`;
export const Links = tw(Link)`
    py-2.7
    text-sm
    ease-nav-brand
    flex
    items-center
    whitespace-nowrap
    transition-colors
`;
export const Category = tw.h6`
    pl-6
    ml-2
    text-xs
    font-bold
    leading-tight
    uppercase
    text-slate-700
    opacity-60
`;
