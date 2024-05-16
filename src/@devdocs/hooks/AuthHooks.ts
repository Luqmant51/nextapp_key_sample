import { useAuthKeycloak } from "@/@devdocs/services/auth/keycloack/KeycloakAuthProvider";

export const useAuthUserKeyCloak = () => {
  const { user, isAuthenticated, isLoading } = useAuthKeycloak();
  return {
    isLoading,
    isAuthenticated,
    user: user,
  };
};
