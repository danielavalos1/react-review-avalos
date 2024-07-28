import { useState } from "react";
import { Layout } from "./components/Layout";
import { LoginForm } from "./components/LoginForm";
import { Screen } from "./components/Screen";
import { SignUpForm } from './components/SignupForm';
import styled from "@emotion/styled";
import { colors } from "./styles";
import { H1 } from './components/H1';

const CustomLink = styled.button`
background: none;
border: none;
cursor: pointer;
font-weight: 700;
line-height: 1rem;
color: ${colors.gray.medium};
&:hover {
  color: ${colors.pink[400]};
}
`;

const Container = styled.div`
  display:flex;
  width:16rem;
  gap:2rem;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`


export const UnAuthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);
  const handleClick = e => {
    e.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <Layout>
      <Screen style={{
        paddingTop: 24
      }}>
        <H1>Welcome to Poke Collection</H1>
        <Container>
          {
            showLogin ? <LoginForm /> : <SignUpForm />
          }
          <CustomLink onClick={handleClick}>{showLogin ? 'Create Account' : 'Log In'}</CustomLink>
        </Container>
      </Screen>
    </Layout>
  )
}