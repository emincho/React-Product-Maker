import React from 'react'
import PropTypes from 'prop-types'


const Buttons = ({ color, text, onClick }) => {
    return (
        <button style={{backgroundColor: color}} className="btn" onClick={onClick}>{text}</button>
    )
}

Buttons.defaultProps = {
    color: 'orange',
}

Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Buttons