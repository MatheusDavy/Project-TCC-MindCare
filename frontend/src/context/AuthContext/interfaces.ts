import { User } from "../../types/users/usert.types";

export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: User | null;
  setLoading: (value: boolean) => void;
  setUser: (value: User | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
};
