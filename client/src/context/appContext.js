import { useContext, useReducer } from "react";
import React from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from "./actions";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = ({ user, token, location }) => {
    localStorage.removeItem("user", JSON.stringify(user));
    localStorage.removeItem("token", token);
    localStorage.removeItem("location", location);
  };

  const setupUser = async (currentUser) => {
    if (currentUser.isMember) {
      dispatch({ type: LOGIN_USER_BEGIN });
      try {
        const response = await axios.post("/api/v1/auth/login", currentUser);
        const { user, token, location } = response.data;
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: { user, token, location },
        });
        addUserToLocalStorage({ user, token, location });
      } catch (error) {
        console.log(error);
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    } else {
      dispatch({ type: REGISTER_USER_BEGIN });
      try {
        const response = await axios.post("/api/v1/auth/register", currentUser);
        const { user, token } = response.data;
        const location = response.data.user.location;
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: { user, token, location },
        });
        addUserToLocalStorage({ user, token, location });
      } catch (error) {
        console.log(error);
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, setupUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
