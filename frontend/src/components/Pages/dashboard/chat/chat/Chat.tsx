import { useState } from 'react';
import * as S from './Chat.style';

export function Chat() {
    const [newMessage, setNewMessage] = useState('');

    return (
        <div className='flex flex-col border-gray-400 border rounded-xl overflow-hidden'>
            <div className="relative flex items-center border-gray-400 border-b space-x-4 py-2 px-3 bg-gray-50">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-[60px] h-[60px] rounded-full" />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-gray-700 mr-3 text-sm">Anderson Vanhron</span>
                    <span className='text-green-500 text-sm'>online</span>
                </div>
            </div>
            <div className='flex flex-[1_1_0] flex-col gap-5 overflow-y-scroll py-5 grow px-3'>
                <S.MessageWrapper $type='received'>
                    <S.MessageText $type='received'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='sent'>
                    <S.MessageText $type='sent'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='received'>
                    <S.MessageText $type='received'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='sent'>
                    <S.MessageText $type='sent'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='received'>
                    <S.MessageText $type='received'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='sent'>
                    <S.MessageText $type='sent'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='received'>
                    <S.MessageText $type='received'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
                <S.MessageWrapper $type='sent'>
                    <S.MessageText $type='sent'>That's awesome. I think our users will really appreciate the improvements.</S.MessageText>
                </S.MessageWrapper>
            </div>
            <div className="flex items-center py-2 px-3 bg-gray-50 border-gray-400 border-t">
                <textarea style={{ resize: 'none' }} id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 ">
                    <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                </button>
            </div>
        </div>
    );
};
