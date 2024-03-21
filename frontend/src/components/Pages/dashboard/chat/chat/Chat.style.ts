import tw from 'tailwind-styled-components';

type MessageProps = {
    $type: 'sent' | 'received'
}

export const MessageWrapper = tw.div<MessageProps>`
    ${({ $type }) => $type == 'received' && 'bg-[#0063f2] rounded-e-xl rounded-es-xl'}
    ${({ $type }) => $type == 'sent' && 'bg-blue-200 rounded-e-xl rounded-es-xl self-end'}
    "flex flex-col w-full max-w-[320px] leading-1.5 p-4
    h-fit
`;

export const MessageText = tw.p<MessageProps>`
    ${({ $type }) => $type == 'received' && 'text-white'}
    ${({ $type }) => $type == 'sent' && 'text-gray-900"'}
    text-sm font-normal py-2.5 
`;

