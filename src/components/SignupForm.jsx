import { useState } from 'react';
import { Input } from './Input';
import { createUser } from '../services/user-service';

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData)
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
      <Input
        label={'First Name'}
        name="first_name"
        id="first_name"
        placeholder="El Dani"
        onChange={handleChange}
        value={formData.first_name}
      />
      <Input
        label={'Last Name'}
        name="last_name"
        id="last_name"
        placeholder="Avalos"
        onChange={handleChange}
        value={formData.last_name}
      />
      <button type="submit">Create Account</button>
    </form>
  )
}
