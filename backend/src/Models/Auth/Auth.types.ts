export interface UserCreateDTO extends UserLoginDTO {
  name: string;
}

export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface ResetPasswordDTO {
  password: string
  token: string
}