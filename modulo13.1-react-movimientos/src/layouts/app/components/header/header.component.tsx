import { useProfileContext } from "@/core/profile";
import { FC } from "react";
import classes from "./header.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";
export const HeaderComponent: FC = () => {
  const { userName } = useProfileContext();
  return (
    <>
      <header className={classes.header}>
        <div>
          <img className={classes.headerLogo} src={logoHeader} />
          <div className={classes.usuario}>
            <p>{userName}</p>
          </div>
        </div>
      </header>
    </>
  );
};
