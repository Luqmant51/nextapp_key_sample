import React from "react";
import { useInfoViewActionsContext } from "@/@devdocs/context/AppContextProvider/InfoViewContextProvider";
import KeycloakAuthProvider from "@/@devdocs/services/auth/keycloack/KeycloakAuthProvider";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};
const AppAuthProvider = ({ children }: Props) => {
  const { data: session } = useSession()
  const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();

  return (
    <KeycloakAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      session={session}
    >
      {children}
    </KeycloakAuthProvider>
  );
};

export default AppAuthProvider;
