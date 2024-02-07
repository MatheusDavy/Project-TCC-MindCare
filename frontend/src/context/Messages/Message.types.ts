/* eslint-disable no-unused-vars */
export type DialogDataType = {
  type: 'error' | 'success' | undefined
  message: string;
  redirect?: string;
  open: boolean;
};

export type DialogAlertValuesType = {
  setData: (value: DialogDataType) => void;
};

export const initialData: DialogDataType = {
    type: undefined,
    message: '',
    redirect: '',
    open: false,
};

export const defaultProvider: DialogAlertValuesType = {
    setData: () => null,
};
