import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ text, onClick, Icon }) => {
    return (
        <button className='button' onClick={onClick}>
            {Icon && <Icon className='icon-class' />}
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.elementType
}

export default Button