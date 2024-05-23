import PropTypes from 'prop-types'

import './Title.css'

const Title = ({ text, Class }) => {
    return (
        <h1 className={Class}>{text}</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    Class: PropTypes.string
}

export default Title