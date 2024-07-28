import { css } from "@emotion/css"
import { colors } from "../styles"
import PropTypes from 'prop-types'
const style = css`
width: 22.5rem;
height: 50rem;
background-color: ${colors.background};
display:flex;
flex-direction:column;
align-items:center;
`
export const Screen = ({ children }) => {
  return (
    <div className={style}>{children}</div>
  )
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
}