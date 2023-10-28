export type RegisterUserDTO = {
  name: string
  email: string
  password: string
}

export type LoginCredentialsDTO = {
  username: string
  password: string
}

export type ResetPasswordDTO = {
  token: string
  password: string
}
