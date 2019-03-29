import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log(props)
  const { author, headline, img, tab} = props;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  author: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.string,
  tab: PropTypes.string
}

export default Card;
