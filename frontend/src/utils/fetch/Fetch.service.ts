import axios from 'axios';

import {
    IGet,
    IPut,
    IPost,
    IPath,
    IDelete,
    httpResponse,
} from './Fetch.interface';

import Cookies from 'js-cookie';

const httpService = () => {
    return axios.create({
        headers: {
            Authorization:
                typeof window !== 'undefined'
                    ? 'Bearer ' +
                      String(
                          Cookies.get(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!)
                      )
                    : '',
            'Content-Type': 'application/json',
        },
    });
};

export function get<T>(props: IGet): Promise<httpResponse<T>> {
    return httpService().get<T>(props.url, props.config);
}

export function put<T>(props: IPut): Promise<httpResponse<T>> {
    return httpService().put<T>(props.url, props.data, props.config);
}

export function post<T>(props: IPost): Promise<httpResponse<T>> {
    return httpService().post<T>(props.url, props.data, props.config);
}

export function patch<T>(props: IPath): Promise<httpResponse<T>> {
    return httpService().patch<T>(props.url, props.data, props.config);
}

export function deletes<T>(props: IDelete): Promise<httpResponse<T>> {
    return httpService().delete<T>(props.url, props.config);
}

export function setDefaultHeaders(headers: any) {
    httpService().defaults.headers = headers;
}

const httpModule = {
    get,
    put,
    post,
    patch,
    delete: deletes,
    setDefaultHeaders,
    instance: httpService,
};

export default httpModule;
