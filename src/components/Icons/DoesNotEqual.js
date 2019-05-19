import React from 'react'
import PropTypes from 'prop-types'

export const DoesNotEqual = ({ size, fill }) => (
    <svg width={ size } height={ size } fill={ fill } focusable="false" viewBox="0 0 32 32" aria-hidden="true" role="presentation"><path d="M16.906 11.797l3.016-6.547 2.094 1-2.547 5.547h9.969v2.75h-11.234l-1.328 2.859h12.563v2.75h-13.828l-2.875 6.281-2.094-0.984 2.438-5.297h-10.563v-2.75h11.828l1.297-2.859h-13.125v-2.75h14.391z"></path></svg>
)

DoesNotEqual.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

DoesNotEqual.defaultProps = {
    size: 20,
    fill: '#333',
}
