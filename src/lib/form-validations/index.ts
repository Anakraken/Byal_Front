// const phone_validate = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const name_validate = <T extends object>(
  username: string,
  setFireValidate: React.Dispatch<React.SetStateAction<T>>
) => {
  if (username === '') {
    setFireValidate((prev) => ({
      ...prev,
      username: false,
    }));
    return true;
  }

  const isValid = /^[a-zA-Z ]+$/.test(username);

  setFireValidate((prev) => ({
    ...prev,
    username: !isValid,
  }));
  return isValid;
};

export const email_validate = <T extends object>(
  correo: string,
  setFireValidate: React.Dispatch<React.SetStateAction<T>>
) => {

  if (correo === '') {
    setFireValidate((prev) => ({
      ...prev,
      email: false,
    }));
    return true;
  }

  const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo);

  setFireValidate((prev) => ({
    ...prev,
    email: !isValid,
  }));
  return isValid;
};

export const password_validate = <T extends object>(
  password: string,
  setFireValidate: React.Dispatch<React.SetStateAction<T>>
) => {

  if (password.length === 0) {
    setFireValidate((prev) => ({
      ...prev,
      password: false,
    }));
    return false;
  }

  if (password.length >= 6) {
    setFireValidate((prev) => ({
      ...prev,
      password: false,
    }));
    return false;
  }

  setFireValidate((prev) => ({
    ...prev,
    password: true,
  }));
  return true;
};