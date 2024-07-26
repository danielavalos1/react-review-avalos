import { useState } from "react";
import { Layout } from "./components/Layout";
import { LoginForm } from "./components/LoginForm";
import { Screen } from "./components/Screen";
import { SignUpForm } from './components/SignupForm';
import styled from "@emotion/styled";
import { colors } from "./styles";
import PropTypes from 'prop-types'

const CustomLink = styled.button`
background: none;
border: none;
cursor: pointer;
&:hover {
  color: ${colors.pink[400]};
}
`;

export const UnAuthenticatedApp = ({ onLogin, onSignup }) => {
  const [showLogin, setShowLogin] = useState(true);
  const handleClick = e => {
    e.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <Layout>
      <Screen>
        <h1>Welcome to Poke Collection</h1>
        {
          showLogin ? <LoginForm onLogin={onLogin} /> : <SignUpForm onSignup={onSignup} />
        }
        <CustomLink onClick={handleClick}>{showLogin ? 'Create Account' : 'Log In'}</CustomLink>
      </Screen>
    </Layout>
  )
}

UnAuthenticatedApp.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
}