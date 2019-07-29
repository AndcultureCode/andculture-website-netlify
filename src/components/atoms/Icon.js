import React     from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name }) => {

  return (
    <i className={`c-icon ${name}`} />
  );
}


Icon.propTypes = {
  name: PropTypes.string,
}

export default Icon
