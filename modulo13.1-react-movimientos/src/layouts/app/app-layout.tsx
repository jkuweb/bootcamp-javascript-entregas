import { FC, PropsWithChildren } from "react";
import classes from "./app-layout.module.css";
import { HeaderComponent, NavbarComponent } from "./components";
import { FooterComponent } from "./components/footer";
export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent />
    </>
  );
};
