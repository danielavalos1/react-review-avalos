import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { Screen } from "./components/Screen";
import { getUser } from "./services/user-service";
import { UnAuthenticatedApp } from './UnAuthenticatedApp';
import { AuthenticatedApp } from "./AuthenticatedApp";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser()
      .then(user => setUser(user))
      .catch(error => console.log(error));
  }, []);

  return (
    <Layout>
      <Screen>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Screen>
    </Layout>
  )
}

export default App;
