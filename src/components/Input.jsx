import PropTypes from 'prop-types'
import { colors } from '../styles';
import { css } from '@emotion/css';

const input = css`
border-radius:1rem;
padding: 0.5rem;
background-color:white;
border:transparent;
line-height:1rem;
font-size:14px;
font-weight:400;
color: ${colors.gray.dark};
input::placeholder {
  color:${colors.gray.medium};
}
`

export const Input = ({ name, id, label, onChange, placeholder, type = 'text', value, isRequired = false }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      {label && <label style={{
        fontWeight: 400,
        color: colors.gray.dark,
        fontSize: 12,
        lineHeight: '16px'
      }} htmlFor={id || name}>{label}</label>}
      <input

        /* style={{
          borderRadius: '1rem',
          padding: '0.5rem',
          backgroundColor: 'white',
          border: 'transparent',
          lineHeight: '1rem',
          fontSize: '14px',
          fontWeight: 400,
          color: colors.gray.medium,
        }} */
        className={input}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={isRequired}
      />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  isRequired: PropTypes.bool,
};