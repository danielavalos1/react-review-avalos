import { useState } from 'react'
import { Input } from './Input';
import PropTypes from 'prop-types'

export const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
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
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
}