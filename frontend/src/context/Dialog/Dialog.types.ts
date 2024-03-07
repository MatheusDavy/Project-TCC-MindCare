/* eslint-disable no-unused-vars */
export type DialogDataType = {
    message: string;
    open: boolean;
    action: () => void
    type: 'yes-or-no' | 'warning'
};

export type DialogActionsValuesType = {
    setData: (value: DialogDataType) => void;
};

export const defaultProvider: DialogActionsValuesType = {
    setData: () => null,
};

export const initialData: DialogDataType = {
    message: '',
    open: false,
    action: () => null,
    type: 'yes-or-no'
};
