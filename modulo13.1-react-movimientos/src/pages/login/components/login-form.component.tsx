import { ChangeEvent, FC, useState } from "react";
import { validateForm } from "../login.validacion";
import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentialsFormErrors,
  createEmpyCredentials,
} from "../login.vm";
import classes from "./login-form.component.module.css";
interface Props {
  onLogin: (credentials: Credentials) => void;
}
export const LoginFormComponent: FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = useState<Credentials>(
    createEmpyCredentials()
  );
  const [errors, setErrors] = useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors
  );

  const handleFormData =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setCredentials({
        ...credentials,
        [field]: e.target.value,
      });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
    setCredentials({
      user: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <input
            type='text'
            id='user'
            value={credentials.user}
            onChange={handleFormData("user")}
            placeholder='Usuario'
            className={errors.user ? classes.inputError : ""}
          />
          {errors.user ? <p className={classes.error}>{errors.user}</p> : ""}
        </div>
        <div>
          <input
            type='password'
            id='password'
            value={credentials.password}
            onChange={handleFormData("password")}
            placeholder='Contraseña'
            className={errors.password ? classes.inputError : ""}
          />
          {errors.password ? (
            <p className={classes.error}>{errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <button type='submit' className={classes.btnEnviar}>
          Acceder
        </button>
      </form>
    </>
  );
};
