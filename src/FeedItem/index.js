import React, { PropTypes } from 'react';
import Moment from 'moment';
import './index.css';

const FeedItem = ({ imageUrl, nick, avatarUrl, time }) =>
  <div className="feed-item animated fadeIn">
    { !!imageUrl && <img className="feedback-item-image" src={imageUrl} alt="Hashtag feed item" />}
    <div className="feed-item-info">
      <img className="avatar" src={avatarUrl} alt={`${nick} avatar`} />
      <div className="info-container">
        <span className="nick">{nick}</span>
        <span className="time">{Moment(time).fromNow()}</span>
      </div>
    </div>
  </div>;

FeedItem.defaultProps = {
  avatarUrl: 'https://www.drupal.org/files/issues/default-avatar.png'
}

FeedItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
};

export default FeedItem;