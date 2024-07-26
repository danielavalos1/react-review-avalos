import { useState } from "react";
import { Layout } from "./components/Layout";
import { Screen } from "./components/Screen";
import { Input } from './components/Input';

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  return (
    <Layout>
      <Screen>
        <h1>Welcome to Poke Collection</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label={'Email'}
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            label={'Password'}
            type="password"
            name="password"
            id="password"
            placeholder="******"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </Screen>
    </Layout>
  )
}

export default App;
