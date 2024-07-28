import { useState } from 'react';
import { Input } from './Input';
import { useAuth } from '../hooks/useAuth';
import { css } from '@emotion/css';
import { colors } from '../styles';
import PropTypes from 'prop-types'

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

export const SignUpForm = ({ initialValues = null }) => {
  const [formData, setFormData] = useState(() => {
    return initialValues || {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    }
  })
  const { signup, update, state } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialValues) {
      update(formData);
    } else {
      signup(formData);
    }
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
      {state.status === 'pending' && 'loading...'}
      <button className={buttonStyles} type="submit">{initialValues ? 'Update' : 'Create Account'}</button>
    </form>
  )
}

SignUpForm.propTypes = {
  initialValues: PropTypes.object
}