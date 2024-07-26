import { useEffect, useState } from "react";
import { createUser, getUser } from "./services/user-service";
import { UnAuthenticatedApp } from './UnAuthenticatedApp';
import { AuthenticatedApp } from "./AuthenticatedApp";
import { login, logout } from "./services/auth-service";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }, []);

  const handleLogin = (crendentials) => {
    login(crendentials)
      .then(user => setUser(user))
      .then(error => console.log(error));
  }

  const handleSignup = (userData) => {
    createUser(userData)
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null);
      })
      .catch(error => console.log(error));
  }

  return (
    <>

      {
        user ? (
          <AuthenticatedApp onLogout={handleLogout} />
        ) : (
          <UnAuthenticatedApp
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        )
      }
    </>
  )
}

export default App;
