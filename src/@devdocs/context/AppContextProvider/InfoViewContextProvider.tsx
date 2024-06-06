'use client';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { contextReducer, InfoViewActions } from './InfoViewReducer';

export type InfoViewData = {
  error: string;
  message: string;
  loading: boolean;
};

export type InfoViewActionsType = {
  fetchStart: () => void;
  fetchSuccess: () => void;
  fetchError: (error: string) => void;
  showMessage: (message: string) => void;
  clearInfoView: () => void;
};

export const ContextState: InfoViewData = {
  loading: false,
  error: '',
  message: '',
};

const InfoViewContext = createContext<InfoViewData>(ContextState);
const InfoViewActionsContext = createContext<InfoViewActionsType>({
  fetchStart: () => {},
  fetchSuccess: () => {},
  fetchError: (error: string) => {},
  showMessage: (message: string) => {},
  clearInfoView: () => {},
});

export const useInfoViewContext = () => useContext(InfoViewContext);
export const useInfoViewActionsContext = () =>
  useContext(InfoViewActionsContext);

type InfoViewContextProviderProps = {
  children: ReactNode;
};

const InfoViewContextProvider: React.FC<InfoViewContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, ContextState);

  const fetchStart = useCallback(() => {
    dispatch({ type: InfoViewActions.FETCH_STARTS });
  }, []);

  const fetchSuccess = useCallback(() => {
    dispatch({ type: InfoViewActions.FETCH_SUCCESS });
  }, []);

  const fetchError = useCallback((error: string) => {
    dispatch({ type: InfoViewActions.SET_ERROR, payload: error });
  }, []);

  const showMessage = useCallback((message: string) => {
    dispatch({ type: InfoViewActions.SET_MESSAGE, payload: message });
  }, []);

  const clearInfoView = useCallback(() => {
    dispatch({ type: InfoViewActions.CLEAR_INFOVIEW });
  }, []);

  return (
    <InfoViewContext.Provider value={state}>
      <InfoViewActionsContext.Provider
        value={{
          fetchStart,
          fetchSuccess,
          fetchError,
          showMessage,
          clearInfoView,
        }}
      >
        {children}
      </InfoViewActionsContext.Provider>
    </InfoViewContext.Provider>
  );
};

export default InfoViewContextProvider;
