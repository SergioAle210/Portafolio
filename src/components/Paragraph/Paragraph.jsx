import PropTypes from 'prop-types'

import './Paragraph.css'

const Paragraph = ({ text }) => {
    return (
        <p className='paragraph'>
            {text}
        </p>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
}

export default Paragraph