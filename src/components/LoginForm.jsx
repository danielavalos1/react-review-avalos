import { useState } from 'react'
import { Input } from './Input';
import { useAuth } from '../hooks/useAuth';
import { css } from '@emotion/css';
import { colors } from '../styles/colors';
const styles = css`
  display:flex;
  flex-direction:column;
  gap:2rem;
  `
const buttonStyles = css`
  width:258px;
  border-radius:1rem;
  padding: 0.5rem 1rem;
  background-color: ${colors.gray.medium};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
  color: white;
  border: transparent;
  cursor: pointer;
`
export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { login, state } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form className={styles} onSubmit={handleSubmit}>
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
      {state.status === 'loading' && 'Cargando...'}
      {state.status === 'error' && state.error}
      <button className={buttonStyles} type="submit">Log In</button>
    </form>
  )
}