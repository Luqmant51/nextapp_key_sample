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
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  fetchStart,
  fetchSuccess,
  fetchError,
}) => {
  const [authData, setAuthData] = useState<AuthContextProps>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  useEffect(() => {
    console.log("AuthProvider in use effect");
  
    const fetchSession = async () => {
      console.log("fetchSession in use effect");
      fetchStart();
      try {
        const response = await fetch('/api/session');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const session = await response.json();
  
        if (session?.user) {
          console.log("in if");
  
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
  }, []);
  

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
