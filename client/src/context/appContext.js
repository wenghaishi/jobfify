import { useContext, useReducer } from "react";
import React from 'react';
import reducer from "./reducers";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<AppContext.Provider value={{...state}}> 
    {children}
  </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext}