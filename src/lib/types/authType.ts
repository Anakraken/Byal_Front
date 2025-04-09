type LoginFormDataProps = {
  email: string;
  password: string;
};

type RegisterFormDataProps = LoginFormDataProps & {
  username: string;
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
  password: ''
}
export const ValidateRegisterForm: RegisterValidationProps = {
  username: false,
  email: false,
  password: false
}

export const LoginForm: LoginFormDataProps = {
  email: '',
  password: ''
}

export const ValidateLoginForm: LoginValidationProps = {
  email: false,
  password: false
}