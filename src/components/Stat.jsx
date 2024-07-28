import { colors } from "../styles";
import PropTypes from 'prop-types';

export const Stat = ({ children, stat }) => {
  return (
    <div style={{
      width: '4rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        padding: '10px 0px',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {children}
      </div>
      <span style={{
        fontWeight: 400,
        fontSize: '0.5rem',
        lineHeight: '12px',
        color: colors.gray.medium
      }}>{stat}</span>
    </div>
  )
}

Stat.propTypes = {
  children: PropTypes.node.isRequired,
  stat: PropTypes.string.isRequired,
}