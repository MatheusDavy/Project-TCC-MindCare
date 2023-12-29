export type DialogDataType = {
  type: 'error' | 'success'
  message: string;
  redirect?: string;
  open: boolean;
};

export type DialogAlertValuesType = {
  setData: (value: DialogDataType) => void;
};

export const initialData: DialogDataType = {
    type: 'error',
    message: '',
    redirect: '',
    open: false,
};

export const defaultProvider: DialogAlertValuesType = {
    setData: () => null,
};
