import React, { PropTypes } from "react";
import FeedItem from "../FeedItem";
import "./index.css";

const HashtagFeed = ({ feedItems }) =>
  <div className="hashtag-feed">
    {feedItems.map((feedItem, i) => (
      <FeedItem
        key={feedItem.uid}
        imageUrl={feedItem.image_url}
        nick={feedItem.nick}
        time={feedItem.created_at}
        avatarUrl={feedItem.profile_picture}
      />
    ))}
  </div>;

HashtagFeed.propTypes = {
  feedItems: PropTypes.array.isRequired
};

export default HashtagFeed;
