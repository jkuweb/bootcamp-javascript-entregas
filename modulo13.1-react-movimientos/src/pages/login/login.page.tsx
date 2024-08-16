import { useProfileContext } from "@/core/profile";
import { appRoutes } from "@/core/router";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { isValidLogin } from "./api";
import { LoginFormComponent } from "./components";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import classes from "./login.page.module.css";
import { Credentials } from "./login.vm";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useProfileContext();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.user);
        navigate(appRoutes.accountList);
      } else {
        alert(
          "Usuario o Contraseña no válidas, pssssh { admin@email.com / test }"
        );
      }
    });
  };

  return (
    <>
      <header className={classes.header}>
        <img src='assets/logo_header.svg' className={classes.logo} />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>
          Está usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </>
  );
};
