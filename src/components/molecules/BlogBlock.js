import React     from 'react'
import PropTypes from 'prop-types';

const BlogBlock = ({ imagePath, title }) => (
  <div className="c-blog-block">
    <div className="c-blog-block__image">
      <div className="c-blog-block__image__label">
        Blog
      </div>
      <img src={ imagePath } alt={ title } />
    </div>
    <p>
      { title }
    </p>
  </div>
)

BlogBlock.propTypes = {
  imagePath: PropTypes.string,
  title:     PropTypes.string
};

export default BlogBlock;
