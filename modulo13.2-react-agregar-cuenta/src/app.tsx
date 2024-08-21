import React from "react";

import { ProfileProvider } from "@/core/profile";
import { Router } from "@/core/router";
import "./style.css";

export const App: React.FC = () => {
  return (
    <>
      <ProfileProvider>
        <Router />
      </ProfileProvider>
    </>
  );
};
