import { UnAuthenticatedApp } from './UnAuthenticatedApp';
import { AuthenticatedApp } from "./AuthenticatedApp";
import { useAuth } from './hooks/useAuth';

function App() {

  const { user } = useAuth();
  return (
    <>
      {
        user ? (
          <AuthenticatedApp />
        ) : (
          <UnAuthenticatedApp />
        )
      }
    </>
  )
}

export default App;
