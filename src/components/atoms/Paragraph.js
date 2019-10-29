import React     from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ type, children, cssClassName }) => {
  let className = "";

  if (type) {
    className = type;
  }

  if (cssClassName) {
    className += ` ${cssClassName}`;
  }

  return <p className={className}>
    { children }
  </p>
};

Paragraph.propTypes = {
  children: PropTypes.node,
  type:     PropTypes.oneOf(["asterisk", "info", "post"])
};

export default Paragraph;
