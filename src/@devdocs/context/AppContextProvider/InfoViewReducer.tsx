import { InfoViewData } from './InfoViewContextProvider';

export const InfoViewActions = {
  FETCH_STARTS: 'FETCH_STARTS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_INFOVIEW: 'CLEAR_INFOVIEW',
} as const;

export function contextReducer(state: InfoViewData, action: any) {
  switch (action.type) {
  case InfoViewActions.FETCH_STARTS: {
    return {
      ...state,
      loading: true,
      message: '',
      error: '',
    };
  }
  case InfoViewActions.FETCH_SUCCESS: {
    return {
      ...state,
      loading: false,
      message: '',
      error: '',
    };
  }
  case InfoViewActions.SET_MESSAGE: {
    return {
      ...state,
      loading: false,
      message: action.payload,
      error: '',
    };
  }
  case InfoViewActions.SET_ERROR: {
    return {
      ...state,
      loading: false,
      message: '',
      error: action.payload,
    };
  }
  case InfoViewActions.CLEAR_INFOVIEW: {
    return {
      ...state,
      loading: false,
      message: '',
      error: '',
    };
  }
  default:
    return state;
  }
}
