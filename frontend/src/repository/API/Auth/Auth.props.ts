export type RegisterUserDTO = {
  name: string
  email: string
  password: string
}

export type LoginCredentialsDTO = {
  email: string
  password: string
}

export type ResetPasswordDTO = {
  token: string
  password: string
}

export type LoginOAuth = {
  name: string
  email: string
}
