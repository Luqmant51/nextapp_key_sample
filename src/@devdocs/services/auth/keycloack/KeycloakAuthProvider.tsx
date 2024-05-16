"use client"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AuthContextProps {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
});

export const useAuthKeycloak = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
  fetchStart: () => void;
  fetchSuccess: () => void;
  fetchError: (error: string) => void;
  session: any
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  fetchStart,
  fetchSuccess,
  fetchError,
  session
}) => {
  const [authData, setAuthData] = useState<AuthContextProps>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  useEffect(() => {

    const fetchSession = async () => {
      fetchStart();
      try {

        if (session && session?.user) {

          setAuthData({
            user: session.user,
            isAuthenticated: true,
            isLoading: false,
          });
          fetchSuccess();
        }
      } catch (error) {
        fetchError("Failed to initialize authentication: " + error);
        setAuthData({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    fetchSession();
  }, [session]);


  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
