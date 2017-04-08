import React, { PropTypes } from 'react';
import FeedItem from '../FeedItem';
import './index.css';

const HashtagFeed = ({ images }) =>
  <div className="hashtag-feed">
    {images.map((image, i) => <FeedItem key={i} imageUrl={image.url} />)}
  </div>;

HashtagFeed.propTypes = {
  images: PropTypes.array.isRequired
}

export default HashtagFeed;
