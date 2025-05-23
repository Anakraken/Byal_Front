export type LoginFormDataProps = {
  email: string;
  password: string;
};

export type RegisterFormDataProps = LoginFormDataProps & {
  username: string;
  rol: string; 
  avatar: string;
};

type LoginValidationProps = {
  email: boolean;
  password: boolean;
};

type RegisterValidationProps =  LoginValidationProps &{
  username: boolean;
};

export const RegisterForm: RegisterFormDataProps = {
  email: '',
  username: '',
  password: '',
  rol: '',
  avatar: ''
}
export const ValidateRegisterForm: RegisterValidationProps = {
  username: false,
  email: false,
  password: false,
}

export const LoginForm: LoginFormDataProps = {
  email: '',
  password: ''
}

export const ValidateLoginForm: LoginValidationProps = {
  email: false,
  password: false
}