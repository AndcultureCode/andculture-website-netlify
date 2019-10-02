import React      from 'react'
import PropTypes  from 'prop-types';
import LinkButton from '../atoms/LinkButton';

const Talk = ({ message }) => (
  <div className="c-talk">
    <div className="c-talk__wrapper">
      <p className="c-talk__wrapper__content">
        { message }
      </p>
      <div className="c-talk__wrapper__action">
        <LinkButton
          text = "Let's Talk"
          url  = "/contact" />
      </div>
    </div>
  </div>
)

Talk.propTypes = {
  message: PropTypes.string,
};

export default Talk;
