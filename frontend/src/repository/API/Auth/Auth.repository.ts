import { Fetch } from 'src/utils'
import { IRepositoryRequirements } from '../../repositories.common'
import { LoginCredentialsDTO, RegisterUserDTO, ResetPasswordDTO } from './Auth.props'

export function AuthRepository ({ baseUrl }: IRepositoryRequirements) {
  const url = `${baseUrl}/auth`

  function register (data: RegisterUserDTO) {
    return Fetch.post({ url: `${url}/register`, data })
  }

  function login (data: LoginCredentialsDTO) {
    return Fetch.post({ url: `${url}/login`, data })
  }

  function forgotPassword (email: string) {
    return Fetch.post({ url: `${url}/forgot-password`, data: { email } })
  }

  function resetPassword (data: ResetPasswordDTO) {
    return Fetch.post({ url: `${url}/reset-password`, data })
  }

  return {
    register,
    login,
    forgotPassword,
    resetPassword
  }
}
