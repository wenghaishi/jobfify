import { useState, useContext, useReducer } from "react";
import React from 'react';


const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, setState] = useState(initialState);
  return (<AppContext.Provider value={{...state}}> 
    {children}
  </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext}