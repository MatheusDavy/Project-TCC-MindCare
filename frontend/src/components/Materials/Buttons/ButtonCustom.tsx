import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    React.AriaAttributes {
    children: ReactNode;
    type?: 'submit' | 'button';
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    theme: 'BLUE' | 'GRAY' | 'RED' | 'GREEN'
    rest?: any[];
};

export const ButtonCustom: React.FC<ButtonProps> = props => {
    const {
        children,
        className,
        loading,
        type,
        theme,
        disabled,
        ...rest
    } = props;

    return (
        <button
            className={`
                ${theme === 'RED' && 'text-red-500 bg-red-100 border-red-500'}
                ${theme === 'BLUE' && 'text-white bg-[#0063f2]'}
                ${theme === 'GREEN' && 'text-white bg-green-400'}
                ${theme === 'GRAY' && 'text-gray-500 bg-gray-100 border-[1px] border-gray-500'}
                hover:opacity-80
                text-sm font-medium
                rounded-lg
                py-3 px-4
                focus:outline-none
                transition-all duration-200
                relative
                ${className}
            `}
            type={type}
            disabled={disabled || loading}
            {...rest}
        >
            <span
                className='flex flex-row items-center gap-1'
                style={{
                    transition: 'all 0s !important',
                    opacity: loading ? 0 : 1
                }}
            >
                {children}
            </span>
            {loading && (
                <Loader>
                    <span
                        className={`
                        loader
                        border-[2px]
                        ${theme === 'RED' && 'border-red-500'}
                        ${theme === 'BLUE' && 'border-[#0063f2]'}
                        ${theme === 'GREEN' && ' border-green-400'}
                        ${theme === 'GRAY' && ' border-gray-500'}`}
                    ></span>
                </Loader>
            )}
        </button>
    );
};

// Styles
const Loader = styled.div`
    position:absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;

    .loader {
        max-width: 30px;
        max-height: 30px;
        height: 50%;
        aspect-ratio: 1;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0%{
            transform: rotate(0deg);
        }
        100% {
           transform: rotate(360deg);
        }
    }
`;
