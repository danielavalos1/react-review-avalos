import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUser, getUser, updateUser } from "../services/user-service";
import * as auth from '../services/auth-service';
export const AuthContext = createContext({
  user: null,
  login: (credentials) => credentials,
  signup: userData => userData,
  logout: () => { },
  update: userData => userData,
  state: { status: 'idle', data: null, error: null }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [state, setState] = useState({
    status: "idle", //success, error, pending
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, status: 'pending' });
    getUser()
      .then(user => {
        setState({ ...state, status: 'success' });
        setUser(user)
      })
      .catch(error => {
        console.log(error);
        setState({ ...state, status: 'error' });
      });
  }, []);

  const login = (crendentials) => {
    setState({ ...state, status: 'pending' });
    auth.login(crendentials)
      .then(user => {
        setState({ ...state, status: 'success' });
        setUser(user)
      })
      .catch(error => {
        console.log(error);
        setState({ ...state, status: 'error' });
      });
  }

  const signup = (userData) => {
    createUser(userData)
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }

  const update = (userData) => {
    setState({ ...state, status: 'pending' });
    updateUser(userData)
      .then(user => {
        setState({ ...state, status: 'success' });
        setUser(user)
      })
      .catch(error => {
        console.log(error);
        setState({ ...state, status: 'error' });
      });
  }

  const logout = () => {
    setState({ ...state, status: 'pending' });
    auth.logout()
      .then(() => {
        setState({ ...state, status: 'success' });
        setUser(null);
      })
      .catch(error => {
        setState({ ...state, status: 'error' });
        console.log(error)
      });
  }
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, update, state }}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
