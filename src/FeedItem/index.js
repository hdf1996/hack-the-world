import React, { PropTypes } from 'react';
import './index.css';

const FeedItem = ({ imageUrl, nick, avatarUrl, time }) =>
  <div className="feed-item">
    { !!imageUrl && <img className="feedback-item-image" src={imageUrl} alt="Hashtag feed item" />}
    <div className="feed-item-info">
      <img className="avatar" src={avatarUrl} alt={`${nick} avatar`} />
      <div className="info-container">
        <span className="nick">{nick}</span>
        <span className="time">{time}</span>
      </div>
    </div>
  </div>;

FeedItem.defaultProps = {
  nick: 'User nick',
  time: 'X minutos atras',
  avatarUrl: 'https://www.drupal.org/files/issues/default-avatar.png'
}

FeedItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
};

export default FeedItem;