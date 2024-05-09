import React from "react";
import { useInfoViewActionsContext } from "@/@devdocs/context/AppContextProvider/InfoViewContextProvider";
import KeycloakAuthProvider from "@/@devdocs/services/auth/keycloack/KeycloakAuthProvider";

type Props = {
  children: React.ReactNode;
};
const AppAuthProvider = ({ children }: Props) => {
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();

  return (
    <KeycloakAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
    >
      {children}
    </KeycloakAuthProvider>
  );
};

export default AppAuthProvider;
