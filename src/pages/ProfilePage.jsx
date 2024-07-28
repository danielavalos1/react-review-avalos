import styled from '@emotion/styled'
import { SignUpForm } from '../components/SignupForm'
import { css } from '@emotion/css'
import { useAuth } from '../hooks/useAuth'
import { H1 } from '../components/H1'

const Wrapper = styled('div')`
  display:flex;
  flex-direction:column;
  flex:1;
  gap:1rem;
`
const buttonStyles = css`
  width:258px;
  border-radius:1rem;
  padding: 0.5rem 1rem;
  background-color: black;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
  color: white;
  border: transparent;
  cursor: pointer;
`
export const ProfilePage = () => {

  const { logout, user } = useAuth();

  return (
    <Wrapper>
      <H1>Profile</H1>
      <SignUpForm initialValues={user} />
      <button onClick={logout} className={buttonStyles}>Log Out</button>
    </Wrapper>
  )
}
