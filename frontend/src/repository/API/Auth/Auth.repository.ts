import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';
import { LoginCredentialsDTO, LoginOAuth, RegisterUserDTO, ResetPasswordDTO } from './Auth.props';

export function AuthRepository ({ baseUrl }: IRepositoryRequirements) {
    const url = `${baseUrl}/auth`;

    function register (data: RegisterUserDTO) {
        return Fetch.post({ url: `${url}/register`, data });
    }

    function login (data: LoginCredentialsDTO) {
        return Fetch.post({ url: `${url}/login`, data });
    }

    function loginOAuth (data: LoginOAuth){
        return Fetch.post({ url: `${url}/o-auth/login`, data });
    }

    function forgetPassword (email: string) {
        return Fetch.post({ url: `${url}/forget-password`, data: { email } });
    }

    function resetPassword (data: ResetPasswordDTO) {
        return Fetch.patch({ url: `${url}/reset-password`, data });
    }

    return {
        register,
        login,
        forgetPassword,
        resetPassword,
        loginOAuth
    };
}
