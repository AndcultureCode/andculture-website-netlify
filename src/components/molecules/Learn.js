import React     from 'react'
import { Link }  from 'gatsby';
import PropTypes from 'prop-types';

const Learn = ({ message }) => (
  <div className="c-learn">
    <div className="c-learn__container">
      <div className="c-learn__content">
        <p>
          { message }
        </p>
        <Link to="/about">
          Learn About Us
        </Link>
      </div>
      <div className="c-learn__image">
        &nbsp;
        <img src="https://via.placeholder.com/420x350/19A87C/ffffff" alt="Learn" />
      </div>
    </div>
  </div>
)

Learn.propTypes = {
  message: PropTypes.string,
};

export default Learn
