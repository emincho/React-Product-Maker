import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const header = ({ heading }) => {

    const onClick = () => {
        console.log('clicked')
    }

    return (
        <header className="header">
            <h1>{heading}</h1>
            <Buttons color="green" text="Add" onClick={onClick} />
        </header>
    )
}

header.defaultProps = {
   heading: "Add Products"
}

header.propfixer = {
    heading: PropTypes.string.isRequired,
}

export default header
