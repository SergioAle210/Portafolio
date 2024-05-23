import PropTypes from 'prop-types'

import './CustomLink.css'

const CustomLink = ({ text, href }) => {
    return(
    <a className='custom-link' href={href} target="_blank" rel="noopener noreferrer">
        {text}
    </a>
    )
}

CustomLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default CustomLink

