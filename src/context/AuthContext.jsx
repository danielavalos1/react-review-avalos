import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUser, getUser } from "../services/user-service";
import * as auth from '../services/auth-service';
export const AuthContext = createContext({
  user: null,
  login: (credentials) => credentials,
  signup: userData => userData,
  logout: () => { }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }, []);

  const login = (crendentials) => {
    auth.login(crendentials)
      .then(user => setUser(user))
      .then(error => console.log(error));
  }

  const signup = (userData) => {
    createUser(userData)
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }

  const logout = () => {
    auth.logout()
      .then(() => {
        setUser(null);
      })
      .catch(error => console.log(error));
  }
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
