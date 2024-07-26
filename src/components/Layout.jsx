import { css } from "@emotion/css"
import PropTypes from 'prop-types'
const styles = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const Layout = ({ children }) => {
  return (
    <div className={styles}>{children}</div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}