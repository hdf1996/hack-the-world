import React, { PropTypes } from 'react';
import './index.css';

const FeedItem = ({ imageUrl }) =>
  <div className="feed-item">
    { !!imageUrl && <img className="feedback-item-image" src={imageUrl} alt="Hashtag feed item" />}
  </div>;

FeedItem.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default FeedItem;