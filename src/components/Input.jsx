import PropTypes from 'prop-types'

export const Input = ({ name, id, label, onChange, placeholder, type = 'text', value, isRequired = false }) => {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
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