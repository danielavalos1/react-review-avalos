import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const H1Styled = styled.h1`
  font-weight:700;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  text-wrap: pretty;
  max-width: 225px;
  margin-top: 6rem;
  margin-bottom: 3rem;
`

export const H1 = ({ children }) => {
  return (
    <H1Styled>
      {children}
    </H1Styled>
  )
}

H1.propTypes = {
  children: PropTypes.node.isRequired
}