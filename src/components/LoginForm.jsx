import { useState } from 'react'
import { login } from '../services/auth-service';
import { Input } from './Input';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData)
      .then(user => console.log(user))
      .then(error => console.log(error));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
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
      <button type="submit">Log In</button>
    </form>
  )
}
