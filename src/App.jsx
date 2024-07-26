import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { Screen } from "./components/Screen";
import { createUser, getUser } from "./services/user-service";
import { UnAuthenticatedApp } from './UnAuthenticatedApp';
import { AuthenticatedApp } from "./AuthenticatedApp";
import { login } from "./services/auth-service";

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


  return (
    <>

      {
        user ? (
          <AuthenticatedApp />
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
