import React, { ReactNode } from 'react';
import AppLoader from './AppLoader';
import { useAuthUserKeyCloak } from '@/@devdocs/hooks/AuthHooks';
import { useRouter } from 'next/navigation';

type AuthRoutesProps = {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuthUserKeyCloak();
  const router = useRouter()
  console.log();

  return isLoading ? <h2>Loading ...</h2> : <>{children}</>;
};

export default AuthRoutes;
