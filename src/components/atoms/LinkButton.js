import React     from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'gatsby';

const LinkButton = ({ text, url }) => (
  <Link 
    className = "c-link-button"
    to        = {url}>
    { text }
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string,
  url:  PropTypes.string,
};

export default LinkButton;
