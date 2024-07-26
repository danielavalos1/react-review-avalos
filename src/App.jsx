import { Layout } from "./components/Layout";
import { LoginForm } from "./components/LoginForm";
import { Screen } from "./components/Screen";
import { SignUpForm } from './components/SignupForm';

function App() {


  return (
    <Layout>
      <Screen>
        <h1>Welcome to Poke Collection</h1>
        <SignUpForm />
      </Screen>
    </Layout>
  )
}

export default App;
