import React, { ReactNode } from 'react';
import AppLoader from './AppLoader';
import { useAuthUserKeyCloack } from '@/@devdocs/hooks/AuthHooks';

type AuthRoutesProps = {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isAuthenticated } = useAuthUserKeyCloack();
  return isAuthenticated ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;
