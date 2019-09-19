import React     from 'react'
import PropTypes from 'prop-types';

const CaseStudyBlock = ({ name, imagePath, logoPath, tags }) => (
  <div className="c-casestudy-block">
    <div className="c-casestudy-block__image">
      <img src={ imagePath } alt={ name } />
    </div>
    <img src={ logoPath } alt={ name } />
    { buildTagList(tags) }
  </div>
);

const buildTagList = (tags) => {
  var tagList = tags.map((tag, index) => {
    return <span>{ index === 0 ? "" : " /" } { tag }</span>;
  });

  return <p className="c-casestudy-block__tags">
    { tagList }
  </p>;
};

CaseStudyBlock.propTypes = {
  imagePath: PropTypes.string,
  logoPath:  PropTypes.string,
  name:      PropTypes.string,
  tags:      PropTypes.arrayOf(PropTypes.string)
};

export default CaseStudyBlock;
