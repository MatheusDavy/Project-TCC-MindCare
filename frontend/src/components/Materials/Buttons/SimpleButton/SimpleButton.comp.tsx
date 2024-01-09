import React, { ReactNode } from 'react';
import * as S from './SimpleButton.style';

export interface ButtonProps
    extends React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    children: ReactNode;
    type?: 'submit' | 'button';
    className?: string;
    textColor?: string;
    buttonColor?: string;
    loading?: boolean;
    disabled?: boolean;
    rest?: any[];
}

export const SimpleButtonComp: React.FC<ButtonProps> = props => {
    const {
        children,
        className,
        loading,
        type,
        disabled,
        textColor,
        buttonColor,
        ...rest
    } = props;

    return (
        <S.Button
            className={className}
            type={type}
            disabled={disabled || loading}
            $textColor={textColor}
            $buttonColor={buttonColor}
            {...rest}
        >
            <span style={{ transition: 'all 0s !important', opacity: loading ? 0 : 1}}>{children}</span>
            {loading && (
                <S.Loader>
                    <span className="loader"></span>
                </S.Loader>
            )}
        </S.Button>
    );
};
