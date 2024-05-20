import React, { ReactNode } from 'react';
import AppLoader from './AppLoader';
import { useAuthUserKeyCloak } from '@/@devdocs/hooks/AuthHooks';
import PrimaryAppBar from './Layout/Applayout';

type AuthRoutesProps = {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuthUserKeyCloak();
  return isLoading ? <AppLoader /> : <>
    {isAuthenticated && <PrimaryAppBar />}
    {children}
  </>;
};

export default AuthRoutes;
