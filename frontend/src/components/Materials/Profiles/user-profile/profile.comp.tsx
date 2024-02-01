import React, { ReactNode } from 'react';
import { Avatar } from '@mui/material';

type Props = {
    name: string | undefined
    photo: string | undefined
    actions?: ReactNode;
    size?: number
};

export function AvatarUser({ photo, name, actions, size = 120 }: Props) {
    if (!name) return;

    const getAbbreviations = (name: string): string => {
        try {
            return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
        } catch (error) {
            return name.split(' ')[0][0];
        }
    };

    const stringAvatar = {
        sx: { bgcolor: 'gray' },
        children: getAbbreviations(name!),
    };

    return (
        <>
            {photo ? (
                <Avatar
                    alt={name}
                    src={photo}
                    sx={{ width: size, height: size, fontSize: 40 }}
                />
            ) : (
                <Avatar {...stringAvatar} sx={{ width: size, height: size }} />
            )}
            {actions}
        </>
    );
}
